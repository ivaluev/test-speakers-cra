import {SpeakerCounter} from './speaker-counter'

export default {
  title: 'Speaker-Counter',
  component: SpeakerCounter,
}

export const Normal = () => <SpeakerCounter isSelected={false}>7</SpeakerCounter>
export const Selected = () => <SpeakerCounter isSelected={true}>7</SpeakerCounter>
