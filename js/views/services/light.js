define(['exports', 'components/react', 'js/views/tag-list'], function (exports, _react, _tagList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _tagList2 = _interopRequireDefault(_tagList);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class LightService extends _react2.default.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: props.service.tags,
        tags: []
      };

      this.foxbox = props.foxbox;
      this.service = props.service;

      this.onServiceStateChanged = this.onServiceStateChanged.bind(this);
    }

    componentDidMount() {
      this.populateTags();

      this.foxbox.services.on('service-changed', this.onServiceStateChanged);
    }

    componentWillUnmount() {
      this.foxbox.services.off('service-changed', this.onServiceStateChanged);
    }

    onServiceStateChanged(service) {
      if (service.id !== this.service.id) {
        return;
      }

      this.service = service;
      this.setState({ data: service.tags });
    }

    populateTags() {
      this.foxbox.getTags().then(tags => {
        tags.forEach(tag => {
          tag.checked = !!(this.state.data && this.state.data.includes(tag.id));
        });

        this.setState({ tags });
      });
    }

    handleAddTag() {
      let name = prompt('Enter new tag name');

      if (!name || !name.trim()) {
        return;
      }

      name = name.trim();
      this.foxbox.setTag({ name }).then(() => {
        this.populateTags(); // Needed to get the newly added tag ID.
      });
    }

    render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-view__fill-body' },
        _react2.default.createElement(
          'h2',
          null,
          'Tags'
        ),
        _react2.default.createElement(_tagList2.default, { tags: this.state.tags, serviceId: this.service.id,
          foxbox: this.foxbox }),
        _react2.default.createElement(
          'button',
          { className: 'add-tag-button', type: 'button',
            onClick: this.handleAddTag.bind(this) },
          'Create a new tag'
        )
      );
    }
  }

  exports.default = LightService;
  LightService.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired,
    service: _react2.default.PropTypes.object.isRequired
  };
});