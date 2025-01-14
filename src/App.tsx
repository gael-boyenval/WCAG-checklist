import React, { useState, useEffect } from 'react';
import './App.css';
import { commonElements, ElementSpecificity, specificities } from './elementDefinitions';
import patterns from './Patterns';
import UseCaseChecks from './components/UseCaseChecks';
import { CheckListItem } from './checkList';
import { flatResources } from './resources';

interface WCAGCriterion {
  ref_id: string;
  title: string;
  description: string;
  level: string;
  url: string;
  special_cases: Array<{
    type: string;
    title: string;
    description?: string;
  }> | null;
  notes: Array<{ content: string }> | null;
}

interface Guideline {
  ref_id: string;
  title: string;
  description: string;
  success_criteria: WCAGCriterion[];
}

interface Principle {
  ref_id: string;
  title: string;
  description: string;
  guidelines: Guideline[];
}

const App: React.FC = () => {
  const [wcagData, setWcagData] = useState<Principle[]>([]);
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [selectedSpecificities, setSelectedSpecificities] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(['A', 'AA']);
  const [selectedPatterns, setSelectedPatterns] = useState<string[]>([]);
  const [showTutorials, setShowTutorials] = useState<string | null>(null);
  const [showTechniques, setShowTechniques] = useState<string | null>(null);

  useEffect(() => {
    fetch('/wcag.json')
      .then(response => response.json())
      .then(data => setWcagData(data));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showTutorials || showTechniques) {
        const target = event.target as HTMLElement;
        if (!target.closest('.tutorials') && !target.closest('.wcag-techniques')) {
          setShowTutorials(null);
          setShowTechniques(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showTutorials, showTechniques]);

  const handleElementChange = (elementId: string) => {
    const newSelectedElements = selectedElements.includes(elementId)
      ? selectedElements.filter(id => id !== elementId)
      : [...selectedElements, elementId];
    setSelectedElements(newSelectedElements);
  };

  const handleSpecificityChange = (specificityId: string) => {
    const newSelectedSpecificities = selectedSpecificities.includes(specificityId)
      ? selectedSpecificities.filter(id => id !== specificityId)
      : [...selectedSpecificities, specificityId];
    setSelectedSpecificities(newSelectedSpecificities);
  };

  const handleLevelChange = (level: string) => {
    const newSelectedLevels = selectedLevels.includes(level)
      ? selectedLevels.filter(l => l !== level)
      : [...selectedLevels, level];
    setSelectedLevels(newSelectedLevels);
  };

  const handlePatternChange = (patternTitle: string) => {
    setSelectedPatterns(prev => 
      prev.includes(patternTitle)
        ? prev.filter(title => title !== patternTitle)
        : [...prev, patternTitle]
    );
  };

  const getApplicableCriteria = (specificity: ElementSpecificity, levels: string[]): {
    relevantCriteria: WCAGCriterion[],
    checks: CheckListItem[]
  } => {
    const relevantCriteria: WCAGCriterion[] = [];
    wcagData.forEach((principle: Principle) => {
      principle.guidelines.forEach(guideline => {
        guideline.success_criteria.forEach(criterion => {
          if (levels.includes(criterion.level) && specificity.wcagCriteria.includes(criterion.ref_id)) {
            relevantCriteria.push(criterion);
          }
        });
      });
    });
    return {
      relevantCriteria,
      checks: specificity.checks || []
    };
  };

  return (
    <div className="App">
      <h1>User Story A11y Checklist</h1>
      
      <section className="level-selector">
        <h2>WCAG Levels</h2>
        <div className="level-options">
          {['A', 'AA', 'AAA'].map(level => (
            <label key={level} className="level-option">
              <input
                type="checkbox"
                checked={selectedLevels.includes(level)}
                onChange={() => handleLevelChange(level)}
              />
              Level {level}
            </label>
          ))}
        </div>
      </section>

      <section className="elements-section">
        <h2>Does your user story contain...</h2>
        {commonElements.map(element => (
          <div key={element.id} className="element-group">
            <div className="element-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedElements.includes(element.id)}
                  onChange={() => handleElementChange(element.id)}
                />
                {element.label}
              </label>
              {selectedElements.includes(element.id) && (
              <div className="tutorials">
                <button 
                  className="tutorials-trigger"
                  onClick={() => setShowTutorials(showTutorials === element.id ? null : element.id)}
                >
                  Resources & Techniques
                </button>
                <div className={`tutorials-content ${showTutorials === element.id ? 'show' : ''}`}>
                  {element.techniquesAndTutorials && (
                    <>
                      <h3>Tutorials and Resources</h3>
                      <ul>
                        {element.techniquesAndTutorials.map(tutorial => (
                          <li key={tutorial.title}>
                            <a 
                              href={tutorial.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {tutorial.title} →
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {element.WCAGTechniques && (
                    <>
                      <h3>WCAG Techniques</h3>
                      <ul>
                        {element.WCAGTechniques.map(techniqueId => (
                          <li key={techniqueId}>
                            <a 
                              href={flatResources[techniqueId]?.url} 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {techniqueId}: {flatResources[techniqueId]?.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            )}
            </div>
            {selectedElements.includes(element.id) && 
             specificities[element.id as keyof typeof specificities] && (
              <div className="specificities-list">
                {specificities[element.id as keyof typeof specificities].map(specificity => (
                  <div key={specificity.id} className="specificity-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedSpecificities.includes(specificity.id)}
                        onChange={() => handleSpecificityChange(specificity.id)}
                      />
                      {specificity.label}
                    </label>
                    
                    {selectedSpecificities.includes(specificity.id) && (
                      <div className="criteria-under-specificity">
                          <UseCaseChecks 
                            data={getApplicableCriteria(specificity, selectedLevels)}
                          />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="patterns-section">
        <h2>Does your user story involve one of these patterns ?</h2>
        <p>Select the patterns that apply to your user story, then check the documentation to see if you're doing it right.</p>
        
        {selectedPatterns.length > 0 && (
          <div className="selected-patterns">
            <h3>Documentation to check:</h3>
            <ul>
              {selectedPatterns.map(patternName => {
                const pattern = patterns.find(p => p.name === patternName);
                return pattern && (
                  <li key={pattern.name}>
                    <a href={pattern.url} target="_blank" rel="noopener noreferrer">
                      {pattern.name} Documentation →
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="patterns-grid">
          {patterns.map(pattern => (
            <div 
              key={pattern.name} 
              className={`pattern-tile ${selectedPatterns.includes(pattern.name) ? 'selected' : ''}`}
              onClick={() => handlePatternChange(pattern.name)}
            >
              <div className="pattern-tile-content">
                <img src={pattern.iconUrl} alt="" className="pattern-icon" />
                <h3>{pattern.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;