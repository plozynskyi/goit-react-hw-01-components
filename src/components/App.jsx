import { data, friends, user, transactions } from 'data';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/Friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile users={user} />
      <Statistics stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
