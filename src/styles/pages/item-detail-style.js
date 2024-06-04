/** @format */

import styled, { css } from "styled-components";
import theme from "../theme";
// import Modal from "react-bootstrap/Modal";
// import { mediaQueries } from '../../utils/mediaQuery';

export const ItemMian = styled.div`
  display: flex;
  margin: 0px -26px;
  @media screen and (max-width: 991px) {
    display: block;
  }
  .left-common-item {
    width: 50%;
    padding: 0px 26px;
    @media screen and (max-width: 991px) {
      width: 100%;
      padding: 0px 15px 25px;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }
  .right-content-block {
    width: 50%;
    padding: 0px 26px;
    @media screen and (max-width: 991px) {
      width: 100%;
      padding: 0px 30px;
    }
    .title-block-right {
      color: ${theme.color.black};
      font-size: 30px;
      margin-bottom: 30px;
      font-weight: 800;
    }
    .selected {
      border-color: ${theme.color.primary} !important;
    }
    .TXtype-details-wrapper {
      position: relative;
      .TX-radio-block {
        /* display: flex;
				flex-wrap: wrap;
				margin: 0px -15px; */
        .TX-radio-block-inner {
          position: relative;
          padding: 0px 0px 30px;
          width: 100%;
          input {
            position: absolute;
            left: -9999px;
          }
          label {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid ${theme.color.borderColor};
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            .TX-iconbox-wrapper {
              width: 48px;
              height: 48px;
              margin-right: 12px;
              background: #1918200d;
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 29px;
                height: 29px;
              }
            }
          }
          [type='radio']:checked + label {
            border-color: ${theme.color.primary};
          }
        }
      }
      .title-block-right {
        margin-bottom: 5px;
      }
      .complate-listing-table {
        margin-bottom: 30px;
        .complate-listing-table-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 15px;
          padding-top: 15px;
          border-bottom: 1px solid ${theme.color.borderColor};
          p {
            font-size: 16px;
            line-height: 20px;
            color: rgba(25, 24, 32, 0.6);
            font-weight: 800;
          }
          h3 {
            font-size: 16px;
            line-height: 20px;
            color: ${theme.color.black};
            font-weight: 800;
            margin: 0px;
          }
        }
      }
    }
    .profile-share-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .profile-share-block-inner {
        display: flex;
        align-items: center;
        img {
          border-radius: 50%;
          width: 36px;
          height: 36px;
          object-fit: cover;
        }
        h4 {
          padding-left: 10px;
          color: #191820;
          font-weight: 700;
          font-size: 16px;
          margin: 0px;
        }
      }
      .share-block-inner {
        display: flex;
        align-items: center;
        .share-block-inner-block {
          padding-left: 16px;
          div {
            display: flex;
            align-items: center;
          }
          span {
            display: flex;
            align-items: center;
          }
          h4 {
            font-size: 13px;
            line-height: 13px;
            color: #191820;
            padding-left: 10px;
            margin: 0px;
          }
        }
      }
    }
    .wicked-block-inner {
      .wicked-block-inner-title {
        padding: 25px 0px;
        h2 {
          font-size: 36px;
          color: #191820;
          line-height: 42px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          line-height: 20px;
          color: #191820;
          font-weight: 400;
        }
      }
      .timing-block-current {
        display: flex;
        margin: 0px -7px 40px;
        .time-line-block {
          padding: 0px 7px;
          width: 50%;
          .time-line-block-inner {
            padding: 15px;
            border-radius: 10px;
            border: 1px solid ${theme.color.borderColor};
            h3 {
              margin: 0px;
              display: flex;
              align-items: center;
              font-size: 20px;
              font-weight: 800;
              color: ${theme.color.black};
              span {
                width: 42px;
                height: 42px;
                border-radius: 6px;
                background-color: rgba(112, 112, 114, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                &.dots-block {
                  background: none;
                  padding: 0px 15px;
                  height: auto;
                  width: auto;
                }
              }
            }
          }
        }
        .current-bid-block {
          width: 50%;
          padding: 0px 7px;
          h3 {
            padding: 15px;
            border-radius: 10px;
            border: 1px solid ${theme.color.borderColor};
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 16px;
            font-weight: 800;
            color: ${theme.color.black};
            height: 100%;
          }
        }
        &.timing-block-item-block {
          margin-bottom: 30px;
          .time-line-block {
            .time-line-block-inner {
              h3 {
                span {
                  width: 18%;
                  &.dots-block {
                    width: auto;
                  }
                }
              }
            }
          }
          .current-bid-block {
            .current-bid {
              width: 50%;
            }
            h3 {
              padding: 10px;
            }
            .current-bid-title {
              display: flex;
              align-items: center;
              width: 50%;
              justify-content: space-between;
              background-color: rgba(25, 24, 32, 0.03);
              height: 100%;
              border-radius: 8px;
              padding: 10px;
              span {
                font-size: 14px;
              }
            }
          }
        }
      }
      .btn-group-block {
        padding: 22px;
        border-radius: 14px;
        display: flex;
        border: 1px solid #e5e5e5;
        margin-bottom: 40px;
        @media screen and (max-width: 767px) {
          display: block;
          padding: 15px 15px 5px;
          button {
            margin-bottom: 10px;
            width: 100%;
          }
        }
        .button-block-tabs-inner {
          width: 33.33%;
          padding: 0px 11px;
          @media screen and (max-width: 767px) {
            width: 100%;
            padding: 0px;
          }
          button {
            border-radius: 30px;
            &.no-border {
              background: transparent;
              color: #fb4ef1;
              border: 1px solid #fb4ef1;
            }
          }
        }
      }
      .tab-custom-block {
        .nav-tabs {
          border: none;
          width: 100%;
          border-bottom: 2px solid ${theme.color.borderColor};
          .nav-item {
            .nav-link {
              padding: 10px 10px;
              font-size: 16px;
              line-height: 20px;
              font-weight: 700;
              color: ${theme.color.gray};
              font-family: 'DM Sans', sans-serif;
              border: none;
              &.active {
                border-bottom: 2px solid ${theme.color.primary};
                color: ${theme.color.black};
              }
            }
          }
        }
        .tab-content {
          margin-top: 25px;
          margin-bottom: 30px;
        }
        .details-block-main {
          .create-author-block {
            display: flex;
            margin: 0px -15px 25px;
            flex-wrap: wrap;
            .create-author-block-profile {
              padding: 0px 15px;
              h4 {
                font-size: 13px;
                line-height: 13px;
                color: #565660;
                margin-bottom: 15px;
                font-weight: 400;
              }
              .create-author-block-title {
                display: flex;
                align-items: center;
                img {
                  border-radius: 50%;
                  width: 33px;
                  height: 33px;
                  object-fit: cover;
                }
                h4 {
                  padding-left: 10px;
                  color: #191820;
                  font-weight: 700;
                  font-size: 16px;
                  margin: 0px;
                }
              }
            }
          }
          .properties-main {
            &.flex-top-property {
              display: flex;
              margin: 0px -10px;
              .flex-properties-main {
                padding: 0px 10px;
                width: 33.33%;
              }
            }
            h4 {
              font-size: 13px;
              line-height: 13px;
              color: #565660;
              margin-bottom: 15px;
              font-weight: 400;
            }
            ul {
              display: flex;
              flex-wrap: wrap;
              margin: 0px -6px;
              padding: 0px;
              li {
                padding: 0px 6px 10px;
                .properties-main-block-inner {
                  display: flex;
                  align-items: center;
                  border: 1px solid #565660;
                  padding: 10px 14px;
                  border-radius: 30px;
                  h5 {
                    font-size: 13px;
                    line-height: 13px;
                    color: #372f42;
                    font-weight: 600;
                    padding-left: 5px;
                    margin: 0px;
                  }
                }
                button {
                  background: none;
                  height: 37px;
                  padding: 7px 17px;
                  background-color: rgba(25, 24, 32, 10%);
                  border-radius: 30px;
                  font-size: 13px;
                  line-height: 13px;
                  color: #191820;
                  font-weight: 600;
                }
              }
            }
          }
        }
        .button-block-tabs {
          padding: 22px;
          border-radius: 10px;
          border: 1px solid ${theme.color.borderColor};
          display: flex;
          align-items: center;
          .button-block-tabs-inner {
            padding: 0px 10px;
            width: 50%;
            .no-border {
              background: none;
              border: 1px solid ${theme.color.primary};
              color: ${theme.color.primary};
            }
          }
        }
        .bids-block {
          height: 210px;
          overflow-y: scroll;
          .bids-block-inner {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            img {
              border-radius: 50%;
              width: 33px;
              height: 33px;
              object-fit: cover;
            }
            .bids-block-title {
              padding-left: 10px;
              h4 {
                font-size: 13px;
                line-height: 18px;
                font-weight: 700;
                margin-bottom: 7px;
                color: ${theme.color.black};
                span {
                  font-weight: 400;
                  color: ${theme.color.gray};
                }
              }
              p {
                font-size: 13px;
                line-height: 18px;
                margin-bottom: 0px;
                color: ${theme.color.gray};
                font-weight: 400;
              }
            }
          }
        }
        .history-block-main {
          height: 320px;
          overflow-y: scroll;
          padding-right: 30px;
          &::-webkit-scrollbar-track {
            border-radius: 10px;
            /* background-color: #f5f5f5; */
          }
          &::-webkit-scrollbar {
            width: 12px;
            /* background-color: #f5f5f5; */
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
          }
          .history-block-main-inner {
            display: flex;
            justify-content: space-between;

            margin-bottom: 20px;
            .history-block-left {
              display: flex;
              align-items: center;
              .history-block-left-details {
                padding-left: 10px;

                h4 {
                  font-size: 16px;
                  line-height: 20px;
                  font-weight: 700;
                  margin-bottom: 7px;
                  color: ${theme.color.black};
                  span {
                    font-size: 13px;
                    font-weight: 400;
                    color: ${theme.color.gray};
                  }
                }
                p {
                  font-size: 13px;
                  line-height: 18px;
                  margin-bottom: 0px;
                  color: ${theme.color.gray};
                  font-weight: 400;
                }
              }
            }
            .history-block-right {
              text-align: right;
              h4 {
                font-size: 16px;
                line-height: 20px;
                font-weight: 700;
                margin-bottom: 7px;
                color: ${theme.color.black};
                span {
                  font-size: 13px;
                  font-weight: 400;
                  color: ${theme.color.gray};
                }
              }
              p {
                font-size: 13px;
                line-height: 18px;
                margin-bottom: 0px;
                color: ${theme.color.gray};
                font-weight: 400;
              }
            }
          }
        }
        .offer-table-block {
          height: 330px;
          overflow-y: scroll;
          padding-right: 20px;
          &::-webkit-scrollbar-track {
            border-radius: 10px;
            /* background-color: #f5f5f5; */
          }

          &::-webkit-scrollbar {
            width: 12px;
            /* background-color: #f5f5f5; */
          }

          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
          }
          thead {
            th {
              font-size: 16px;
              line-height: 22px;
              color: ${theme.color.black};
              padding: 10px;
              border-right: 1px solid ${theme.color.borderColor};
            }
          }
          tbody {
            td {
              font-size: 12px;
              line-height: 16px;
              color: ${theme.color.gray};
              padding: 10px;
              border-right: 1px solid ${theme.color.borderColor};
              button {
                background: #f787f6;
                padding: 6px 5px;
                border-radius: 5px;
                color: #fff;
                font-size: 10px;
                cursor: pointer;
              }
              .action-button {
                border: none;
                width: 75px;
                height: 28px;
                padding: 4px 0px;
              }
            }
          }
          &.new-table-block {
            height: 320px;
            padding: 0px;
            table {
              width: 100%;
              /* border: 1px solid #e1e1e1; */
            }
            thead {
              th {
                width: 16.66%;
                &.th-center {
                  text-align: center;
                }
              }
            }
            tbody {
              td {
                font-size: 14px;
                &.td-center {
                  text-align: center;
                }
                button {
                  background: linear-gradient(90deg, #47c4ef 0%, #db63f0 100%);
                  ${
                    '' /* background: linear-gradient(
                                            97deg,
                                            #2bd7ef 0.17%,
                                            #fb4ef1 67.12%
                                        ),
                                        #3749e9; */
                  }
                  color: #ffffff;
                  display: inline-block;
                  width: auto;
                  border-radius: 10px;
                  padding: 4px 12px;
                  font-size: 13px;
                }
              }
            }
          }
          &.white-space-nowarp {
            thead {
              th {
                &:nth-child(6),
                &:nth-child(7) {
                  width: 10%;
                }
              }
            }
          }
        }
        &.tab-custom-items {
          .nav-tabs {
            border-bottom: 1px solid #e5e5e5;
            .nav-item {
              margin-right: 40px;
              @media screen and (max-width: 767px) {
                margin-right: 10px;
              }
              &:nth-child(1) {
                .nav-link {
                  padding-left: 5px;
                }
              }
              .nav-link {
                font-size: 18px;
                padding: 11px 24px;
                @media screen and (max-width: 767px) {
                  font-size: 14px;
                  padding: 11px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
