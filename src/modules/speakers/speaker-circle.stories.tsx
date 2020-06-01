import React from 'react';
import SpeakerCicle from './speaker-circle';

export default {
  title: 'Speaker-Circle',
  component: SpeakerCicle
};

export const Normal = () => <SpeakerCicle isSelected={false} />;
export const Selected = () => <SpeakerCicle isSelected />;