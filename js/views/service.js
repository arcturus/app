define(['exports', 'components/react', 'js/views/base-view', 'js/views/services/camera', 'js/views/services/light', 'js/views/services/default'], function (exports, _react, _baseView, _camera, _light, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _baseView2 = _interopRequireDefault(_baseView);

  var _camera2 = _interopRequireDefault(_camera);

  var _light2 = _interopRequireDefault(_light);

  var _default2 = _interopRequireDefault(_default);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class Service extends _baseView2.default {
    constructor(props) {
      super(props);

      this.state = {
        service: null
      };

      this.foxbox = props.foxbox;
    }

    componentDidMount() {
      this.foxbox.services.get(this.props.id).then(service => {
        this.setState({ service });
      }).catch(error => {
        console.error('Error occurred while retrieving service: ', error);
      });
    }

    renderHeader() {
      return super.renderHeader(this.state.service && this.state.service.name ? this.state.service.name : 'Unknown Service');
    }

    renderBody() {
      if (!this.state.service) {
        return null;
      }

      switch (this.state.service.type) {
        case 'ip-camera':
          return _react2.default.createElement(_camera2.default, { service: this.state.service,
            foxbox: this.foxbox });
        case 'light':
          return _react2.default.createElement(_light2.default, { service: this.state.service,
            foxbox: this.foxbox });
        default:
          return _react2.default.createElement(_default2.default, { service: this.state.service,
            foxbox: this.foxbox });
      }
    }
  }

  exports.default = Service;
  Service.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired,
    id: _react2.default.PropTypes.string.isRequired
  };
});