import React from 'react';

function Cats() {
  return (
    <div>
      Here is a list of cat breeds. Click on an image to see more information about the breed.
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/images/cat1.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/images/cat1.jpg" alt="cat1" style={{ width: 100 }} />
              <div className="caption">
                <p>dog</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cats;
