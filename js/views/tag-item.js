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

  class TagItem extends _react2.default.Component {
    constructor(props) {
      super(props);

      this.props = props;
      this.state = {
        checked: props.checked
      };

      this.foxbox = props.foxbox;
    }

    handleSetTag(evt) {
      this.setState({ checked: evt.target.checked });

      console.error('Tag management is not supported yet!');
    }

    render() {
      return _react2.default.createElement(
        'li',
        { className: 'tag-list__item' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', { className: 'tag-list__item-checkbox',
            type: 'checkbox',
            checked: this.state.checked,
            onChange: this.handleSetTag.bind(this) }),
          this.props.name
        )
      );
    }
  }

  exports.default = TagItem;
  TagItem.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired,
    checked: _react2.default.PropTypes.bool,
    id: _react2.default.PropTypes.number.isRequired,
    name: _react2.default.PropTypes.string.isRequired,
    serviceId: _react2.default.PropTypes.string.isRequired
  };
});