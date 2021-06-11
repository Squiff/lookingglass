import { useState } from 'react';
import Button from '../lib/components/Button';
import Collapser from '../lib/components/Collapser';
import Lookingglass from '../lib/components/Lookingglass';

export const argTypes = {
    show: {
        control: null,
    },
};

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Button onClick={() => setOpen(!open)} color="info" aria-expanded={open}>
                Toggle Collapse
            </Button>
            <Collapser show={open}>
                <Lookingglass marginY="4" border="1" borderColor="light" padding="3">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus debitis
                        asperiores corporis architecto, a neque qui ullam nemo ut optio dolorem
                        autem iusto suscipit fugiat nam perspiciatis cum maxime possimus!
                    </p>
                </Lookingglass>
            </Collapser>
        </>
    );
};

// show simplified snippet
AllProps.parameters = {
    docs: {
        source: {
            code: `
<Collapser show={true}>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus debitis
        asperiores corporis architecto, a neque qui ullam nemo ut optio dolorem
        autem iusto suscipit fugiat nam perspiciatis cum maxime possimus!
    </p>
</Collapser>`,
        },
    },
};
