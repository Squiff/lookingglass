import CSS from '../lib/components/CSS';
import Table from '../lib/components/Table';
import { cleanArgs } from './helpers/utils';

export const argTypes = {
    border: {
        control: { type: 'radio', options: ['default', 'all', 'none'] },
    },
    size: {
        control: { type: 'radio', options: ['default', 's', 'l'] },
    },
};

const MockData = ({ columns, rows }) => {
    const headers = [];
    const dataRows = [];

    for (let i = 1; i <= columns; i++) {
        headers.push(<th key={i}>{`Headers ${i}`}</th>);
    }

    for (let j = 1; j <= rows; j++) {
        const data = [];

        for (let i = 1; i <= columns; i++) {
            data.push(<td key={i}>{`Data ${i}`}</td>);
        }

        dataRows.push(<tr key={j}>{data}</tr>);
    }

    return (
        <>
            <thead>
                <tr>{headers}</tr>
            </thead>

            <tbody>{dataRows}</tbody>
        </>
    );
};

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const cArgs = cleanArgs(args);
    return (
        <Table {...cArgs}>
            <MockData columns="5" rows="5" />
        </Table>
    );
};

AllProps.parameters = {
    options: { showPanel: true },
};

/* -------- Sizes ---------------- */
export const Sizes = (args) => (
    <>
        <h6>Small</h6>
        <Table size="s">
            <MockData columns="4" rows="3" />
        </Table>
        <h6>Default</h6>
        <Table>
            <MockData columns="4" rows="3" />
        </Table>
        <h6>Large</h6>
        <Table size="l">
            <MockData columns="4" rows="3" />
        </Table>
    </>
);

/* -------- Borders ---------------- */
export const Borders = (args) => (
    <>
        <h6>Default</h6>
        <Table size="s">
            <MockData columns="3" rows="2" />
        </Table>

        <h6>None</h6>

        <Table size="s" border="none">
            <MockData columns="3" rows="2" />
        </Table>

        <h6>All</h6>
        <Table size="s" border="all">
            <MockData columns="3" rows="2" />
        </Table>
    </>
);

/* -------- Hover ---------------- */
export const Hover = (args) => (
    <Table hover={false}>
        <MockData columns="4" rows="3" />
    </Table>
);

/* -------- Heading Color ---------------- */
export const HeadingColor = (args) => (
    <>
        <h6>Primary</h6>
        <Table>
            <thead>
                <CSS backgroundColor="primary" color="white">
                    <tr>
                        <th>Headers 1</th>
                        <th>Headers 2</th>
                        <th>Headers 3</th>
                        <th>Headers 4</th>
                    </tr>
                </CSS>
            </thead>
            <tbody>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 4</td>
                </tr>
            </tbody>
        </Table>

        <h6>Dark</h6>

        <Table>
            <thead>
                <CSS backgroundColor="dark" color="white">
                    <tr>
                        <th>Headers 1</th>
                        <th>Headers 2</th>
                        <th>Headers 3</th>
                        <th>Headers 4</th>
                    </tr>
                </CSS>
            </thead>
            <tbody>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 4</td>
                </tr>
            </tbody>
        </Table>
    </>
);
