import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../src/lib/components/Card';

describe('<Card>', () => {
    test('It renders a card', () => {
        render(<Card>Card Content</Card>);

        expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    test('It renders a card header', () => {
        render(
            <Card>
                <Card.Header>Card Header</Card.Header>
            </Card>
        );

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    test('It renders a card content', () => {
        render(
            <Card>
                <Card.Content>Card Content</Card.Content>
            </Card>
        );

        expect(screen.getByText('Card Content')).toHaveClass('card__content');
    });

    test('It renders a card body', () => {
        render(
            <Card>
                <Card.Content>
                    <Card.Body>Card Body</Card.Body>
                </Card.Content>
            </Card>
        );

        expect(screen.getByText('Card Body')).toHaveClass('card__body');
    });

    test('It renders a card image', () => {
        render(
            <Card>
                <Card.Img src="/test.jpg" />
            </Card>
        );

        expect(screen.getByRole('img')).toHaveClass('card__img');
    });

    test('It forwards props', () => {
        render(
            <Card data-testid="card">
                <Card.Img src="/test.jpg" data-testid="card-img" />
                <Card.Content data-testid="card-content">
                    <Card.Header data-testid="card-header">Card Header</Card.Header>
                    <Card.Body data-testid="card-body">Card Body</Card.Body>
                </Card.Content>
            </Card>
        );

        expect(screen.getByTestId('card')).toBeInTheDocument();
        expect(screen.getByTestId('card-img')).toBeInTheDocument();
        expect(screen.getByTestId('card-content')).toBeInTheDocument();
        expect(screen.getByTestId('card-body')).toBeInTheDocument();
    });

    test('It merges classNames', () => {
        render(
            <Card data-testid="card" className="card-test">
                <Card.Img src="/test.jpg" data-testid="card-img" className="card-test" />
                <Card.Content data-testid="card-content" className="card-test">
                    <Card.Header data-testid="card-header" className="card-test">
                        Card Header
                    </Card.Header>
                    <Card.Body data-testid="card-body" className="card-test">
                        Card Body
                    </Card.Body>
                </Card.Content>
            </Card>
        );

        expect(screen.getByTestId('card')).toHaveClass('card-test');
        expect(screen.getByTestId('card-img')).toHaveClass('card-test');
        expect(screen.getByTestId('card-content')).toHaveClass('card-test');
        expect(screen.getByTestId('card-body')).toHaveClass('card-test');
    });
});
