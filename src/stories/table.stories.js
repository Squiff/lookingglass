import Table from '../lib/components/Table';

export const argTypes = {
    border: {
        control: {type:'radio', options:['default','all','none']}
    },
    size: {
        control: {type: 'radio', options:['deafult','s','l']}
    }
};


const MockData = (args) => {
    const headers = [];
    const headerRow = [];
    const dataRows = [];

    for (let i = 1; i <= args.columns; i++) {
        headers.push(<th>{`headers ${i}`}</th>);
    }

    headerRow.push(<tr>{headers}</tr>);

    for (let j = 1; j <= args.rows; j++) {
        const data = [];

        for (let i = 1; i <= args.columns; i++) {
            console.log(i, j);
            data.push(<td>{`Data ${i}`}</td>);
        }

        dataRows.push(<tr>{data}</tr>);
    }

    return (
        <>
            <thead>{headerRow}</thead>
            <tbody>{dataRows}</tbody>
        </>
    );
};

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => (
    <Table {...args}>
        <MockData columns="5" rows="5" />
    </Table>
);

AllProps.parameters = {
    options: {showPanel: true}
}

/* -------- Sizes ---------------- */
export const Sizes = (args) => (
        <>
            <h5>Small</h5>
            <Table size="s">
                <MockData columns="4" rows="3" />
            </Table>
            <h5>Default</h5>
            <Table>
                <MockData columns="4" rows="3" />
            </Table>
            <h5>Large</h5>
            <Table size="l">
                <MockData columns="4" rows="3" />
            </Table>
        </>
    );

Sizes.parameters = {
    options: {showPanel: false}
}

/* -------- Borders ---------------- */
export const Borders = (args) => (
    <>
        <h5>Default</h5>
        <Table size="s">
            <MockData columns="3" rows="2" />
        </Table>
        <h5>None</h5>
        <Table size="s" border="none">
            <MockData columns="3" rows="2" />
        </Table>
        <h5>All</h5>
        <Table size="s" border="all">
            <MockData columns="3" rows="2" />
        </Table>
    </>
);

Borders.parameters = {
    options: {showPanel: false}
}


/* -------- Hover ---------------- */
export const Hover = (args) => (
    <Table hover={false}>
        <MockData columns="4" rows="3" />
    </Table>

);

Hover.parameters = {
    options: {showPanel: false}
}

/* -------- Heading Color ---------------- */
export const HeadingColor = (args) => (
    <Table removeHeadColor={true}>
        <MockData columns="4" rows="3" />
    </Table>

);

HeadingColor.parameters = {
    options: {showPanel: false}
}

