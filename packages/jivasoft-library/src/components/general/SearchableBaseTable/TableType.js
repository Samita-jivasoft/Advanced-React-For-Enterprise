import React, { useEffect, useState } from "react";
import {
  ListProvider,
  initialListState,
  listReducer,
  useConfiguration,
  useLists,
} from "./data";
import { TableTypeWrapper, TablesWrapper } from "./styles";
import { SearchableTable } from "./SearchableTable";
import { useAppTheme } from "app/data";
import { TableView } from "./TableView";
import { setInitialState, showColumn } from "./helpers";

export const TableType = (props) => {
  const {
    type,
    headerColor,
    textColor,
    crudfunctions,
    setTableConfiguration,
    tableConfiguration,
  } = props;
  const [themeState] = useAppTheme();
  const [listsState, listsDispatch] = useLists();
  const [configurationState, configurationDispatch] = useConfiguration();
  // console.log(listsState)
  const [listType, setListType] = useState(
    type === "tolist" ? listsState.tolists : listsState.fromlists
  );
  useEffect(() => {
    setListType(type === "tolist" ? listsState.tolists : listsState.fromlists);
  }, [listsState]);

  return (
    listType?.length > 0 && (
      <TableTypeWrapper>
        <TableView {...props} listType={listType} setListType={setListType} />
        <TablesWrapper horizontal={listsState.layout == "tabs"}>
          {listType.map((i, index) => {
            // console.log(
            //   'TABLETYPE.js initialTableStates LISTREDUCER initialState still gets out of date',
            //   setInitialState(
            //     i.crudlistid,
            //     initialListState,
            //     configurationState,
            //     tableConfiguration,
            //     listsState,
            //     headerColor,
            //     themeState,
            //     textColor,
            //     crudfunctions
            //   )
            // )
            if (listsState?.layout === "tabs" && i?.activetab) {
              return (
                <ListProvider
                  key={"provider" + i.crudlistid}
                  initialState={setInitialState(
                    i.crudlistid,
                    initialListState,
                    configurationState,
                    tableConfiguration,
                    listsState,
                    headerColor,
                    themeState,
                    textColor,
                    crudfunctions,
                  )}
                  reducer={listReducer}
                >
                  <SearchableTable
                    {...props}
                    key={i.crudlistid}
                    list={i}
                    listIndex={index}
                    tableConfiguration={setInitialState(
                      i.crudlistid,
                      initialListState,
                      configurationState,
                      tableConfiguration,
                      listsState,
                      headerColor,
                      themeState,
                      textColor,
                      crudfunctions
                    )}
                  />
                </ListProvider>
              );
            }
            if (listsState?.layout != "tabs") {
              return (
                <ListProvider
                  key={"provider" + i.crudlistid}
                  initialState={setInitialState(
                    i.crudlistid,
                    initialListState,
                    configurationState,
                    tableConfiguration,
                    listsState,
                    headerColor,
                    themeState,
                    textColor,
                    crudfunctions
                  )}
                  reducer={listReducer}
                >
                  <SearchableTable
                    {...props}
                    key={i.crudlistid}
                    list={i}
                    listIndex={index}
                    tableConfiguration={setInitialState(
                      i.crudlistid,
                      initialListState,
                      configurationState,
                      tableConfiguration,
                      listsState,
                      headerColor,
                      themeState,
                      textColor,
                      crudfunctions
                    )}
                  />
                </ListProvider>
              );
            }
          })}
        </TablesWrapper>
      </TableTypeWrapper>
    )
  );
};
