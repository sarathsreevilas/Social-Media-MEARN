import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="birthday.png" alt="" />
          <span className="birthdayText">
            <b>Jackey</b> and <b> 3 other friends</b> have birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="add.PNG" alt="" />
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
            <span className="rightbarInfoValue">Kochi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kottayam</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitile">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.JPG`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John C</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.JPG`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John C</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/3.PNG`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John C</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.JPG`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John C</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/5.JPG`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John C</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/6.JPG`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John C</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
