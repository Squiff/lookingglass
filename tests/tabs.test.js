import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from '../src/lib/components/Tabs';

describe('<Tabs>', () => {
    test('It renders Tabs', () => {
        render(
            <Tabs>
                <Tabs.Tab tabId="1">Tab One</Tabs.Tab>
                <Tabs.Tab tabId="2">Tab Two</Tabs.Tab>
                <Tabs.Tab tabId="3">Tab Three</Tabs.Tab>
                <Tabs.Tab tabId="4">Tab Four</Tabs.Tab>
                <Tabs.Panel tabId="1">
                    <div>Panel 1</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="2">
                    <div>Panel 2</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="3">
                    <div>Panel 3</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="4">
                    <div>Panel 4</div>
                </Tabs.Panel>
            </Tabs>
        );

        expect(screen.getByRole('tablist')).toBeInTheDocument();
        expect(screen.getAllByRole('tab')).toHaveLength(4);
        expect(screen.getAllByRole('tabpanel')).toHaveLength(1);
    });

    test('It shows correct panel on click', () => {
        render(
            <Tabs>
                <Tabs.Tab tabId="1">Tab One</Tabs.Tab>
                <Tabs.Tab tabId="2">Tab Two</Tabs.Tab>
                <Tabs.Tab tabId="3">Tab Three</Tabs.Tab>
                <Tabs.Tab tabId="4">Tab Four</Tabs.Tab>
                <Tabs.Panel tabId="1">
                    <div>Panel 1</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="2">
                    <div>Panel 2</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="3">
                    <div>Panel 3</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="4">
                    <div>Panel 4</div>
                </Tabs.Panel>
            </Tabs>
        );

        expect(screen.getByText('Panel 1')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Tab Three'));

        expect(screen.queryByText('Panel 1')).not.toBeInTheDocument();
        expect(screen.getByText('Panel 3')).toBeInTheDocument();
    });

    test('It can be controlled', () => {
        const { rerender } = render(
            <Tabs active="2">
                <Tabs.Tab tabId="1">Tab One</Tabs.Tab>
                <Tabs.Tab tabId="2">Tab Two</Tabs.Tab>
                <Tabs.Tab tabId="3">Tab Three</Tabs.Tab>
                <Tabs.Tab tabId="4">Tab Four</Tabs.Tab>
                <Tabs.Panel tabId="1">
                    <div>Panel 1</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="2">
                    <div>Panel 2</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="3">
                    <div>Panel 3</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="4">
                    <div>Panel 4</div>
                </Tabs.Panel>
            </Tabs>
        );

        expect(screen.getByText('Panel 2')).toBeInTheDocument();

        rerender(
            <Tabs active="3">
                <Tabs.Tab tabId="1">Tab One</Tabs.Tab>
                <Tabs.Tab tabId="2">Tab Two</Tabs.Tab>
                <Tabs.Tab tabId="3">Tab Three</Tabs.Tab>
                <Tabs.Tab tabId="4">Tab Four</Tabs.Tab>
                <Tabs.Panel tabId="1">
                    <div>Panel 1</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="2">
                    <div>Panel 2</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="3">
                    <div>Panel 3</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="4">
                    <div>Panel 4</div>
                </Tabs.Panel>
            </Tabs>
        );

        expect(screen.getByText('Panel 3')).toBeInTheDocument();
    });

    test('It fires onChange', () => {
        const onChange = jest.fn();

        render(
            <Tabs active="2" onChange={onChange}>
                <Tabs.Tab tabId="1">Tab One</Tabs.Tab>
                <Tabs.Tab tabId="2">Tab Two</Tabs.Tab>
                <Tabs.Tab tabId="3">Tab Three</Tabs.Tab>
                <Tabs.Tab tabId="4">Tab Four</Tabs.Tab>
                <Tabs.Panel tabId="1">
                    <div>Panel 1</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="2">
                    <div>Panel 2</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="3">
                    <div>Panel 3</div>
                </Tabs.Panel>
                <Tabs.Panel tabId="4">
                    <div>Panel 4</div>
                </Tabs.Panel>
            </Tabs>
        );

        fireEvent.click(screen.getByText('Tab Three'));

        expect(onChange).toBeCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith('3');
    });
});
