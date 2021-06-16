import { fireEvent, render, screen } from '@testing-library/react';
import Carousel from '../src/lib/components/Carousel';

describe('<Carousel>', () => {
    test('It renders a Carousel', () => {
        render(
            <Carousel aria-label="carousel">
                <Carousel.Slide>Slide 1</Carousel.Slide>
                <Carousel.Slide>Slide 2</Carousel.Slide>
                <Carousel.Slide>Slide 3</Carousel.Slide>
            </Carousel>
        );

        expect(screen.getByLabelText('carousel')).toBeInTheDocument();
    });

    test('It renders buttons', () => {
        render(
            <Carousel>
                <Carousel.Slide>Slide 1</Carousel.Slide>
                <Carousel.Slide>Slide 2</Carousel.Slide>
                <Carousel.Slide>Slide 3</Carousel.Slide>
            </Carousel>
        );

        expect(screen.getAllByRole('button').length).toBe(2);
    });

    test('It does not render buttons', () => {
        render(
            <Carousel buttonVisibility="hidden">
                <Carousel.Slide>Slide 1</Carousel.Slide>
                <Carousel.Slide>Slide 2</Carousel.Slide>
                <Carousel.Slide>Slide 3</Carousel.Slide>
            </Carousel>
        );

        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    test('It renders indicators', () => {
        render(
            <Carousel buttonVisibility="hidden" indicators={true}>
                <Carousel.Slide>Slide 1</Carousel.Slide>
                <Carousel.Slide>Slide 2</Carousel.Slide>
                <Carousel.Slide>Slide 3</Carousel.Slide>
            </Carousel>
        );

        expect(screen.queryAllByRole('button').length).toBe(3);
    });

    test('It sets next active slide', () => {
        render(
            <Carousel>
                <Carousel.Slide>Slide 1</Carousel.Slide>
                <Carousel.Slide>Slide 2</Carousel.Slide>
                <Carousel.Slide>Slide 3</Carousel.Slide>
            </Carousel>
        );

        expect(screen.getByText('Slide 1')).toHaveClass('carousel__slide--active');

        fireEvent.click(screen.getByLabelText('next'));

        expect(screen.getByText('Slide 1')).not.toHaveClass('carousel__slide--active');
        expect(screen.getByText('Slide 2')).toHaveClass('carousel__slide--active');
    });

    test('It sets previous active slide', () => {
        render(
            <Carousel>
                <Carousel.Slide>Slide 1</Carousel.Slide>
                <Carousel.Slide>Slide 2</Carousel.Slide>
                <Carousel.Slide>Slide 3</Carousel.Slide>
            </Carousel>
        );

        expect(screen.getByText('Slide 1')).toHaveClass('carousel__slide--active');

        fireEvent.click(screen.getByLabelText('previous'));

        expect(screen.getByText('Slide 1')).not.toHaveClass('carousel__slide--active');
        expect(screen.getByText('Slide 3')).toHaveClass('carousel__slide--active');
    });

    test('It fires onChange event', () => {
        const onChange = jest.fn();
        // const onChanged = jest.fn(); // no clean way to grab this

        render(
            <Carousel onChange={onChange}>
                <Carousel.Slide>Slide 1</Carousel.Slide>
                <Carousel.Slide>Slide 2</Carousel.Slide>
                <Carousel.Slide>Slide 3</Carousel.Slide>
            </Carousel>
        );

        expect(onChange).toBeCalledTimes(0);

        fireEvent.click(screen.getByLabelText('next'));

        expect(onChange).toBeCalledTimes(1);
    });
});
