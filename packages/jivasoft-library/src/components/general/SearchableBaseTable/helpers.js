/* Main.js */
export const excludedBEFields = [
  "crudid",
  "crudlistitems",
  "initialcrudlistitems",
  "excludedsearchresults",
  "searchresults",
  "tableconfiguration",
  "childid",
  "childobjname",
  "nextsp",
  "nextstructtype",
  "parentid",
  "parentobjname",
  "reviewrequired",
  "stepid",
  "selection",
  "actionlabel",
  "crudfunctions",
];

export function getInitialConfigurations(
  setTableConfiguration,
  data,
  getTableConfiguration,
  onSave
) {
  // console.log(getTableConfiguration, setTableConfiguration)
  if (getTableConfiguration && setTableConfiguration !== false) {
    if (
      Array.isArray(setTableConfiguration) &&
      setTableConfiguration.length > 0
    ) {
      return {
        allowconfigurations: true,
        onSave: onSave,
        tableconfiguration: setTableConfiguration,
        getTableConfiguration,
      };
    }

    if (
      setTableConfiguration === false ||
      setTableConfiguration === undefined
    ) {
      if (data.crudlist.length < 2) {
        return {
          allowconfigurations: false,
          tableconfiguration: false,
        };
      }
    }

    // return a DEFAULT configuration
    return {
      allowconfigurations: true,
      onSave: onSave,
      tableconfiguration: data?.crudlist?.map((list) => ({
        listid: list.crudlistid,
        savedconfigs: [
          Object.fromEntries(
            [
              ...Object.entries(list),
              ["configurationid", "DEFAULT"],
              ["setconfig", true],
            ].filter(([key]) => !excludedBEFields.includes(key))
          ),
        ],
      })),
      getTableConfiguration,
    };
  } else if (data?.crudlist?.length > 2) {
    return {
      allowconfigurations: true,
      onSave: onSave,
      tableconfiguration: data?.crudlist?.map((list) => ({
        listid: list.crudlistid,
        savedconfigs: [
          Object.fromEntries(
            [
              ...Object.entries(list),
              ["configurationid", "DEFAULT"],
              ["setconfig", true],
            ].filter(([key]) => !excludedBEFields.includes(key))
          ),
        ],
      })),
      getTableConfiguration,
    };
  } else
    return {
      allowconfigurations: false,
    };
}

/* TableType.js */
export function showColumn(column, listid) {
  return (
    column.iscolumn &&
    (column?.crudlistids?.some((id) => id.crudlistid === listid) ||
      !column?.crudlistids ||
      column?.crudlistids?.length === 0)
  );
}

export function setInitialState(
  listid,
  initialListState,
  configurationState,
  tableConfiguration,
  listsState,
  headerColor,
  themeState,
  textColor,
  crudfunctions
) {
  // console.log('----in set initial ---')
  // console.log('initialListState', initialListState)
  // console.log('tableConfiguration', tableConfiguration)
  // console.log('HELPERS.js configurationState', configurationState)
  const initialProps = {
    columns: listsState?.columns
      ?.filter((column) => showColumn(column, listid))
      ?.map((column) => ({
        ...column,
        _width: 110,
        crudcolumnid: column.crudcolumnid.toLowerCase(),
      }))
      ?.sort((a, b) => {
        const sequenceA = a?.sequence;
        const sequenceB = b?.sequence;
        return sequenceA - sequenceB;
      }),
    themecolor: headerColor ?? themeState.currentTheme.bg0,
    textcolor: textColor ?? themeState.currentTheme.text,
    buttoncolor: headerColor ?? themeState.currentTheme.bg0,
    crudfunctions: crudfunctions,
  };
  const combinedProps = { ...initialListState, ...initialProps };
  // console.log('combinedProps', combinedProps)

  if (
    tableConfiguration?.tableconfiguration != false &&
    configurationState?.tableconfiguration != false
  ) {
    const config = tableConfiguration?.tableconfiguration?.filter(
      (config) => config.listid === listid && config
    )[0];
    // console.log('config', config)
    const currentConfig = config?.savedconfigs?.filter(
      (config) => config?.setconfig === true && config
    )[0];

    const stateConfig = configurationState?.tableconfiguration?.filter(
      (config) => config.listid === listid && config
    )[0];
    // console.log('config', config)
    const stateCurrentConfig = stateConfig?.savedconfigs?.filter(
      (config) => config?.setconfig === true && config
    )[0];
    // console.log(
    //   'HREE',
    //   { ...combinedProps, ...currentConfig },
    //   currentConfig,
    //   combinedProps
    // )
    return { ...combinedProps, ...stateCurrentConfig, ...currentConfig };
  } else return combinedProps;
}
