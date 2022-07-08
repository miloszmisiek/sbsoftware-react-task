import React, { useState } from 'react';
import './Accordion.css';
// Komponent Accodrion uzyty do budowy harmonijki
const Accordion = ({ title, content, count, activeState }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-title"
        activeState={activeState}
        onClick={(event) => setIsActive(!isActive)}>
        <div>
          {title}
          <span className='text-mantee-2'>({count})</span>
        </div>
        <div style={{ color: isActive ? 'green' : 'black' }}>
          {isActive ? '-' : '+'}
        </div>
      </div>
      {isActive &&
        <div className="accordion-content">
          {content}
        </div>}
    </div >
  );
};

export default Accordion;