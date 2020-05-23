import React from 'react';

type Props = {
  trackId: number,
  vol: number
}

export default function TrackVolumeSlider({
  trackId,
  vol
}: Props) {
  return (
    <div>TrackVolumeSlider pure component</div>
  );
}