define(['exports', 'components/react', 'components/react-dom', 'components/mvc', 'js/views/services'], function (exports, _react, _reactDom, _mvc, _services) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _services2 = _interopRequireDefault(_services);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class ServicesController extends _mvc.Controller {
    main() {
      _reactDom2.default.render(_react2.default.createElement(_services2.default, {
        foxbox: this.foxbox
      }), this.mountNode);
    }
  }
  exports.default = ServicesController;
});