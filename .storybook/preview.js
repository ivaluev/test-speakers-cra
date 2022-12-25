import '!style-loader!css-loader!sass-loader!../src/index.css'
import {addDecorator} from '@storybook/react'

addDecorator(storyFn => (
  <div
    style={{
      padding: '3em',
      width: '100%',
      height: '100%',
      position: 'relative',
    }}
  >
    {storyFn()}
  </div>
))
