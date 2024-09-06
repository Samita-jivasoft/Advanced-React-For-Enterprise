"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementSystemInfo = void 0;
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _AppContext = require("app/data/context/AppContext");
var _reactDeviceDetect = require("react-device-detect");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementSystemInfo = () => {
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const [appState, appDispatch] = (0, _AppContext.useApp)();
  const [systemInfo, setSystemInfo] = (0, _react.useState)();
  function fnBrowserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "safari";
    } else if (userAgent.match(/opr/i)) {
      browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "edge";
    } else {
      browserName = "Browser unknown";
    }
    return browserName;
  }
  function osfunction() {
    let os = navigator.userAgent;
    let finalOs = "";
    if (os.search('Windows') !== -1) {
      finalOs = "Windows";
    } else if (os.search('Mac') !== -1) {
      finalOs = "MacOS";
    } else if (os.search('X11') !== -1 && !(os.search('Linux') !== -1)) {
      finalOs = "UNIX";
    } else if (os.search('Linux') !== -1 && os.search('X11') !== -1) {
      finalOs = "Linux";
    } else {
      finalOs = "OS unknown ";
    }
    return finalOs;
  }
  (0, _react.useEffect)(() => {
    var _navigator;
    if ((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.userAgentData) {
      async function fetchUAInfo() {
        var _navigator2;
        const info = await ((_navigator2 = navigator) === null || _navigator2 === void 0 || (_navigator2 = _navigator2.userAgentData) === null || _navigator2 === void 0 ? void 0 : _navigator2.getHighEntropyValues(['uaFullVersion', 'mobile', 'platform', 'platformVersion']).then(ua => {
          var uaInfo = JSON.stringify(ua);
          var appVerInfo = "XD2: ".concat(appState === null || appState === void 0 ? void 0 : appState.buildnumber);
          var sysInfo = uaInfo.concat(" ", appVerInfo);
          setSystemInfo(sysInfo);
          return ua;
        }));
        return info;
      }
      fetchUAInfo();
    } else {
      const systemInforStr = " \n      Browser: ".concat(_reactDeviceDetect.browserName, " \n      Browser Version: ").concat(_reactDeviceDetect.fullBrowserVersion, "  \n      OS: ").concat(_reactDeviceDetect.osName, "\n      OS Version: ").concat(_reactDeviceDetect.osVersion, "\n      Mobile: ").concat(_reactDeviceDetect.isMobile, "\n      XD2: ").concat(appState === null || appState === void 0 ? void 0 : appState.buildnumber, "\n      UserAgent: ").concat(navigator.userAgent, "\n      ");
      setSystemInfo(systemInforStr);
    }
  }, []);
  (0, _react.useEffect)(() => {
    elementDispatch({
      type: 'SET_VALUE',
      value: systemInfo
    });
  }, [systemInfo]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};
exports.ElementSystemInfo = ElementSystemInfo;