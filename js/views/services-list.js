define(['exports', 'components/react', 'js/views/services-list-item'], function (exports, _react, _servicesListItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _servicesListItem2 = _interopRequireDefault(_servicesListItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class ServicesList extends _react2.default.Component {
    render() {
      const userFacingServices = this.props.services.filter(service => this.isUserFacingService(service));

      let serviceNodes = userFacingServices.map(service => _react2.default.createElement(_servicesListItem2.default, {
        key: service.id,
        service: service,
        foxbox: this.props.foxbox }));

      return _react2.default.createElement(
        'ul',
        { className: 'service-list' },
        serviceNodes
      );
    }

    isUserFacingService(service) {
      // If service doesn't have any getters and setters, there is no need to
      // display it to the user.
      if (!service.hasGetters && !service.hasSetters) {
        return false;
      }

      return service.type !== 'unknown';
    }
  }

  exports.default = ServicesList;
  ServicesList.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired,
    services: _react2.default.PropTypes.array.isRequired
  };
});