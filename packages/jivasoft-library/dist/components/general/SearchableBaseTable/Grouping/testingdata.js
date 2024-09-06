"use strict";

const depth0 = [[['Employer: Extra Duty Solutions'], []],
//the empty array represents a group of object items
[['Employer: 5 Talents'], []], [['Employer: Academy Sports'], []]];
const depth0ouput = [{
  id: 'row-0',
  parentId: null,
  label: 'Employer: Extra Duty Solutions',
  children: []
}, {
  id: 'row-1',
  parentId: null,
  label: 'Employer: 5 Talents',
  children: []
}, {
  id: 'row-2',
  parentId: null,
  label: 'Employer: Academy Sports',
  children: []
}];
const depth1 = [[['Employer: Extra Duty Solutions', 'Price Option: City Overtime Rate'], []], [['Employer: Extra Duty Solutions', 'Price Option: Tier 1 - $25.00'], []], [['Employer: 5 Talents', 'Price Option: Tier 4 - $40.00'], []], [['Employer: Extra Duty Solutions', 'Price Option: Tier 2 - $30.00'], []], [['Employer: Academy Sports', 'Price Option: Tier 3 - $35.00'], []]];
const depth1output = [{
  id: 'row-0',
  parentId: null,
  label: 'Employer: Extra Duty Solutions',
  children: [{
    id: 'row-0-sub-0',
    //where this id changes based on the depth "row-0-sub-sub-0"
    parentId: 'row-0',
    // child saves parent id
    label: 'Price Option: City Overtime Rate',
    children: []
  }, {
    id: 'row-0-sub-1',
    parentId: 'row-0',
    label: 'Price Option: Tier 1 - $25.00',
    children: []
  }, {
    id: 'row-0-sub-2',
    parentId: 'row-0',
    label: 'Price Option: Tier 2 - $30.00',
    children: []
  }]
}, {
  id: 'row-1',
  parentId: null,
  label: 'Employer: 5 Talents',
  children: [{
    id: 'row-1-sub-0',
    parentId: 'row-1',
    label: 'Price Option: Tier 4 - $40.00',
    children: []
  }]
}, {
  id: 'row-2',
  parentId: null,
  label: 'Employer: Academy Sports',
  children: [{
    id: 'row-2-sub-0',
    parentId: 'row-2',
    label: 'Price Option: Tier 3 - $35.00',
    children: []
  }]
}];
const depth2 = [[['Employer: Extra Duty Solutions', 'Price Option: City Overtime Rate', 'Hours: 17'], []], [['Employer: Extra Duty Solutions', 'Price Option: Tier 1 - $25.00', 'Hours: 4'], []], [['Employer: Extra Duty Solutions', 'Price Option: Tier 1 - $25.00', 'Hours: 8'], []], [['Employer: 5 Talents', 'Price Option: Tier 4 - $40.00', 'Hours: 6'], []], [['Employer: Extra Duty Solutions', 'Price Option: Tier 1 - $25.00', 'Hours: 3'], []], [['Employer: Extra Duty Solutions', 'Price Option: Tier 2 - $30.00', 'Hours: 7'], []], [['Employer: Academy Sports', 'Price Option: Tier 3 - $35.00', 'Hours: 4'], []], [['Employer: Extra Duty Solutions', 'Price Option: Tier 1 - $25.00', 'Hours: 12'], []]];
const depth2output = [{
  id: 'row-0',
  parentId: null,
  label: 'Employer: Extra Duty Solutions',
  children: [{
    id: 'row-0-sub-0',
    parentId: 'row-0',
    label: 'Price Option: City Overtime Rate',
    children: [{
      id: 'row-0-sub-0-sub-0',
      parentId: 'row-0-sub-0',
      label: 'Hours: 17',
      children: []
    }]
  }, {
    id: 'row-0-sub-1',
    parentId: 'row-0',
    label: 'Price Option: Tier 1 - $25.00',
    children: [{
      id: 'row-0-sub-1-sub-0',
      parentId: 'row-0-sub-1',
      label: 'Hours: 4',
      children: []
    }, {
      id: 'row-0-sub-1-sub-1',
      parentId: 'row-0-sub-1',
      label: 'Hours: 8',
      children: []
    }, {
      id: 'row-0-sub-1-sub-2',
      parentId: 'row-0-sub-1',
      label: 'Hours: 3',
      children: []
    }, {
      id: 'row-0-sub-1-sub-3',
      parentId: 'row-0-sub-1',
      label: 'Hours: 12',
      children: []
    }]
  }, {
    id: 'row-0-sub-2',
    parentId: 'row-0',
    label: 'Price Option: Tier 2 - $30.00',
    children: [{
      id: 'row-0-sub-2-sub-0',
      parentId: 'row-0-sub-2',
      label: 'Hours: 7',
      children: []
    }]
  }]
}, {
  id: 'row-1',
  parentId: null,
  label: 'Employer: 5 Talents',
  children: [{
    id: 'row-1-sub-0',
    parentId: 'row-1',
    label: 'Price Option: Tier 4 - $40.00',
    children: [{
      id: 'row-1-sub-0-sub-0',
      parentId: 'row-1-sub-0',
      label: 'Hours: 6',
      children: []
    }]
  }]
}, {
  id: 'row-2',
  parentId: null,
  label: 'Employer: Academy Sports',
  children: [{
    id: 'row-2-sub-0',
    parentId: 'row-2',
    label: 'Price Option: Tier 3 - $35.00',
    children: [{
      id: 'row-2-sub-0-sub-0',
      parentId: 'row-2-sub-0',
      label: 'Hours: 4',
      children: []
    }]
  }]
}];