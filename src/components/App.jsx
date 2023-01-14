import user from '../data/user.json';
import data from '../data/data.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile users={user} />
      <Statistics stats={data} />
    </div>
  );
};
