import PropTypes from 'prop-types';
import { Discription } from '../Discription/Discription';

export const Profile = ({ users }) => {
  return (
    <div className="profile">
      {users.map(({ username, tag, location, avatar, stats }) => (
        <Discription
          key={tag}
          username={username}
          location={location}
          tag={tag}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      ))}
    </div>
  );
};

Profile.defaultProps = {
  users: [],
};

Profile.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})),
};
