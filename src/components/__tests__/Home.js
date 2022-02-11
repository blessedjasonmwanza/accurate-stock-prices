import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getByPlaceholderText, render } from '@testing-library/react';
import store from '../../redux/store/configureStore';
import Home from '../../pages/Home';

describe('Home Component', () => {
  test('Render Title Header ', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('Accurate Stock Prices')).toBeInTheDocument();
  });

  test('Render Input Search ', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
