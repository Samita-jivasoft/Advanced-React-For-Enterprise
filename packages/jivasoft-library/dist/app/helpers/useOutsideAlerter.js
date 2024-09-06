"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideAlerter = useOutsideAlerter;
var _react = require("react");
function useOutsideAlerter(refs, onClickOutside) {
  (0, _react.useEffect)(() => {
    function handleClickOutside(event) {
      // Check if the click occurred outside any of the provided refs
      if (!refs.some(ref => ref.current && ref.current.contains(event.target))) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, onClickOutside]);
}