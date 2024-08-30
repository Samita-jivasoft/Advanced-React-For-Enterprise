import React from "react";
import { action } from "@storybook/addon-actions";
import { Table } from "./Table";
import {
	Caption,
	Colgroup,
	Col,
	THead,
	TBody,
	TFoot,
	TR,
	TD,
	TH
} from "./tags";

export const TableBasic = () => (
	<Table>
		<THead>
			<TR>
				<TH>Title one</TH>
				<TH>Title two</TH>
			</TR>
		</THead>
		<TBody>
			<TR>
				<TD>one</TD>
				<TD>two</TD>
			</TR>
			<TR>
				<TD>one</TD>
				<TD>two</TD>
			</TR>
			<TR>
				<TD>one</TD>
				<TD>two</TD>
			</TR>
			<TR>
				<TD>one</TD>
				<TD>two</TD>
			</TR>
		</TBody>
	</Table>
);

export default {
	component: Table,
	title: "Elements"
};
