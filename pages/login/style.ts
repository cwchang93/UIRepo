import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 150px;

  .loginBoard {
    width: 390px;
    height: 290px;

    .loginTitle {
      padding: 15px 16px;
      background-color: #0b756e;
      border-radius: 3px;
      color: white;
      font-weight: bold;
    }

    .loginInputWrap {
      width: 390px;
      padding: 20px;
      border: solid #eaeaea 1px;
      box-sizing: border-box;
      background-color: white;

      input {
        width: calc(100% - 10px);
        height: 32px;
      }

      .inputItemWrap {
        margin-bottom: 20px;

        .inputTitle {
          margin: 5px;
          font-size: 16px;
          font-weight: bold;
        }
      }

      .loginBtnWrap {
        text-align: center;
        font-size: 30px;

        button {
          padding: 10px;
        }
      }
    }
  }
`;

export default {};
