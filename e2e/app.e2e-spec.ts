import { SightsLocationPage } from './app.po';

describe('sights-location App', () => {
  let page: SightsLocationPage;

  beforeEach(() => {
    page = new SightsLocationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
