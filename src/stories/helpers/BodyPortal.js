import ReactDOM from 'react-dom';

/* Storybook has issues rendering position:fixed elements consistantly between browsers.
 * It uses transforms in one of the ancestors,
 * causing that ancestor to be the containing block instead of the viewport
 * Solution: Render the fixed element directly in the body
 */

/** Render Children directly in the document body */
function BodyPortal({ children }) {
    return ReactDOM.createPortal(children, document.body);
}

export default BodyPortal;
