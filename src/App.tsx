import React, { useMemo, useState } from 'react';
import { Download, Clock, BarChart3 } from 'lucide-react';
import { LogTimelineZoom } from './components/LogTimelineZoom';
import { CivilizationComparator } from './components/CivilizationComparator';
import {
  CIVILIZATION_PRESETS,
  runCivilizationSimulation,
  type SimulationParams,
} from './data/civilizationData';
import { exportAtlasCSV, exportAtlasJSON, exportAtlasMarkdown } from './utils/exportData';

type ActiveView = 'timeline' | 'comparator';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('timeline');
  const [simParams, setSimParams] = useState<SimulationParams>({
    energyKcalPerCapita: CIVILIZATION_PRESETS[2].energyKcalPerCapita, // Bronze Age River State default
    institutionalOpenness: CIVILIZATION_PRESETS[2].institutionalOpenness,
    resourceShock: CIVILIZATION_PRESETS[2].resourceShockExposure,
    supplyCoupling: CIVILIZATION_PRESETS[2].supplyCouplingFragility,
  });

  const simulation = useMemo(() => runCivilizationSimulation(simParams), [simParams]);

  return (
    <div className="atlas-shell">
      <header className="atlas-header">
        <div>
          <div className="atlas-kicker">Mohammed KM &middot; Interactive Research Atlas</div>
          <h1 className="atlas-title">Big History &amp; Civilizations Atlas</h1>
          <p className="atlas-subtitle">
            Logarithmic zoom across 13.8 billion years of cosmic, biological, and scientific history, paired with a
            civilizational energy capture and resilience simulator.
          </p>
        </div>

        <div className="header-actions" aria-label="Export atlas data">
          <button
            type="button"
            className="btn"
            onClick={() => exportAtlasCSV(simParams, simulation)}
          >
            <Download size={15} /> CSV
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => exportAtlasJSON(simParams, simulation)}
          >
            <Download size={15} /> JSON
          </button>
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => exportAtlasMarkdown(simParams, simulation)}
          >
            <Download size={15} /> Report (.md)
          </button>
        </div>
      </header>

      <nav className="atlas-tabs" aria-label="Primary atlas modules">
        <button
          type="button"
          className={`tab-btn ${activeView === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveView('timeline')}
        >
          <div>
            <span className="tab-btn-title">1. 13.8-Gya Logarithmic Timeline Zoom</span>
            <span className="tab-btn-meta">
              Cosmic &rarr; Earth &rarr; Biological &rarr; Agricultural &rarr; Industrial &rarr; Digital + Science Track
            </span>
          </div>
          <Clock size={20} color={activeView === 'timeline' ? 'var(--accent)' : 'var(--ink-secondary)'} />
        </button>

        <button
          type="button"
          className={`tab-btn ${activeView === 'comparator' ? 'active' : ''}`}
          onClick={() => setActiveView('comparator')}
        >
          <div>
            <span className="tab-btn-title">2. Energy Capture &amp; Resilience Comparator</span>
            <span className="tab-btn-meta">
              kcal/day/capita, population scaling, institutional openness vs. collapse drivers
            </span>
          </div>
          <BarChart3 size={20} color={activeView === 'comparator' ? 'var(--accent)' : 'var(--ink-secondary)'} />
        </button>
      </nav>

      <main>
        {activeView === 'timeline' ? (
          <LogTimelineZoom />
        ) : (
          <CivilizationComparator
            params={simParams}
            onChangeParams={setSimParams}
            simulation={simulation}
          />
        )}
      </main>

      <footer className="atlas-footer">
        <div>
          <strong>Big History &amp; Civilizations Atlas</strong> &mdash; by Mohammed KM. 100% client-side, zero external
          runtime APIs.
        </div>
        <div className="mono" style={{ fontSize: '12px' }}>
          Grounded in Big History, Philosophy &amp; Geopolitics, and History of Science dossiers
        </div>
      </footer>
    </div>
  );
};

export default App;
