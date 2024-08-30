// *********************************************
// FIELD HELPERS
// *********************************************
export const placeholder = (element) => {
  if (element.placeholder) {
    return element.placeholder;
  }
  if (element.masktype === "email") return "example@email.com";
  if (element.masktype === "phone") return "(XXX) XXX - XXXX";
  if (element.masktype === "money") return "$0.00";
  if (element.datatype === "boolean") return "true or false";
  if (element.masktype === "signature") return "Please type your signature";
  else
    return `Enter ${
      element?.label
        ? element?.label?.length < 30
          ? element?.label
          : "Field"
        : "Field"
    }`;
};
export function getInputType(datatype, masktype, showPassword) {
  return datatype === "float" || datatype === "int"
    ? "number"
    : masktype?.toLowerCase() == "password"
    ? showPassword
      ? "text"
      : "password"
    : datatype;
}

export function sanitizeHTML(value) {
  //console.log("Dirty value: ", value)
  const whitelistedTags = [
    "div",
    "p",
    "a",
    "br",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "img"
    
  ];
  const whitelistedAttributes = {
    a: ['href'],
    img: ['src'],
    '*': ['style'] 
  };

  const parser = new DOMParser();
  const doc = parser.parseFromString(value, "text/html");

  function sanitizeNode(node) {
    const nodeName = node.nodeName.toLowerCase();
    if (node.nodeName === "#text") {
      // Text node
      return;
    }
    if (!whitelistedTags.includes(nodeName)) {
      //Not a whitelisted tag then Remove
      node.parentNode.removeChild(node); 
      return;
    }

    // Clean attributes for example href for <a> tag extra validation
    const allowedAttributes = whitelistedAttributes[nodeName] || whitelistedAttributes['*'] || [];
    for (let i = node.attributes.length - 1; i >= 0; i--) {
      const attrName = node.attributes[i].name;
      if (!allowedAttributes.includes(attrName)) {
        node.removeAttribute(attrName);
      }
    }

    // Recur through child nodes
    for (let i = 0; i < node.childNodes.length; i++) {
      sanitizeNode(node.childNodes[i]);
    }
  }
  for (let i = 0; i < doc.body.childNodes.length; i++) {
    sanitizeNode(doc.body.childNodes[i]);
  }
  return doc.body.innerHTML;
}
