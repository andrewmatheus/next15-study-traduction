import { render, screen } from '@testing-library/react';
import PrivatePage from '../app/private/page';

describe('Private Page', () => {
  it('renders Private Route heading', () => {
    render(<PrivatePage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Private Route');
  });

  it('has proper styling classes', () => {
    render(<PrivatePage />);

    const container = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(container).toHaveClass('min-h-screen', 'bg-zinc-900', 'text-white');
  });
});
