import Lookingglass from '../lib/components/Lookingglass';
import Table from '../lib/components/Table';

export default {
    component: Table,
    title: 'Table',
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

export const Basic = (args) => (
    <Table {...args}>
        <MockData columns="5" rows="5" />
    </Table>
);

// Basic.args = {
//     size: 's', // s, default, l
//     border: '',
//     hover: true, // true false
//     removeHeadColor: false,
// };

export const Sizes = (args) => {
    const style = { marginBottom: '12px' };

    return (
        <>
            <Table size="s">
                <MockData columns="4" rows="3" />
            </Table>
            <Table>
                <MockData columns="4" rows="3" />
            </Table>
            <Table size="l">
                <MockData columns="4" rows="3" />
            </Table>
        </>
    );
};

export const Borders = (args) => (
    <>
        <Table border="none">
            <MockData columns="4" rows="3" />
        </Table>
    </>
);

Borders.args = {
    border: 'none', // all, default, none
};
