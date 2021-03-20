import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}

export default App;
