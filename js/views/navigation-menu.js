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

  class NavigationMenu extends _react2.default.Component {
    constructor(props) {
      super(props);

      this.foxbox = props.foxbox;
    }

    shouldComponentUpdate() {
      // We never need to update this component as it is being recreated each time
      // the route changes.
      return false;
    }

    handleOnClick() {
      this.foxbox.logout();
    }

    render() {
      const route = location.hash.substr(1).split('/').shift();
      let menuNodes = [{
        id: 'services',
        label: 'Home'
      }, {
        id: 'themes',
        label: 'Themes'
      }, {
        id: 'mr-fox',
        label: 'Mr. Fox'
      }].map(menu => {
        let className = 'navigation-menu__item';
        if (route === menu.id) {
          className += ' navigation-menu__item--active';
        }

        return _react2.default.createElement(
          'li',
          { key: menu.id, className: className },
          _react2.default.createElement(
            'a',
            { href: `#${ menu.id }`,
              className: 'navigation-menu__item-link' },
            menu.label
          )
        );
      });

      return _react2.default.createElement(
        'ul',
        { className: 'navigation-menu' },
        menuNodes,
        _react2.default.createElement(
          'li',
          { className: 'navigation-menu__item' },
          _react2.default.createElement(
            'a',
            { href: '#users/login',
              className: 'navigation-menu__item-link user-logout-button',
              onClick: this.handleOnClick.bind(this) },
            'Log out'
          )
        )
      );
    }
  }

  exports.default = NavigationMenu;
  NavigationMenu.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired
  };
});