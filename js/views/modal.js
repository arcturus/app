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

  class Modal extends _react2.default.Component {
    close() {
      this.props.dismiss();
    }

    render() {
      let style = `modal${ this.props.visible ? ' visible' : '' }`;

      return _react2.default.createElement(
        'div',
        { className: style },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'h1',
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.body
        ),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.close.bind(this) },
            'Close'
          )
        )
      );
    }
  }

  exports.default = Modal;
  Modal.propTypes = {
    dismiss: _react2.default.PropTypes.func.isRequired,
    visible: _react2.default.PropTypes.bool,
    title: _react2.default.PropTypes.string.isRequired,
    body: _react2.default.PropTypes.string.isRequired
  };
});