import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './friendListItem.styled';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus friendStatus={isOnline} />
      <FriendAvatar src={avatar} alt="Friend avatar" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendsListItem.defaultProps = {
  avatar:
    'https://cdn.pixabay.com/photo/2017/01/10/03/54/avatar-1968236_960_720.png',
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
