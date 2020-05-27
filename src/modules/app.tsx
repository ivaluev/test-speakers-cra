import React from 'react';
import './app.css';
import AppSpeakers from './speakers/speakers';
import TrackCards from './tracks/track-cards';
import { ModalProvider } from '../packages/modal/modal';

export default function App() {
  return (
    <ModalProvider>
      <aside>
        <TrackCards />
      </aside>
      <main>
        <AppSpeakers />
      </main>
    </ModalProvider>
  );
}