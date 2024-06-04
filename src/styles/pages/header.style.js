import styled, { css } from "styled-components";
import theme from "../theme";
import Modal from "react-modal";

// import { mediaQueries } from '../../utils/mediaQuery'

// header section css file end//
export const HeaderMainBlock = styled.div`
  position: relative;
`;
export const HeaderMain = styled.div`
  display: flex;
  padding: 13px;
  align-items: center;
  justify-content: center;
  /* border-bottom: 1px solid ${theme.color.borderColor}; */
  /* background-color: ${theme.color.backgroundOpactiy03};
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1); */
  @media screen and (max-width: 992px) {
    box-shadow: none;
    border: none;
    background-color: transparent;
    padding: 15px;
  }
  /* position: relative; */
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: url(../../images/header-grapics.png);
    background-size: contain;
    width: 100%;
    height: 620px;
    background-repeat: no-repeat;
    z-index: -8;
  }
  .header-main-block {
    max-width: 1600px;
    width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1599px) {
      max-width: 100%;
      width: 100%;
    }
    .header-main-block-left {
      display: flex;
      align-items: center;
      .header-main-logo {
        a {
          img {
            @media screen and (max-width: 767px) {
              width: 129px;
            }
          }
          svg {
            @media screen and (max-width: 767px) {
              width: 129px;
            }
          }
        }
      }
      .header-dropdown {
        padding: 0px 60px;
        display: flex;
        align-items: center;

        @media screen and (max-width: 1199px) {
          padding: 0px 30px;
        }
        .logo-click-close {
          display: none;
        }
        &.middle-section-header {
          @media screen and (max-width: 992px) {
            display: none;
          }
          &.m-middle-section-header {
            display: block;
            position: fixed;
            padding: 0px;
            left: 0px;
            width: 300px;
            background: #fff;
            height: 100%;
            top: 0px;
            border-radius: 12px;
            background-color: rgb(255, 255, 255);
            box-shadow: rgba(35, 75, 81, 0.14) 5px 5px 15px;
            z-index: 999;
            .logo-click-close {
              padding: 30px;
              /* border: 1px solid #dcdcdc; */
              display: block;
              button {
                padding: 0px;
                background: transparent;
                border: none;
              }
              a {
                margin-left: 10px;
              }
            }
            .header-dropdown-block {
              padding: 20px 30px;
              display: block;
              .header-dropdown-block-dropdown {
                box-shadow: none;
                background: transparent;
                position: unset;
              }
            }
          }
        }
        .header-dropdown-block {
          display: flex;
          align-items: center;
          position: relative;
          padding: 0px 18px;
          @media screen and (max-width: 1199px) {
            padding: 0px 10px;
          }
          .header-dropdown-block-link {
            span {
              display: flex;
              align-items: center;
              cursor: pointer;
              user-select: none; // chrome and Opera
              -moz-user-select: none; // Firefox
              -webkit-text-select: none; // IOS Safari
              -webkit-user-select: none; // Safari
              p {
                color: ${theme.color.black};
                font-size: 18px;
                font-weight: 700;
                margin-right: 8px;
                margin-bottom: 0px;
              }
            }
          }
          .header-dropdown-block-dropdown {
            position: absolute;
            border-radius: 12px;
            width: 160px;
            top: 45px;
            background-color: ${theme.color.white};
            top: 25px;
            z-index: 99;
            box-shadow: 0px 4px 24px rgba(185, 185, 185, 25%);
            overflow: hidden;
            a {
              color: ${theme.color.black};
              font-size: 16px;
              font-weight: 600;
              display: flex;
              align-items: center;
              padding: 13px 20px;
              /* &:last-child {
                border-bottom: none;
                padding-bottom: 0px;
              } */
              p {
                margin: 0px;
                color: ${theme.color.black};
                padding-left: 10px;
              }
              &:hover {
                background-color: #e3fcff;
              }
            }
          }
        }
      }
      .bar-mobile-block {
        display: none;
        @media screen and (max-width: 992px) {
          display: block;
          padding-right: 12px;
        }
        button {
          padding: 0px;
          background: transparent;
          border: none;
        }
      }
      .search-box {
        .search-box-inner {
          position: relative;
          @media screen and (max-width: 991px) {
            display: none;
          }
          input {
            width: 490px;
            border-radius: 12px;
            border: none;
            background-color: ${theme.color.white};
            height: 51px;
            font-weight: 500;
            font-size: 16px;
            padding: 0px 51px;
            outline: none;
            color: ${theme.color.black};
            box-shadow: none;
            font-family: "DM Sans", sans-serif;
            @media screen and (max-width: 1399px) {
              width: 350px;
              font-size: 14px;
            }
            @media screen and (max-width: 1199px) {
              width: 250px;
              font-size: 13px;
            }
          }
          button {
            position: absolute;
            background: none;
            border: none;
            outline: none;
            left: 15px;
            top: 13px;
          }
        }
        .search-box-inner {
          position: relative;
          .search-box-open-block {
            position: absolute;
            top: 50px;
            width: 100%;
            padding: 20px;
            background: #fff;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            z-index: 9;
            max-height: 350px;
            overflow: auto;
            .search-box-open-inner {
              padding: 10px 0px 10px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
              > h4 {
                color: #b9b8bb;
                font-weight: 600;
                font-size: 18px;
                margin-bottom: 15px;
              }
              .product-profile {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  object-fit: cover;
                }
                .product-profile-details {
                  padding-left: 10px;
                  p {
                    font-size: 13px;
                    font-weight: 400;
                    margin: 4px 0px 2px;
                    line-height: 13px;
                    color: ${theme.color.gray};
                    display: flex;
                    align-items: center;
                    margin-top: 5px;
                    span {
                      padding-left: 5px;
                    }
                    img {
                      width: 15px;
                      height: auto;
                      border-radius: 0px;
                    }
                  }
                  h5 {
                    font-size: 13px;
                    font-weight: 700;
                    color: ${theme.color.black};
                    margin: 0 0px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .header-main-block-right {
      display: flex;
      position: relative;
      .wallet-button {
        display: flex;
        align-items: center;
        background-color: rgba(25, 24, 32, 0.05);
        padding: 14px;
        border: none;
        font-family: "DM Sans", sans-serif;
        border-radius: 8px 0px 0px 8px;
        cursor: pointer;
        p {
          font-size: 16px;
          font-weight: 700;
          padding-left: 8px;
          margin: 0px;
        }
      }
      .not-connected {
        border-radius: 8px;
      }
      .profile-block-dropdown {
        position: relative;
        button {
          ${"" /* width: 44px; */}
          height: 100%;
          display: flex;
          border: none;
          align-items: center;
          justify-content: center;
          ${'' /* border-left: 1px solid rgba(25, 24, 32, 0.4); */}
          border-radius: 0px 8px 8px 0px;
          cursor: pointer;
        }
        .profile-block-dropdown-menu {
          position: absolute;
          padding: 14px 24px 24px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          width: 227px;
          left: auto;
          right: 0px;
          top: 47px;
          background-color: ${theme.color.white};
          z-index: 99;
          span {
            color: ${theme.color.black};
            font-size: 18px;
            font-weight: 700;
            padding-bottom: 10px;
            display: block;
            padding-top: 10px;
            border-bottom: 1px solid ${theme.color.borderColor};
            display: flex;
            cursor: pointer;
            align-items: center;
            &:last-child {
              border-bottom: none;
              padding-bottom: 0px;
            }
            p {
              margin: 0px;
              padding-left: 10px;
            }
          }
          a {
            color: ${theme.color.black};
            font-size: 18px;
            font-weight: 700;
            padding-bottom: 10px;
            display: block;
            padding-top: 10px;
            border-bottom: 1px solid ${theme.color.borderColor};
            display: flex;
            align-items: center;
            &:last-child {
              border-bottom: none;
              padding-bottom: 0px;
            }
            p {
              margin: 0px;
              padding-left: 10px;
            }
          }
        }
      }
      .header-main-block-text {
        position: absolute;
        top: 50px;
        width: 425px;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 7px 25px 1px rgba(5, 34, 52, 0.06);
        right: 0;
        padding: 20px;
        z-index: 999;
        @media screen and (max-width: 991px) {
          width: 300px;
          padding: 10px;
          right: -50px;
        }
        .header-main-block-text-inner-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid #e8e8e8;
          .header-profile-logo {
            svg {
              @media screen and (max-width: 991px) {
                width: 240px;
              }
            }
          }
        }
        .profile-menu-block {
          padding: 20px 0px;
          border-bottom: 1px solid #e8e8e8;
          ul {
            margin: 0px;
            padding: 0px;
            list-style: none;
            li {
              a {
                padding: 15px 20px;
                display: flex;
                align-items: center;
                span {
                  font-weight: 700;
                  color: #000;
                  font-size: 16px;
                  padding-left: 10px;
                }
              }
            }
          }
        }
        .connect-wallet-block {
          padding: 20px 0px 0px;
          h4 {
            color: #565660;
            font-size: 14px;
            line-height: 18px;
            font-weight: 700;
            margin-bottom: 20px;
          }
          .connect-wallet-block-inner {
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #e5e5e5;
            .connect-wallet-block-inner-top {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 10px;
              .connect-wallet-block-inner-top-left {
                display: flex;
                align-items: center;
                > img {
                  width: 34px;
                }
                .connect-wallet-block-inner-top-left-content {
                  padding-left: 10px;
                  h3 {
                    margin: 0px;
                    font-size: 14px;
                    line-height: 18px;
                    color: #565660;
                    font-weight: 700;
                    position: relative;
                    span {
                      display: block;
                      width: 5px;
                      height: 5px;
                      background-color: #48bc65;
                      border-radius: 50%;
                      position: absolute;
                      right: 15px;
                      top: 8px;
                    }
                  }
                  p {
                    background: linear-gradient(
                      to right,
                      #2bd7ef,
                      #9e8bf0,
                      #fb4ef1
                    );
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 700;
                    font-size: 14px;
                  }
                }
              }
              .connect-wallet-block-inner-top-right {
                display: flex;
                a,
                button {
                  width: 35px;
                  height: 35px;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #e5e5e5;
                  margin-left: 5px;
                  outline: none;
                  border: none;
                }
              }
            }
            .connect-wallet-block-chain {
              .connect-wallet-block-chain-inner {
                border: 1px solid #e5e5e5;
                border-radius: 10px;
                padding: 10px;
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &:last-child {
                  margin-bottom: 0px;
                }
                .connect-wallet-block-chain-inner-text {
                  display: flex;
                  align-items: center;
                  > img {
                    width: 20px;
                  }
                  h3 {
                    color: #191820;
                    padding-left: 10px;
                    font-weight: 400;
                    font-size: 16px;
                    margin: 0px;
                  }
                }
                h3 {
                  color: #191820;
                  font-weight: 400;
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
      .connect-wallet-shimmer-btn {
        border-radius: 30px;
        padding: 3px 3px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 767px) {
          /* min-width: 130px; */
          max-width: 150px;
          padding: 5px 5px;
        }
        .connect-wallet-btn-inner {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          padding: 10px;
          ${"" /* border-right: 1px  solid rgba(25, 24, 32, 0.40); */}
          @media screen and (max-width: 767px) {
            font-size: 13px;
            padding: 5px;
            min-width: auto !important;
          }
          span {
            white-space: nowrap;
            font-size: 16px;
            font-weight: 700;
            padding-left: 10px;
            color: #fff;
            @media screen and (max-width: 767px) {
              font-size: 13px;
            }
          }
        }
      }
      .tw-connect-wallet {
        background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
        ${
          "" /* background: linear-gradient(
                        97deg,
                        #2bd7ef 0.17%,
                        #fb4ef1 67.12%
                    ),
                    #3749e9; */
        }
        ${"" /* min-width: 170px; */}
        ${"" /* width: 260px; */}
        border-radius: 30px;
        padding: 15px 3px;
        ${"" /* padding: 5px 30px 5px 20px; */}
        display: flex;
        align-items: center;
        @media screen and (max-width: 767px) {
          /* min-width: 130px; */
          max-width: 130px;
          padding: 5px 5px;
        }
        .connect-wallet-btn-inner {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          padding: 10px;
          ${"" /* border-right: 1px  solid rgba(25, 24, 32, 0.40); */}
          @media screen and (max-width: 767px) {
            font-size: 13px;
            padding: 5px;
            min-width: auto !important;
          }
          span {
            white-space: nowrap;
            font-size: 16px;
            font-weight: 700;
            padding-left: 10px;
            color: #fff;
            @media screen and (max-width: 767px) {
              font-size: 13px;
            }
          }
        }
        .profile-btn {
          background: transparent;
          ${"" /* padding: 5px 0px 5px 0px; */}
          border: none;
          ${"" /* border-left: 1px solid rgba(25, 24, 32, 0.4); */}
        }
      }
    }
  }
`;
export const HeaderButton = styled.div`
  padding: 15px 0px;
  position: relative;
  .header-button {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      /* width: 135px;
      height: 44px; */
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border: 1px solid #e5e5e5;
      outline: none;
      box-shadow: none;
      /* background: transparent; */
      margin: 0px 3px;
      border-radius: 12px;
      font-size: 16px;
      color: #191820;
      background-color: rgba(116, 116, 116, 0.1);
      &:hover {
        background-color: #fff;
      }
      &.selected {
        background-color: #fff;
      }
      @media screen and (max-width: 767px) {
        width: 40px;
        height: 40px;
        justify-content: center;
        padding: 0px;
      }
      span {
        padding-left: 10px;
        @media screen and (max-width: 767px) {
          display: none;
        }
      }
    }
  }
`;
export const WalletModal = styled(Modal)`
  width: 800px;
  margin: 100px auto;
  h2 {
    font-size: 36px;
    line-height: 40px;
    color: ${theme.color.white};
    text-align: center;
    margin-bottom: 40px;
  }
  .connect-modal-inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    .connect-modal-inner-block {
      padding: 0px 12px;
      width: 33.33%;
      margin-bottom: 24px;
      span {
        display: block;
        background: ${theme.color.white};
        padding: 24px 16px 30px 16px;
        text-align: center;
        border-radius: 12px;
        cursor: pointer;
        h3 {
          font-size: 28px;
          line-height: 30px;
          color: ${theme.color.black};
          font-weight: 700;
        }
        .icon-wallet {
          width: 73px;
          height: 73px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
      }
    }
  }
`;
