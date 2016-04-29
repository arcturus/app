define(['exports', 'components/react', 'components/react-dom', 'components/mvc', 'js/views/dev/camera-latest-image'], function (exports, _react, _reactDom, _mvc, _cameraLatestImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _cameraLatestImage2 = _interopRequireDefault(_cameraLatestImage);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class DevController extends _mvc.Controller {
    main(path, args) {
      switch (path) {
        case 'camera-latest-image':
          _reactDom2.default.render(_react2.default.createElement(_cameraLatestImage2.default, {
            id: args,
            foxbox: this.foxbox
          }), this.mountNode);
          break;
        default:
          console.error('Unknown development view path "%s"', path);
          break;
      }
    }
  }
  exports.default = DevController;
});