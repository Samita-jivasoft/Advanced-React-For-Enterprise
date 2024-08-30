import React from 'react';
import { action } from '@storybook/addon-actions'
import { Code } from './Code'

export const CodeBasic = () => (
	<Code>
		$ npm start
	</Code>
)

export default {
	component: Code,
	title: 'Widgets',
}