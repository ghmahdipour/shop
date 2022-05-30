import React from 'react'
import './app/styles/sass/app.scss'
import {createRoot} from 'react-dom/client'
import App from './app/app'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import Store from './app/utils/create_store'
import { BrowserRouter } from 'react-router-dom'

const appWrapper = (
    <Provider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </Provider>
  );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(appWrapper);

registerServiceWorker();
