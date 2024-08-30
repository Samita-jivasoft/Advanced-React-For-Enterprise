import React, { useState } from 'react'
import { DashboardStyled,WidgetStyled } from './Styles'
import useDroppable from 'app/helpers/useDroppable'
import Widget from './widget'
import { useViewport } from "app/data";
import { itemsPerCol,itemsPerRow } from './helpers';


const obj = {
    "name": "OmarWorkflows",
    "friendlyname": "Omar Workflows",
    "menugroupid": "685D5E16-1AA0-456B-AC82-1829E10E42D0",
    "workflows": [
        {
            "name": "CompletePaperwork",
            "friendlyname": "Complete Paperwork",
            "workflowid": "7FE65C71-1AF8-4BD9-BA08-28A7F95DA201",
            "description": "Complete paperwork for an incomplete assignment.",
            "agencyrequired": 0,
            "steptype": "Form",
            "sequence": 0
        },
        {
            "name": "SubmitFeedback",
            "friendlyname": "Submit Feedback",
            "workflowid": "22BBB007-2360-43C2-911E-5F1D1D0358FE",
            "description": "Allows user to submit feedback",
            "agencyrequired": 0,
            "steptype": "Form",
            "sequence": 0
        },
        {
            "name": "PendingCustomerRegistrations",
            "friendlyname": "Pending Customer Registrations",
            "workflowid": "FEBEA0A3-BE23-4888-AEE7-8276D8DC6C00",
            "description": "Review customers that are pending registration",
            "agencyrequired": 0,
            "steptype": "CRUD",
            "sequence": 0
        },
        {
            "name": "DetailReview",
            "friendlyname": "Review Details",
            "workflowid": "A29DCE0A-838D-47D4-AE43-D14BD4AB5C5E",
            "description": "Review details and make necessary corrections before they are posted to the accounting system",
            "agencyrequired": 1,
            "steptype": "CRUD",
            "sequence": 0
        },
        {
            "name": "CustomerCancelsDetail",
            "friendlyname": "Cancel Detail",
            "workflowid": "E63ED85C-E97F-479C-AEFD-E6C49F2A336F",
            "description": "Cancels a Detail",
            "agencyrequired": 1,
            "steptype": "Form",
            "sequence": 0
        },
        {
            "name": "ApproveTransactions",
            "friendlyname": "Approve Transactions",
            "workflowid": "B19DDA18-6B0D-4B30-8B5D-B8EF99B123A1",
            "description": "Approves or denies financial transactions",
            "agencyrequired": 1,
            "steptype": "Approval",
            "sequence": 0
        },
        {
            "name": "UpdateProfile",
            "friendlyname": "Update Profile",
            "workflowid": "3185DCED-555A-4C16-A3A0-F22E0A6C79E6",
            "description": "Allows users to update their profile information",
            "agencyrequired": 0,
            "steptype": "Form",
            "sequence": 0
        },
        {
            "name": "ScheduleDetails",
            "friendlyname": "Schedule Details",
            "workflowid": "3EE4298F-2C59-4187-9488-CEB8B21547C8",
            "description": "Schedules the job here",
            "agencyrequired": 0,
            "steptype": "Report",
            "sequence": 0
        },
        {
            "name": "CreateCustomer",
            "friendlyname": "Create Customers",
            "workflowid": "DAE3204C-3C79-4827-ABFE-743D47126236",
            "description": "Manages the process of resgistering new customers",
            "agencyrequired": 0,
            "steptype": "Workflow",
            "sequence": 0
        },
        {
            "name": "ScheduleMeetings",
            "friendlyname": "Schedule Meetings",
            "workflowid": "53E0678D-8C62-45F1-A9A7-2D64C3C23B4E",
            "description": "Schedule and manage meetings within the organization",
            "agencyrequired": 0,
            "steptype": "Scheduler",
            "sequence": 0
        }
    ]
}
const length= obj.workflows.length;
export const Dashboard = () => {
    const [arrItemList, setArrItemList] = useState(obj.workflows); 
    const { droppableProps } = useDroppable(arrItemList, setArrItemList); // For Droppable hook
    const { viewWidth , viewHeight  } = useViewport(); 

    const initialWidth = viewWidth / itemsPerRow(viewWidth) - 20;
    const initialHeight = viewHeight / itemsPerCol(viewHeight, length) - 10;

    // console.log("viewWidth", viewWidth);
    // console.log("initialWidth", initialWidth);
    // console.log("initialHeight", initialHeight);

    return (
        <DashboardStyled>
            {arrItemList.map((workflow, index) => (
                <Widget 
                    workflow={workflow}
                    index={index}
                    viewWidth={initialWidth}
                    viewHeight={initialHeight}
                    length={length}
                    key={workflow.workflowid}
                    {...droppableProps}
                />
            ))}
        </DashboardStyled>
    );
};

 