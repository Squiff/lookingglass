import React from 'react';

function CloseButton({ ...btnProps }) {
    return (
        <button {...btnProps} className="close-btn">
            &times;
        </button>
    );
}

export default CloseButton;
