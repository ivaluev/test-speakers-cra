import React from 'react';
import './app.css';
import AppSpeakers from './speakers/speakers';
import TrackCards from './tracks/track-cards';

export default function App() {
  return (
    <>
      <aside className="sdsd">
        <TrackCards />
      </aside>
      <main>
        <AppSpeakers />
      </main>
    </>
  );
}