import { VenturaPage } from './app.po';

describe('ventura App', () => {
  let page: VenturaPage;

  beforeEach(() => {
    page = new VenturaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
