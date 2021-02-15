import React from 'react';
import Lookingglass from '../../lib/components/Lookingglass';
import Flex from '../../lib/components/Flex';

function UtilitiesExamples() {
    return (
        <div className="container">
            <h1>Utilities</h1>
            <p>A set of CSS utility classes are included for things like padding, margin, borders, colors.</p>
            <h2>Lookingglass</h2>
            <p>
                The Lookingglass Component is a utility that generates a set of class names based on the provided props
                and passes the classes to it's child.
                <br />
                Any classes that are already on the child will be merged
            </p>
            <h2>Margin &amp; padding</h2>
            <Lookingglass padding="3" margin="3">
                <div>MARGIN AND PADDING</div>
            </Lookingglass>
            <h2>Color</h2>
            <Lookingglass backgroundColor="primary-l4" color="primary-d1">
                <div>BACKGROUND AND TEXT COLOR</div>
            </Lookingglass>

            <h2>Border</h2>
            <ul>
                Utility classes are included for:
                <li>Border Width</li>
                <li>Border Color</li>
                <li>Border Radius</li>
            </ul>

            <Lookingglass border="2" borderLeft={5} borderColor="warning" borderRadius="rounded">
                <div>BORDER WIDTH/COLOR/RADIUS</div>
            </Lookingglass>

            <h2>Shadow</h2>
            <p>Shadow takes a value from 0 to 24. A higher number represents a higher elevation.</p>
            <Lookingglass shadow="2">
                <div>shadow</div>
            </Lookingglass>

            <h2>Font Size</h2>
            <Lookingglass fontSize="075">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>
            <Lookingglass fontSize="0875">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>
            <Lookingglass fontSize="1">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>
            <Lookingglass fontSize="125">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>
            <Lookingglass fontSize="15">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>
            <Lookingglass fontSize="2">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>
            <Lookingglass fontSize="25">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>
            <Lookingglass fontSize="3">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>

            <h2>Font Weight</h2>
            <Lookingglass fontWeight="900">
                <div>The quick brown fox jumps over the lazy dog</div>
            </Lookingglass>

            <h2>Text Decoration</h2>
            <p>
                <Lookingglass textDecoration="none">
                    <a href="#">THIS IS A LINK</a>
                </Lookingglass>
                . This text is{' '}
                <Lookingglass textDecoration="underline">
                    <span>UNDERLINED</span>
                </Lookingglass>
                . This text has a{' '}
                <Lookingglass textDecoration="line-through">
                    <span>Strike Through</span>
                </Lookingglass>
            </p>

            <h2>Text Transform</h2>
            <Lookingglass textTransform="none">
                <h5>None</h5>
            </Lookingglass>
            <Lookingglass textTransform="uppercase">
                <h5>uppercase</h5>
            </Lookingglass>
            <Lookingglass textTransform="lowercase">
                <h5>LOWERCASE</h5>
            </Lookingglass>
            <Lookingglass textTransform="capitalize">
                <h5>capitalize another</h5>
            </Lookingglass>

            <h2>Text Align</h2>
            <Lookingglass textAlign="right">
                <p>This text is right aligned</p>
            </Lookingglass>
            <Lookingglass textAlign="center">
                <p>This text is center aligned</p>
            </Lookingglass>
            <h2>Sizing</h2>
            <Lookingglass height="50vh" width="50vw" backgroundColor="secondary" color="white" fontWeight="600">
                <Flex justify="center" align="center" type="auto">
                    <div>50vh / 50vw</div>
                </Flex>
            </Lookingglass>
            <div style={{ height: '500px' }}>
                <Lookingglass backgroundColor="primary" width="50" height="50" fontWeight="600">
                    <Flex justify="center" align="center" type="auto">
                        <div>Width/Height 25% - Parent 500px</div>
                    </Flex>
                </Lookingglass>
            </div>
            <h2>Position</h2>
            <Lookingglass backgroundColor="primary" fontWeight="600" position="relative" top="50">
                <div>STATIC</div>
            </Lookingglass>
            <h4>Absolute</h4>
            <Flex justify="center" align="center" className="bg--light p--5" type="auto">
                <Lookingglass backgroundColor="white" position="relative" height="30vh" width="75">
                    <div>
                        <Lookingglass absolute="top-right" backgroundColor="error" borderRadius="rounded">
                            <div style={{ width: '50px', height: '50px' }}></div>
                        </Lookingglass>
                    </div>
                </Lookingglass>
            </Flex>

            <h2>Display</h2>

            <Lookingglass backgroundColor="light" display="inline-block">
                <div>I am an inline-block</div>
            </Lookingglass>
            <Lookingglass backgroundColor="light" display={{ s: 'none', m: 'block' }}>
                <div>I disappear on small screens</div>
            </Lookingglass>

            <h2>Overflow</h2>
            <Lookingglass height="10vh" overflow="auto">
                <div>
                    <Lookingglass height="20vh" backgroundColor="light">
                        <div>f</div>
                    </Lookingglass>
                </div>
            </Lookingglass>
        </div>
    );
}

export default UtilitiesExamples;
