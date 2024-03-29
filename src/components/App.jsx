import './App.css';
import Profile from './Profile/Profile';
import userData from '../assets/userData.json';
import friendsData from '../assets/friendsData.json';
import FriendList from './Friendslist/Friendslist';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../assets/transactions.json'

export default function App() {
  return (
    <>
     <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}