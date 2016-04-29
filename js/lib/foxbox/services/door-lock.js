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

  const TYPE = 'door-lock';

  class DoorLockService extends _base2.default {
    constructor(props, api) {
      super(props, api);
      Object.seal(this);
    }

    get type() {
      return TYPE;
    }

    /**
     * Checks if the lock is locked.
     *
     * @return {Promise.<boolean>}
     */
    isLocked() {
      return this.get('DoorLocked').then(response => {
        if (!response) {
          throw new Error('Door lock status is not available yet!');
        }

        return response.DoorLocked === 'Locked';
      });
    }

    /**
     * Either locks or unlocks the lock depending on the "locked" parameter.
     *
     * @param {boolean} locked Boolean value indicating whether we want lock or
     * unlock the lock.
     * @return {Promise}
     */
    lockUnlock(locked) {
      return this.set('DoorLocked', locked ? 'Locked' : 'Unlocked');
    }
  }
  exports.default = DoorLockService;
});