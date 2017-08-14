import { Ng310717Page } from './app.po';

describe('ng310717 App', () => {
  let page: Ng310717Page;

  beforeEach(() => {
    page = new Ng310717Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
