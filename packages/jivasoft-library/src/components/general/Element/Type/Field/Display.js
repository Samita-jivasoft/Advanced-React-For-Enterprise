import { useElement } from "../../data/ElementContext";
import { FieldDisplayContainerStyled } from "./styles";
import { sanitizeHTML } from "./helpers";
import React from "react";

export const ElementTypeFieldDisplay = () => {
  const [elementState] = useElement();
  const { value, canedit, masktype } = elementState;

  function DisplayTextArea({ value }) {
    const segments = value.split("char(10)").map((segment, index, array) => (
      <div key={index}>
        {segment}
        {index !== array.length - 1 && <br />}
      </div>
    ));
    return <div>{segments}</div>;
  }

  const renderContent = () => {
   
    switch (true) {
      case value.length === 0 && canedit === 1:
        return "This field is empty";
      case value.length === 0 && canedit !== 1:
        return "";
      case masktype?.toLowerCase()?.includes("textarea"):
        return <DisplayTextArea value={value} />;
      case masktype?.toLowerCase()?.includes("password"):
        return value.replace(/./g, "*");
      case masktype?.toLowerCase()?.includes("html"):
        const sanitizedValue = sanitizeHTML(value);
        //console.log("Sanitized HTML: \n", sanitizedValue);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedValue }} />;
      default:
        return value;
    }
  };
 

  return (
    <FieldDisplayContainerStyled canedit={canedit} value={value}>
      {renderContent()}
    </FieldDisplayContainerStyled>
  );
};
