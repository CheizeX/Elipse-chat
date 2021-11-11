import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import { ReviewChart } from './ReviewChart';

export default {
  title: 'ReviewChart',
  component: ReviewChart,
} as Meta;

storiesOf('Ailalia/Organisms/Dashboard/ReviewChart', module).add(
  'Default',
  () => {
    return <ReviewChart />;
  },
);
