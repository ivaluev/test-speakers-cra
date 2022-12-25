import SpeakerCircle from './speaker-circle'

export default {
  title: 'Speaker-Circle',
  component: SpeakerCircle,
}

export const Normal = () => <SpeakerCircle isSelected={false} />
export const Selected = () => <SpeakerCircle isSelected />
