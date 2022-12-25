import styled from '@emotion/styled'
import {action} from '@storybook/addon-actions'
import ButtonCMenu from './button-c-menu'

export default {
  title: 'Button-C-Menu',
  component: ButtonCMenu,
}

const ButtonCMenuPositioned = styled(ButtonCMenu)`
  position: absolute;
  top: 30px;
  left: 30px;
`

export const Normal = () => <ButtonCMenuPositioned onClick={action('menu clicked')} />
