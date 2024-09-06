"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appReducer = appReducer;
exports.initialAppState = void 0;
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.unscopables.flat.js");
var _constants = require("app/constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'
const initialAppState = exports.initialAppState = {
  user: {
    name: '',
    friendlyname: '',
    email: ''
  },
  steptypes: _constants.steptypes,
  ui: {
    showNav: true,
    showSearch: true,
    navExpanded: false
  },
  header: {
    title: 'Home',
    items: [],
    rightIcons: [],
    subText: '',
    preText: '',
    size: 'normal'
  },
  modal: null,
  apps: [],
  currentApp: null,
  modules: [],
  currentModule: null,
  menus: [],
  currentMenu: null,
  menuGroups: [],
  currentWorkflow: null,
  agencies: [],
  currentAgencies: [],
  currentAgency: null
};
function appReducer(state, action) {
  switch (action.type) {
    case 'UNSET_MODAL':
      state['modal'] = null;
      return _objectSpread({}, state);
    case 'SET_MODAL':
      state['modal'] = action.currentModal;
      return _objectSpread({}, state);
    case 'SET_HEADER':
      state['header'].title = action.title ? action.title : state['header'].title;
      state['header'].items = action.items ? action.items : state['header'].items;
      state['header'].rightIcons = action.rightIcons ? action.rightIcons : state['header'].rightIcons;
      state['header'].subText = action.subText ? action.subText : state['header'].subText;
      state['header'].preText = action.preText ? action.preText : state['header'].preText;
      state['header'].size = action.size ? action.size : state['header'].size;
      return _objectSpread({}, state);
    case 'SELECT_WORKFLOW':
      state.currentWorkflow = action.currentWorkflow;
      return _objectSpread(_objectSpread({}, state), {}, {
        currentWorkflow: action.currentWorkflow
      });
    case 'UNSELECT_WORKFLOW':
      // state.currentWorkflow = action.currentWorkflow
      let header = state['header'] = {
        title: 'Home',
        items: [],
        rightIcons: [],
        subText: '',
        preText: ''
      };
      return _objectSpread(_objectSpread({}, state), {}, {
        currentWorkflow: null,
        header: header
      });
    case 'SELECT_AGENCY':
      //console.log('agency selected')
      state.currentAgency = action.currentAgency;
      return _objectSpread(_objectSpread({}, state), {}, {
        currentAgency: action.currentAgency
      });
    case 'UNSELECT_AGENCY':
      //console.log('agency unselected')
      state.currentAgency = null;
      return _objectSpread(_objectSpread({}, state), {}, {
        currentAgency: null
      });
    case 'APPSTATE_HIDE_NAV':
      state['ui'].showNav = false;
      state['ui'].navExpanded = false;
      return _objectSpread({}, state);
    case 'APPSTATE_SHOW_NAV':
      state['ui'].showNav = true;
      state['ui'].navExpanded = action.expanded;
      return _objectSpread({}, state);
    case 'APPSTATE_HIDE_SEARCH':
      state['ui'].showSearch = false;
      return _objectSpread({}, state);
    case 'APPSTATE_SHOW_SEARCH':
      state['ui'].showSearch = true;
      return _objectSpread({}, state);
    case 'APPSTATE_INIT':
      const usercontext = action.usercontext[0];
      const apps = usercontext.applications ? usercontext.applications : [];
      //for every app, for every module
      const agencies = [];
      const modules = [];
      const menus = [];
      const menuGroups = [];
      const workflows = [];
      if (apps.length > 0) {
        apps.map(app => {
          if (app.modules) {
            app.modules.map(module => {
              app.modules.length > 0 && modules.push(module);
              if (module.agencies) {
                module.agencies.length > 0 && agencies.push(module.agencies);
              }
              if (module.menus) {
                module.menus.map(menu => {
                  menus.push(menu);
                  if (menu.menugroups) {
                    menu.menugroups.map(menugroup => {
                      menuGroups.push(menugroup);
                      if (menugroup.workflows) {
                        menugroup.workflows.map(workflow => {
                          workflows.push(workflow);
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        apps: apps.flat(1),
        agencies: agencies.flat(1),
        modules: modules.flat(1),
        menus: menus.flat(1),
        menuGroups: menuGroups.flat(1),
        workflows: workflows.flat(1)
      });
    default:
      console.log('context error');
      return _objectSpread({}, state);
  }
}