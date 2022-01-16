import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render Hello World', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
});
