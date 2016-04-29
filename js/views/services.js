define(['exports', 'components/react', 'js/views/services-list', 'js/views/base-view'], function (exports, _react, _servicesList, _baseView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _servicesList2 = _interopRequireDefault(_servicesList);

  var _baseView2 = _interopRequireDefault(_baseView);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class Services extends _baseView2.default {
    constructor(props) {
      super(props);

      this.state = {
        services: [],

        title: '',
        body: ''
      };

      this.foxbox = props.foxbox;

      this.updateServiceList = this.updateServiceList.bind(this);
      this.updateServiceState = this.updateServiceState.bind(this);
    }

    componentDidMount() {
      this.updateServiceList();

      this.foxbox.services.on('services-changed', this.updateServiceList);
      this.foxbox.services.on('service-changed', this.updateServiceState);
    }

    componentWillUnmount() {
      this.foxbox.services.off('services-changed', this.updateServiceList);
      this.foxbox.services.off('service-changed', this.updateServiceState);
    }

    updateServiceList() {
      this.foxbox.services.getAll().then(services => this.setState({ services })).catch(error => {
        console.error('Could not update service list: %o', error);
      });
    }

    updateServiceState(state) {
      // Find the index of the service which state has changed.
      const serviceId = this.state.services.findIndex(service => service.id === state.id);
      const services = this.state.services;

      // Update the new state.
      services[serviceId] = state;
      this.setState({ services });
    }

    renderHeader() {
      return super.renderHeader('My Home');
    }

    renderBody() {
      return _react2.default.createElement(
        'div',
        { className: 'app-view__fill-body' },
        _react2.default.createElement(
          'h2',
          null,
          'General'
        ),
        _react2.default.createElement(_servicesList2.default, { services: this.state.services, foxbox: this.foxbox })
      );
    }
  }

  exports.default = Services;
  Services.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired
  };
});