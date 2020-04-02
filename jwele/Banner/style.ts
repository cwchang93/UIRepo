import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  /* max-width: 1000px; */
  padding: 0 40px;
  margin: auto;
  height: 380px;

  .sectionWrap {
    height: 100%;
    .imgWrap {
      overflow: hidden;
      position: relative;
      margin: auto;
      &.opened {
        height: 300px;
      }
      &.closed {
        height: 80px;
      }
      .bannerImg {
        margin: auto;
        display: block;
        height: 380px;
        width: 100%;
        &.closed {
          transform: translateY(-300px);
        }
      }
      .btn {
        position: absolute;
        right: 0;
        transform: translateY(-100%);
        &.opened {
          top: 300px;
        }
        &.closed {
          top: 80px;
        }
      }
    }
  }
`;

export default {};
