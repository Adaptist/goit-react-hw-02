import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendListItem}>
      <img
        className={s.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={s.name}>{name}</p>
      <p
        className={`${s.status} ${
          isOnline ? s.online : s.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
