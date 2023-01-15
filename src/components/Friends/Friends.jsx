// import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';
// import css from './Friends.module.css';

const Friends = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

// Friends.defaultProps = {
//   // bla: 'test',
// };

// Friends.propTypes = {
//   // bla: PropTypes.string,
// };

export default Friends;
