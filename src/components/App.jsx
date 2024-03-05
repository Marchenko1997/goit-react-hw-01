import './App.css';
import Profile from './Profile/Profile';
import userData from '../userData.json';
import Friendslist from './Friendslist/Friendslist';
import friends from '../friendsData.json';

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
      <Friendslist friends={friends} />
    </>
  );
}