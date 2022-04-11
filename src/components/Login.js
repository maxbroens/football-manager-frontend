import React, {useState} from 'react';
import {Form} from "./useForm";
import {Grid} from "@material-ui/core";
import Input from "./controls/Input";
import {Redirect} from 'react-router-dom';
import {login} from "../actions/auth";
import Button from "./controls/Button";
import {useDispatch, useSelector} from "react-redux"
import {history} from "../helpers/history";
import {fetchTeam} from "../actions/team";

export default function Login() {
  const nextPage = "/clubs";

  const user = useSelector(state => state.auth.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(username, password))
        .then(() => {
          console.log("loggingin");
          dispatch(fetchTeam()).then(() => {
            console.log("res");
            history.push(nextPage);
            window.location.reload();
          })
        })
        .catch((e) => {
          setLoading(false);
        });

  };

  if (user) {
    return <Redirect to={nextPage}/>;
  }

  return (
      <Form onSubmit={handleLogin}>
        <Grid container>
          <Grid>
            <Input
                name="username"
                label="Gebruikersnaam"
                value={username}
                type="text"
                onChange={onChangeUsername}
            />
            <Input
                name="password"
                label="Wachtwoord"
                value={password}
                type="password"
                onChange={onChangePassword}
            />
            <div>
              <Button text="Login" type="submit" disabled={loading}/>
              {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
              )}
            </div>
          </Grid>
        </Grid>
      </Form>
  );
}