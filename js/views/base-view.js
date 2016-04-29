define(['exports', 'components/react', 'js/views/navigation-menu'], function (exports, _react, _navigationMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _navigationMenu2 = _interopRequireDefault(_navigationMenu);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class BaseView extends _react2.default.Component {
    renderHeader(title, cssClass) {
      let className = 'app-view__header';
      if (cssClass) {
        className += ` ${ cssClass }`;
      }

      return _react2.default.createElement(
        'header',
        { className: className },
        _react2.default.createElement(
          'h1',
          null,
          title
        )
      );
    }

    renderFooter() {
      return _react2.default.createElement(
        'footer',
        { className: 'app-view__footer' },
        _react2.default.createElement(_navigationMenu2.default, { foxbox: this.props.foxbox })
      );
    }

    renderBody() {
      return null;
    }

    render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-view' },
        this.renderHeader(),
        _react2.default.createElement(
          'section',
          { className: 'app-view__body' },
          this.renderBody()
        ),
        this.renderFooter()
      );
    }
  }

  exports.default = BaseView;
  BaseView.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired
  };
});