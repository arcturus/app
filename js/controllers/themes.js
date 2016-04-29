define(['exports', 'components/react', 'components/react-dom', 'components/mvc', 'js/views/themes', 'js/views/themes-new'], function (exports, _react, _reactDom, _mvc, _themes, _themesNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _themes2 = _interopRequireDefault(_themes);

  var _themesNew2 = _interopRequireDefault(_themesNew);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class ThemesController extends _mvc.Controller {
    main(action = 'list') {
      const props = {
        foxbox: this.foxbox
      };

      switch (action) {
        case 'list':
          _reactDom2.default.render(_react2.default.createElement(_themes2.default, props), this.mountNode);
          break;

        case 'new':
          _reactDom2.default.render(_react2.default.createElement(_themesNew2.default, props), this.mountNode);
          break;

        default:
          //ReactDOM.render(React.createElement(Theme, props), this.mountNode);
          break;
      }
    }
  }
  exports.default = ThemesController;
});