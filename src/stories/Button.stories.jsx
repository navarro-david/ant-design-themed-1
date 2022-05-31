import React from 'react';
import {
  Button,
} from 'antd';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}> Ant Button </Button>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};


