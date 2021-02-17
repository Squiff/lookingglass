import { useState } from 'react';
import Loader from '../lib/components/Loader';
import Alert from '../lib/components/Alert';

export default {
    component: Loader,
    title: 'Loader',
};

export const Basic = (args) => (
    <Loader {...args}>
        <h4>I display when status is complete!</h4>
    </Loader>
);

Basic.args = {
    status: 'loading',
};

export const CustomComponents = (args) => (
    <Loader {...args}>
        <Loader.Complete>
            <Alert color="success">Status Complete</Alert>
        </Loader.Complete>
        <Loader.Loading>Loading</Loader.Loading>
        <Loader.Error>
            <Alert color="error">Status Error</Alert>
        </Loader.Error>
    </Loader>
);

CustomComponents.args = {
    status: 'loading',
};
