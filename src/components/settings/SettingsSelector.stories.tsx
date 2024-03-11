import { Meta, StoryFn } from '@storybook/react';

import SettingsSelector, { SettingsSelectorProps } from './SettingsSelector';

// Settings
export default {
  title: 'Modal/SettingsSelector',
  component: SettingsSelector,
  parameters: {
    layout: 'centered',
  },
} as Meta;

// Main Story
const Template: StoryFn<SettingsSelectorProps> = (args) => (
  <SettingsSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {};
