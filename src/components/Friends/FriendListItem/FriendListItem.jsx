// import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

// FriendListItem.defaultProps = {
//   // bla: 'test',
// };

// FriendListItem.propTypes = {
//   // bla: PropTypes.string,
// };

export default FriendListItem;
