define(['js/controllers/main'], function (_main) {
  'use strict';

  var _main2 = _interopRequireDefault(_main);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const mainController = new _main2.default();
  mainController.main();
});