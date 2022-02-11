import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getByPlaceholderText, render, useParams } from '@testing-library/react';
import store from '../../redux/store/configureStore';
import Home from '../../pages/Home';
import PageHeader from '../PageHeader';

describe('Details Page', () => {
  test('Render Page Title Header ', () => {
    const { getByText, useParams } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PageHeader
            title="Home Page"
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('Home Page')).toBeInTheDocument();
  });
});

