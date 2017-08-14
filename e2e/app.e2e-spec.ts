import { Ng140817Page } from './app.po';

describe('ng140817 App', () => {
  let page: Ng140817Page;

  beforeEach(() => {
    page = new Ng140817Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
