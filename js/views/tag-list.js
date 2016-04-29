define(['exports', 'components/react', 'js/views/tag-item'], function (exports, _react, _tagItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _tagItem2 = _interopRequireDefault(_tagItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class TagList extends _react2.default.Component {
    constructor(props) {
      super(props);

      this.foxbox = props.foxbox;
    }

    render() {
      let tagNodes = this.props.tags.map(tag => _react2.default.createElement(_tagItem2.default, {
        key: tag.id,
        id: tag.id,
        name: tag.name,
        checked: tag.checked,
        serviceId: this.props.serviceId,
        foxbox: this.foxbox }));

      return _react2.default.createElement(
        'ul',
        { className: 'tag-list' },
        tagNodes
      );
    }
  }

  exports.default = TagList;
  TagList.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired,
    tags: _react2.default.PropTypes.array.isRequired,
    serviceId: _react2.default.PropTypes.string.isRequired
  };
});