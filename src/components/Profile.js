import React from "react";
import ProfilePic from "./ProfilePic";

const Profile = ({
  name,
  screen_name,
  url,
  description,
  followers_count,
  profile_banner_url_https,
  profile_image_url_https
}) => {
  return (
    <div>
      <ProfilePic image={profile_image_url_https} />
      <h1 className="display-4">{name}</h1>
      <p>{description}</p>
      <p className="lead">@{screen_name}</p>
      <p>Followers: {followers_count}</p>
      <a className="text-white" href={url}>
        {url}
      </a>
    </div>
  );
};

export default Profile;
