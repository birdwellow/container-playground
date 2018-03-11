import { AngularServicePage } from './app.po';

describe('angular-service App', () => {
  let page: AngularServicePage;

  beforeEach(() => {
    page = new AngularServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
