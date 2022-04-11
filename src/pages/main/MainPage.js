import React from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

export default function MainPage() {

  const user = useSelector(state => state.auth.user);

  if (!user) {
    return <Redirect to="/"/>;
  }
  return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{user.username}</strong> Profile
          </h3>
        </header>
      </div>
  );

}