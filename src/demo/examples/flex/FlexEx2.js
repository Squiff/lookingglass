import React from 'react';
import Flex from '/src/lib/components/flex';
import Placeholder from '../../components/Placeholder';

function FlexEx2() {
    return (
        <div>
            flex-stack: flex box children will default to full width. stack the
            cols
            <Flex type="stack">
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

export default FlexEx2;
