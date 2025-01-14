// src/components/UseCaseChecks.tsx
import React from 'react';
import { CheckListItem } from '../checkList';

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


interface UseCaseChecksProps {
  data: {
    relevantCriteria: WCAGCriterion[];
    checks?: CheckListItem[];
  };
}

const UseCaseChecks: React.FC<UseCaseChecksProps> = ({ data }) => {
  return (
    <>
    {data.checks && data.checks.length > 0 && (
        <div className="required-checks">
            <h4>Required Checks:</h4>
            <ol className="checks-list">
            {data.checks.map((check) => (
                <li key={check.taskSummary} className="check-item">
                    <div className="check-description">{check.taskSummary}</div>
                    <div className="check-help-text">
                        <small dangerouslySetInnerHTML={{__html: check.adviceText}}></small>
                    </div>
                    <div>
                        <a href={check.criteriaUrl} target="_blank" rel="noopener noreferrer">
                            Read more about {check.criteriaText} ({check.criteriaId})
                        </a>
                    </div>
                </li>
            ))}
            </ol>
        </div>
    )}
    {data.relevantCriteria.map(criterion => (
    <details key={criterion.ref_id} className="criterion-accordion">
      <summary>
        {criterion.ref_id} - {criterion.title} (Level {criterion.level})
      </summary>
      <div className="criterion-content">
      <p>{criterion.description}</p>
        <a href={criterion.url} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
        {criterion.special_cases && (
          <div className="special-cases">
            <h4>Special Cases:</h4>
            <ul>
              {criterion.special_cases.map((specialCase, index) => (
                <li key={index}>
                  <strong>{specialCase.title}</strong>
                  {specialCase.description && `: ${specialCase.description}`}
                </li>
              ))}
            </ul>
          </div>
        )}
        {criterion.notes && (
          <div className="notes">
            <h4>Notes:</h4>
            <ul>
              {criterion.notes.map((note, index) => (
                <li key={index}>{note.content}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </details>
    ))}
    </>
  );
};

export default UseCaseChecks;