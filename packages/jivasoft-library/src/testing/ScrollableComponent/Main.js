import React from "react";
import { DynamicFlexHeader } from "components";
import { useScroll } from "app/data/context/ScrollContext";
import { placeholderText } from "./placeholderText";
import { DynamicIcon } from "components";

export const ScrollableComponent = (props) => {
  const { scrollState, scrollDispatch } = useScroll();
  //console.log("scrollState from ScrollableComponent ", scrollState)

  function onScroll(e) {
    console.log("Inside scroll");
    const currentScrollY = e.currentTarget ? e.currentTarget.scrollTop : -1;
    if (currentScrollY !== -1) {
      scrollDispatch({ type: "SET_SCROLL_Y", payload: currentScrollY });
    }
  }

  return (
    <>
      <div  onScroll={onScroll} style={{ overflowY: "scroll" }}>
       <DynamicIcon type={'form'}></DynamicIcon>
       {placeholderText}
      </div>
    </>
  );
};
