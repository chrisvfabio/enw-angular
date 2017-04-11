import { EssentialNordicWalkingPage } from './app.po';

describe('essential-nordic-walking App', () => {
  let page: EssentialNordicWalkingPage;

  beforeEach(() => {
    page = new EssentialNordicWalkingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('enw works!');
  });
});
