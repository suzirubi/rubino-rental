import { RubinoRentalsPage } from './app.po';

describe('rubino-rentals App', function() {
  let page: RubinoRentalsPage;

  beforeEach(() => {
    page = new RubinoRentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
