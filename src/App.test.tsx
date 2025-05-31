import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.tsx';

describe('App', () => {
  it('renders Vite + React heading', () => {
    const element = render(<App />);
    const heading = element.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();
  });
});
