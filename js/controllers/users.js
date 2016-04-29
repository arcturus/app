define(['exports', 'components/react', 'components/react-dom', 'components/mvc', 'js/views/user-login'], function (exports, _react, _reactDom, _mvc, _userLogin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _userLogin2 = _interopRequireDefault(_userLogin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const ALLOWED_ACTIONS = ['login', 'logout'];
  const DEFAULT_ACTION = ALLOWED_ACTIONS[0];

  class UsersController extends _mvc.Controller {
    main(action = DEFAULT_ACTION) {
      if (!ALLOWED_ACTIONS.includes(action)) {
        console.error(`Bad users route: "${ action }". Falling back to ${ DEFAULT_ACTION }.`);
        action = DEFAULT_ACTION;
      }

      switch (action) {
        case 'login':
          this.login();
          break;

        case 'logout':
          this.logout();
          break;
      }
    }

    login() {
      _reactDom2.default.render(_react2.default.createElement(_userLogin2.default, { foxbox: this.foxbox }), this.mountNode);
    }

    logout() {
      this.foxbox.logout();

      // Once logged out, we redirect to the login page.
      location.hash = '#users/login';
    }
  }
  exports.default = UsersController;
});