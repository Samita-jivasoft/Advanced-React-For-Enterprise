import React from 'react';
import { action } from '@storybook/addon-actions'
import { Blockquote } from './Blockquote'

export const BlockquoteBasic = () => (
	<Blockquote>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum praesentium obcaecati neque minima quaerat deserunt consectetur repudiandae perferendis cumque.
	</Blockquote>
)

export default {
	component: Blockquote,
	title: 'Elements',
}