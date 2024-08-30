import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';
import { StyledContainerProfile, StyledLabel } from './styles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const IconProfile = ({ expanded, label, extendLabel,children }) => {
 
  const [showChildren,setShowChildren] = useState(false)

  useEffect(()=>{
    if(!expanded){
      setShowChildren(false)

    }
  },[expanded])
  const Profile = ({ label }) => {
    // Define the size and colors
    const svgWidth = 40;
    const svgHeight = 40;
    const circleRadius = 18; // Adjust as needed
    const seafoamColor = '#00A99D'; // Seafoam color
    const borderColor = '#FFFFFF'; // White border color
    return (
      <svg width={svgWidth} height={svgHeight} xmlns="http://www.w3.org/2000/svg">
        {/* Create a circle with seafoam color and white border */}
        <circle cx={svgWidth / 2} cy={svgHeight / 2} r={circleRadius} fill={seafoamColor} stroke={borderColor} strokeWidth="2" />
  
        {/* Create text for the label */}
        <text x={svgWidth / 2} y={svgHeight / 2 + 6} textAnchor="middle" fill="#FFFFFF">
          {label}
        </text>
      </svg>
    );
  };
  return (
    <StyledContainerProfile
    onClick={()=>{
      setShowChildren(!showChildren)
      
    }}
    background={extendLabel && 'rgba(255, 255, 255, 0.05)'}
    expanded={expanded}
    
    >
      {!showChildren && <Profile label={label}/>}
      {extendLabel && <StyledLabel title={extendLabel}>{extendLabel}</StyledLabel>}
      {showChildren && children}
      {extendLabel && (showChildren?<FaChevronUp style={{color:'white'}} />: <FaChevronDown style={{color:'white'}}/>)}

    </StyledContainerProfile>
  );
};



export default IconProfile;
