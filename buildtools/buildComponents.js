const fse = require('fs-extra');
const path = require('path');
const buildPath = require('./buildPaths');

const componentRelPath = path.relative(
    buildPath.babelEntry,
    buildPath.componentEntry
);

// Return Array of Components
async function getComponents() {
    const components = await fse.readdir(buildPath.componentEntry);

    const componentNames = components
        .filter((c) => path.extname(c) === '.js')
        .map((c) => path.parse(c).name);

    return componentNames;
}

// return esm, cjs path and component package directory for provided component name
function componentPaths(componentName) {
    const filename = `${componentName}.js`;
    const package = path.join(buildPath.out, componentName);
    const esm = path.relative(package, buildPath.esm);
    const cjs = path.relative(package, buildPath.cjs);

    return {
        esm: path.join(esm, componentRelPath, filename),
        cjs: path.join(cjs, componentRelPath, filename),
        package: package,
    };
}

// return object that will be written component's package.json
function componentPackage(componentPaths) {
    return {
        main: componentPaths.cjs,
        module: componentPaths.esm,
    };
}

// write each component's package.json to output
async function createComponentPackages() {
    const components = await getComponents();
    const promises = [];

    components.forEach((c) => {
        const cp = componentPaths(c);
        const packageObj = componentPackage(cp);
        const packageJson = JSON.stringify(packageObj, null, 4);
        const filePath = path.join(cp.package, 'package.json');
        //const p = WriteFile(cp.package, 'package.json', packageJson);
        const p = fse.outputFile(filePath, packageJson);

        promises.push(p);
    });

    await Promise.all(promises);
}

module.exports = createComponentPackages;
