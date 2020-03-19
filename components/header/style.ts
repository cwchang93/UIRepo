import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  background: #eee;
  padding: 10px;
  /* text-align: right; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .wrap {
    line-height: 40px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

// 會員名稱
export const UserName = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  line-height: 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  &:hover {
    color: #555;
  }
  .pic_box {
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 5px;
    img {
      width: 100%;
    }
  }
  span {
    font-size: 14px;
  }
  i {
    font-size: 12px;
  }
  .DropDown {
    .Title {
      color: #888;
      transition: 0.3s;
      &:hover {
        color: #333;
      }
    }
  }
`;

interface MenuList_status {
  show: boolean;
}

// 會員操控選單
export const MenuList = styled.ul`
  position: absolute;
  display: ${(props: MenuList_status) => (props.show ? "block" : "none")};
  right: 0;
  top: 30px;
  width: 80px;
  border: 1px solid #aaa;
  background: #fff;
  padding: 0;
  border-radius: 5px;
  > li {
    width: auto;
    text-align: left;
    list-style: none;
    padding: 0px;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    border-bottom: 1px solid #aaa;
    &:last-child {
      border-bottom: none;
    }
    > a {
      display: block;
      color: #555;
      transition: 0.3s;
      text-decoration: none;
      width: 100%;
      padding: 5px;
      &:hover {
        background: #eee;
      }
    }
  }
`;

interface BellProps {
  bellStatus: boolean;
}

// 小鈴鐺
export const BellButton = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: #888;
    transition: 0.3s;
    &:hover {
      color: #333;
    }
  }
  .bell_dot {
    position: absolute;
    display: ${(props: BellProps) => (props.bellStatus ? "block" : "none")};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff635e;
    top: 1px;
    right: 2px;
  }
`;
