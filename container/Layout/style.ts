import styled from "styled-components";
import { xinTheme as $ } from "../../style/theme/variables";

export const LayoutContainer = styled.div`
  &.Layout {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    .Sidebar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 11;
      max-width: 240px;
      height: 100vh;
      background-color: #444;
      h3 {
        color: rgba(255, 255, 255, 0.75);
        line-height: normal;
        .logoImg {
          position: relative;
          width: 9rem;
          height: 1rem;
          margin: 1rem auto;
          .xin-icon {
            position: absolute;
            top: 50%;
            left: 0;
            margin-right: 0;
            transform: translateY(-50%);
            font-size: 144px;
          }
          svg {
          }
        }
      }
      .wrap {
        max-height: calc(100% - 64px);
        padding: 0;
        /*Scrollbar 樣式*/
        /* total width */
        &::-webkit-scrollbar {
          background-color: #444;
        }

        /* background of the scrollbar except button or resizer */
        &::-webkit-scrollbar-track {
          background-color: #444;
        }
        &::-webkit-scrollbar-track:hover {
          background-color: #444;
        }

        /* scrollbar itself */
        &::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.35);
          border-color: #444;
        }
        > ul {
          > li:first-child {
            position: relative;
            margin-bottom: 0.75rem;
            &::after {
              display: block;
              content: "";
              position: absolute;
              bottom: 0;
              left: 2.5rem;
              width: calc(100% - 3.5rem);
              height: 1px;
              background-color: rgba(178, 178, 178, 0.6);
            }
            .item_head {
              > * {
                padding-top: 0.75rem;
                padding-bottom: 0.75rem;
              }
              .user-name {
                flex: 1 0 auto;
                padding-left: 0.5rem;
              }
            }
          }
        }
      }
      .item_head {
        > * {
          color: #fff;
          &:hover {
            background-color: #fff;
            color: ${$.linkBgHoverColor};
            .xin-icon {
              color: ${$.linkBgHoverColor};
            }
          }
        }
        .xin-icon {
          transition: none;
        }
      }
      ul {
        li {
          a {
            transition: 0.3s;
            color: #fff;
            &:hover {
              background-color: #fff;
              color: ${$.linkBgHoverColor};
            }
          }
        }
      }
    }
    .mainHeader {
      width: 100%;
      padding: 10px 0;
      background-color: #444;
      transition: 0.3s;
      .euxsam {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        background-color: #fff;
        .DropDown {
          .Title {
            color: ${$.linkBgHoverColor};
          }
        }
      }
      .DropDown {
        min-width: auto;
        .Title {
          color: #fff;
          transition: 0.3s;
        }
      }
      .MenuList {
        z-index: 10;
        .Item {
          a {
            color: #000;
            &:hover {
              color: ${$.linkBgHoverColor};
            }
          }
        }
      }
    }
    .LayoutContent {
      width: 100%;
      padding-top: 2rem;
      margin-left: 240px;
    }
    .pageContent {
      width: 100%;
      padding-top: 2rem;
    }
    .wrap {
      padding: 5px 15px;
      font-size: 14px;

      a {
        text-decoration: none;
        color: #f88d8a;
        font-weight: bold;
        transition: 0.3s;
        &:hover {
          color: #ff7774;
        }
      }
    }
    .footer {
      margin-left: 240px;
    }
  }
`;
