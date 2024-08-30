import React, { useState } from "react";

export function Input({
	type,
	accept,
	alt,
	autocomplete,
	autofocus,
	checked,
	dirname,
	disabled,
	form,
	formaction,
	formenctype,
	formmethod,
	formnovalidate,
	formtarget,
	height,
	list,
	max,
	maxlength,
	min,
	minlength,
	multiple,
	name,
	pattern,
	placeholder,
	readonly,
	required,
	size,
	src,
	step,
	// value,
	width,
	alertMessage
}) {
	const [value, setValue] = useState("");

	return (
		<>
			<input
				type={type}
				accept={accept}
				alt={alt}
				autocomplete={autocomplete}
				autofocus={autofocus}
				checked={checked}
				dirname={dirname}
				disabled={disabled}
				form={form}
				formaction={formaction}
				formenctype={formenctype}
				formmethod={formmethod}
				formnovalidate={formnovalidate}
				formtarget={formtarget}
				height={height}
				list={list}
				max={max}
				maxlength={maxlength}
				min={min}
				minlength={minlength}
				multiple={multiple}
				name={name}
				pattern={pattern}
				placeholder={placeholder}
				readonly={readonly}
				required={required}
				size={size}
				src={src}
				step={step}
				width={width}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			{/* <small>{alertMessage}</small> */}
			{/* <p>{value}</p> */}
		</>
	);
}
