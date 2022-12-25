import {ModalBody, ModalContainer, ModalHeader} from '../../common/modal'
import {useAppSelector} from '../../store'
import SpeakerTrack from './speaker-track'

export interface SpeakerInfoProps {
  speakerId: number
}

export default function SpeakerInfo({speakerId}: SpeakerInfoProps) {
  const speakerTracks = useAppSelector(
    state => state.speakers.speakers.find(s => s.id === speakerId)!.tracks
  )

  return (
    <ModalContainer>
      <ModalHeader>Speaker {speakerId} Tracks</ModalHeader>
      <ModalBody>
        {speakerTracks.map(t => (
          <SpeakerTrack key={t.id} speakerId={speakerId} trackId={t.id} />
        ))}
      </ModalBody>
    </ModalContainer>
  )
}

// export interface SpeakerInfoProps {
//   speakerId: number;
// }

// function SpeakerInfo({
//   speakerId,
//   speakerTracks
// }: SpeakerInfoProps & { speakerTracks: Track[] }) {

//   return (
//     <ModalContainer>
//       <ModalHeader>Speaker {speakerId} Tracks</ModalHeader>
//       <ModalBody>
//         {speakerTracks.map(t => <SpeakerTrack
//           key={t.id}
//           speakerId={speakerId}
//           trackId={t.id} />)}
//       </ModalBody>
//     </ModalContainer>
//   );
// }

// const mapStateToProps = (state: RootState, ownProps: SpeakerInfoProps) => ({
//   speakerTracks: state.speakers
//     .speakers.find(s => s.id === ownProps.speakerId)!
//     .tracks
// });

// export default connect(mapStateToProps)(SpeakerInfo);
