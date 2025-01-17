import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/** A Progress/Loading Bar */
function Progress({ className, progress, indeterminate, ...props }) {
    const classes = ['progress'];

    if (indeterminate) classes.push('progress--indeterminate');

    const progressBar = <ProgressBar progress={progress} />;

    const classStr = classNames(classes, className);

    let ariaProps = {};
    if (!indeterminate) {
        ariaProps = {
            'aria-valuenow': progress,
            'aria-valuemin': 0,
            'aria-valuemax': 100,
        };
    }

    return (
        <div role="progressbar" className={classStr} {...ariaProps} {...props}>
            {progressBar}
        </div>
    );
}

// internal only
function ProgressBar({ progress }) {
    const width = `${progress}%`;

    // progress should be a percentage complete
    const progressBarStyle = { width: width };

    return <div className="progress__bar" style={progressBarStyle}></div>;
}

Progress.propTypes = {
    /** The percentage completion. Should be between 0 and 100 */
    progress: PropTypes.number,
    /** Indicates an unknown loading period */
    indeterminate: PropTypes.bool,
};

ProgressBar.propTypes = {
    progress: PropTypes.number,
};

export default Progress;
