import { sm } from "app/constants";
import styled, { css, keyframes } from "styled-components";
import { scaleAnimation, fadeInScaledAnimation,breatheAnimation } from "../../../../app/theme/constants/animation";

export const StyledCalendar = styled.div`

/* Positioning logic */
position:${props => props?.styles?.position ? props?.styles?.position : 'absolute'};
box-sizing:border-box;
background-color: #fff;

z-index: 1000;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
width: ${props => props?.styles?.width ? props?.styles?.width : '300px'};
  height: ${props => props?.styles?.height ? props?.styles?.height : '300px'};
overflow-y: auto; // Ensure contents don't overflow
overflow-x:hidden;
display: flex;      // Turn this into a flex container
flex-direction: column;  // Stack children vertically


padding:10px;
border-radius:10px;
align-items:center;
user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;


  @media (max-width: ${sm}px) { // use the sm breakpoint value you've defined
    position: ${props => props?.styles?.position ? props?.styles?.position : 'fixed'};
    left:0;
    z-index: 1001; // Ensure it's above the blur background
  }

  ${({ animateDay }) => {
    if (animateDay) {
      return css`
      overflow-y:hidden;
      `;
    }
  }}
`;
export const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  overflow: auto;
  align-items:center;
  position:relative;

  border-collapse: separate;  // Separate the borders
  border-spacing: 5px;        // Add spacing between cells
`;
export const EditIcon = styled.div`
  position: absolute;
  top:-10px; // adjust as needed
  right: 0px; // adjust as needed
  background: #fff;
  border-radius: 50%;
  color:black;
  height:25px;
  align-items:center;
  justify-content:center;
  width:25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display:none;

  z-index:999;
  font-size: 15px; // or other desired size
  &:hover {
    color:  #007AFF;
    background-color: #f6f6f6;

  }
`;

export const StyledDayDetailHeader = styled.div`
position:relative;
background:  #007AFF;
flex-direction:column;
height:150px;
border-radius:20px;
align-items:center;
justify-content:flex-start;
display:flex;
color:white;
font-size:20px;
font-weight:bold;
animation: ${fadeInScaledAnimation} 0.5s forwards, ${breatheAnimation} 8s ease-in-out infinite;

width:150px;
`
export const StyledDay = styled.td`
  text-align: center;
  position: relative;
  ${({ enabled,theme }) => enabled? theme.selectable:null};
  height:100%;
  opacity:${({ enabled }) => enabled? 1:.4};
  overflow: visible; // ensure child elements aren't cut off
  &:hover .dayWrapper > ${EditIcon} {
    opacity:${({ enabled }) => enabled? 1:0};

    display:${({ enabled }) => enabled? 'flex':'hidden'};

  }
  // &:hover.selected .dayWrapper > ${EditIcon} {
  //   opacity: 1;
  //   display:flex;

  // }
  .dayWrapper{
    width:100%;
    justify-content:flex-start;
    text-align:left;
    margin-left:5px;
    margin-top:5px;
    box-sizing:border-box;
    position:absolute;
    top:0px;
    left:0px;
  }
  .timeWrapper{
    opacity:.7;
    font-weight:normal!important;
    display:flex;
    justify-content:flex-end;
    font-size:12px !important;
    flex-direction:column;
    height:100%;
    width:100%;
  }



  cursor:${({ enabled }) => enabled? 'pointer':null};
  height: 14.28%; // 100% divided by 7 (for 7 rows)
  padding: 5px;
  margin: 5px; // Add margin to space out the days
  transition: background-color 0.3s;
  background-color: #f5f5f5;
  border-radius: 6px;




  &.disabled {
    color: #777; // Darker text color for non-current month dates
    background-color: #e0e0e0; // Darker background color for non-current month dates
  }

  &.disabled.selected {
    background-color: #0259b8; // Darker selected background for non-current month dates
    color: #fff;
  }
  &.today {
    font-weight: bold;
    color:#009AFF;
    border:1px solid #009AFF;
  }

  &.selected {

    background-color: #007AFF;
    color: #fff;
  }
  ${({ animateDay }) => {
    if (animateDay) {
      return css`
      z-index:0;

      `;
    }
  }}


  &.animate {
    pointer-events:none;
    animation: ${scaleAnimation} 0.5s forwards !important;
    z-index:999;
  }

`;
export const RowContainer = styled.div`
 height:100%;
 margin-top:10px;
 width:8px;
 opacity:1;

 display:flex;
 flex-direction:column;
 justify-content:space-around;

 width: 25px;

 @media (max-width: ${sm}px) {
  display:none;

}
`;
export const TableContainer = styled.div`
  position: relative; // this will be the anchor for absolutely positioned children
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:row;
`;
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  height:10%;
  width:100%;

  font-size: 12px;
  position: relative; // to position the CloseButton absolutely within it
`;
export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #888;
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;
export const StyledDropdown = styled.select`
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none; // to remove the focus outline for better aesthetics

  &:hover {
    background-color: #f0f0f0; // subtle hover effect
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 35px;
  height: 35px;

  border-radius: 50%; // makes it circular
  background-color: #eee;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;
export const TodayButton = styled.button`
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #007BFF;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  ${({ theme }) => theme.selectable};


`;
// const TodayButton = styled.div`
//   background-color: #007BFF; // You can adjust this as per your design preference
//   color: #fff;
//   font-size: 8px; // Adjust for your desired size
//   padding: 2px 4px;
//   border-radius: 3px;
//   margin-bottom: 5px; // Space between the banner and the date
//   text-align: center;
//   width: 100%;
// `;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const StyledDayDetail = styled.div`
  top: 0;
  left: 0;
  opacity: 0; // Start with an opacity of 0
  animation: ${fadeIn} 0.2s forwards; // Use the fade-in animation
  position: absolute;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;

  width: 100%;
  ${({ theme }) => theme.panea3};
  z-index: 999;
`;
export const Counter = styled.span`
  margin-left: 10px;
  background-color: #007AFF; // color of selected background
  padding: 5px 10px;
  display:flex;
  font-weight:bold;
  align-items:center;
  ${({ theme }) => theme.selectable};
  justify-content:center;
  border-radius: 5px;
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  color:white;

  &:hover {
    background-color: ${({ theme }) => theme.dangerColor};; // color of selected background
    > svg{
            display:flex;
    }

  }

  & > svg { // Targeting the FaTimes icon (or any direct child SVG of Counter)
    display:none;
    transition: display 0.5s ease-in-out; // Smooth transition for the opacity

}


`;
