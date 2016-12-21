import { Ng2WebsitePersonalPage } from './app.po';

describe('ng2-website-personal App', function() {
  let page: Ng2WebsitePersonalPage;

  beforeEach(() => {
    page = new Ng2WebsitePersonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
