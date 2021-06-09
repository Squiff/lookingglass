import { useEffect, useState } from 'react';
import Skeleton from '../lib/components/Skeleton';
import Lookingglass from '../lib/components/Lookingglass';
import Button from '../lib/components/Button';

export const argTypes = {};

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const backgroundClass = args.dark ? 'primary-d1' : undefined;

    return (
        <>
            <Lookingglass div padding="3" backgroundColor={backgroundClass}>
                <Skeleton style={{ height: '2rem' }} {...args} />
                <Skeleton {...args} />
                <Skeleton {...args} />
                <Skeleton {...args} />
            </Lookingglass>
        </>
    );
};

/* -------- Size ---------------- */
export const Size = (args) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(!loading);
        }, 3000);

        return () => clearInterval(interval);
    }, [loading]);

    return (
        <Lookingglass div padding="3" style={{ height: '150px' }}>
            {loading && (
                <>
                    <Skeleton style={{ height: '2rem', marginBottom: '1rem' }} {...args} />
                    <Skeleton {...args} />
                    <Skeleton {...args} />
                    <Skeleton {...args} />
                </>
            )}
            {!loading && (
                <>
                    <h3>Content Header</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat
                        quia consectetur est facilis debitis similique voluptate nostrum, ipsa
                        alias! Asperiores molestias maiores deleniti ab facere optio temporibus
                        dolorum ullam voluptate at, dolorem minima quia atque tempora? Placeat cum
                        non sit iusto, nemo impedit saepe architecto, ipsam reprehenderit
                        accusantium expedita?
                    </p>
                </>
            )}
        </Lookingglass>
    );
};

Size.parameters = {
    // show hooks in source view
    docs: {
        source: {
            code: `
            <Skeleton style={{ height: '2rem', marginBottom: '1rem' }} />
            <Skeleton {...args} />
            <Skeleton {...args} />
            <Skeleton {...args} />`,
        },
    },
};

/* -------- Dark ---------------- */
export const Dark = (args) => {
    return (
        <>
            <Lookingglass div padding="3" backgroundColor="primary-d1">
                <Skeleton style={{ height: '2rem' }} dark />
                <Skeleton dark />
                <Skeleton dark />
                <Skeleton dark />
            </Lookingglass>
        </>
    );
};
