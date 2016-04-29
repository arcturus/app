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

  class ThemesListItem extends _react2.default.Component {
    constructor(props) {
      super(props);

      this.state = {
        enabled: props.theme.enabled
      };

      this.foxbox = props.foxbox;
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    /**
     * Activate or deactivate a recipe.
     *
     * @param {SyntheticEvent} evt
     */
    handleOnChange(evt) {
      const enabled = evt.target.checked;

      this.setState({ enabled }); // Optimistic update.

      this.foxbox.recipes.toggle(this.props.theme, enabled).catch(error => {
        this.setState({ enabled: !enabled }); // Revert back to previous value.
        console.error(error);
      });
    }

    /**
     * Delete a recipe.
     */
    handleOnDelete() {
      this.foxbox.recipes.remove(this.props.theme).then(() => {
        this.props.update();
      }).catch(console.error.bind(console));
    }

    render() {
      let className = 'themes-list__item';
      if (!this.state.enabled) {
        className += ' themes-list__item--deactivated';
      }

      return _react2.default.createElement(
        'li',
        { className: className },
        _react2.default.createElement('input', { className: 'themes-list__toggle',
          type: 'checkbox',
          checked: this.state.enabled,
          onChange: this.handleOnChange }),
        _react2.default.createElement(
          'span',
          { className: 'themes-list__name' },
          this.props.theme.label
        ),
        _react2.default.createElement('button', { className: 'themes-list__remove',
          onClick: this.handleOnDelete })
      );
    }
  }

  exports.default = ThemesListItem;
  ThemesListItem.propTypes = {
    theme: _react2.default.PropTypes.object.isRequired,
    update: _react2.default.PropTypes.func.isRequired,
    foxbox: _react2.default.PropTypes.object.isRequired
  };
});