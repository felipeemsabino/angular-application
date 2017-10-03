import { CrossworkPage } from './app.po';

describe('crosswork App', () => {
  let page: CrossworkPage;

  beforeEach(() => {
    page = new CrossworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
