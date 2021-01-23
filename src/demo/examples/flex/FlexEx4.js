import React from 'react';
import Flex from '/src/lib/components/flex';
import Placeholder from '../../components/Placeholder';

function FlexEx4() {
    return (
        <div>
            flex-cols: flex box children will default to specified number of
            cols (2 here)
            <Flex cols="2">
                <Flex.Child>
                    <Placeholder>P1</Placeholder>
                </Flex.Child>
                <Flex.Child>
                    <Placeholder>P2</Placeholder>
                </Flex.Child>
                <Flex.Child>
                    <Placeholder>P3</Placeholder>
                </Flex.Child>
                <Flex.Child>
                    <Placeholder>P3</Placeholder>
                </Flex.Child>
            </Flex>
        </div>
    );
}

export default FlexEx4;
