import React from 'react';
import { Speaker } from '../../data/speakers/types';
import { ModalHeader, ModalBody, ModalContainer } from '../../packages/modal';
import SpeakerTrack from './speaker-track';

export interface SpeakerInfoProps {
  speaker: Speaker;
}

export default function SpeakerInfo({
  speaker
}: SpeakerInfoProps) {
  return (
    <ModalContainer>
      <ModalHeader>Speaker {speaker.id} Tracks</ModalHeader>
      <ModalBody>
        {speaker.tracks.map(t => <SpeakerTrack key={t.id} track={t} />)}
      </ModalBody>
    </ModalContainer>
  );
}

