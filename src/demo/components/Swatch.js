import React from 'react';

function Swatch({ variant, variantCount }) {
    const dark = [];
    const light = [];

    for (let i = 1; i <= variantCount; i++) {
        dark.unshift(`bg--${variant}-d${i}`);
        light.push(`bg--${variant}-l${i}`);
    }

    const variants = [...dark, `bg--${variant}`, ...light];

    const elems = variants.map((v) => {
        return <div className={`${v} color-example`}></div>;
    });

    return <div>{elems}</div>;
}

export default Swatch;
