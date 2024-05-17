import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function BankApp() {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState('');

  const handleWithdrawTDE = () => {
    if (amount <= balance) {
      setBalance(prevBalance => prevBalance - parseInt(amount));
      setAmount('');
    } else {
      alert('Not Enough funds!');
    }
  };

  const handleDepositTDE = () => {
    setBalance(prevBalance => prevBalance + parseInt(amount));
    setAmount('');
  };

  return (
    <Router>
      <div>
        <nav>
       <ul>
            <li>
              <Link to="/">Balance</Link>
            </li>
            <li>
              <Link to="/withdraw">Withdraw</Link>
            </li>
            <li>
              <Link to="/deposit">Deposit</Link>
            </li>
      </ul>
        </nav>

        <Switch>
          <Route path="/withdraw">
         <div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={handleWithdrawTDE}>Withdraw</button>
         </div>
          </Route>
          <Route path="/deposit">
            <div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={handleDepositTDE}>Deposit</button>
            </div>
          </Route>
          <Route path="/">
            <div>
              <img src="" alt="TDE Bank Logo" />
              <h1>Welcome to TDE Bank</h1>
              <h2>{balance} $</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default BankApp;
