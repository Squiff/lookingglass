import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/** A Progress/Loading Bar */
function Progress({ className, children, progress, indeterminate, ...props }) {
    const classes = ['progress'];

    if (indeterminate) classes.push('progress--indeterminate');

    const progressBar = <ProgressBar progress={progress} />;

    const classStr = classNames(classes, className);

    return (
        <div role="progressbar" className={classStr} {...props}>
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

export default Progress;
