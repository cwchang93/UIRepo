import * as React from "react";
import Link from "next/link";
import { LoginContainer } from "./style";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const MY_LOGIN = gql`
  mutation MyLogin($account: String!, $password: String!) {
    login(account: $account, password: $password) {
      code
      data {
        access_token
        refresh_token
        expire_in
      }
    }
  }
`;

const LoginPage = () => {
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [myLogin, { data }] = useMutation(MY_LOGIN);

  React.useEffect(() => {
    console.log("data", data);
    // data && data.code && data.code === 200 && document.cookie = `user=${data.access_token}; expires=`;
  }, [data]);

  return (
    <LoginContainer className="loginPanel">
      <div className="loginBoard">
        <div className="loginTitle">Login Panel</div>
        <div className="loginInputWrap">
          <div className="inputItemWrap">
            <div className="inputTitle">Username:</div>
            {/* <Input
              type="text"
              className="inputUser"
              onChangeCallback={(e: any) => setAccount(e.target.value)}
            /> */}
            <input onBlur={() => console.log("blur")} />
          </div>

          <div className="inputItemWrap">
            <div className="inputTitle">Password:</div>
            <input type="password" />
          </div>

          <div className="loginBtnWrap">
            <Link href="/">
              <a>
                <button
                  onClick={() => {
                    console.log("login");
                    // myLogin({
                    //   variables: {
                    //     account: account,
                    //     password: password
                    //   }
                    // });
                  }}
                >
                  Login
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};
export default LoginPage;
