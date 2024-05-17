import React from 'react';

function Balance() {
  // Fetch balance from server or state
  const balance = 1000; // Example balance

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Current Balance</h2>
      <h3>{balance} $</h3>
    </div>
  );
}

export default Balance;
