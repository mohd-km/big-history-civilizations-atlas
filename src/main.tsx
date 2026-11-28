import React from 'react';
import ReactDOM from 'react-dom/client';
import './shell/shell.css';
import { Shell, type ShellConfig } from './shell/Shell';
import DefaultTab from './modules/history/Module';

const config: ShellConfig = {
  pillar: 'worldview & physics',
  title: "Big History & Civilizations Atlas",
  subtitle:
    "13.8 billion years, from the Big Bang to today, on one zoomable screen, and a simple model of how energy, openness and shocks decide whether a civilisation grows or collapses.",
  footer: "Big History & Civilizations Atlas · runs entirely in your browser · Mohammed KM",
  tabs: [
    {
      id: 'history', label: 'Big history', sub: 'Big Bang to today on one screen', scope: 'history',
      provenance: [
        { kind: 'real', label: 'published dates and historical energy-use estimates' },
        { kind: 'model', label: 'resilience simulation' },
      ],
      story: {
        problem:
          'How do you show the Big Bang, the dinosaurs and the internet on one line when they are billions of years apart? On an ordinary timeline, all of recorded history would be thinner than a hair.',
        how:
          'The timeline uses a log scale: each step on the axis is 10 times further back in time, so billions of years and the last century fit on one screen. Below it, a simple model shows how energy per person, openness and shocks decide whether a society grows or collapses.',
        tryThis:
          'Press the "Industrial" button to zoom into the industrial era (1750 to 1950). On a straight timeline those 200 years would be 0.0000014% of the width; on this axis they already take up over 5% of the full view.',
        terms: [
          ['Gya / Mya / kya', 'billion / million / thousand years ago'],
          ['10^6 y', 'a million years ago; each tick is 10 times further back than the one to its right'],
          ['Energy capture', 'food plus fuel energy used per person per day, in kilocalories (kcal)'],
          ['Resilience score', 'a 0 to 100 estimate from this model of how well a society absorbs shocks; higher is sturdier'],
        ],
      },
      component: DefaultTab,
      load: () => import('./modules/history/Module'),
    },
  ],
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Shell config={config} />
  </React.StrictMode>,
);
