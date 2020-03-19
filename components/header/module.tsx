import * as React from "react";
import { Header, UserName, BellButton, RightBox } from "./style";
import Link from "next/link";
import {
  Avatar,
  ClickOutside,
  DropDown,
  Badge,
  Icon,
  BreadCrumb
} from "@xin-design/xind";

interface IProps {
  userName: string;
  userPic: string;
  bellHref: string;
  bellStatus: boolean;
  className?: string;
  data?: IData[];
}
interface IData {
  title: string;
  href: string;
}

const Component: React.FC<IProps> = props => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <Header className={`${props.className || ""} headerStyle`}>
      <RightBox>
        <BellButton bellStatus={props.bellStatus}>
          <span className="bell_dot"></span>
          <Link href={props.bellHref}>
            <a>
              <Icon type={"bell"} />
            </a>
          </Link>
        </BellButton>

        <UserName
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className="pic_box">
            <Avatar
              size={48}
              src={
                "https://images.cakeresume.com/cwchang93/bc31a60a-d1e3-4950-884b-1117b59d9edb.png"
              }
              title={"JW"}
              shape={"circle"}
            />
          </div>

          <DropDown menu={props.data}>
            <span>{props.userName}</span>
            <i>▼</i>
          </DropDown>
        </UserName>
      </RightBox>
    </Header>
  );
};
Component.defaultProps = {
  data: [
    { title: "登入", href: "" },
    { title: "登出", href: "" },
    { title: "基本資料", href: "" }
  ]
};

export default Component;
