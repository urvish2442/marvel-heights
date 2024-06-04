import styled, { css } from "styled-components";
import theme from "../theme";
import Modal from "react-bootstrap/Modal";

// import { mediaQueries } from '../../utils/mediaQuery'

// header section css file end//
export const CommonPageBlock = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 1330px;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const CommonProfileBlock = styled.div`
  .profile-cover-img {
    position: relative;
    height: 320px;
    border-radius: 16px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay-profile-cover {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(25, 24, 32, 0.4);
    }
    .profile-upload {
      z-index: 9;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 95px;
      height: 95px;
      label {
        width: 95px;
        height: 95px;
        border-radius: 50%;
        background-color: rgba(25, 24, 32, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 38px;
          height: 38px;
        }
      }
      input {
        display: none;
      }
    }
  }
  .profile-block-inner {
    position: relative;
    padding: 0px 35px;
    margin-top: -100px;
    .profile-block-img {
      width: 137px;
      height: 137px;
      border-radius: 16px;
      background-color: ${theme.color.white};
      position: relative;
      .profile-upload-btn-img {
        z-index: 9;
        position: absolute;
        width: 30px;
        height: 30px;
        bottom: -5px;
        right: -5px;
        label {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: ${theme.color.black};
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          img {
            width: 18px;
            height: 18px;
          }
        }
        input {
          display: none;
        }
      }
    }
    .profile-data-main {
      padding: 24px 0px 60px;
      .profile-name-disc {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .profile-name-etc {
          h2 {
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 10px;
            font-weight: 800;
            color: ${theme.color.black};
          }
          span {
            font-weight: 800;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 10px;
            color: ${theme.color.primary};
            display: block;
          }
          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: rgba(25, 24, 32, 0.4);
          }
        }
      }
      .profile-share-settings {
        display: flex;
        align-items: center;
        a {
          margin-left: 15px;
        }
      }
    }
    .profile-edit-block {
      .edit-input-block {
        margin-bottom: 24px;
        h3 {
          font-size: 28px;
          line-height: 30px;
          margin-bottom: 20px;
          font-weight: 800;
          color: ${theme.color.black};
        }
        .edit-input-block-inner {
          padding: 12px 32px;
          border: 1px solid ${theme.color.borderColor};
          border-radius: 16px;
          .form-group {
            margin-bottom: 15px;
            label {
              display: block;
              font-size: 14px;
              line-height: 16px;
              margin-bottom: 8px;
              font-weight: 400;
              color: ${theme.color.gray};
            }
            input {
              border: none;
              border-bottom: 1px solid ${theme.color.borderColor};
              display: block;
              width: 100%;
              padding: 0px 0px 16px;
              outline: none;
              font-size: 16px;
              line-height: 20px;
              font-family: "DM Sans", sans-serif;
              font-weight: 900;
              color: ${theme.color.black};
              background-color: #fff;
              &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: ${theme.color.black};
              }

              &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: ${theme.color.black};
              }

              &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: ${theme.color.black};
              }
            }
          }
        }
        .social-list-block {
          padding: 32px;
          border: 1px solid ${theme.color.borderColor};
          border-radius: 16px;
          ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
            display: flex;
            align-items: center;
            li {
              padding: 0px 30px;
              &:first-child {
                padding-left: 0px;
              }
            }
          }
        }
      }
    }
  }
`;

export const TesseractLayoutWrapper = styled.div`
  min-height: 750px;
`;
export const MainTitleText = styled.h3`
  font-size: 36px;
  line-height: 40px;
  color: ${theme.color.black};
  font-weight: 800;
  ${(props) =>
    props.isSubTitleText30 &&
    css`
      font-size: 30px;
      line-height: 36px;
    `}
  &.text-center {
    text-align: center;
  }
`;
export const MainSubTitleText = styled.h5`
  font-size: 18px;
  line-height: normal;
  color: ${theme.color.black};
  font-weight: 700;
  margin-bottom: 21px;
`;
export const SubTitleText16 = styled.p`
  font-size: 16px;
  line-height: normal;
  color: ${theme.color.black};
  font-weight: 700;
  margin: 0;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  ${(props) =>
    props.isContainImg &&
    css`
      object-fit: contain;
    `}
`;
export const Button = styled.button`
  display: flex;
  padding: 14px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${theme.color.gradient};
  color: ${theme.color.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  box-shadow: none;
  border: none;
  font-family: "DM Sans", sans-serif;
  width: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  ${(props) =>
    props.isBorderBtn &&
    css`
      /* background: none;
      color: ${theme.color.gray};
      border: 1px solid ${theme.color.borderColor};
      border: 2px solid;
      border-image-slice: 1;
      border-width: 2px;
      border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
      border-radius: 30px; */
      background: #fff;
      background-clip: padding-box;
      border: solid 2px transparent;
      border-radius: 30px;
      position: relative;
      color: #000;
      &::before {
        /* content: ''; */
        /* width: 100%;
        height: 100%; */
        /* border: 2px solid;
        border-image-slice: 1;
        border-width: 2px;
        border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
        border-radius: 30px; */

        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -2px;
        border-radius: inherit;
        background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
      }
      &:hover {
        color: #fff;
      }
    `}
  &:disabled {
    opacity: 0.5;
  }
`;
export const GradientBorderButton = styled.button`
  display: flex;
  padding: 12px 12px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  background: ${theme.color.white};
  color: ${theme.color.black};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  box-shadow: white;
  width: 100%;
  border-radius: 25px !important;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: ${theme.color.gradient};
    z-index: -1;
    border-radius: 25px;
  }
  &:hover {
    opacity: 0.99;
    color: white;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 24px;
  textarea {
    border-radius: 16px;
    resize: none;
  }
  .TX-select2-wrapper {
    .TX-fix-select__control {
      width: 100%;
      border-radius: 24px;
      border: 1px solid ${theme.color.borderColor};
      align-items: flex-start;
      font-size: 14px;
      line-height: normal;
      color: ${theme.color.black};
      font-weight: 600;
      outline: none;
      box-shadow: none;
      .TX-fix-select__value-container {
        min-height: 47px;
        font-size: 14px;
        line-height: normal;
        color: ${theme.color.black};
        font-weight: 600;
        font-family: "DM Sans", sans-serif;
        .TX-fix-select__placeholder {
          font-size: 14px;
          line-height: normal;
          font-weight: 600;
          padding-left: 12px;
          color: ${theme.color.lightgrey};
          font-weight: 400;
        }
        .TX-fix-select__input-container {
          padding-left: 12px;
        }
        .TX-fix-select__single-value {
          padding-left: 12px;
        }
        .TX-fix-select__multi-value {
          min-height: 38px;
          display: flex;
          align-items: center;
          border-radius: 100px;
          min-height: 38px;
          display: flex;
          align-items: center;
          border-radius: 100px;
          padding: 6px 14px;
          background: #f7f7f7;
          border: 1px solid #e5e5e5;
          min-width: 75px;
          justify-content: center;
          .TX-fix-select__multi-value__label {
            font-size: 12px;
            line-height: normal;
            color: ${theme.color.black};
            font-weight: 600;
            padding: 0;
          }
          .TX-fix-select__multi-value__remove {
            background: transparent;
            margin-left: 4px;
            padding: 0;
            svg {
              color: #565660;
            }
          }
        }
      }
      .TX-fix-select__indicators {
        margin-right: 10px;
        .TX-fix-select__indicator-separator {
          display: none;
        }
      }
    }
  }
`;
export const Label = styled.label`
  font-size: 16px;
  line-height: normal;
  color: ${theme.color.black};
  font-weight: 700;
  margin-bottom: 8px;
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 24px;
  border: 1px solid ${theme.color.borderColor};
  padding: 14px 20px;
  align-items: flex-start;
  font-size: 14px;
  line-height: normal;
  color: ${theme.color.black};
  font-weight: 600;
  font-family: "DM Sans", sans-serif;
  outline: none;
  background-color: #fff;
  box-shadow: none;
  &::placeholder {
    color: ${theme.color.lightgrey};
    opacity: 1; /* Firefox */
    font-weight: 400;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.color.lightgrey};
    font-weight: 400;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${theme.color.lightgrey};
    font-weight: 400;
  }
`;
export const UploadFillDivWrapper = styled.div`
  background: rgba(234, 234, 234, 0.24);
  position: relative;
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 30px;
  border: 1px dashed #b9b8bb;
  .file-input {
    height: 100%;
    position: absolute;
    opacity: 0;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    left: -102px;
    width: calc(100% + 102px);
  }
  .uploadfiletext {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      width: auto;
      height: 35px;
      margin-bottom: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .uploadfile-detail {
      text-align: center;
      p {
        margin-bottom: 6px;
      }
      span {
        color: ${theme.color.gray};
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: inline-flex;
      }
    }
  }
  &.upload-logo-part {
    height: 250px;
    padding: 30px;
    .uploadfiletext {
      h3 {
        font-size: 16px;
        line-height: 16px;
        color: #000000;
        margin: 20px 0px 10px;
        font-weight: 700;
      }
      button {
        width: 190px;
        margin: 20px auto;
      }
    }
  }
`;

export const CommonProductBLock = styled.div`
  position: relative;
  .common-product-block {
    position: relative;
    display: flex;
    margin: 0px -9px;
    flex-wrap: wrap;
    &.flex-width-five {
      .common-product-block-inner {
        width: 20%;
        @media screen and (max-width: 1199px) {
          width: 25%;
        }
        @media screen and (max-width: 991px) {
          width: 33.33%;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
      }
    }
    .common-product-block-inner {
      padding: 0px 9px 18px;
      width: 25%;
      @media screen and (max-width: 1399px) {
        width: 33.33%;
      }
      @media screen and (max-width: 1199px) {
        width: 50%;
      }
      @media screen and (max-width: 991px) {
        width: 50%;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      &.new-card-block {
        .common-product-block-inner-width {
          padding: 0px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease-in;
          &:hover {
            transition: all 0.3s ease-in;
            .product-img-time {
              transition: all 0.3s ease-in;
              img {
                transform: scale(1.1);
                transition: all 0.3s ease-in;
              }
            }
          }
          .product-img-time {
            position: relative;
            width: 100%;
            height: 264px !important;
            border-radius: 20px;
            margin-bottom: 0px;
            transition: all 0.3s ease-in;
            &.product-img-time-big {
              @media screen and (min-width: 2200px) {
                height: 320px !important;
              }
              @media screen and (min-width: 2400px) {
                height: 370px !important;
              }
              @media screen and (min-width: 2600px) {
                height: 430px !important;
              }
              @media screen and (min-width: 2800px) {
                height: 500px !important;
              }
            }
            @media screen and (max-width: 767px) {
              height: auto !important;
              min-height: 200px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover !important;
              object-position: top;
              border-radius: 20px;
              transition: all 0.3s ease-in;
            }
            &::before {
              content: '';
              position: absolute;
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100px;
              z-index: 9;
              background-image: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.01),
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.9),
                #000000
              );
            }
            .timer-block-div {
              p {
                bottom: 76px;
                background-color: rgba(0, 0, 0, 0.4);
                border: 1px solid #fff;
                color: #fff;
              }
            }
          }
          .top-block-product-new {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            z-index: 99;
            .top-block-product-img-new {
              width: 30px;
              height: 30px;
              position: relative;
              overflow: hidden;
              clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
              }
            }
            h4 {
              font-size: 13px;
              line-height: 18px;
              margin: 0px;
              padding-left: 5px;
              color: #fff;
              font-weight: 700;
            }
          }
          .product-details-profile-new-block {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            z-index: 9;
            background-color: rgba(7, 11, 48, 0.7);
            padding: 15px;
            .product-details-profile-new {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 3px;
              h4 {
                font-size: 16px;
                line-height: 20px;
                color: #fff;
                font-weight: 700;
              }
              .product-details-profile-new-price {
                display: flex;
                align-items: center;
                > img {
                  width: 25px;
                  height: auto;
                }
                .product-details-profile-new-price-text {
                  padding-left: 5px;
                  p {
                    color: #b9b8bb;
                    font-size: 13px;
                    line-height: 14px;
                  }
                  h4 {
                    color: #fff;
                    margin: 0px;
                    font-size: 13px;
                  }
                }
              }
            }
            .flex-time-block {
              .text-flex-end {
                text-align: right;
              }
              p {
                font-size: 13px;
                color: #fff;
              }
            }
          }
        }
      }

      .common-product-block-inner-width {
        /* border: 1.5px solid ${theme.color.borderColor}; */
        padding: 15px;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
        .top-block-product {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          h4 {
            font-size: 16px;
            font-weight: 700;
            color: ${theme.color.black};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 160px;
            margin: 0;
          }
          span {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid ${theme.color.lightgrey};
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover,
            &.active {
              background-color: ${theme.color.lightRed};
              border: none;
              svg {
                fill: ${theme.color.white};
                path {
                  fill: ${theme.color.white};
                }
              }
            }
          }
        }
        .product-img-time {
          position: relative;
          width: 100%;
          height: 218px;
          margin-bottom: 12px;
          @media screen and (max-width: 767px) {
            height: auto;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
            object-fit: cover;
            object-position: top;
          }
          p {
            position: absolute;
            top: auto;
            bottom: 15px;
            left: 50%;
            transform: translate(-50%, 0px);
            /* font-size: 15px; */
            font-size: 14px;
            background: rgba(255, 255, 255, 0.7);
            padding: 6px;
            border-radius: 30px;
            width: 85%;
            text-align: center;
            font-weight: 700;
            color: ${theme.color.black};
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 15px;
            span {
              width: 42px !important;
              display: flex;
              flex-direction: row;
            }
          }
        }
        .product-details-profile {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          .product-profile {
            display: flex;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              object-fit: cover;
              &.product-img-diff {
                border-radius: 0px;
                object-fit: unset;
              }
            }
            .product-profile-details {
              padding-left: 10px;
              p {
                font-size: 13px;
                font-weight: 400;
                margin: 4px 0px 2px;
                line-height: 13px;
                color: ${theme.color.gray};
              }
              h5 {
                font-size: 13px;
                font-weight: 700;
                color: ${theme.color.black};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 96px;
                margin: 0;
              }
              .img-price-text {
                display: flex;
                align-items: center;
                img {
                  width: 13px;
                  height: auto;
                }
              }
            }
          }
        }
        .bid-common {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          p {
            font-size: 13px;
            font-weight: 400;
            margin: 0px 0px 2px;
            line-height: 13px;
            color: ${theme.color.gray};
          }
          h5 {
            display: flex;
            align-items: center;
            margin: 0px;
            span {
              font-size: 13px;
              font-weight: 700;
              color: ${theme.color.black};
              padding-right: 5px;
            }
            img {
              width: 12px;
            }
          }
          .link-bid-main {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #b9b8bb;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .floor-volume-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .floor-volume-block-inner {
            &:last-child {
              text-align: right;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
          }
          p {
            font-size: 13px;
            color: #565660;
          }
          h4 {
            display: flex;
            align-items: center;
            font-size: 13px;
            font-weight: 700;
            span {
              padding-right: 5px;
            }
            img {
              width: 12px;
            }
          }
        }
        .btn-product {
          button {
            width: 100%;
            padding: 6px;
            background: none;
            border-radius: 8px;
            border: 1px solid #bed3d6;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s;
            font-family: 'DM Sans', sans-serif;
            border-radius: 30px;
            span {
              padding: 0px 7px;
              color: ${theme.color.gray};
              font-weight: 700;
              font-size: 16px;
            }
            &:hover {
              background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
              transition: 0.5s;
              border-color: transparent;
              span {
                color: ${theme.color.white};
              }
              svg {
                path {
                  fill: ${theme.color.white};
                }
              }
            }
          }
          &.diff-padding {
            button {
              padding: 10px 11px;
              border-color: #000000;
            }
          }
        }
        .flex-time-block {
          .gd-owner-text {
            background: var(--Linear, linear-gradient(90deg, #2bd7ef -18.72%, #fb4ef1 121.02%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            font-size: 13px;
            line-height: 19px;
            &:last-child {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  &.explore-block-product {
    .common-product-block {
      .common-product-block-inner {
        .common-product-block-inner-width {
          .product-details-profile {
            &.full-width {
              .product-profile {
                width: 100%;
                .product-profile-details {
                  h5 {
                    width: 100px;
                  }
                }
              }
            }
            .product-profile {
              .product-profile-details {
                h5 {
                  width: 56px;
                }
                .img-price-text {
                  display: flex;
                  align-items: center;
                  img {
                    width: 13px;
                    height: auto;
                  }
                }
              }
            }
          }
          .btn-product {
            button {
              padding: 3px 11px;
            }
            &.diff-padding {
              button {
                padding: 10px 11px;
                border-color: #000000;
              }
            }
          }
        }
      }
    }
  }
  &.full-width-block {
    .common-product-block {
      margin: 0px;
      display: block;
      .common-product-block-inner {
        width: 100%;
      }
    }
  }
`;

export const CommonModalMain = styled(Modal)`
  font-family: "DM Sans", sans-serif;
  &.show {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  .modal-dialog {
    max-width: 800px;
    width: 800px;
    @media screen and (max-width: 991px) {
      max-width: 90%;
      width: 90%;
    }
    .modal-content {
      border-radius: 20px;
      border: none;
      .modal-header {
        padding: 25px;
        .btn-close {
          position: absolute;
          top: -20px;
          right: -20px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
          margin: 0px;
          outline: none;
          opacity: 1;
          background-image: url(../../images/close-icon-modal.png);
          width: 50px;
          height: 50px;
          background-size: contain;
          /* &:before {
            content: '';
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(97deg, #2bd7ef 0.17%, #fb4ef1 67.12%), #3749e9;
            position: absolute;
          } */
        }
      }
      .modal-title {
        font-size: 28px;
        line-height: 28px;
        font-weight: 700;
        color: ${theme.color.black};
        font-family: "DM Sans", sans-serif;
        @media screen and (max-width: 991px) {
          font-size: 24px;
          line-height: 24px;
        }
      }
      .modal-body {
        padding: 25px;
        @media screen and (max-width: 991px) {
          padding: 15px;
        }
        .top-token-block {
          .top-token-block-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .top-token-block-inner-left {
              display: flex;
              align-items: center;
              .icon-bg {
                width: 50px;
                height: 50px;
                background-color: #e5e5e5;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                border-radius: 4px;
                img {
                  width: 37px;
                }
              }
              h4 {
                font-size: 18px;
                line-height: 24px;
                color: #191820;
                margin-bottom: 5px;
                font-weight: 700;
              }
            }
          }
          .top-token-block-inner-right {
            text-align: right;
            h4 {
              font-size: 18px;
              line-height: 24px;
              color: #191820;
              margin-bottom: 5px;
              font-weight: 700;
            }
          }
          .balance-block {
            padding: 20px;
            background-color: #e5e5e5;
            border-radius: 10px;
            margin-top: 25px;
            .balance-block-inner {
              display: flex;
              align-items: center;
              justify-content: space-between;
              h4 {
                font-size: 18px;
                line-height: 24px;
                color: #191820;
                margin-bottom: 5px;
                font-weight: 700;
                margin: 0px;
              }
            }
          }
          .price-block-main {
            margin: 25px 0px;
            p {
              display: flex;
              align-items: flex-end;
              justify-content: flex-end;
            }
          }
          .price-block-inner {
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            input {
              border-radius: 10px 0px 0px 10px;
              border: 2px solid #e5e5e5;
              padding: 0px 18px;
              font-size: 18px;
              line-height: 22px;
              color: #191820;
              height: 60px;
              background: transparent;
              font-weight: 700;
              width: 80%;
              &::-webkit-input-placeholder {
                /* Chrome/Opera/Safari */
                color: #191820;
                font-weight: 700;
              }
              &::-moz-placeholder {
                /* Firefox 19+ */
                color: #191820;
                font-weight: 700;
              }
              &:-ms-input-placeholder {
                /* IE 10+ */
                color: #191820;
                font-weight: 700;
              }
              &:-moz-placeholder {
                /* Firefox 18- */
                color: #191820;
                font-weight: 700;
              }
            }
            h5 {
              width: 20%;
              font-size: 18px;
              color: #191820;
              font-weight: 700;
              border: 2px solid #e5e5e5;
              border-radius: 0px 10px 10px 0px;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 60px;
              margin: 0px;
              border-left: none;
            }
            .TX-select2-wrapper {
              width: 20%;
              border-radius: 10px;
              .TX-fix-select__control {
                border-radius: 0px 10px 10px 0px;
                border: 2px solid #e5e5e5;
                height: 60px;
                border-left: none;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: center;
                .TX-fix-select__single-value {
                  padding-top: 6px;
                  font-size: 17px;
                }
              }
            }
          }
          .duration-block {
            .duration-block-select {
              display: flex;
              .TX-select2-wrapper {
                width: 20%;
                border-radius: 10px;
                .TX-fix-select__control {
                  border-radius: 10px 0px 0px 10px;
                  border: 2px solid #e5e5e5;
                  height: 60px;
                  .TX-fix-select__value-container {
                    padding-top: 6px;
                    font-size: 17px;
                  }
                }
              }
              .react-datepicker-wrapper {
                width: 100%;
                .react-datepicker__input-container {
                  input {
                    border-radius: 10px 10px 10px 10px;
                    border: 2px solid #e5e5e5;
                    padding: 0px 18px;
                    font-size: 18px;
                    line-height: 22px;
                    color: #191820;
                    height: 60px;
                    background: transparent;
                    font-weight: 700;
                    width: 100%;
                    /* border-left: none; */
                    outline: none;
                    &::-webkit-input-placeholder {
                      /* Chrome/Opera/Safari */
                      color: #191820;
                      font-weight: 700;
                    }
                    &::-moz-placeholder {
                      /* Firefox 19+ */
                      color: #191820;
                      font-weight: 700;
                    }
                    &:-ms-input-placeholder {
                      /* IE 10+ */
                      color: #191820;
                      font-weight: 700;
                    }
                    &:-moz-placeholder {
                      /* Firefox 18- */
                      color: #191820;
                      font-weight: 700;
                    }
                  }
                }
              }
            }
          }
          .button-block {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
              margin: 0 auto;
              display: table;
              width: 260px;
            }
            @media screen and (max-width: 991px) {
              display: block;
              button {
                margin-bottom: 15px;
              }
            }
          }
        }
        .history-block-main {
          max-height: 300px;
          overflow-y: auto;
          padding-right: 30px;
          margin-bottom: 40px;
          .history-block-main-inner {
            display: flex;
            margin-bottom: 30px;
            .history-block-left {
              display: flex;
              align-items: center;
              > img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
              }
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
      }
    }
  }
  &.modal-progress-bar {
    .modal-dialog {
      .modal-content {
        .progress {
          height: 30px;
          background-color: #e5e5e5;
          border-radius: 30px;
          .progress-bar {
            background: linear-gradient(
              90.25deg,
              #2bd7ef -18.72%,
              #fb4ef1 121.02%
            );
          }
        }
        .persantage-block {
          padding: 25px 0px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          h3 {
            font-size: 22px;
            line-height: 22px;
            font-weight: 700;
            color: #191820;
            font-family: "DM Sans", sans-serif;
          }
        }
      }
    }
  }
`;

export const HomeMain = styled.div`
  position: relative;
  &.home-grapics {
    position: relative;
    .home-grapics-one {
      position: absolute;
      top: -230px;
      right: 0px;
      z-index: -8;
      img {
        width: 100%;
      }
    }
    .home-grapics-two {
      position: absolute;
      top: 21%;
      left: 0px;
      z-index: -8;
      img {
        width: 100%;
      }
    }
    .home-grapics-three {
      position: absolute;
      top: 27%;
      right: 0px;
      z-index: -8;
      img {
        width: 100%;
      }
    }
    .home-grapics-four {
      position: absolute;
      top: 39%;
      left: 0px;
      z-index: -8;
      img {
        width: 100%;
      }
    }
    .home-grapics-five {
      position: absolute;
      top: 69%;
      left: 0px;
      z-index: -8;
      img {
        width: 100%;
      }
    }
    .home-grapics-six {
      position: absolute;
      top: 70%;
      right: 10px;
      z-index: -8;
      img {
        width: 100%;
      }
    }
  }
  .container {
    max-width: 1440px;
    @media screen and (max-width: 1439px) {
      max-width: 100%;
    }
  }
  .slick-arrow {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
    position: absolute;
    top: 50%;
    left: -8px;
    z-index: 9;
    background: #fff;
    transform: translate(0px, -50%);
    &::before {
      background-image: url(../../images/arrow-black-img.png);
      content: '';
      opacity: 1;
      z-index: 9;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 8px;
      height: 16px;
      transform: translate(-50%, -50%);
    }
    &.slick-next {
      right: 5px;
      left: auto !important;
      transform: rotate(180deg) translate(-50%, -50%);
      top: 42%;
    }
  }
  .banking-revolt-section {
    background: linear-gradient(97deg, rgba(43, 215, 239, 0.4) 0.17%, rgba(251, 78, 271, 0.4) 67.12%);
    position: relative;
    padding: 15px 60px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1199px) {
      padding: 15px;
    }
    .banking-revolt-section-star {
      position: absolute;
      left: 260px;
      top: -40px;
      z-index: -8;
      @media screen and (max-width: 1199px) {
        left: 150px;
      }
      @media screen and (max-width: 992px) {
        img {
          width: 50px;
        }
      }
      @media screen and (max-width: 767px) {
        left: 0px;
      }
    }
    .banking-revolt-section-star-two {
      position: absolute;
      right: 190px;
      bottom: -72px;
      z-index: -8;
      @media screen and (max-width: 1199px) {
        right: 130px;
      }
      @media screen and (max-width: 992px) {
        img {
          width: 50px;
        }
      }
      @media screen and (max-width: 767px) {
        right: 10px;
        bottom: 0;
        z-index: 99;
      }
    }
    .banking-revolt-section-inner {
      width: 33.33%;
      span {
        background-color: rgba(251, 78, 271, 0.27);
        padding: 10px 20px;
        font-size: 16px;
        line-height: 16px;
        color: #000;
        border-radius: 30px;
        margin-bottom: 10px;
        display: inline-block;
        @media screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 14px;
        }
        @media screen and (max-width: 425px) {
          font-size: 12px;
          line-height: 14px;
          padding: 10px;
        }
      }
      p {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #000;
        margin: 0px;
        @media screen and (max-width: 767px) {
          font-size: 18px;
          line-height: 22px;
        }
        @media screen and (max-width: 425px) {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
    .banking-revolt-section-middle {
      width: 33.33%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 992px) {
        img {
          width: 160px;
        }
      }
      .poket-img-mobile {
        display: none;
      }
      @media screen and (max-width: 767px) {
        img {
          display: none;
        }
        .poket-img-mobile {
          display: block;
          width: 50px;
        }
      }
      &.dark-body {
        display: none;
      }
    }
    .banking-revolt-section-last {
      width: 33.33%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 20px;
          line-height: 20px;
          color: #000;
          font-weight: 700;
          padding-right: 10px;
          @media screen and (max-width: 767px) {
            font-size: 18px;
            line-height: 18px;
          }
        }
      }
    }
  }
  .home-slider-main {
    padding: 0px 90px 70px;
    position: relative;
    @media screen and (max-width: 1199px) {
      padding: 0px 15px 50px;
    }
    @media screen and (max-width: 767px) {
      padding: 0px 8px 35px;
    }
    .slick-arrow {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid #e5e5e5;
      position: absolute;
      top: 30%;
      left: auto;
      z-index: 9;
      background: #fff;
      transform: translate(0px, -50%);
      right: 32px;
      &::before {
        background-image: url(../../images/right-slider-arrow.svg);
        content: '';
        opacity: 1;
        z-index: 9;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 17px;
        height: 11px;
        transform: translate(-50%, -50%);
      }
      @media screen and (max-width: 991px) {
        top: 66%;
      }
      @media screen and (max-width: 767px) {
        top: 56.2%;
      }
      &.slick-next {
        right: 5px;
        left: auto !important;
        transform: rotate(180deg) translate(-50%, -50%);
        top: 24%;
        @media screen and (max-width: 991px) {
          top: 62.4%;
        }
        @media screen and (max-width: 767px) {
          top: 50.4%;
          right: 10px;
        }
      }
    }
    .home-slider-main-inner {
      .home-slider-main-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 70px 0px 60px;

        @media screen and (max-width: 991px) {
          padding: 0px 0px 25px;
          display: block;
        }
        .home-slider-main-img {
          position: relative;
          .home-slider-main-img-block {
            position: relative;
            z-index: 99;
            @media screen and (max-width: 991px) {
              margin: 0 auto;
              display: table;
            }
            img {
              width: 444px !important;
              height: 444px !important;
              border-radius: 62px;
              object-fit: cover;
              @media screen and (max-width: 1199px) {
                width: 300px !important;
                height: 300px !important;
              }
              @media screen and (max-width: 767px) {
                width: 100% !important;
                height: 100% !important;
              }
            }
          }
          /* div {
            > img {
              width: 320px;
              height: 320px;
              object-fit: cover;
              border-radius: 12px;
              position: relative;
              z-index: 99;
            }
          } */
          .overlay-grapics {
            position: absolute;
            /* top: 30px;
            left: -90px; */
            top: -160px;
            left: -120px;
            width: 562px;
            height: 500px;
            @media screen and (max-width: 991px) {
              display: none;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        .home-slider-main-content {
          padding-left: 95px;
          @media screen and (max-width: 1199px) {
            padding-left: 40px;
          }
          @media screen and (max-width: 991px) {
            padding-left: 0px;
            padding-top: 20px;
          }
          h3 {
            margin-bottom: 8px;
            font-size: 28px;
            line-height: 34px;
            color: #191820;
            font-weight: 700;
            @media screen and (max-width: 767px) {
              font-size: 24px;
              line-height: 30px;
            }
          }
          h5 {
            margin-bottom: 8px;
            font-size: 18px;
            line-height: 26px;
            color: #565660;
            font-weight: 700;
          }
          .cretor-block-main {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              object-fit: cover;
              position: relative;
              z-index: 9;
            }
            .overlay-grapics {
              position: absolute;
              top: -130px;
              z-index: 9;
              left: -90px;
            }
            .cretor-block-main-text {
              padding-left: 20px;

              p {
                font-weight: 700;
                color: #b9b9bf;
                margin-bottom: 2px;
                font-size: 20px;
                line-height: 26px;
              }
              a {
                color: #3749e9;
                font-size: 18px;
                line-height: 18px;
                font-weight: 700;
              }
            }
          }
          .bid-auction-block {
            display: flex;
            margin: 0px -25px 15px;
            @media screen and (max-width: 991px) {
              align-items: center;
              justify-content: space-between;
            }
            @media screen and (max-width: 767px) {
              margin: 0px 0px 10px;
            }
            .bid-auction-block-inner {
              padding: 0px 25px;
              @media screen and (max-width: 767px) {
                padding: 0px;
                width: 50%;
              }
              p {
                font-weight: 700;
                color: #b9b9bf;
                margin-bottom: 2px;
                font-size: 20px;
                line-height: 24px;
                @media screen and (max-width: 767px) {
                  font-size: 16px;
                  line-height: 20px;
                }
              }
              h2 {
                display: flex;
                align-items: center;
                img {
                  width: 30px;
                  height: 30px;
                  /* object-fit: cover; */
                  margin-right: 10px;
                }
                span {
                  color: #191820;
                  font-weight: 700;
                  font-size: 42px;
                  line-height: 50px;
                  white-space: nowrap;
                  @media screen and (max-width: 767px) {
                    font-size: 20px;
                    line-height: 26px;
                  }
                }
              }
              &:last-child {
                width: 320px;
                padding-left: 80px;
                @media screen and (max-width: 991px) {
                  width: 350px;
                  padding-left: 30px;
                }
                @media screen and (max-width: 767px) {
                  width: 135px;
                  padding-left: 0px;
                }
              }
            }
          }
          .btn-group-main {
            display: flex;
            align-items: center;
            @media screen and (max-width: 991px) {
              justify-content: center;
            }
            @media screen and (max-width: 767px) {
              justify-content: space-between;
            }
            button {
              padding: 15px;
              margin-right: 20px;
              width: 175px;
              border-radius: 30px;
              text-transform: capitalize;
              &:last-child {
                padding: 14px;
              }
              @media screen and (max-width: 767px) {
                width: 50%;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
    .slick-dots {
      margin: 0 auto;
      display: flex !important;
      left: 0px;
      right: 0px;
      // background-color: #FFC5FC;
      border-radius: 20px;
      height: 9px;
      position: relative;
      bottom: 0px;
      width: 210px;
      gap: 13px;
      li {
        margin: 0px;
        padding: 0px;
        width: auto;
        height: 4px;
        background-color: #ffc5fc;
        border-radius: 20px;
        button {
          padding: 0px;
          width: 70px;
          height: 4px;
          &:before {
            /* content: none; */
            // background-image: url(../../images/dots-slider-img.png);
            background-size: contain;
            opacity: 1;
            font-family: unset;
            font-size: 0px;
            background-repeat: no-repeat;
            width: 70px;
            height: 4px;
            visibility: hidden;
            opacity: 0;
            background-color: #fb4ef1;
            border-radius: 20px;
          }
        }
        &.slick-active {
          button {
            /* visibility: visible;
            opacity: 1; */
            &::before {
              visibility: visible;
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .common-title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    @media screen and (max-width: 991px) {
      margin-bottom: 15px;
    }
    h2 {
      font-size: 28px;
      line-height: 34px;
      color: #191820;
      font-weight: 700;
      margin: 0px;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      span {
        margin-right: 10px;
      }
      @media screen and (max-width: 991px) {
        font-size: 20px;
        line-height: 26px;
      }
    }
    a {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      color: #191820;
      img,
      svg {
        margin-left: 8px;
      }
    }
    &.text-center {
      text-align: center;
      justify-content: center;
    }
    &.desktop-view-title {
      @media screen and (max-width: 767px) {
        a {
          display: none;
        }
      }
    }
    &.mobile-view-block {
      margin-bottom: 0px;
      display: none;
      @media screen and (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
      }
    }
  }
  .all-category-block {
    padding: 50px 0px;
    .slider-category-block {
      .category-slider-block {
        position: relative;
        margin: 14px;
        .image-loader {
          > img {
            width: 100%;
            height: 170px;
            border-radius: 18px;
          }
        }
        .category-text {
          position: absolute;
          bottom: 0px;
          padding: 15px;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 0px 0px 18px 18px;
          width: 100%;
          h3 {
            font-size: 16px;
            line-height: 20px;
            color: #fff;
            margin: 0px;
          }
        }
      }
    }
    .slick-arrow {
      display: none !important;
      &.slick-next {
        right: 0px;
        left: auto !important;
        transform: translate(0, -50%);
        top: 50%;
        &::before {
          background-image: url(../../images/arrow-black-img-2.png);
        }
      }
    }
  }
  .blog-main {
    padding: 50px 0px;
    .blog-main-inner {
      display: flex;
      margin: 0px -8px;
      .blog-main-inner-block {
        padding: 0px 8px;
        width: 20%;
        .blog-main-inner-block-inner {
          border-radius: 12px;
          background-color: #ecebf0;
          height: 100%;
          img {
            width: 100%;
            height: 165px;
            object-fit: cover;
          }
          h3 {
            padding: 15px;
            font-size: 16px;
            line-height: 18px;
            color: #191820;
            font-weight: 600;
          }
        }
      }
    }
  }
  .tab-filter-main-block {
    padding: 50px 0px;
    @media screen and (max-width: 767px) {
      padding: 25px 0px;
    }
    .load-more-block {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      button {
        width: 140px;
      }
    }
    &.tab-filter-main-block-hot {
      .tab-filter-main-block-inner {
        .showing-result-block {
          position: relative;
          .explore-block-product {
            position: relative;
            .common-product-block {
              position: relative;
              .common-product-block-inner {
                width: 20%;
                @media screen and (max-width: 1199px) {
                  width: 33.33%;
                }
                @media screen and (max-width: 991px) {
                  width: 50%;
                }
                @media screen and (max-width: 767px) {
                  width: 100%;
                }
                .common-product-block-inner-width {
                  .product-img-time {
                    height: 300px;
                    @media screen and (max-width: 767px) {
                      height: auto;
                    }
                  }
                  .flex-hot-pics {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .btn-product {
                    button {
                      padding: 6px 11px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .popular-collection-main {
    padding: 50px 0px;
    @media screen and (max-width: 991px) {
      padding: 25px 0px;
    }
    .slick-slide {
      padding: 14px;
      @media screen and (max-width: 767px) {
        padding: 8px;
      }
    }
    .slick-arrow {
      @media screen and (max-width: 767px) {
        display: none !important;
      }
    }
    .common-product-block-popular {
      position: relative;
      display: flex;
      margin: 0px -15px;
      flex-wrap: wrap;
      .popular-collection-inner {
        width: 20%;
        position: relative;
        padding: 0px 15px 30px;
        width: 20%;
        @media screen and (max-width: 1199px) {
          width: 25%;
        }
        @media screen and (max-width: 991px) {
          width: 33.33%;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
        .popular-collection-inner-block {
          padding: 0px;
          border-radius: 0px;
          background: transparent;
          border-radius: 20px !important;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease-in;
          &:hover {
            transition: all 0.3s ease-in;
            .popular-collection-img-new {
              transition: all 0.3s ease-in;
              img {
                transform: scale(1.1);
                transition: all 0.3s ease-in;
              }
            }
          }
        }
        .top-popular-new {
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 99;
          padding: 10px;
          img {
            width: 25px;
            height: auto;
          }
        }
        .popular-collection-img-new {
          position: relative;
          width: 100%;
          height: 264px !important;
          border-radius: 20px;
          margin-bottom: 0px;
          transition: all 0.3s ease-in;
          @media screen and (max-width: 767px) {
            height: auto !important;
          }
          &:before {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 100px;
            z-index: 9;
            background-image: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.01),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.9),
              #000000
            );
          }
          > img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: top;
            border-radius: 20px;
            transition: all 0.3s ease-in;
          }
        }
        .popular-collection-new-data-main {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          z-index: 9;
          background-color: rgba(7, 11, 48, 0.7);
          padding: 15px;
          .popular-collection-new-data {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            &:last-child {
              margin-bottom: 0px;
            }
            h2 {
              font-size: 18px;
              line-height: 22px;
              color: #fff;
              font-weight: 700;
              margin: 0px;
              width: 68%;
            }
            .item-owner {
              p {
                font-size: 13px;
                line-height: 16px;
                font-weight: 700;
                &.item-color {
                  color: #fb4ef1;
                }
                &.owner-color {
                  color: #2bd7ef;
                }
              }
            }
            .bottom-data-block {
              p {
                color: #b9b8bb;
                font-size: 13px;
                line-height: 14px;
                margin-bottom: 3px;
              }
              h4 {
                color: #fff;
                margin: 0px;
                font-size: 15px;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
  .popular-collection-inner {
    .popular-collection-inner-block {
      padding: 22px;
      border-radius: 15px;
      background-color: #fff;
      box-shadow: 0 7px 25px 1px rgba(5, 34, 52, 0.06);
      .popular-collection-img {
        img {
          width: 100%;
          /* height: 145px; */
          height: 200px;
          object-fit: cover;
          /* object-fit: contain; */
          border-radius: 15px;
        }
        .img-block-popular {
          display: flex;
          align-items: center;
          margin: 0px -4px;
          .img-block-popular-left {
            width: 50%;
            padding: 0px 4px;
            img {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-radius: 15px;
            }
          }
          .img-block-popular-right {
            width: 50%;
            padding: 0px 4px;
            img {
              width: 100%;
              height: 96px;
              object-fit: cover;
              border-radius: 15px;
              margin-bottom: 8px;
              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
        }
      }
      .popular-collection-profile-flex {
        display: flex;
        align-items: center;
        padding: 15px 0px;
        border-bottom: 1px solid rgba(185, 184, 187, 0.4);
        justify-content: space-between;
        .popular-collection-profile {
          display: flex;
          align-items: center;
          position: relative;
          .popular-collection-profile-img {
            position: relative;
            > img {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              object-fit: cover;
            }
            .verify-icon-block {
              position: absolute;
              right: -3px;
              bottom: -5px;
            }
          }
        }
        .popular-collection-profile-content {
          padding-left: 10px;
          h4 {
            margin: 0px;
            font-size: 16px;
            line-height: 22px;
            color: #191820;
            font-weight: 700;
          }
          p {
            font-size: 14px;
            color: rgba(25, 24, 32, 0.6);
          }
        }
        .profile-item-block {
          h4 {
            color: #48bc65;
            font-weight: 700;
            font-size: 13px;
            line-height: 16px;
            margin: 0px;
          }
        }
      }
      .popular-collection-price {
        padding: 15px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
          margin: 0px 0px 3px;
          display: flex;
          align-items: center;
          span {
            font-size: 16px;
            line-height: 18px;
            color: #191820;
            padding-left: 8px;
          }
          img {
            width: 12px;
          }
        }
        p {
          color: #565660;
          font-size: 14px;
        }
      }
      .link-popular-block {
        a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid #b9b8bb;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            border-color: #565660;
            svg {
              path {
                fill: #565660;
              }
            }
          }
        }
      }
    }
  }
  .live-auction-block {
    padding: 50px 0px;
    @media screen and (max-width: 991px) {
      padding: 15px 0px 25px;
    }
    .slick-arrow {
      display: none !important;
    }
    .slick-slide {
      padding: 0px 8px;
    }
    .common-product-block {
      margin: 0px;
      .common-product-block-inner {
        width: 100%;
        padding: 15px 0px;
      }
    }
  }
  .traning-nft-block {
    padding: 50px 0px;
    @media screen and (max-width: 991px) {
      padding: 25px 0px 25px;
    }
    .slick-slide {
      padding: 0px 8px;
    }
    .common-product-block {
      margin: 0px;
      .common-product-block-inner {
        width: 100%;
        padding: 15px 0px;
      }
    }
    &.traning-nft-block-new {
      .common-product-block {
        margin: 0px -15px;
        .common-product-block-inner {
          width: 20%;
          padding: 0px 15px 25px;
          @media screen and (max-width: 1199px) {
            width: 25%;
          }
          @media screen and (max-width: 991px) {
            width: 33.33%;
          }
          @media screen and (max-width: 767px) {
            width: 100%;
          }
        }
      }
    }
  }
  .top-seller-block {
    .top-seller-block-main {
      display: flex;
      flex-wrap: wrap;
      margin: 0px -12px;
      .top-seller-block-inner {
        padding: 0px 12px 24px;
        width: 25%;
        @media screen and (max-width: 1199px) {
          width: 33.33%;
        }
        @media screen and (max-width: 991px) {
          width: 50%;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
        .top-seller-collection-profile-flex {
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #e5e5e5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .top-seller-collection-profile {
            display: flex;
            .top-seller-collection-profile-img {
              display: flex;
              align-items: center;
              position: relative;
              > img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
              }
              .verify-icon-block {
                position: absolute;
                right: -6px;
                bottom: 0px;
              }
            }
          }

          .top-seller-collection-profile-content {
            padding-left: 10px;
            h4 {
              margin: 0px;
              font-size: 16px;
              line-height: 22px;
              color: #191820;
              font-weight: 700;
            }
            p {
              font-size: 14px;
              color: #191820;
            }
          }
          .top-seller-item-block {
            .add-check-icon {
              width: 18px;
              height: 18px;
              border-radius: 5px;
              background-color: #191820;
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              padding: 4px;
              img {
                display: none;
              }
              svg {
                fill: #fff;
              }
            }
            .number-block-list {
              h4 {
                font-size: 13px;
                color: #b9b8bb;
                font-weight: 700;
                margin: 0px;
              }
            }
          }
        }
      }
    }
  }
  .create-art-block {
    position: relative;
    padding: 70px 0px;
    @media screen and (max-width: 991px) {
      padding: 25px 0px;
    }
    .create-art-block-inner {
      display: flex;
      align-items: center;
      margin: 0px -15px;
      background-image: url(../../images/create-nft-background.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
      @media screen and (max-width: 767px) {
        display: block;
        margin: 0px;
        background-size: 100%;
      }
      .create-btn {
        display: flex;
        button {
          width: 170px;
          border-radius: 30px;
          margin-right: 20px;
          @media screen and (max-width: 767px) {
            width: 50%;
            margin: 0px 10px;
          }
        }
      }
      .create-art-block-inner-left {
        width: 50%;
        padding: 0px 220px 0px 40px;
        @media screen and (max-width: 1199px) {
          padding: 0px 100px 0px 15px;
        }
        @media screen and (max-width: 991px) {
          padding: 0px 15px 0px 15px;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
          padding: 0px 0px 10px;
        }
        h2 {
          font-size: 56px;
          line-height: 68px;
          color: #000;
          margin-bottom: 15px;
          font-weight: 700;
          @media screen and (max-width: 991px) {
            font-size: 40px;
            line-height: 50px;
          }
          @media screen and (max-width: 767px) {
            font-size: 30px;
            line-height: 40px;
          }
          span {
            color: #3749e9;
          }
        }
        p {
          color: #bbbac2;
          margin-bottom: 12px;
        }
        .create-btn {
          @media screen and (max-width: 767px) {
            display: none;
          }
        }
      }
      .create-art-block-inner-right {
        width: 50%;
        padding: 0px 15px;
        @media screen and (max-width: 767px) {
          width: 100%;
          padding: 0px;
        }
        img {
          width: 100%;
        }
        .create-btn {
          display: none;
          @media screen and (max-width: 767px) {
            display: flex;
            margin-top: 30px;
          }
        }
      }
    }
  }
`;
