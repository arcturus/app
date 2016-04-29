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

  class UserLogin extends _baseView2.default {
    constructor(props) {
      super(props);

      this.state = {
        boxes: props.foxbox.boxes,
        selectedBox: null,
        loginEnabled: props.foxbox.online
      };

      this.foxbox = props.foxbox;

      this.onBoxOnline = this.onBoxOnline.bind(this);
      this.onBoxDiscovery = this.onBoxDiscovery.bind(this);
      this.onSelectChange = this.onSelectChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
      this.foxbox.addEventListener('online', this.onBoxOnline);
      this.foxbox.addEventListener('discovery', this.onBoxDiscovery);
    }

    componentWillUnmount() {
      this.foxbox.removeEventListener('online', this.onBoxOnline);
      this.foxbox.removeEventListener('discovery', this.onBoxDiscovery);
    }

    onSelectChange(evt) {
      const selectedBox = evt.target.selectedIndex;

      this.setState({ selectedBox });
      this.foxbox.selectBox(selectedBox);
    }

    onFormSubmit(evt) {
      evt.preventDefault(); // Avoid redirection to /?.

      this.foxbox.login();
    }

    onBoxOnline(loginEnabled) {
      this.setState({ loginEnabled });
    }

    onBoxDiscovery() {
      this.setState({ boxes: this.foxbox.boxes });
    }

    renderHeader() {
      return super.renderHeader('Project Link', 'app-view__header--white');
    }

    renderFooter() {
      return null;
    }

    renderBody() {
      let boxNodes = null;

      if (this.state.boxes.length > 1) {
        let selectedBox = this.state.selectedBox || 0;
        const optionNodes = this.state.boxes.map((box, index) => {
          if (box.client === this.foxbox.client) {
            selectedBox = index;
          }

          return _react2.default.createElement(
            'option',
            { key: box.client, value: index },
            box.client
          );
        });

        boxNodes = _react2.default.createElement(
          'select',
          {
            className: 'user-login__box-selector',
            value: selectedBox,
            onChange: this.onSelectChange },
          optionNodes
        );
      }

      return _react2.default.createElement(
        'form',
        { className: 'app-view__fill-body user-login',
          onSubmit: this.onFormSubmit },
        _react2.default.createElement('img', { className: 'user-login__logo', src: 'img/icon.svg' }),
        boxNodes,
        _react2.default.createElement(
          'button',
          { className: 'user-login__login-button',
            disabled: !this.state.loginEnabled },
          'Connect to your box'
        )
      );
    }
  }

  exports.default = UserLogin;
  UserLogin.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired
  };
});