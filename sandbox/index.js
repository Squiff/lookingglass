import ReactDom from 'react-dom';
import React from 'react';
import App from './App';

import '../src/lib/sass/index.scss';
import './style.css';

const root = document.getElementById('root');

ReactDom.render(<App />, root);
