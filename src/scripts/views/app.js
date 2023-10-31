// eslint-disable-next-line import/no-unresolved, import/extensions
import DrawerInitiator from '../utils/drawer-initiators';

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
}

export default App;
