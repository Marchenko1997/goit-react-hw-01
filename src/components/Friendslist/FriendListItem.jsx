// FriendListItem.jsx
import css from './friend.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend">
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={isOnline ? 'online' : 'offline'}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
