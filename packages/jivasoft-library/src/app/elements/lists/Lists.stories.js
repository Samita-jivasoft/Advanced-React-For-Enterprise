import React from 'react';
import { action } from '@storybook/addon-actions'
import { UL } from './UL'
import { ULCircles } from './ULCircles'
import { OL } from './OL'
import { DL } from './DL'

export const ULBasic = () => (
	<UL>
		<li>One</li>
		<li>Two</li>
	</UL>
)

export const ULBasicCircles = () => (
	<ULCircles>
		<li>One</li>
		<li>Two</li>
	</ULCircles>
)

export const OLBasic = () => (
	<OL>
		<li>One</li>
		<li>Two</li>
	</OL>
)

export const DLBasic = () => (
	<DL>
		<dt>Beast of Bodmin</dt>
		<dd>A large feline inhabiting Bodmin Moor.</dd>
		<dt>Morgawr</dt>
		<dd>A sea serpent.</dd>
		<dt>Owlman</dt>
		<dd>A giant owl-like creature.</dd>
	</DL>
)

export default {
	component: UL,
	title: 'Elements',
}