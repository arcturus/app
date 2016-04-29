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

  const TYPE = 'ip-camera';

  class IpCameraService extends _base2.default {
    constructor(props, api) {
      super(props, api);
      Object.seal(this);
    }

    get type() {
      return TYPE;
    }

    getLatestImage() {
      return this.get('latest image');
    }

    takeSnapshot() {
      return this.set('TakeSnapshot').then(() => this.get('latest image'));
    }
  }
  exports.default = IpCameraService;
});