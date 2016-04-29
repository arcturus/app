define(['exports', 'components/mvc', 'js/controllers/users', 'js/controllers/services', 'js/controllers/service', 'js/controllers/themes', 'js/controllers/dev', 'js/lib/foxbox/foxbox'], function (exports, _mvc, _users, _services, _service, _themes, _dev, _foxbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _users2 = _interopRequireDefault(_users);

  var _services2 = _interopRequireDefault(_services);

  var _service2 = _interopRequireDefault(_service);

  var _themes2 = _interopRequireDefault(_themes);

  var _dev2 = _interopRequireDefault(_dev);

  var _foxbox2 = _interopRequireDefault(_foxbox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class MainController extends _mvc.RoutingController {
    constructor() {
      const foxbox = new _foxbox2.default();
      const mountNode = document.querySelector('.app-view-container');
      const options = { foxbox, mountNode };

      const usersController = new _users2.default(options);
      const themesController = new _themes2.default(options);

      super({
        '': usersController,
        'users/(.+)': usersController,
        'services': new _services2.default(options),
        'services/(.+)': new _service2.default(options),
        'themes': themesController,
        'themes/(.+)': themesController,
        'dev/(.+)/(.+)': new _dev2.default(options)
      });

      this.foxbox = foxbox;
    }

    main() {
      this.foxbox.init().then(() => {
        if (this.foxbox.isLoggedIn) {
          this.foxbox.subscribeToNotifications();
          if (location.hash === '') {
            location.hash = '#services';
          }
          this.foxbox.addEventListener('push-message', msg => {
            if (msg.action) {
              location.hash = msg.action;
            }
          });
        } else {
          location.hash = '#users/login';
        }

        this.route();
      });
    }
  }
  exports.default = MainController;
});