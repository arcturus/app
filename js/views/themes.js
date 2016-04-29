define(['exports', 'components/react', 'js/views/base-view', 'js/views/themes-list-item'], function (exports, _react, _baseView, _themesListItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _baseView2 = _interopRequireDefault(_baseView);

  var _themesListItem2 = _interopRequireDefault(_themesListItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // @todo Allow editing existing recipes when clicking on the label.

  class Themes extends _baseView2.default {
    constructor(props) {
      super(props);

      this.state = {
        themes: []
      };

      this.foxbox = props.foxbox;
      this.update = this.update.bind(this);
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.foxbox.recipes.getAll().then(themes => {
        this.setState({ themes });
      }).catch(console.error.bind(console));
    }

    renderHeader() {
      return _react2.default.createElement(
        'header',
        { className: 'app-view__header' },
        _react2.default.createElement(
          'h1',
          null,
          'Recipes'
        ),
        _react2.default.createElement(
          'a',
          { href: '#themes/new', className: 'themes__new-link' },
          _react2.default.createElement('img', { className: 'app-view__action-icon',
            src: 'css/icons/plus.svg',
            alt: 'Add a recipe' })
        )
      );
    }

    renderBody() {
      const themeItems = this.state.themes.map(theme => _react2.default.createElement(_themesListItem2.default, { key: theme.id,
        theme: theme,
        update: this.update,
        foxbox: this.foxbox }));

      return _react2.default.createElement(
        'div',
        { className: 'app-view__fill-body themes' },
        _react2.default.createElement(
          'ul',
          { className: 'themes-list' },
          themeItems
        )
      );
    }
  }

  exports.default = Themes;
  Themes.propTypes = {
    foxbox: _react2.default.PropTypes.object.isRequired
  };
});