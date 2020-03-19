import * as React from "react";
import { GlobalStyle } from "@style/theme/global_css";
import { LayoutContainer } from "./style";
import { Sidebar, BreadCrumb, Avatar } from "@xin-design/xind";
import XinLogo from "@style/images/xinmedia.svg";
import Link from "next/link";
import AvatarLogo from "@style/images/Xinua.png";

interface I_Props_Layout {
  children: React.ReactNode;
  breadItemArr?: { title: string; href?: string; target?: string }[];
}

const Layout = (props: I_Props_Layout) => {
  const menuListData = [
    {
      menuName: (
        <>
          <Avatar size={48} src={AvatarLogo} title={"JW"} shape={"circle"} />
          <span className="user-name">XinUser</span>
        </>
      ),
      href: "",
      subMenu: [
        {
          title: "基本資料",
          href: ""
        },
        {
          title: "登出",
          href: ""
        }
      ]
    },
    {
      menuName: "會員管理",
      href: "",
      subMenu: [
        {
          title: "會員查詢",
          href: (
            <Link href="/members">
              <a>會員查詢</a>
            </Link>
          )
        }
        // {
        //   title: "旅遊金",
        //   href: (
        //     <Link href="/points">
        //       <a>旅遊金管理</a>
        //     </Link>
        //   )
        // }
      ]
    },
    {
      menuName: "旅遊金管理",
      href: "",
      subMenu: [
        {
          title: "旅遊金審核",
          href: (
            <Link href="/points/review">
              <a>旅遊金審核</a>
            </Link>
          )
        }
      ]
    },
    {
      menuName: "艙等管理",
      href: "",
      subMenu: [
        {
          title: "設定艙等",
          href: (
            <Link href="/classmanage">
              <a>設定艙等</a>
            </Link>
          )
        },
        {
          title: "設定艙等報酬",
          href: (
            <Link href="/classmanage/classreturn">
              <a>設定艙等報酬</a>
            </Link>
          )
        },
        {
          title: "設定升艙條件",
          href: (
            <Link href="/classmanage/upgrade">
              <a>設定升艙條件</a>
            </Link>
          )
        }
      ]
    },
    {
      menuName: "權限管理",
      href: "",
      subMenu: [
        {
          title: "新增/編輯群組",
          href: (
            <Link href="/auth/group">
              <a>新增/編輯群組</a>
            </Link>
          )
        },
        {
          title: "",
          href: (
            <Link href="/auth/authsetting">
              <a>權限設定</a>
            </Link>
          )
        },
        {
          title: "成員設定",
          href: (
            <Link href="/auth/membersetting">
              <a>成員設定</a>
            </Link>
          )
        },
        {
          title: "管理者權限設定",
          href: ""
        }
      ]
    }
  ];

  return (
    <LayoutContainer className="Layout">
      <GlobalStyle />
      <Sidebar menuList={menuListData} logoSrc={<XinLogo />} sideBarTitle="" />

      <div className="LayoutContent">
        {props.breadItemArr && <BreadCrumb breadItemArr={props.breadItemArr} />}
        {props.children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;
