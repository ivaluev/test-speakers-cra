import React from 'react';
import './app.css';
import AppSpeakers from './speakers/speakers';
import AppTracks from './tracks/tracks';

export default function App() {
  return (
    <>
      <aside>
        <AppTracks />
      </aside>
      <main className="drafting-lines--dotted">
        <AppSpeakers />
      </main>
    </>
  );
}