import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TodosRedux from './containers/TodosRedux';
import configureStore from './redux/storeConfig';

import { Container } from './styles';

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <Container>
        <TodosRedux />
      </Container>
    </Provider>,
    document.getElementById('root')
  );
renderApp();
