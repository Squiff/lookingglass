import { render, screen } from '@testing-library/react';
import Table from '../src/lib/components/Table';

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

describe('<Table>', () => {
    test('It renders a table', () => {
        render(
            <Table>
                <MockData columns="4" rows="2" />
            </Table>
        );

        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getAllByRole('row')).toHaveLength(3);
        expect(screen.getAllByRole('columnheader')).toHaveLength(4);
        expect(screen.getAllByRole('cell')).toHaveLength(8);
    });
});
