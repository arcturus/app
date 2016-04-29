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

  class CameraService extends _react2.default.Component {
    constructor(props) {
      super(props);

      this.state = {
        hasPreview: false,
        hasPreviousSnapshot: false
      };

      this.foxbox = props.foxbox;
      this.service = props.service;
    }

    /**
     * Takes camera snapshot and displays it to the user.
     *
     * @private
     */
    takeSnapshot() {
      this.service.takeSnapshot().then(image => {
        const previousSnapshot = this.refs.snapshotPreview.src;

        const newState = {
          hasPreview: true,
          hasPreviousSnapshot: false
        };

        this.refs.snapshotPreview.src = URL.createObjectURL(image);

        if (previousSnapshot) {
          newState.hasPreviousSnapshot = true;

          if (this.refs.previousSnapshot.src) {
            URL.revokeObjectURL(this.refs.previousSnapshot.src);
          }

          this.refs.previousSnapshot.src = previousSnapshot;
        }

        this.setState(newState);
      }).catch(error => {
        console.error('Error occurred while making a snapshot: ', error);
      });
    }

    render() {
      let cameraControlsClass = 'app-view__fill-body camera-controls';

      if (this.state.hasPreview) {
        cameraControlsClass += ' camera-controls--has-preview';
      }

      if (this.state.hasPreviousSnapshot) {
        cameraControlsClass += ' camera-controls--has-previous-snapshot';
      }

      return _react2.default.createElement(
        'div',
        { className: cameraControlsClass },
        _react2.default.createElement('img', { ref: 'snapshotPreview',
          alt: 'Snapshot preview', className: 'camera-controls__preview' }),
        _react2.default.createElement(
          'div',
          { className: 'camera-controls__empty-preview' },
          _react2.default.createElement(
            'p',
            null,
            'Preview is not available.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Touch button to take a snapshot!'
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'camera-controls__snapshot-tools' },
          _react2.default.createElement('button', { className: 'camera-controls__snapshot-btn', type: 'button',
            title: 'Take a snapshot',
            onClick: this.takeSnapshot.bind(this) }),
          _react2.default.createElement('img', { ref: 'previousSnapshot',
            className: 'camera-controls__previous-snapshot' })
        )
      );
    }
  }

  exports.default = CameraService;
  CameraService.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired,
    service: _react2.default.PropTypes.object.isRequired
  };
});