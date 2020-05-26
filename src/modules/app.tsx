import React from 'react';
import './app.css';
import AppSpeakers from './speakers/speakers';
import TrackCards from './tracks/track-cards';
import { ModalProvider } from './common/modal/modal';

export default function App() {
  return (
    <ModalProvider>
      <aside className="sdsd">
        <TrackCards />
      </aside>
      <main>
        <AppSpeakers />
      </main>
    </ModalProvider>
  );
}