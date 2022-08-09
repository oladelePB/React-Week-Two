import React from "react";
import { useNavigate, useParams } from "react-router";

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>
        Profile Page of <strong> {username} </strong>.
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home page
      </button>
    </>
  );
};

export default Profile;
