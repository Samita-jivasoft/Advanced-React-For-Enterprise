import React, { useState } from 'react';

const Select = ({ options = [], label = 'Please select an option ...', onOptionSelected: handler }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    return React.createElement("div", { className: 'dse-select' },
        React.createElement("button", { className: 'dse-select__label', onClick: () => onLabelClick() },
            React.createElement("span", null, label),
            React.createElement("svg", { width: '1rem', height: '1rem', fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement("path", { d: "M19 9l-7 7-7-7" }))),
        isOpen ? (React.createElement("ul", { className: 'dse-select__overlay' }, options.map((option, optionIndex) => {
            return React.createElement("li", { onClick: () => onOptionSelected(option, optionIndex), key: option.value }, option.label);
        }))) : null);
};

export { Select as default };
//# sourceMappingURL=Select.js.map
