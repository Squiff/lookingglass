import React from 'react';
import Flex from '/src/lib/components/flex';
import Placeholder from '../../components/Placeholder';

function FlexEx6() {
    return (
        <div>
            Responsive. Stack on small screens, equal width when medium or above
            <Flex type="stack" m={{ type: 'equal' }}>
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

export default FlexEx6;
