import {action} from '@storybook/addon-actions'
import ButtonCStop from './button-c-stop'

export default {
  title: 'Button-C-Stop',
  component: ButtonCStop,
}

export const Normal = () => <ButtonCStop onClick={action('clicked')} />
