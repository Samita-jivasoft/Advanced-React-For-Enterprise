import React, { useState } from "react";
import "./Styles/Tooltip.css";

const Tooltip = (props) => {
  const {delay,direction,content,children, isMenu} = props;
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {

    if(!isMenu){timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);}
  };

  const hideTip = () => {
    if(!isMenu){clearInterval(timeout);
    setActive(false);}
  };

  return (
    content?<div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onClick={()=>{
        setActive(!active)
      }}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || "top"}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>:children
  );
};

export default Tooltip;
