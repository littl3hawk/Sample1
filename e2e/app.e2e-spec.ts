import { Sample2wpPage } from './app.po';

describe('sample2wp App', () => {
  let page: Sample2wpPage;

  beforeEach(() => {
    page = new Sample2wpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
