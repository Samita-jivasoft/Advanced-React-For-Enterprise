"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferItemsContainer = exports.TableContent = exports.TableContainer = exports.TableAndActionsContainer = exports.StyledRow = exports.StyledRightSide = exports.StyledHeaderText = exports.StyledHeaderButton = exports.SelectedContainer = exports.SearchableTableContainer = exports.MainContainer = exports.HeaderRow = exports.GroupsContainer = exports.DetailViewHeader = exports.DetailViewContentContainer = exports.DetailViewContainer = exports.DetailViewBody = exports.ArrowsContainer = exports.ActionsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// SortSearchableTables.js
const MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  width: ", ";\n  height: ", ";\n"])), props => props.width ? props.width : '100%', props => props.height ? props.height : '100%');
const ArrowsContainer = exports.ArrowsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: ", ";\n"])), props => props.headerColor ? props.headerColor : _ref => {
  let {
    theme
  } = _ref;
  return theme.bga3;
});
// SearchableTable.js
const SearchableTableContainer = exports.SearchableTableContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid white;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  color: ", ";\n"])), props => props.textColor ? props.textColor : _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
});
const TableAndActionsContainer = exports.TableAndActionsContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid green;\n  width: ", ";\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  // margin: '5px'\n"])), props => props.detailView ? '50%' : '100%');
const TableContainer = exports.TableContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // overflow: hidden;\n  margin-bottom: 20px;\n  height: 70%;\n  // border: 1px solid blue;\n"])));
const TableContent = exports.TableContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
const HeaderRow = exports.HeaderRow = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  // border: 1px solid yellow;\n  display: flex;\n  flex-direction: column;\n  padding: 0px 0px 5px 0px;\n"])));
const StyledRow = exports.StyledRow = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  font-weight: bold;\n  padding: 0px 0px 5px 0px;\n"])));
const StyledRightSide = exports.StyledRightSide = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  margin-left: auto;\n  align-items: center;\n  // margin:10px;\n  // height: 100%;\n"])));
const ActionsContainer = exports.ActionsContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  // height: '30%;\n  overflow: auto;\n"])));
// Groups.js
const GroupsContainer = exports.GroupsContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  cursor: pointer;\n  padding: 0px 0px 0px 15px;\n"])));

// SearchTable.js Filter.js Groups.js
const StyledHeaderButton = exports.StyledHeaderButton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  cursor: pointer;\n  padding: 0px 0px 0px 15px;\n"])));
const StyledHeaderText = exports.StyledHeaderText = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  text-decoration: underline;\n  padding: 0px 0px 0px 5px;\n"])));
// TransferItems.js
const SelectedContainer = exports.SelectedContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  width: 100%;\n  // cursor:pointer;\n"])));
const TransferItemsContainer = exports.TransferItemsContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  // width: fit-content;\n  height: fit-content;\n  padding: 5px;\n  border-radius: 5px;\n  white-space: no-wrap;\n  overflow: hidden;\n  cursor: pointer;\n"])));
// DetailView.js
const DetailViewContainer = exports.DetailViewContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  ", ";\n  display: flex;\n  // border:1px solid red;\n  margin-left: 20px;\n  position: ", ";\n  z-index: 2;\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.id === 'light' ? theme.panela3 : theme.panelb3;
}, props => props.collapse ? 'absolute' : null);
const DetailViewContentContainer = exports.DetailViewContentContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"])));
const DetailViewHeader = exports.DetailViewHeader = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  font-weight: bold;\n  display: flex;\n  z-index: 2;\n  align-items: center;\n  padding-bottom: 10px;\n"])));
const DetailViewBody = exports.DetailViewBody = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  height: 100%;\n"])));