/**
 * @desc Small utility for manipulating a Pure.CSS-Component alert.
 * @param selector
 * @returns {{isOpen: isOpen, isClosed: isClosed, toggle: toggle, show: show, hide: hide}}
 */
module.exports = function Alert(selector) {
  var alertState = document.querySelector(selector);

  return {

    isOpen: function isOpen() {
      return !alertState.checked;
    },

    isClosed: function isClosed() {
      return alertState.checked;
    },

    toggle: function toggle() {
      if (this.isOpen()) {
        this.hide();
      } else {
        this.show();
      }
    },

    show: function show() {
      alertState.checked = false;
    },

    hide: function hide() {
      alertState.checked = true;
    }

  }

};