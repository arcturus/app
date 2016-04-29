define(['exports', 'components/react'], function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class UserLogoutButton extends _react2.default.Component {
    constructor(props) {
      super(props);

      this.foxbox = props.foxbox;
    }

    handleOnClick() {
      this.foxbox.logout();

      // Once logged out, we redirect to the login page.
      location.hash = '#users/login';
    }

    render() {
      if (!this.foxbox.isLoggedIn) {
        return _react2.default.createElement('div', { hidden: true });
      }

      return _react2.default.createElement(
        'button',
        { className: 'user-logout-button',
          onClick: this.handleOnClick.bind(this) },
        'Log out'
      );
    }
  }

  exports.default = UserLogoutButton;
  UserLogoutButton.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired
  };
});