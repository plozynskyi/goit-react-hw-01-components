import { MainSection } from './add.styled';
import { data, friends, user, transactions } from 'data';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import Friends from '../Friends/Friends';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <MainSection>
      <Profile users={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </MainSection>
  );
};
