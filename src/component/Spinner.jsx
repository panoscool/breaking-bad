import React from 'react';

function Spinner() {

  const styles = {
    width: '100px',
    margin: 'auto',
    display: 'block'
  };

  return (
    <img src="/img/spinner.gif" alt="Loading..." style={styles} />
  );
}

export default Spinner;