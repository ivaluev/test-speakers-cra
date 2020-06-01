import React from 'react';
import { addDecorator } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../src/index.css';

addDecorator(storyFn => (
  <div style={{ 
    padding: '3em',
    width: '100%',
    height: '100%',
    position: 'relative' 
  }}>
    {storyFn()}
  </div>
  )
);
