import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import { Provider as StoreProvider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import handleLocation from './location';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

handleLocation(store);
