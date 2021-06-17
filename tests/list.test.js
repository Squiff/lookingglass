import { fireEvent, render, screen } from '@testing-library/react';
import List from '../src/lib/components/List';

describe('<List>', () => {
    test('It renders a list', () => {
        render(
            <List>
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
                <List.Item>Item 3</List.Item>
            </List>
        );

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    test('It renders a list', () => {
        render(
            <List>
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
                <List.Item>Item 3</List.Item>
            </List>
        );

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    test('It passes props', () => {
        render(
            <List data-testid="list">
                <List.Item data-testid="list-item">Item 1</List.Item>
                <List.Button data-testid="list-button">Item 2</List.Button>
                <List.Link data-testid="list-link">Item 3</List.Link>
            </List>
        );

        expect(screen.getByTestId('list')).toBeInTheDocument();
        expect(screen.getByTestId('list-item')).toBeInTheDocument();
        expect(screen.getByTestId('list-button')).toBeInTheDocument();
        expect(screen.getByTestId('list-link')).toBeInTheDocument();
    });

    test('It merges classes', () => {
        render(
            <List className="list-test">
                <List.Item className="list-item-test">Item 1</List.Item>
                <List.Button className="list-button-test">Item 2</List.Button>
                <List.Link className="list-link-test" href="#">
                    Item 3
                </List.Link>
            </List>
        );

        expect(screen.getByRole('list')).toHaveClass('list-test');
        expect(screen.getByText('Item 1')).toHaveClass('list-item-test');
        expect(screen.getByText('Item 2')).toHaveClass('list-button-test');
        expect(screen.getByText('Item 3')).toHaveClass('list-link-test');
    });

    test('It renders buttons', () => {
        render(
            <List>
                <List.Button>Button 1</List.Button>
                <List.Button>Button 2</List.Button>
                <List.Button>Button 3</List.Button>
            </List>
        );

        expect(screen.getAllByRole('listitem')).toHaveLength(3);
        expect(screen.getAllByRole('button')).toHaveLength(3);
    });

    test('It handles Button Click', () => {
        const onClick = jest.fn();

        render(
            <List>
                <List.Button onClick={onClick}>Button 1</List.Button>
            </List>
        );

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('It renders links', () => {
        render(
            <List>
                <List.Link href="#">Link 1</List.Link>
            </List>
        );

        expect(screen.getByRole('link')).toBeInTheDocument();
    });
});
