import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getByPlaceholderText, render } from '@testing-library/react';
import store from '../../redux/store/configureStore';
import StockCard from '../StockCard'

describe('Stock Card', () => {
  test('Render Stock card component ', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <StockCard data={{
            symbol: 'AAPL',
            price: 29.98,
            name: 'Apple Inc',
          }}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('Apple Inc')).toBeInTheDocument();
  });
});
