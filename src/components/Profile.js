import React from "react";
import ProfilePic from "./ProfilePic";
import axios from "axios";

const Profile = ({
  name,
  screen_name,
  url,
  description,
  followers_count,
  profile_image_url_https
}) => {
  const logout = ({ setUser }) => {
    axios
      .get("https://api.eztweeter.com/logout")
      .then(() => {
        window.location.href = "https://www.eztweeter.com/";
        setUser(null);
      })
      .catch(e => console.error(e));
  };

  return (
    <div>
      <ProfilePic image={profile_image_url_https} />
      <h1 className="display-4">{name}</h1>
      <p>{description}</p>
      <p className="lead">@{screen_name}</p>
      <p>Followers: {followers_count}</p>
      <a className="text-white d-block" href={url}>
        Website
      </a>
      <button onClick={logout} className="btn btn-danger mt-2 mb-2">
        Logout
      </button>
    </div>
  );
};

export default Profile;
