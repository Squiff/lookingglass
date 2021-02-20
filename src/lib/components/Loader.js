import React, { Children } from 'react';
import Spinner from './Spinner';

function Loader({ status, children }) {
    let displayComponent;

    switch (status) {
        // do not display anything for status NULL
        case null:
            return null;
        case 'loading':
            displayComponent = Children.toArray(children).filter((c) => c.type === Loader.Loading);

            if (displayComponent.length === 0) {
                displayComponent = <LoadingDefault />;
            }
            break;
        case 'error':
            displayComponent = Children.toArray(children).filter((c) => c.type === Loader.Error);
            break;
        case 'complete':
        default:
            displayComponent = Children.toArray(children).filter(
                (c) => c.type !== Loader.Loading && c.type !== Loader.Error
            );
    }

    return <>{displayComponent}</>;
}

// All these components do is display their children
// have to be declared separately so they have a distinct type
Loader.Loading = ({ children }) => {
    return <>{children}</>;
};

Loader.Complete = ({ children }) => {
    return <>{children}</>;
};

Loader.Error = ({ children }) => {
    return <>{children}</>;
};

// default when no Loader.Loading is provided
const LoadingDefault = () => {
    return (
        <div className="loader__loading">
            <Spinner />
        </div>
    );
};

Loader.Loading.displayName = 'Loader.Loading';
Loader.Complete.displayName = 'Loader.Complete';
Loader.Error.displayName = 'Loader.Error';

export default Loader;
