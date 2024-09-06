"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkActiveAction = void 0;
exports.getAction = getAction;
exports.updatedElementsArray = exports.updateParentStateIfNeeded = exports.getElementToUpdate = exports.getChangedObjects = exports.getAffectedElements = void 0;
require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Function to get changed objects based on element state and parent state
const getChangedObjects = (elementState, parentState) => {
  // console.log('getChangedObjs elementState', elementState)
  // console.log('getChangedObjs parentState', parentState)
  return elementState.action.flatMap(action => getAction(action, elementState, parentState)).filter(element => element !== undefined);
};
exports.getChangedObjects = getChangedObjects;
const getAffectedElements = (array, elementState, parentState) => {
  // console.log('heresdfsdf', parentState)
  return array.flatMap(action => getAction(action, elementState, parentState));
};
exports.getAffectedElements = getAffectedElements;
function getAction(action, elementState, parentState) {
  const {
    actiontype
  } = action;
  // console.log('action', action)
  if (actiontype) {
    switch (actiontype.toLowerCase()) {
      case 'copymap':
      case 'copy':
        return copy(action, elementState, parentState);
      case 'togglevisibility':
        return toggleElementVisibility(action, elementState, parentState);
      default:
        return;
    }
  }
}

// GENERAL ACTIONS FUNCTIONS
// Function to check if an action is active in the parent state
const checkActiveAction = (action, parentState) => {
  return parentState.some(el => el.formelementid === action.formelementid && el.value === action.value);
};

/**
 * Generates an updated array of elements based on changed objects.
 *
 * This function takes an array of changed objects and the current parent state,
 * and returns a new array with elements updated according to the changes.
 *
 * @param {Array} changedObjects - An array of objects representing changes.
 * @param {Array} parentState - The current state of the parent.
 * @returns {Array} An updated array of elements reflecting the changes.
 */
exports.checkActiveAction = checkActiveAction;
const updatedElementsArray = (changedObjects, parentState) => {
  parentState.forEach(element => {
    const changedObject = changedObjects.find(changed => (changed === null || changed === void 0 ? void 0 : changed.formelementid) === (element === null || element === void 0 ? void 0 : element.formelementid));
    if (changedObject) {
      // Update the existing element in-place
      Object.assign(element, changedObject);
    }
  });
  return parentState;
};

/**
 * Updates the parent state if there are changed objects.
 *
 * This function checks if there are changed objects and, if so, updates the parent state
 * by applying the changes using the provided setParentState function.
 * @param {array} changedObjects - array of changed objects.
 * @param {array} parentState - original array of elements.
 * @param {Function} setParentState - function that sets the parentState.
 */
exports.updatedElementsArray = updatedElementsArray;
const updateParentStateIfNeeded = (changedObjects, parentState, setParentState) => {
  // Check if there are changed objects
  if (changedObjects.length > 0) {
    // Generate the updated parent state based on changed objects
    const updatedParentState = updatedElementsArray(changedObjects, parentState);
    // console.log('updatedParentState', updatedParentState)

    // Check if there are elements to update in the parent state
    if (updatedParentState.length > 0) {
      // Uncomment the following line to log the updated parent state
      // console.log('Updated Parent State:', updatedParentState)

      // Update the parent state with the modified elements
      setParentState(updatedParentState);
    }
  }
};

// COPY FUNCTIONS
exports.updateParentStateIfNeeded = updateParentStateIfNeeded;
function updateOldValue(obj, newVal, oldVal) {
  obj.value = newVal;
  obj.oldvalue = oldVal;
}
function setToElementValueToEmptyArray(element) {
  if (element && element.value) {
    element.value = [];
  }
}

// Function to remove a specific item from an array based on its ID
function removeItemFromArrayById(array, id) {
  // console.log('removing here', array, id)
  return array === null || array === void 0 ? void 0 : array.filter(item => (item === null || item === void 0 ? void 0 : item.id) !== id);
}
function handleCopyValueToElement(copyValueToElement, tooption, allowMultipleSelections, action) {
  let actions = [];
  if (copyValueToElement.actions && !copyValueToElement.actions.some(act => act.id == action.id && act.from == action.from)) {
    if (copyValueToElement.actions) {
      actions = [...copyValueToElement.actions, action];
    } else {
      actions = [action];
    }
  }
  if (allowMultipleSelections) {
    // console.log('copyValueToElement', copyValueToElement)
    // console.log('tooption', tooption)
    if (!copyValueToElement.value || copyValueToElement.value === '') {
      copyValueToElement.value = [];
    }
    const isValueInTo = copyValueToElement.value.some(val => val.id === tooption.id);
    if (!isValueInTo) {
      // console.log('here', [...copyValueToElement.value, tooption])
      // const copyOfToElement = { ...copyValueToElement }
      // copyOfToElement.value = [...copyValueToElement.value, tooption]
      // console.log('NOW', copyOfToElement)
      const newArray = [...copyValueToElement.value, tooption];
      // console.log('newArray', newArray)
      if (newArray.length > 0) {
        copyValueToElement = _objectSpread(_objectSpread({}, copyValueToElement), {}, {
          value: [...copyValueToElement.value, tooption],
          actions: actions
        });
      } else {
        copyValueToElement = _objectSpread(_objectSpread({}, copyValueToElement), {}, {
          value: [],
          actions: actions
        });
      }
      // copyValueToElement = copyOfToElement
      // console.log('why is it not setting?', copyValueToElement)
    }
  } else {
    var _copyValueToElement, _copyValueToElement2, _copyValueToElement3;
    // console.log('here', copyValueToElement, tooption)
    if (!((_copyValueToElement = copyValueToElement) !== null && _copyValueToElement !== void 0 && _copyValueToElement.value) || ((_copyValueToElement2 = copyValueToElement) === null || _copyValueToElement2 === void 0 ? void 0 : _copyValueToElement2.value) === '' || ((_copyValueToElement3 = copyValueToElement) === null || _copyValueToElement3 === void 0 || (_copyValueToElement3 = _copyValueToElement3.value[0]) === null || _copyValueToElement3 === void 0 ? void 0 : _copyValueToElement3.id) !== (tooption === null || tooption === void 0 ? void 0 : tooption.id)) {
      // console.log('other', other)
      copyValueToElement = _objectSpread(_objectSpread({}, copyValueToElement), {}, {
        value: [tooption],
        actions: actions
      });
    }
  }
  // console.log('copyValueToElement', copyValueToElement)
  return copyValueToElement;
}

/**
 * Generates an array of changed object elements.
 *
 * @param {object} action - current action being compared since an elementState can have multiple actions.
 * @param {array} elementState - current element being affected.
 * @param {array} parentState - original array of elements.
 * @returns {Array} An updated array of elements that have been affected.
 *
 */
function copy(action, elementState, parentState) {
  // console.log('elementState', elementState)
  // console.log('action', action)
  //current action since elements can have mulitple
  const {
    to,
    from,
    value,
    actiontype,
    map,
    actionid,
    formelementid
  } = action;
  // console.log('copy action', actionid)

  // These are the elements being affected
  let copyValueFromElement = parentState.find(el => el.formelementid == from);
  // console.log('copyValueFromElement', copyValueFromElement)
  let copyValueToElement = parentState.find(el => el.formelementid == to);
  // console.log('copyValueToElement', copyValueToElement)

  if (value == (elementState === null || elementState === void 0 ? void 0 : elementState.value)) {
    var _copyValueToElement4;
    const oldValue = (_copyValueToElement4 = copyValueToElement) === null || _copyValueToElement4 === void 0 ? void 0 : _copyValueToElement4.value;
    // console.log('oldValue', oldValue)
    if ((copyValueFromElement === null || copyValueFromElement === void 0 ? void 0 : copyValueFromElement.value) !== undefined) {
      updateOldValue(copyValueToElement, copyValueFromElement.value, oldValue);
      if (!copyValueToElement.actions) {
        copyValueToElement.actions = [];
      }
      if (!copyValueFromElement.actions) {
        copyValueFromElement.actions = [];
      }

      // Verify that the action isn't already in the elements actions array
      const isActionInTo = copyValueToElement.actions.some(act => act.to === to && act.from === from
      // && act.actiontype === actiontype
      );
      // console.log(isActionInTo)
      if (!isActionInTo) {
        copyValueToElement.actions.push(action);
      }
      const isActionInFrom = copyValueFromElement.actions.some(act => act.to === to && act.from === from
      // && act.actiontype === actiontype
      );
      if (!isActionInFrom) {
        copyValueFromElement.actions.push(action);
      }

      // copyValueToElement.actions.push(action)
      // copyValueFromElement.actions.push(action)
    }
  } else if (map && (map === null || map === void 0 ? void 0 : map.length) > 0) {
    // console.log(
    //   'map',
    //   map.map(i => i.fromoptionid)
    // )
    // console.log(
    //   'map',
    //   map.map(i => i.tooptionid)
    // )

    // Iterate over each entry in the map
    map === null || map === void 0 || map.forEach(entry => {
      var _elementState$value;
      // console.log('entry', entry)
      // Check if elementState exists and has values
      if ((elementState === null || elementState === void 0 || (_elementState$value = elementState.value) === null || _elementState$value === void 0 ? void 0 : _elementState$value.length) > 0) {
        var _elementState$value2;
        // console.log('in here')
        let valueFound = false; // Flag to track if value exists in elementState.values
        elementState === null || elementState === void 0 || (_elementState$value2 = elementState.value) === null || _elementState$value2 === void 0 || _elementState$value2.forEach(value => {
          // console.log('HERE:', value.id, entry.fromoptionid)
          // Check if the value matches the entry's fromoptionid
          if (value.id === entry.fromoptionid) {
            var _copyValueToElement5;
            valueFound = true; // Set flag to true as value is found
            // console.log('Value found:', value.id, entry)
            // Iterate over each select option in copyValueToElement
            (_copyValueToElement5 = copyValueToElement) === null || _copyValueToElement5 === void 0 || (_copyValueToElement5 = _copyValueToElement5.selectoptions) === null || _copyValueToElement5 === void 0 || _copyValueToElement5.forEach(tooption => {
              // Check if the select option matches the entry's tooptionid
              if ((tooption === null || tooption === void 0 ? void 0 : tooption.id) === (entry === null || entry === void 0 ? void 0 : entry.tooptionid)) {
                // console.log(tooption?.id, entry?.tooptionid)
                // Update copyValueToElement based on the matched select option
                // handleCopyValueToElement Function is working properly
                copyValueToElement = handleCopyValueToElement(copyValueToElement, tooption, copyValueToElement.allowmultiplepicklistselections, action);
                // console.log('mapped', copyValueToElement)
              }
            });
          } else {
            var _copyValueToElement6;
            if (copyValueToElement && (action === null || action === void 0 ? void 0 : action.to) == ((_copyValueToElement6 = copyValueToElement) === null || _copyValueToElement6 === void 0 ? void 0 : _copyValueToElement6.id)
            // && elementState?.value.every(val => val.id == entry.fromoptionid)
            ) {
              var _groupedMap$entry$too, _copyValueToElement7, _copyValueToElement8;
              // map.map(i => (i.fromoptionid || i.tooptionid) && ))
              const groupedMap = map === null || map === void 0 ? void 0 : map.reduce((acc, currentValue) => {
                // Check if there is already an entry in the accumulator for the current tooptionid
                if (!acc[currentValue.tooptionid]) {
                  // If not, initialize it as an empty array
                  acc[currentValue.tooptionid] = [];
                }
                // Push the current map item to the array corresponding to its tooptionid
                acc[currentValue.tooptionid].push(currentValue);
                return acc;
              }, {});
              const isMatchFound = (_groupedMap$entry$too = groupedMap[entry.tooptionid]) === null || _groupedMap$entry$too === void 0 ? void 0 : _groupedMap$entry$too.some(item => {
                var _elementState$value3;
                // Check if any 'fromoptionid' from groupedMap matches any ID from elementState.value
                return elementState === null || elementState === void 0 || (_elementState$value3 = elementState.value) === null || _elementState$value3 === void 0 ? void 0 : _elementState$value3.some(val => (val === null || val === void 0 ? void 0 : val.id) === (item === null || item === void 0 ? void 0 : item.fromoptionid));
              });
              // console.log('Match found:', isMatchFound)
              if (copyValueToElement && ((_copyValueToElement7 = copyValueToElement) === null || _copyValueToElement7 === void 0 || (_copyValueToElement7 = _copyValueToElement7.value) === null || _copyValueToElement7 === void 0 ? void 0 : _copyValueToElement7.length) > 0 && (_copyValueToElement8 = copyValueToElement) !== null && _copyValueToElement8 !== void 0 && (_copyValueToElement8 = _copyValueToElement8.value) !== null && _copyValueToElement8 !== void 0 && _copyValueToElement8.some(val => {
                var _val$id;
                return val === null || val === void 0 || (_val$id = val.id) === null || _val$id === void 0 ? void 0 : _val$id.includes(entry === null || entry === void 0 ? void 0 : entry.tooptionid);
              })) {
                var _elementState$value4;
                if (!(elementState !== null && elementState !== void 0 && (_elementState$value4 = elementState.value) !== null && _elementState$value4 !== void 0 && (_elementState$value4 = _elementState$value4.map(val => val.id)) !== null && _elementState$value4 !== void 0 && _elementState$value4.includes(entry.fromoptionid)) && !isMatchFound) {
                  var _copyValueToElement9;
                  copyValueToElement.value = removeItemFromArrayById((_copyValueToElement9 = copyValueToElement) === null || _copyValueToElement9 === void 0 ? void 0 : _copyValueToElement9.value, entry.tooptionid);
                }
              }
            }
            // a value was removed
            // clear corresponding items from copyValueToElement
          }
        });
      } else {
        // console.log('no vals')
        // If elementState doesn't have any values
        // console.log('No values in elementState, resetting copyValueToElement value.')
        setToElementValueToEmptyArray(copyValueToElement);
      }
    });

    // if elementState.id == from
  } else {
    var _copyValueToElement10;
    const oldValue = (_copyValueToElement10 = copyValueToElement) === null || _copyValueToElement10 === void 0 ? void 0 : _copyValueToElement10.oldvalue;
    // console.log('oldValue', oldValue)
    if (oldValue !== undefined) {
      updateOldValue(copyValueToElement, oldValue, copyValueToElement.value);
      delete copyValueToElement.actions;
      delete copyValueFromElement.actions;
    }
  }
  // console.log('HERE RETURNING', copyValueToElement, copyValueFromElement)
  return [copyValueToElement, copyValueFromElement];
}

// Function to get the element to update based on the action
const getElementToUpdate = (action, elementState, parentState) => {
  const actionFrom = action.from;
  const actionTo = action.to;
  let elementToUpdate = '';
  if (actionFrom === elementState.formelementid) {
    elementToUpdate = actionTo;
  } else {
    elementToUpdate = actionFrom;
  }
  // console.log('elementToUpdate', elementToUpdate)
  return parentState.find(element => element.formelementid === elementToUpdate);
};

// VISIBILITY
exports.getElementToUpdate = getElementToUpdate;
function hideAffectedElement(value, elementState) {
  var _elementState$value5, _elementState$value6;
  // console.log(value, elementState?.value)
  const conditions = [value == (elementState === null || elementState === void 0 ? void 0 : elementState.value), value == (elementState === null || elementState === void 0 || (_elementState$value5 = elementState.value) === null || _elementState$value5 === void 0 || (_elementState$value5 = _elementState$value5[0]) === null || _elementState$value5 === void 0 ? void 0 : _elementState$value5.id), (elementState === null || elementState === void 0 || (_elementState$value6 = elementState.value) === null || _elementState$value6 === void 0 ? void 0 : _elementState$value6.length) > 0 && value == 'NONEMPTY'];
  // console.log(conditions);
  return conditions.some(condition => condition) ? 1 : 0;
}

// VISIBILITY
function toggleElementVisibility(action, elementState, parentState) {
  // console.log(action, elementState)
  const {
    to,
    from,
    value,
    actiontype
  } = action;
  const affectedElement = parentState.find(el => el.formelementid == to);
  // TODO: if there are multiple elements to hide from trigger element
  // map through affectedElements and set their hidden property
  // console.log('affectedElement', affectedElement)
  if (affectedElement) {
    const updatedElement = _objectSpread(_objectSpread({}, affectedElement), {}, {
      hidden: hideAffectedElement(value, elementState) ? 1 : 0,
      submit: affectedElement.submit == 1 || affectedElement.submit == 0 ? elementState.submit : 1
      // value: ''
    });
    return updatedElement;
  }
}