import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { I18nProvider } from '../lib/i18n-context';

// Mock the language selector component
jest.mock('../components/language-selector', () => {
  return {
    LanguageSelector: () => <select data-testid="language-selector">Language Selector</select>,
  };
});

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nProvider>
      {component}
    </I18nProvider>
  );
};

describe('Home Page', () => {
  it('renders Hello World heading', () => {
    renderWithI18n(<Home />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello World');
  });

  it('renders language selector', () => {
    renderWithI18n(<Home />);

    const languageSelector = screen.getByTestId('language-selector');
    expect(languageSelector).toBeInTheDocument();
  });

  it('renders select language label', () => {
    renderWithI18n(<Home />);

    const label = screen.getByText('Select Language:');
    expect(label).toBeInTheDocument();
  });
});
