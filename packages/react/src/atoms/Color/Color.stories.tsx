import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Color from './Color';
import { Spacing } from '@advanced-react-for-enterprise/foundation';

// css
import '@advanced-react-for-enterprise/scss/lib/Utilities.css';

//meta: type definition for the metadata of the Storybook story. It describes the component, its title, and its controls.
const meta: Meta<typeof Color> = {
  title: 'Atoms|Color',
  component: Color,

  //argTypes: defines the configurable props for the story
  argTypes: {
    hexCode: {
      control: 'color', 
      defaultValue: 'pink',
    
    },
    width: {
      control: {
        type: 'select',
        options: Object.keys(Spacing),
      },
      defaultValue: 'xxl',
    },
    height: {
      control: {
        type: 'select',
        options: Object.keys(Spacing),
      },
      defaultValue: 'xxl',
    },
  },
};

export default meta;

//storyFn: used to define a story, which is a function that returns the component with specific arguments (props) in Storybook.
export const ColorDemo: StoryFn<typeof Color> = (args) => <Color {...args} />;
//ColorDemo: This is a named export for the actual story. 
//This is what gets rendered in the Storybook UI as a demonstration of the Color component.
