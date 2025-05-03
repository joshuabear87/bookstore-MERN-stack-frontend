import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <div
        className="spinner-border"
        role="status"
        style={{
          width: '3rem',
          height: '3rem',
          borderColor: '#c8d8c2',
          borderRightColor: 'transparent'
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
