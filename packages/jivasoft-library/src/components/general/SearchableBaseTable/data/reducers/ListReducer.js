import { LightenDarkenColor } from 'app/helpers'
import { searchSort } from '../../Sorting'
import { filterData } from '../../Filtering'
import { groupBy, groupTable } from '../../Grouping'

export const initialListState = {
  idcolumn: '',
  //TODO: find a way not to save another columns array, if modified
  // initialListState hold og columns??
  columns: [],
  showactions: 0,
  showtablesettingsmodal: 0,

  configurationid: 'DEFAULT',
  configurationlabel: 'DEFAULT',
  //TODO: set searchcolumns in columns array
  // maybe add a prop _activesearch:1/0 prop
  sortinfo: {
    key: 'key',
    order: 'asc',
    column: {}
  },
  // viewableRows: {
  //   start: 0,
  //   end: 0
  // },
  setrowposition: 0,
  searching: 0,
  searchinput: '',
  searchcolumns: [],
  checkallitems: false,

  filters: [],
  showfiltersmodal: 0,

  detailview: { active: true, detail: '' },
  expandedRowKeys: [],

  // theme props
  themecolor: '#C5CEDD',
  textcolor: '#162A40',
  buttoncolor: '#C5CEDD',
  rowheight: 50,
  headerheight: 50,
  textsize: '13px',
  showrowindex: false,
  showverticalgridlines: false
}

export function listReducer (state, action) {
  var newitemslist = []

  switch (action.type) {
    case 'INITIALIZE_DATA':
      // rowKey: add unique index to each item
      // console.log('list', action.currentListProps)
      const excludefields = [
        'childid',
        'childobjname',
        'nextsp',
        'nextstructtype',
        'parentid',
        'parentobjname'
      ]
      if (action.grouping != false) {
        state['grouping'] = {
          showgroups: false,
          groups: [],
          data: []
        }
      }
      // undefined = false
      if (action.selection) {
        state['selection'] = true
      } else {
        state['selection'] = false
      }
      if (action?.currentListProps) {
        // console.log('LISTREDUCER', action.currentListProps)
        Object.entries(action.currentListProps)
          .filter(([key]) => !excludefields.includes(key))
          .forEach(([key, value]) => {
            state[key] = value
          })
      }
      let listitems = action?.currentListProps?.crudlistitems?.map(
        (obj, index) => ({
          ...obj,
          rowKey:
            index + '-' + obj[action.currentListProps.idcolumn.toLowerCase()],
          _selected: false,
          _searchresult: true
        })
      )
      state['initialcrudlistitems'] = listitems

      // console.log('listitems', listitems)
      // console.log('{ ...state }', { ...state })
      const settingInitalTable = { ...state }
      const {
        searching,
        filters,
        searchcolumns,
        searchinput,
        sortinfo,
        grouping
      } = settingInitalTable

      if (grouping?.showgroups == true && listitems?.length > 0) {
        const groups = grouping.groups
        const groupingData = groupBy(listitems, function (item) {
          return groups.map(col => [
            col.label,
            item[col.crudcolumnid.toLowerCase()]
          ])
        })
        // console.log('groupingData', groupingData)
        const groupedTable = groupTable(groupingData)
        // console.log('groupedTable', groupedTable)
        state['crudlistitems'] = groups.length > 0 ? groupedTable : listitems
      } else if (
        searching == 1 ||
        filters?.length > 0 ||
        (sortinfo && sortinfo.key != 'key')
      ) {
        let [results, exclude] = searchSort(
          filterData(filters ?? [], listitems),
          searchcolumns,
          searchinput,
          sortinfo
        )
        state['crudlistitems'] = results.concat(exclude)
      } else {
        // console.log(results, exclude)
        state['crudlistitems'] = listitems
      }

      // console.log('{ ...state }', { ...state })
      return { ...state }
    case 'UPDATE_TABLE':
      // console.log('UPDATING TABLE', { ...state, ...action.configuration })
      return { ...state, ...action.configuration }
    case 'SET_MODIFIED_TABLE':
      // console.log('state', state)
      state['filters'] = action.currentFilters
      state['searchcolumns'] = action.currentSearchColumns
      state['searchinput'] = action.currentSearchInput
      state['searching'] = action.currentSearchingState
      let [results, exclude] = searchSort(
        filterData(action.currentFilters ?? [], state.initialcrudlistitems),
        action.currentSearchColumns,
        action.currentSearchInput,
        state.sortinfo
      )
      // state['searchresults'] = results
      // state['excludedsearchresults'] = exclude
      state['crudlistitems'] = results.concat(exclude)
      return { ...state }
    case 'SET_INITIAL_TABLE_PROPS':
      state['tablewidth'] = action.currentTableWidth
      state['tableheight'] = action.currentTableHeight
      return { ...state }
    case 'SET_SORT':
      state['sortinfo'] = action.currentSortInfo
      state['crudlistitems'] = action.currentTableData
      return { ...state }
    case 'SET_SEARCH':
      state['searching'] = action.searchingState
      state['searchinput'] = action.searchInput
      state['searchcolumns'] = action.searchColumns
      return { ...state }
    case 'SET_COLUMNS':
      state['columns'] = action.columns
      return { ...state }
    case 'SET_DETAIL_VIEW':
      state['detailview'] = action.detailview
      return { ...state }
    case 'RESET_ROW_POSITION':
      state['setrowposition'] = action.currentSetRowPosition
      return { ...state }
    case 'SET_VIEWABLE_ROWS':
      state['viewableRows'] = action.currentViewableRows
      return { ...state }
    case 'SET_ROW_HEIGHT':
      state['rowheight'] = action.currentRowHeight
      return { ...state }
    case 'SET_HEADER_HEIGHT':
      state['headerheight'] = action.currentHeaderHeight
      return { ...state }
    case 'SET_TEXT_SIZE':
      state['textsize'] = action.currentFontSize
      return { ...state }
    case 'SET_SHOW_ROW_INDEX_COL':
      state['showrowindex'] = action.showrowindex
      return { ...state }
    case 'SET_SHOW_VERTICAL_GRIDLINES':
      state['showverticalgridlines'] = action.showverticalgridlines
      return { ...state }
    case 'SET_SHOW_TABLE_SETTINGS':
      state['showtablesettingsmodal'] = action.currentTableSettings
      return { ...state }

    /* GROUPING */
    case 'SET_GROUPS':
      const groups = action.currentGroups
      const groupingData = groupBy(state.initialcrudlistitems, function (item) {
        return groups.map(col => [
          col.label,
          item[col.crudcolumnid.toLowerCase()]
        ])
      })
      // console.log('groupingData', groupingData)
      const groupedTable = groupTable(groupingData)
      // console.log('groupedTable', groupedTable)
      state['grouping'] = {
        ...state.grouping,
        groups: groups,
        data: groupedTable
      }

      // console.log(groupedTable)
      state['crudlistitems'] =
        groups.length > 0 ? groupedTable : state.initialcrudlistitems
      return { ...state }
    case 'SET_SHOW_GROUPS':
      if (!action.currentShowGroups) {
        let [r, e] = searchSort(
          filterData(state.filters, state.initialcrudlistitems),
          state.searchcolumns,
          state.searchinput,
          state.sortinfo
        )
        // state['searchresults'] = r
        // state['excludedsearchresults'] = e
        state['crudlistitems'] = r.concat(e)
      }
      state['grouping'] = {
        showgroups: action.currentShowGroups,
        groups: action.currentShowGroups ? state.grouping.groups : [],
        data: action.currentShowGroups ? state.grouping.data : []
      }
      return { ...state }
    case 'SET_EXPANDED_KEYS':
      state['expandedRowKeys'] = action.expandedRowKeys
      return { ...state }

    /* THEME */
    case 'SET_THEME':
      state['themecolor'] = action.currentThemeColor
      // console.log('reducer', action.currentThemeColor)
      state['buttoncolor'] = action.currentThemeColor
      state['textcolor'] = action.currentThemeText
      return { ...state }
    case 'CLEAR_THEME':
      // console.log(action.currentThemeState)
      state['themecolor'] = '#C5CEDD'
      state['buttoncolor'] = '#C5CEDD'
      state['textcolor'] = initialListState.textcolor
      state['textsize'] = initialListState.textsize
      state['rowheight'] = initialListState.rowheight
      state['headerheight'] = initialListState.headerheight
      state['showrowindex'] = initialListState.showrowindex
      state['showverticalgridlines'] = initialListState.showverticalgridlines
      return { ...state }
    case 'SET_SHOW_ACTIONS':
      state['showactions'] = action.currentShowActions
      return { ...state }
    case 'SET_SHOW_FILTERS_MODAL':
      state['showfiltersmodal'] = action.currentFiltersModal
      return { ...state }

    /* SELECTION ACTIONS */
    case 'SET_CHECK_ALL_ITEMS':
      state['checkallitems'] = action.currentCheckAllItems
      return { ...state }
    case 'SET_MODIFIEDTABLE_SELECTED_ALL':
      if (state['searching'] !== 1) {
        newitemslist = [...state.crudlistitems]
        newitemslist.forEach(ele => {
          ele._selected = action.selectedInput
        })
      } else {
        // console.log('state.crudlistitems', state.crudlistitems)
        var selectedSearchResult = state.crudlistitems.filter(
          item => item._searchresult
        )
        selectedSearchResult?.forEach(ele => {
          ele._selected = action.selectedInput
        })
        // console.log('selectedSearchResult', selectedSearchResult)
        newitemslist = selectedSearchResult.concat(
          state.crudlistitems.filter(item => !item._searchresult)
        )
      }
      state['crudlistitems'] = newitemslist
      return { ...state }
    case 'SET_MODIFIEDTABLE_SELECTED':
      // console.log('called here')
      newitemslist = [...state.crudlistitems]
      const selectedItem = newitemslist.find(
        ele => ele.rowKey === action.selectedItemRowKey
      )
      selectedItem._selected = action.selectedInput
      newitemslist.splice(action.selectedIndex, 1, selectedItem)
      // console.log('newitesmlist : ', newitemslist)
      state['crudlistitems'] = newitemslist
      return { ...state }

    /* CONFIGURATION ACTIONS */
    case 'ADD_CONFIGURATION':
      state['configurationid'] = action.currentConfigLabel
      state['configurationlabel'] = action.currentConfigLabel
      return { ...state }
    case 'SET_CONFIGURATION':
      const selectedconfig = action.currentConfiguration
      if (selectedconfig) {
        Object.entries(selectedconfig).forEach(([key, value]) => {
          state[key] = value
        })
      }
      if (
        (selectedconfig?.searching && selectedconfig?.searchinput) ||
        selectedconfig?.filters
      ) {
        const sortinginfo = selectedconfig.sortinfo
          ? selectedconfig.sortinfo
          : state.sortinfo
        let [res, ex] = searchSort(
          filterData(selectedconfig.filters, state.initialcrudlistitems),
          selectedconfig.searchcolumns,
          selectedconfig.searchinput,
          sortinginfo
        )
        // console.log('results', results)
        // console.log('exclude', exclude)
        state['crudlistitems'] = res.concat(ex)
      }
      return { ...state }
    case 'CLEAR_CONFIGURATIONS':
      state['configurationid'] = ''
      state['configurationlabel'] = '***No Configuration Selected***'
      state['crudlistitems'] = state.crudlistitems
      state['filters'] = []
      state['searchcolumns'] = []
      state['searchinput'] = ''
      state['searching'] = 0
      state['sortinfo'] = {
        key: action.initialcols[0].crudcolumnid.toLowerCase(),
        order: 'asc'
      }
      state['setrowposition'] = 0
      state['showactions'] = 0
      state['columns'] = action.initialcols
      return { ...state }
    default:
      return state
  }
}
