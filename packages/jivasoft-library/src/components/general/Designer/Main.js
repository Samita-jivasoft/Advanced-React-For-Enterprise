import { useEffect, useRef, useState } from "react"
import { Viewer, Designer } from '@grapecity/activereports-react';
import { Core, PdfExport } from "@grapecity/activereports"
import './Styles/Designer.css'
import { 
  DesignerContainer,
  DesignModalBackground, 
  DesignModalContainer,
  DesignModalHeader,
  DesignModalBody,
  DesignModalFooter,
  DesignButtonClose,
  DesignButtonHeaderClose,
  DesignCloseSymbol,
  HeaderRowButton,
  HeaderRow,
  ReportScrollDiv,
  ReportTemplateButton
} from ".";
import { DynamicButtonV2 } from "../DynamicButtonV2";
import { MdEdit } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useAppTheme } from "app/data";
import { useDesigner, formatPhoneNumber, downloadReport } from ".";

export const ReportDesignerMain = (props) =>{

  const {
    data,
    report,
    getReport,
    reportName,
  } = {...props}

  const designerRef = useRef()
  const viewerRef = useRef()
  const counter = useRef(0)
  const [designerVisible, setDesignerVisible] = useState(true)
  const [reportStorage, setReportStorage] = useState(new Map())
  const [themeState,] = useAppTheme()
  const [designerState, designerDispatch] = useDesigner()

  //useeffect that sets the data into the 
  useEffect(()=>{
    if(designerRef.current && report !== null && report !== undefined && report?.length !== 0 )
    {
      data[0].phoneNumber = formatPhoneNumber(data[0].phoneNumber)
      report.DataSources[0].ConnectionProperties.ConnectString =
      "jsondata=" + JSON.stringify(data);
    }
  },[])

  //saves the report definition by saving it in context
  const onSave = function(info){
    if(getReport)
    {
      getReport(info.definition)
    }
    designerDispatch({type:'SET_REPORT',report:info.definition})
    designerDispatch({type:'SET_REPORT_NAME',report:info.displayName})
    return Promise.resolve({displayName: info.displayName})
  }
 
  //saves the report definition by saving it in context
  async function onSaveAsReport(info){
    const reportId = info.id || `${info.displayName}${counter.current++}`
    const reportName = `${info.displayName}`
    const newReportInfo = await designerRef.current.getReport()
    const reportDefinition = newReportInfo?.definition
    designerDispatch({type:'SET_REPORT',report:info.definition})
    designerDispatch({type:'SET_REPORT_NAME',report:info.displayName})
    if(getReport)
    {
      getReport(info.definition)
    }
    setReportStorage(new Map(reportStorage.set(reportId, info.definition)));
    return Promise.resolve({ id: reportId, displayName: reportName });    
  }

  //Allows teh user to view the report preview in the viewer component
  const onReportPreview = async(report) =>{
    setDesignerVisible(false);
    const reportInfo = await designerRef.current.getReport()
    const userReport = new Core.PageReport();
    await userReport.load(reportInfo?.definition)
    viewerRef.current?.Viewer.open(userReport)  
    return Promise.resolve(); 
  }

  return(
    <DesignerContainer>
      {!designerVisible &&
        <HeaderRow>
          <>
            <DynamicButtonV2
              backgroundColor={themeState.currentTheme.bgb3}
              text={'Edit in Designer'}
              onClick={()=>setDesignerVisible(true)}
              icon={<MdEdit/>}
            />
            <DynamicButtonV2
              backgroundColor={themeState.currentTheme.bgb3}
              text={'Download Report'}
              onClick={()=>downloadReport(designerRef)}
              icon={<FaCloudDownloadAlt/>}
            />
          </>
        </HeaderRow>
      } 
 
      <div id='designer-host' style={{display: designerVisible ? "block" : "none"}}>
        <Designer 
          report={{definition:report, displayName:reportName}}
          ref={designerRef} 
          onRender={onReportPreview}
          onSave={onSave}
          onSaveAs={onSaveAsReport} 
        ></Designer>
      </div>
    

      <div id='viewer-host' style={{display: designerVisible ? "none" : "block"}}>
        <Viewer 
          ref={viewerRef}
        />
      </div>
    </DesignerContainer>
  )
}