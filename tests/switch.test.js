import { render, screen } from '@testing-library/react';
import Switch from '../src/lib/components/Switch';

describe('<Switch>', () => {
    test('It shows correct case using value', () => {
        render(
            <Switch value="3">
                <Switch.Case value="1">
                    <div>Case 1</div>
                </Switch.Case>
                <Switch.Case value="2">
                    <div>Case 2</div>
                </Switch.Case>
                <Switch.Case value="3">
                    <div>Case 3</div>
                </Switch.Case>
            </Switch>
        );

        expect(screen.queryByText('Case 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Case 2')).not.toBeInTheDocument();
        expect(screen.getByText('Case 3')).toBeInTheDocument();
    });

    test('It shows correct case using booleans', () => {
        render(
            <Switch>
                <Switch.Case value={false}>
                    <div>Case 1</div>
                </Switch.Case>
                <Switch.Case value={false}>
                    <div>Case 2</div>
                </Switch.Case>
                <Switch.Case value={true}>
                    <div>Case 3</div>
                </Switch.Case>
            </Switch>
        );

        expect(screen.queryByText('Case 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Case 2')).not.toBeInTheDocument();
        expect(screen.getByText('Case 3')).toBeInTheDocument();
    });

    test('It shows multiple matches', () => {
        render(
            <Switch>
                <Switch.Case value={true}>
                    <div>Case 1</div>
                </Switch.Case>
                <Switch.Case value={false}>
                    <div>Case 2</div>
                </Switch.Case>
                <Switch.Case value={true}>
                    <div>Case 3</div>
                </Switch.Case>
            </Switch>
        );

        expect(screen.getByText('Case 1')).toBeInTheDocument();
        expect(screen.queryByText('Case 2')).not.toBeInTheDocument();
        expect(screen.getByText('Case 3')).toBeInTheDocument();
    });

    test('It shows first match only', () => {
        render(
            <Switch value="match" single>
                <Switch.Case value="nomatch">
                    <div>Case 1</div>
                </Switch.Case>
                <Switch.Case value="match">
                    <div>Case 2</div>
                </Switch.Case>
                <Switch.Case value="match">
                    <div>Case 3</div>
                </Switch.Case>
            </Switch>
        );

        expect(screen.queryByText('Case 1')).not.toBeInTheDocument();
        expect(screen.getByText('Case 2')).toBeInTheDocument();
        expect(screen.queryByText('Case 3')).not.toBeInTheDocument();
    });

    test('It shows fallback when there are no matches', () => {
        render(
            <Switch value="match" single>
                <Switch.Case value="nomatch">
                    <div>Case 1</div>
                </Switch.Case>
                <Switch.Case value="nomatch">
                    <div>Case 2</div>
                </Switch.Case>
                <Switch.Case value="nomatch">
                    <div>Case 3</div>
                </Switch.Case>
                <Switch.Case fallback>
                    <div>Fallback</div>
                </Switch.Case>
            </Switch>
        );

        expect(screen.queryByText('Case 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Case 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Case 3')).not.toBeInTheDocument();
        expect(screen.queryByText('Fallback')).toBeInTheDocument();
    });

    test('It does not show fallback when there are matches', () => {
        render(
            <Switch value="match" single>
                <Switch.Case value="nomatch">
                    <div>Case 1</div>
                </Switch.Case>
                <Switch.Case value="match">
                    <div>Case 2</div>
                </Switch.Case>
                <Switch.Case value="nomatch">
                    <div>Case 3</div>
                </Switch.Case>
                <Switch.Case fallback>
                    <div>Fallback</div>
                </Switch.Case>
            </Switch>
        );

        expect(screen.queryByText('Case 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Case 2')).toBeInTheDocument();
        expect(screen.queryByText('Case 3')).not.toBeInTheDocument();
        expect(screen.queryByText('Fallback')).not.toBeInTheDocument();
    });
});
