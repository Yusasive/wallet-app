
import React from 'react';
import { WalletCreation, WalletTransfers, WalletRecovery, Notifications, Contacts } from './components';

function App() {
  return (
    <div>
      <WalletCreation />
      <WalletTransfers />
      <WalletRecovery />
      <Notifications />
      <Contacts />
    </div>
  );
}

export default App;
