import PropTypes from 'prop-types';
import { FriendsBox, FriendsList } from './friends.styled';
import FriendListItem from './FriendListItem/FriendListItem';

const Friends = ({ friends }) => {
  return (
    <FriendsBox>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </FriendsBox>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Friends;
