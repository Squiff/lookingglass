import React from 'react';
import Flex from '/src/lib/components/flex';
import Placeholder from '../../components/Placeholder';

function FlexEx1() {
    return (
        <div>
            Default: equal cols
            <Flex>
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

export default FlexEx1;
