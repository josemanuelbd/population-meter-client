import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from 'base/store';
import App from 'containers/App';

const store = configureStore();

const ReactApp: React.FC = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Provider store={ store as any }>
    <App />
  </Provider>
);

render(<ReactApp />, document.getElementById('root'));
