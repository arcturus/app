define(['exports', './base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _base2 = _interopRequireDefault(_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const TYPE = 'motion-sensor';

  const p = Object.freeze({
    onMotionStateChanged: Symbol('onMotionStateChanged')
  });

  /**
   * Converts motion state value to boolean. Considers unknown state (null) the
   * same as state when motion is not detected.
   *
   * @param {Object} motionState Motion state object.
   * @return {boolean}
   * @private
   */
  const motionStateToBoolean = function (motionState) {
    if (!motionState) {
      return false;
    }

    return motionState.OpenClosed === 'Open';
  };

  class MotionSensorService extends _base2.default {
    constructor(props, api) {
      super(props, api, ['motion']);

      this[p.onMotionStateChanged] = this[p.onMotionStateChanged].bind(this);

      // Let's watch for motion sensor value changes.
      this.watch('OpenClosed', this[p.onMotionStateChanged]);

      Object.freeze(this);
    }

    get type() {
      return TYPE;
    }

    /**
     * Returns motion sensor state.
     *
     * @return {Promise.<boolean>}
     */
    isMotionDetected() {
      return this.get('OpenClosed').then(motionStateToBoolean);
    }

    /**
     * Removes motion sensor state watcher.
     */
    teardown() {
      super.teardown();

      this.unwatch('OpenClosed', this[p.onMotionStateChanged]);
    }

    /**
     * Function that is called whenever motion state changes.
     *
     * @param {Object} motionState State that indicates whether motion detected
     * or not.
     * @private
     */
    [p.onMotionStateChanged](motionState) {
      this.emit('motion', motionStateToBoolean(motionState));
    }
  }
  exports.default = MotionSensorService;
});