import { useRef, useState } from 'react';
import Carousel from '../lib/components/Carousel';
import Flex from '../lib/components/Flex';
import LG from '../lib/components/Lookingglass';
import { cleanArgs } from './helpers/utils';

export const argTypes = {
    controlColor: {
        control: { type: 'radio', options: ['dark', 'default'] },
    },
};

function ExampleSlideContent({ slideNumber, ...props }) {
    return (
        <LG {...props} fontSize="2">
            <Flex justify="center" align="center" style={{ height: '400px' }}>
                Slide {slideNumber}
            </Flex>
        </LG>
    );
}

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const props = cleanArgs(args);

    return (
        <Carousel {...props}>
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="primary" color="white" slideNumber="1" />
            </Carousel.Slide>
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="primary-d1" color="white" slideNumber="2" />
            </Carousel.Slide>
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="primary-d2" color="white" slideNumber="3" />
            </Carousel.Slide>
        </Carousel>
    );
};

/* -------- CONTROLS -------------- */
export const Controls = (args) => {
    return (
        <Carousel indicators buttonVisibility="hover" controlColor="dark">
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="light" slideNumber="1" />
            </Carousel.Slide>
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="light" slideNumber="2" />
            </Carousel.Slide>
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="light" slideNumber="3" />
            </Carousel.Slide>
        </Carousel>
    );
};

/* -------- Auto Cycle -------------- */
export const AutoCycle = (args) => {
    return (
        <Carousel autoCycle="2000">
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="light" slideNumber="1" />
            </Carousel.Slide>
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="light" slideNumber="2" />
            </Carousel.Slide>
            <Carousel.Slide>
                <ExampleSlideContent backgroundColor="light" slideNumber="3" />
            </Carousel.Slide>
        </Carousel>
    );
};

/* -------- CONTROLLED -------------- */
export const Callbacks = (args) => {
    const [changeStart, setChangeStart] = useState(1);
    const [changeEnd, setChangeEnd] = useState(1);

    const onChange = ({ active }) => {
        setChangeStart(active);
    };

    const onChangeEnd = ({ active }) => {
        setChangeEnd(active);
    };

    return (
        <>
            <LG div fontWeight="600">
                On Change: {changeStart}
            </LG>
            <LG div fontWeight="600">
                On Change End: {changeEnd}
            </LG>
            <Carousel onChange={onChange} onChangeEnd={onChangeEnd}>
                <Carousel.Slide>
                    <ExampleSlideContent backgroundColor="primary" color="white" slideNumber="1" />
                </Carousel.Slide>
                <Carousel.Slide>
                    <ExampleSlideContent
                        backgroundColor="primary-d1"
                        color="white"
                        slideNumber="2"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <ExampleSlideContent
                        backgroundColor="primary-d2"
                        color="white"
                        slideNumber="3"
                    />
                </Carousel.Slide>
            </Carousel>
        </>
    );
};

Callbacks.parameters = {
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};
