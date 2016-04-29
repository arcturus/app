define(['exports', 'components/react', 'js/views/base-view'], function (exports, _react, _baseView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _baseView2 = _interopRequireDefault(_baseView);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class CameraLatestImage extends _baseView2.default {
    constructor(props) {
      super(props);

      this.state = {
        service: null,
        hasPreview: false
      };

      this.foxbox = props.foxbox;
    }

    componentDidMount() {
      this.foxbox.services.get(this.props.id).then(service => {
        this.setState({ service });

        return service.getLatestImage();
      }).then(image => {
        this.refs.snapshotPreview.src = URL.createObjectURL(image);
        this.setState({ hasPreview: true });
      }).catch(error => {
        console.error('Error occurred while retrieving latest image for camera (id=%s): ', this.props.id, error);
      });
    }

    renderHeader() {
      return super.renderHeader(this.state.service && this.state.service.name ? this.state.service.name : 'Unknown Service');
    }

    renderBody() {
      let cameraControlsClass = 'app-view__fill-body camera-controls';
      if (this.state.hasPreview) {
        cameraControlsClass += ' camera-controls--has-preview';
      }

      return _react2.default.createElement(
        'div',
        { className: cameraControlsClass },
        _react2.default.createElement('img', { ref: 'snapshotPreview',
          style: { flexGrow: 0 },
          alt: 'Snapshot preview', className: 'camera-controls__preview' }),
        _react2.default.createElement(
          'div',
          { className: 'camera-controls__empty-preview' },
          _react2.default.createElement(
            'p',
            null,
            'Preview is being loaded.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Wait a moment please!'
          )
        )
      );
    }
  }

  exports.default = CameraLatestImage;
  CameraLatestImage.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired,
    id: _react2.default.PropTypes.string.isRequired
  };
});