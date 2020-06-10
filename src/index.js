import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { config } from './config';

ReactDOM.render(
    <React.StrictMode>
        <App config={config} />
    </React.StrictMode>,
    document.getElementById('root')
);
