import { CadastroCliPage } from './app.po';

describe('cadastro-cli App', function() {
  let page: CadastroCliPage;

  beforeEach(() => {
    page = new CadastroCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
