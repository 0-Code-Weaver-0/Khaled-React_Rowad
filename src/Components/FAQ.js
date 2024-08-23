import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header bg-primary text-white text-center">
          <h4>Frequently Asked Questions</h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <button className="btn btn-light" onClick={toggle}>
              {isOpen ? '-' : '+'}
            </button>
            <strong className="ms-2">Is this a good product?</strong>
            {isOpen && (
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae!
              </p>
            )}
          </div>
          <hr />
          <div className="mb-3">
            <button className="btn btn-light">+</button>
            <strong className="ms-2">How much does it cost?</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;