// import type {Meta, StoryObj} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import React, {useState} from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
};

// type Story = StoryObj<typeof Accordion>;
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'Hello',
//         collapsed: true,
//     },
// }

const onToggleHandler = action('onToggle')

export const FullFeatured = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Accordion
      titleValue="Full Featured Accordion"
      collapsed={collapsed}
      onToggle={() => {
        setCollapsed((current) => !current)
      }}
    />
  )
}

export const Collapsed = () => {
  return (
    <Accordion
      titleValue="Collapsed Accordion"
      collapsed={true}
      onToggle={onToggleHandler}
    />
  )
}

export const Expanded = () => {
  return (
    <Accordion
      titleValue="Expanded Accordion"
      collapsed={false}
      onToggle={() => {
      }}
    />
  )
}