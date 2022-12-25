import styled from '@emotion/styled'
import {ReactComponent as CloseIcon} from './button-close.svg'

interface Props {
  onClick: () => void
  className: string
}

export default function ButtonClose({onClick, className}: Props) {
  return (
    <CloseIconWrapper onClick={onClick} className={className}>
      <CloseIconStyled />
    </CloseIconWrapper>
  )
}

const CloseIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

const CloseIconStyled = styled(CloseIcon)`
  display: block;
  width: 100%;
  height: 100%;
`
