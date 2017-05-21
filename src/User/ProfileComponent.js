import React from 'react';
import './User.css';

const ProfileComponent = ({profile}) => (
  <div className="profile">
    <img src={profile.pic} alt="profile" className="profile-picture"/>
    <h2>{profile.name}</h2>
    <h4>you have {profile.points} points</h4>

  </div>
)

export default ProfileComponent
