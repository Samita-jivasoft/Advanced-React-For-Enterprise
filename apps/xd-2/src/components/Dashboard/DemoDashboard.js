import { DemoDashboardContainerStyled, DemoDashboardWrapperStyled, DemoWorkflowPickerContainerStyled, DemoWorkflowScrollerContainerStyled } from "./Styles/DemoDashboard"
import { useApp } from "app/data/context/AppContext"
import { DemoWorkflowWidget } from "./DemoWorkflowWidget"
import {
  DynamicButtonV2,
  LoaderSpinner
} from '@jivasoft/jivasoft-lib/dist/components'
import { useAppTheme, useViewport } from "app/data"
//import {DynamicText} from '@jivasoft/jivasoft-lib'
import {DynamicText} from '@jivasoft/jivasoft-lib/dist/components'
import { useState } from "react"
import useDroppable from "@jivasoft/jivasoft-lib/dist/app/helpers/useDroppable.js"
import { useCallback } from "react"

export const DemoDashboard = () => {
  const [appState, appDispatch] = useApp();
  const [themeState] = useAppTheme();
  const { viewWidth } = useViewport();

  const [arrItemList, setArrItemList] = useState(() => {
    const storedDashboardOrder = localStorage.getItem("dashboardOrder");
    //if storedDashboard--> set it with available
    //else default or null
    return storedDashboardOrder
      ? JSON.parse(storedDashboardOrder)
      : [...(appState?.workflows || [])];
  });

  //Array for BackEnd (extracted workflowid and sequence)
  const extractedArray = arrItemList.map((item) => ({
    workflowid: item.workflowid,
    sequence: item.dashboardSequence,
  }));

  //console.log("data for BE",extractedArray)

  function getUser() {
    if (appState?.user?.friendlyname) {
      return appState.user.friendlyname;
    } else if (appState?.user?.name) {
      return appState.user.name;
    } else {
      return false;
    }
  }

  //Custom handle Drop
  const customHandleDrop = useCallback(
    (e, draggedIndex, dropTargetIndex) => {
    e.preventDefault();
    if (draggedIndex === dropTargetIndex) {
      //console.log("same");
      return;
    } //Do nothing if dragged and dropped to same

    const newArrItemList = [...arrItemList];
    const [draggedItem] = newArrItemList.splice(draggedIndex, 1);
    newArrItemList.splice(dropTargetIndex, 0, draggedItem);
    //console.log("This is the list of item after drop action and before sequence update", newArrItemList);
    const updatedArrWithSequence = newArrItemList.map((item, idx) => ({
      ...item,
      dashboardSequence: idx,
    }));
    //console.log("This is the list of item after sequence update", updatedArrWithSequence);

    //Store them locally for now...
    localStorage.setItem(
      "dashboardOrder",
      JSON.stringify(updatedArrWithSequence)
    );

    // setSortedDataForBE(dataForBE)
    setArrItemList(updatedArrWithSequence);
  },[arrItemList]);

  //Custom handle drop init
  const { droppableProps,  } = useDroppable(
    arrItemList,
    setArrItemList,
    customHandleDrop
  );


  return (
    <DemoDashboardContainerStyled>
      <DemoDashboardWrapperStyled>
        <DynamicText variant={"heading1"}>Dashboard</DynamicText>
        {appState?.workflows && (
          <DemoWorkflowPickerContainerStyled>
            <DemoWorkflowScrollerContainerStyled>
              {appState?.workflows.map((workflow, index) => {
                return (
                  <DemoWorkflowWidget
                    {...droppableProps}
                    key={workflow?.workflowid || index}
                    data-idx={index}
                    items={appState?.workflows?.length}

                    workflow={workflow}
                    index={index}
                  />
                );
              })}
            </DemoWorkflowScrollerContainerStyled>
          </DemoWorkflowPickerContainerStyled>
        )}
      </DemoDashboardWrapperStyled>
      {/* {!appState?.workflows && <LoaderSpinner />} */}
    </DemoDashboardContainerStyled>
  );
};
