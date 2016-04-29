define(['exports', 'components/react', 'components/react-dom', 'components/mvc', 'js/views/service'], function (exports, _react, _reactDom, _mvc, _service) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _service2 = _interopRequireDefault(_service);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class ServiceController extends _mvc.Controller {
    main(id) {
      _reactDom2.default.render(_react2.default.createElement(_service2.default, {
        id,
        foxbox: this.foxbox
      }), this.mountNode);
    }
  }
  exports.default = ServiceController;
});