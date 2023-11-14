// eslint-disable-next-line import/no-unresolved, import/extensions
import DrawerInitiator from '../utils/drawer-initiators';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  // eslint-disable-next-line object-curly-newline
  constructor({ button, drawer, content, close }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._close = close;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      close: this._close,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#explore').focus();
    });
  }
}

export default App;
