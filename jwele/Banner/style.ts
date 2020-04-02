import styled from "styled-components";

const transitionMixin = `
  transition: 3s ;

`;

export const BannerContainer = styled.div`
  width: 100%;
  padding: 0 40px;
  margin: auto;
  height: 380px;

  .sectionWrap {
    height: 100%;

    .imgWrap {
      overflow: hidden;
      position: relative;
      margin: auto;
      /* transform: translateY(-300px); */

      &.transition {
        ${transitionMixin}
      }
      &.opened,
      &.opening {
        height: 300px;
      }
      &.closing,
      &.closed {
        height: 80px;
      }
      .bannerImg {
        margin: auto;
        display: block;
        height: 380px;
        width: 100%;
        &.closing,
        &.closed {
        }
        &.done {
          transform: translateY(-300px);
        }
      }
      .btn {
        position: absolute;
        right: 0;
        transform: translateY(-100%);
        &.transition {
          ${transitionMixin}
        }
        &.opened,
        &.opening {
          top: 300px;
        }
        &.closed,
        &.closing {
          top: 80px;
        }
      }
    }
  }
`;

export default {};
