import { React, useState } from "react";
import {
  Button,
  InputContainer,
  LoginContainer,
  LoginWrapper,
} from "./LoginElements";
import { checkCredentials } from "../../api/auth";
import FadeIn from "react-fade-in";

const Login = ({ setIsLoggedIn }) => {
  // Initialize states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLoginBtnClick = () => {
    let [isValid, error] = checkCredentials(email, password);
    //   if user is valid, set isLoggedIn to true
    if (isValid) {
      console.log("Login Successful");
      setError("");
      setIsLoggedIn(true);
    } else {
      setError(error);
    }
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <FadeIn delay="500" transitionDuration="1000">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLTjFBR0h1mD9AtbQZBCpQnfRU0DvJhEazQcqflU=s176-c-k-c0x00ffffff-no-rj"
            alt=""
            height="150"
          ></img>
          <h1>Welcome</h1>
          <InputContainer>
            <div className="email">
              <input
                htmlFor="email"
                type="email"
                id="email"
                value={email}
                placeholder="Email ID"
                onInput={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password">
              <input
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Password"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="error">{error}</p>

            <Button onClick={onLoginBtnClick}>Login</Button>
          </InputContainer>
        </FadeIn>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Login;
