import React from 'react';

import App from './App';
import { ContextProvider } from '../Context';

import './style.css';

const Video = () => {
    return (
        <ContextProvider>
    <App />
  </ContextProvider>
    )
  };
  
  export default Video;