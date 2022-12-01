import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import axios from "../../axios";
import { useEffect, useState } from "react";

export default function Rightbar({ user }) {
  console.log(user, "RightuseRr");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  console.log(friends, "frrr");
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get("/users/friends/" + user._id);
        setFriends(friendsList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  const HomeRightbar = () => {

    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}birthday.png`} alt="" />
          <span className="birthdayText">
            <b>Jackey</b> and <b> 3 other friends</b> have birthday today.
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}add.PNG`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitile">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : ""}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitile">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <div className="rightbarFollowing">
              <img
                src={
                  friend.profilePicture
                    ? PF + friend.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
