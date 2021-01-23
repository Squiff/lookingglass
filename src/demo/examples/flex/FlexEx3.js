import React from 'react';
import Flex from '/src/lib/components/flex';
import Placeholder from '../../components/Placeholder';

function FlexEx3() {
    return (
        <div>
            flex-auto: children width based on content
            <br />
            Justify Align
            <Flex type="auto" justify="center" align="center">
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

export default FlexEx3;
