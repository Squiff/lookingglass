import ReactDom from 'react-dom';
import React from 'react';
import DemoApp from './demoApp';

import '../lib/sass/index.scss';
import './style.css';

const root = document.getElementById('root');

ReactDom.render(<DemoApp />, root);
