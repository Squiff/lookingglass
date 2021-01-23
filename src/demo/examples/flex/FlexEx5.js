import React from 'react';
import Flex from '/src/lib/components/flex';
import Placeholder from '../../components/Placeholder';

function FlexEx5() {
    return (
        <div>
            Select cols
            <Flex>
                <Flex.Child cols="2">
                    <Placeholder>cols=2</Placeholder>
                </Flex.Child>
                <Flex.Child cols="2">
                    <Placeholder>cols=2</Placeholder>
                </Flex.Child>
                <Flex.Child cols="1">
                    <Placeholder>cols=1</Placeholder>
                </Flex.Child>
                <Flex.Child cols="3">
                    <Placeholder>cols=3</Placeholder>
                </Flex.Child>
                <Flex.Child cols="3">
                    <Placeholder>cols=3</Placeholder>
                </Flex.Child>
                <Flex.Child cols="1">
                    <Placeholder>cols=1</Placeholder>
                </Flex.Child>
                <Flex.Child cols="auto">
                    <Placeholder>cols=auto</Placeholder>
                </Flex.Child>
                <Flex.Child cols="3">
                    <Placeholder>cols=3</Placeholder>
                </Flex.Child>
                <Flex.Child cols="equal">
                    <Placeholder>cols=equal</Placeholder>
                </Flex.Child>
                <Flex.Child cols="2">
                    <Flex>
                        <Flex.Child cols="6">
                            <Placeholder>cols=6</Placeholder>
                        </Flex.Child>
                        <Flex.Child cols="6">
                            <Placeholder>cols=6</Placeholder>
                        </Flex.Child>
                    </Flex>
                </Flex.Child>
                <Flex.Child cols="10">
                    <Placeholder>cols = 10</Placeholder>
                </Flex.Child>
                <Flex.Child>
                    <Placeholder>share remaning space</Placeholder>
                </Flex.Child>
                <Flex.Child>
                    <Placeholder>share remaning space</Placeholder>
                </Flex.Child>
            </Flex>
        </div>
    );
}

export default FlexEx5;
