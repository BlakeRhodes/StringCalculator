import { StringCalculatorPage } from './app.po';

describe('string-calculator App', () => {
  let page: StringCalculatorPage;

  beforeEach(() => {
    page = new StringCalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
