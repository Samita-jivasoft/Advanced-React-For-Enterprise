import {
  FaTrashAlt,
  FaPlus,
  FaPen,
  FaBookOpen,
  FaFileAlt,
  FaListAlt,
  FaFileContract,
  FaList,
} from "react-icons/fa";

import React from "react";
import { generateColorShades, getBestShadeForContrast,  } from "app/theme";
import { useAppTheme } from "app/data";
import { GiNotebook } from "react-icons/gi";

import { MdListAlt } from "react-icons/md";
import { RiPieChartBoxLine } from "react-icons/ri";

export function getIcon(type) {
  const normalizedType = type.toLowerCase();
    switch (true) {
    case normalizedType.includes("form"):
      return <GiNotebook />;
    case normalizedType.includes("crud"):
      return <MdListAlt />;
    case normalizedType.includes("report"):
      return <RiPieChartBoxLine />;
    default:
      return null;
  }
}

export function useGetStatus(status) {
  const [themeState] = useAppTheme();
  const normalizedStatus = status.toLowerCase();
  const statusColor = themeState?.currentTheme?.bgSolid;
  switch (true) {
    case normalizedStatus.includes("create"):
      return <FaPlus style={{ color: statusColor }} />;
    case normalizedStatus.includes("read"):
      return <FaBookOpen style={{ color: statusColor }} />;
    case normalizedStatus.includes("update"):
      return <FaPen style={{ color: statusColor }} />;
    case normalizedStatus.includes("delete"):
      return <FaTrashAlt style={{ color: statusColor }} />;
    default:
      return null;}
}
export function useGetBackground(type, background, status='') {
  const colorFill = useGetFillColorByTypeOrStatus(type, status);
 
  if (background) {
    const shades = generateColorShades(colorFill.trim(), 10); 
    //console.log(shades)
    return getBestShadeForContrast(colorFill, shades);
  } else {
    return "transparent";
  }
}


export function useGetFillColorByTypeOrStatus(type, status = '') {
 
const normalizedType = type.toLowerCase();
const normalizedStatus = status.toLowerCase();
  //First the colorFill of an icon is based on status ={Create,Read,Update,or Delete}
  //console.log(normalizedType)
  const [themeState] = useAppTheme();
  switch (true) {
    case normalizedStatus.includes("create"):
      return themeState?.currentTheme?.successColor;
    case normalizedStatus.includes("read"):
      return themeState?.currentTheme?.infoColor;
    case normalizedStatus.includes("update"):
      return themeState?.currentTheme?.warnColor;
    case normalizedStatus.includes("delete"):
      return themeState?.currentTheme?.dangerColor;
    
  }
    //This is Fallback or if the status is not available, then the color defaults to these
  switch (true) {
    
    case normalizedType.includes("form"):
      return themeState?.currentTheme?.successColor;
    case normalizedType.includes("crud"):
      return themeState?.currentTheme?.secondaryColor; 
    case normalizedType.includes("report"):
      return themeState?.currentTheme?.infoColor;
    default:
      return themeState?.currentTheme?.secondaryColor;
  }
}
export function getBadgePositionStyles(badgePosition) {
  switch (badgePosition) {
    case "top-right":
      return `
        transform: translate(100%, -90%);
      `;
    case "bottom-right":
      return `
        transform: translate(30%, 90%);
      `;
    case "top-left":
      return `
        transform: translate(-30%, -100%);
      `;
    case "bottom-left":
      return `
        transform: translate(-30%, 90%);
      `;
    default:
      return `
      transform: translate(60%, -90%);
      `;
  }
}