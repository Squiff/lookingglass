import { render, screen } from '@testing-library/react';
import SideScroller from '../src/lib/components/SideScroller';

describe('<SideScroller>', () => {
    test('It renders scroller', () => {
        render(
            <SideScroller>
                <div>SideScroller Content</div>
            </SideScroller>
        );

        expect(screen.getByText('SideScroller Content')).toBeInTheDocument();
    });

    test('It renders scroll buttons', () => {
        render(
            <SideScroller>
                <div>SideScroller Content</div>
            </SideScroller>
        );

        expect(screen.getAllByRole('button')).toHaveLength(2);
    });
});
