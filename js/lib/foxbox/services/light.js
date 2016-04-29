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

  const TYPE = 'light';

  class LightService extends _base2.default {
    constructor(props, api) {
      super(props, api);
      Object.seal(this);
    }

    get type() {
      return TYPE;
    }

    isAvailable() {
      return this.get('available').then(response => response.OnOff === 'On');
    }

    isOn() {
      return this.get('LightOn').then(response => response.OnOff === 'On');
    }

    /**
     * Turn the bulb on or off.
     *
     * @param {boolean} on Whether to turn it on (true) or off (false).
     * @return {Promise}
     */
    turn(on) {
      const value = on ? 'On' : 'Off';
      return this.set('LightOn', value);
    }
  }
  exports.default = LightService;
});