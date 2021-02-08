import React, { useState } from 'react';
import Loader from '/src/lib/components/Loader';

function LoaderEx2() {
    const [status, setStatus] = useState('complete');

    return (
        <div>
            <Loader status={status}>Status Complete!</Loader>
            <div>
                <select
                    name="status"
                    value={status}
                    onChange={(e) => {
                        setStatus(e.target.value);
                    }}
                >
                    <option value="complete">Complete</option>
                    <option value="loading">Loading</option>
                    <option value="error">Error</option>
                </select>
            </div>
        </div>
    );
}

export default LoaderEx2;
