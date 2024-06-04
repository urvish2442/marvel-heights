/** @format */

import styled, { css } from "styled-components";
import theme from "../theme";
import Modal from "react-bootstrap/Modal";
// import { mediaQueries } from '../../utils/mediaQuery';

export const CreateNFTSectionWrapper = styled.div`
  padding: 80px 0;
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
  .common-center-graphics-block {
    position: absolute;
    top: 250px;
    left: 210px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      left: 0px;
      img,
      svg {
        width: 100%;
      }
    }
  }
  .common-center-graphics-block-two {
    position: absolute;
    top: -30px;
    right: 0px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      left: 0px;
      img,
      svg {
        width: 100%;
      }
    }
  }
  .common-center-graphics-block-three {
    position: absolute;
    bottom: -290px;
    left: 310px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      left: 0px;
      img,
      svg {
        width: 100%;
      }
    }
  }
  .row-col-revrece-mobile {
    @media screen and (max-width: 991px) {
      flex-direction: column-reverse;
    }
  }
  .TX-title-header-bar {
    h3 {
      margin-bottom: 40px;
    }
  }
  .container {
    max-width: 1440px;
    @media screen and (max-width: 1439px) {
      max-width: 100%;
    }
  }
  .TX-choose-blockchain-wrapper {
    max-width: 930px;
    width: 100%;
    &.TX-choose-blockchain-wrapper-diff {
      padding-right: 35px;
      @media screen and (max-width: 991px) {
        padding-right: 0px;
      }
    }
    .blockchain-icons {
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        align-items: center;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        max-width: 300px;
        width: 100%;
        justify-content: center;
        margin: 0 15px 15px 0;
        i {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
        p {
        }
      }
    }
    .selected {
      border-color: ${theme.color.primary} !important;
    }
    .radio-group-main {
      margin-bottom: 40px;
      position: relative;
      .radio-group-main-inner {
        position: relative;
        .form-check-input {
          position: absolute;
          top: 0px;
          border: 1px solid #b9b8bb;
          &:checked[type="radio"] {
            background-color: #fb4ef1;
            border-color: #fb4ef1;
          }
        }
        label {
          padding-left: 30px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          p {
            color: #191820;
            padding-left: 10px;
            font-weight: 700;
          }
          img {
            width: 15px;
          }
        }
      }
    }
    .TXtype-details-wrapper {
      margin-bottom: 18px;
      &.TXtype-details-wrapper-input {
        input {
          border-radius: 10px;
          height: 64px;
          border: 1px solid #b9b8bb;
        }
        textarea {
          border: 1px solid #b9b8bb;
        }
        .TX-fix-select__control {
          border-radius: 10px;
          border: 1px solid #b9b8bb;
          .TX-fix-select__value-container {
            min-height: 64px;
            .TX-fix-select__input-container {
              input {
                height: auto;
              }
            }
          }
        }
      }
      &.TXtype-details-wrapper-button {
        .TXbutton-wrapper {
          display: flex;
          width: 100%;
          max-width: 100%;
          button {
            width: 50%;
            border-radius: 30px;
          }
        }
      }
      .row {
        > * {
          padding-right: 15px;
          padding-left: 15px;
        }
      }
      .TX-radio-block {
        display: flex;
        flex-wrap: wrap;
        margin: 0px -15px;
        &.TX-radio-block-diff {
          width: 80%;
          @media screen and (max-width: 1199px) {
            width: 100%;
          }
          @media screen and (max-width: 991px) {
            display: block;
            margin: 0px;
          }
          .TX-radio-block-inner {
            label {
              padding: 20px;
              .TX-iconbox-wrapper {
                width: auto;
                height: auto;
                img {
                  width: 24px;
                  height: 24px;
                }
              }
            }
          }
        }
        .TX-radio-block-inner {
          position: relative;
          padding: 0px 15px 0px;
          width: 50%;
          @media screen and (max-width: 991px) {
            width: 100%;
            padding: 0px;
          }
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
            margin-bottom: 24px;
            transition: all 0.3s ease-in-out;
            position: relative;
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
            .svg-check-block {
              position: absolute;
              right: 25px;
              display: none;
            }
          }
          [type="radio"]:checked + label {
            border-color: ${theme.color.primary};
            .svg-check-block {
              display: block;
            }
          }
        }
      }
      .TX-set-add-block {
        position: relative;
        .TX-set-add-block-inner {
          width: 95%;
          .block-call-plus-add {
            position: absolute;
            right: 0px;
            width: auto;
            top: 45px;
            span {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              cursor: pointer;
              background-image: linear-gradient(
                300deg,
                hsl(303deg 96% 65%) 0%,
                hsl(205deg 100% 60%) 52%,
                hsl(189deg 100% 46%) 100%
              );
              display: flex;
              align-items: center;
              padding: 10px;
            }
          }
        }
      }
      .linkbox-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid ${theme.color.borderColor};
        margin-bottom: 24px;
        transition: all 0.3s ease-in-out;
        &:hover {
          border-color: ${theme.color.primary};
        }
        &.active {
          background: #2b2b3c0a;
        }
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
      .choose-collection-box-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #b9b8bb;
        margin-bottom: 24px;
        i {
          width: 71px;
          height: 48px;
          margin-right: 12px;
          background: #1918200d;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          img {
            width: 22px;
            height: 22px;
          }
          &.full-img {
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .choose-collection-detail {
          h6 {
            font-size: 14px;
            line-height: normal;
            color: ${theme.color.black};
            font-weight: 700;
            margin-bottom: 6px;
          }
          p {
            font-size: 13px;
            line-height: normal;
            color: ${theme.color.lightgrey};
            font-weight: 300;
            margin: 0;
          }
        }
      }
      .TXbutton-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 560px;
        width: 100%;
        button {
          margin: 0 15px 15px 0;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
export const ItemPreviewSectionWrapper = styled.div`
  .TX-preview-text-title {
    h3 {
      margin-bottom: 24px;
    }
  }
  &.item-box-shadow {
    padding-left: 35px;
    @media screen and (max-width: 991px) {
      padding-left: 0px;
    }
  }
`;
export const TXProductBoxWrapper = styled.div`
  border-radius: 12px;
  border: 2px solid ${theme.color.borderColor};
  background: ${theme.color.white};
  padding: 15px;
  &.item-box-shadow-inner {
    border: none;
    box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
    padding: 30px;
    @media screen and (max-width: 991px) {
      padding: 15px;
      margin-bottom: 50px;
    }
    .top-block-product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      h4 {
        font-size: 30px;
        line-height: 30px;
        font-weight: 700;
        color: #191820;
        margin: 0px;
      }
      .like-block {
        display: none;
      }
    }
    .product-profile-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      p {
        font-weight: 700;
      }
      .btn-product {
        button {
          width: 100%;
          padding: 14px 20px;
          background: none;
          border-radius: 8px;
          border: 1px solid #bed3d6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.color.gray};
          transition: 0.5s;
          font-family: 'DM Sans', sans-serif;
          border-radius: 30px;

          &:hover {
            background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
            transition: 0.5s;
            border-color: transparent;
            color: ${theme.color.white};
          }
        }
      }
    }
    .product-profile {
      display: flex;
      margin-bottom: 20px;
      > img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        object-fit: cover;
      }
      .product-profile-details {
        padding-left: 10px;
        h5 {
          font-size: 20px;
          line-height: 24px;
          color: #191820;
          font-weight: 700;
          margin: 0px;
          &.pls-gray {
            color: #486266;
            font-size: 16px;
          }
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
    .TX-ItemPreviewImg {
      height: 375px;
      .TX-PreviewImgBox {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .item-name-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    p {
      width: calc(100% - 45px);
    }
    span {
      width: 36px;
      height: 36px;
      border: 1px solid ${theme.color.lightgrey};
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      i {
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          display: block;
          color: ${theme.color.lightgrey};
        }
      }
    }
  }
  .TX-ItemPreviewImg {
    width: 100%;
    height: 275px;
    border-radius: 12px;
    background: #f7f7f7;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    .TX-PreviewImgBox {
      width: 100%;
      height: 100%;
    }
    .tx-time-text {
      border-radius: 87.08px;
      border: 0.871px solid rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(1.7416044473648071px);
      position: absolute;
      bottom: 15px;
      display: flex;
      justify-content: center;
      min-width: 140px;
      padding: 6px;
    }
  }
  .TX-user-detailbox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 18px;
    .subtitle-text {
      color: ${theme.color.gray};
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: capitalize;
      margin: 0;
      margin-bottom: 2px;
    }
    .title-text {
      color: #191820;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0;
    }
    .TX-user-div {
      display: flex;
      justify-content: center;
      .user-img {
        width: 36px;
        height: 36px;
        overflow: hidden;
        border-radius: 100px;
        margin-right: 12px;
      }
      .current-bid-box {
        .title-text {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          img {
            width: 14px;
            height: 14px;
            margin-left: 6px;
          }
        }
      }
    }
    .product-footer {
      button {
        i {
          width: 16px;
          height: 16px;
          display: flex;
          margin-right: 6px;
          svg {
            color: white;
          }
        }
      }
    }
  }
`;
export const CretePriceModal = styled(Modal)`
  font-family: "DM Sans", sans-serif;
  .modal-dialog {
    .modal-content {
      border-radius: 20px;
      border: none;
      .modal-header {
        padding: 25px;
      }
      .modal-title {
        font-size: 22px;
        line-height: 26px;
        font-weight: 700;
        color: ${theme.color.black};
        font-family: "DM Sans", sans-serif;
      }
      .modal-body {
        padding: 25px;
        .search-block-category {
          padding-bottom: 25px;
          position: relative;
          input {
            width: 100%;
            border-radius: 12px;
            border: none;
            background-color: rgba(25, 24, 32, 0.05);
            height: 51px;
            font-weight: 500;
            font-size: 16px;
            padding: 0px 51px;
            outline: none;
            box-shadow: none;
            color: #191820;
            font-family: "DM Sans", sans-serif;
            &::placeholder {
              color: #191820;
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
        .radio-block-main {
          height: 300px;
          overflow-y: auto;
          .radio-block-group {
            position: relative;
            input {
              position: absolute;
              left: -9999px;
            }
            label {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-bottom: 16px;
              cursor: pointer;
              .check-icon-block {
                display: none;
              }
              .nft-token-block {
                display: flex;
                align-items: center;
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  object-fit: contain;
                }
                .nft-token-block-detail {
                  padding-left: 15px;
                  h4 {
                    font-size: 18px;
                    line-height: 24px;
                    font-weight: 700;
                    color: ${theme.color.black};
                    font-family: "DM Sans", sans-serif;
                    margin: 0px;
                  }
                  p {
                    font-size: 14px;
                  }
                }
              }
            }
            [type="radio"]:checked + label {
              .check-icon-block {
                display: block;
              }
            }
          }
        }
      }
    }
  }
`;

export const CommonPageBlockPad = styled.div`
  position: relative;
  padding: 35px 0px 65px;
  @media screen and (max-width: 991px) {
    padding: 35px 0px 25px;
  }
  .container {
    max-width: 1440px;
    @media screen and (max-width: 1439px) {
      max-width: 100%;
    }
    &.common-container {
      max-width: 1620px;
      @media screen and (max-width: 1619px) {
        max-width: 100%;
      }
    }
  }
  .graphics-inner-shape {
    position: absolute;
    top: -30px;
    right: 0px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      img {
        width: 100%;
      }
    }
  }
  .graphics-inner-diff {
    position: absolute;
    top: -100px;
    right: 0px;
    z-index: -8;
    &.diff-img-graphics {
      top: -20%;
    }
    @media screen and (max-width: 991px) {
      img {
        width: 100%;
      }
    }
  }
  .common-center-graphics-block {
    position: absolute;
    top: 250px;
    left: 210px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      left: 0px;
      img,
      svg {
        width: 100%;
      }
    }
  }
  .common-center-graphics-block-two {
    position: absolute;
    top: -30px;
    right: 0px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      left: 0px;
      img,
      svg {
        width: 100%;
      }
    }
  }
  .common-center-graphics-block-three {
    position: absolute;
    bottom: -290px;
    left: 310px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      left: 0px;
      img,
      svg {
        width: 100%;
      }
    }
  }
  .search-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
      display: block;
    }
    &.d-flex-right {
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    .btn-showing-block {
      display: flex;
      align-items: center;
      p {
        font-size: 16px;
        line-height: 16px;
        color: #000;
        padding-right: 5px;
      }
      button {
        background-color: #e5e5e5;
        font-size: 16px;
        line-height: 16px;
        color: #000;
        padding: 5px;
        border: none;
        box-shadow: none;
        margin: 0px 5px;
        border-radius: 5px;
        &:hover,
        &.selected {
          background-color: #fb4ef1;
        }
      }
    }
    .search-box-inner {
      position: relative;
      @media screen and (max-width: 991px) {
        margin-bottom: 20px;
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
        font-family: 'DM Sans', sans-serif;
        @media screen and (max-width: 991px) {
          width: 100%;
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
    .TX-select2-wrapper {
      .TX-fix-select__control {
        width: 100%;
        border-radius: 10px;
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
          font-family: 'DM Sans', sans-serif;
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
  }
  .graphics-inner-shape-two {
    position: absolute;
    top: 28%;
    left: 100px;
    z-index: -8;
    &.diff-ranking {
      top: 3%;
    }
    @media screen and (max-width: 991px) {
      left: 0px;
      img {
        width: 100%;
      }
    }
  }
  .graphics-inner-shape-three {
    position: absolute;
    top: 40%;
    left: 100px;
    z-index: -8;
    @media screen and (max-width: 991px) {
      left: 0px;
      img {
        width: 100%;
      }
    }
  }
  .common-title-page {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.text-center-space {
      justify-content: center;
    }
    h1,
    h2 {
      font-size: 36px;
      line-height: 40px;
      font-weight: 700;
      color: ${theme.color.black};
      text-align: center;
      &.text-left {
        text-align: left;
      }
      &.text-center {
        text-align: center;
      }
    }
    button {
      width: 165px;
    }
  }
  .common-title-page-center {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 36px;
      line-height: 40px;
      font-weight: 700;
      color: ${theme.color.black};
      text-align: center;
      &.text-left {
        text-align: left;
      }
    }
    button {
      width: 165px;
    }
  }
  .tab-filter-main-block {
    .tab-filter-main-block-inner {
      display: flex;
      margin: 0px -22px;
      .filter-block-left {
        width: 22%;
        padding: 0px 22px;
        .filter-block-common {
          &.border-block-pad {
            border-bottom: 1px solid ${theme.color.borderColor};
            padding-top: 24px;
            padding-bottom: 24px;
            &.border-none {
              border: none;
            }
          }
          h3 {
            font-size: 20px;
            line-height: 26px;
            font-weight: 700;
            margin-bottom: 15px;
            color: ${theme.color.black};
          }
          .search-block-filter {
            position: relative;
            input {
              width: 100%;
              border-radius: 6px;
              border: 1px solid ${theme.color.borderColor};
              background-color: ${theme.color.white};
              height: 48px;
              color: ${theme.color.lightgrey};
              font-weight: 400;
              font-size: 16px;
              padding: 0px 20px;
              outline: none;
              box-shadow: none;
              font-family: 'DM Sans', sans-serif;
              &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: ${theme.color.lightgrey};
              }

              &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: ${theme.color.lightgrey};
              }

              &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: ${theme.color.lightgrey};
              }
            }
            button {
              position: absolute;
              right: 14px;
              top: 11px;
              background: none;
              border: none;
            }
          }
          .checkbox-block-custom-filter {
            .checkbox-filter-block {
              margin-bottom: 12px;
              &:last-child {
                margin-bottom: 0px;
              }
              input {
                padding: 0;
                height: initial;
                width: initial;
                margin-bottom: 0;
                display: none;
                cursor: pointer;
              }
              label {
                position: relative;
                cursor: pointer;
                display: flex;
                align-items: center;
                span {
                  width: 16px;
                  height: 16px;
                  border-radius: 4px;
                  border: 1px solid ${theme.color.lightgrey};
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  img {
                    display: none;
                  }
                }
                h4 {
                  font-size: 16px;
                  margin: 0px;
                  padding-left: 10px;
                  font-weight: 500;
                  color: ${theme.color.black};
                }
              }
              input:checked + label {
                span {
                  border: none;
                  background-color: ${theme.color.primary};
                  img {
                    display: block;
                  }
                }
              }
            }
          }
          .radio-filter-block {
            position: relative;
            input {
              position: absolute;
              left: -9999px;
            }
            label {
              display: flex;
              align-items: center;
              border-radius: 8px;
              padding: 16px 14px;
              border: 1px solid ${theme.color.borderColor};
              cursor: pointer;
              margin-bottom: 5px;
              box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.1);
              img {
                width: 20px;
                filter: grayscale(110%);
              }
              h4 {
                font-size: 16px;
                margin: 0px;
                padding-left: 12px;
                font-weight: 500;
                color: ${theme.color.black};
              }
            }
            input:checked + label {
              img {
                filter: grayscale(0%);
              }
            }
          }
        }
      }
      .showing-result-block {
        width: 78%;
        padding: 0px 22px;
        &.full-width-showing {
          width: 100%;
        }
        .top-showing-result-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          .select-block-explore {
            display: flex;
            .form-group {
              margin-left: 15px;
              @media screen and (max-width: 991px) {
                width: 50%;
                margin-right: 5px;
              }
            }
          }
          p {
            color: ${theme.color.gray};
          }
          .TX-select2-wrapper {
            .TX-fix-select__control {
              width: 240px;
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
                min-height: 45px;
                font-size: 14px;
                line-height: normal;
                color: ${theme.color.black};
                font-weight: 700;
                font-family: 'DM Sans', sans-serif;
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
                  min-height: 35px;
                  display: flex;
                  align-items: center;
                  border-radius: 100px;
                  min-height: 35px;
                  display: flex;
                  align-items: center;
                  border-radius: 100px;
                  padding: 6px 14px;
                  background: #f7f7f7;
                  border: 1px solid #e5e5e5;
                  min-width: 150px;
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
        }
        .pagination-block-custom {
          position: relative;
          align-items: flex-end;
          justify-content: flex-end;
          display: flex;
        }
      }
    }
    .top-button-select {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      @media screen and (max-width: 991px) {
        display: block;
      }
      .top-button-group {
        display: flex;
        @media screen and (max-width: 991px) {
          flex-wrap: wrap;
        }
        button {
          background-color: #fff;
          border-radius: 30px;
          padding: 8px 15px;
          background-color: #f7f7f7;
          text-transform: uppercase;
          color: #565660;
          margin-right: 10px;
          border: 1px solid #e5e5e5;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 1px;
          &:hover,
          &.selected {
            background-color: #fb4ef1;
            color: #fff;
          }
          @media screen and (max-width: 991px) {
            margin-bottom: 15px;
          }
        }
      }
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
          font-family: 'DM Sans', sans-serif;
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
  }
  .common-profile-block-main {
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
    .profile-social-link {
      position: absolute;
      top: 24px;
      right: 24px;
      ul {
        display: flex;
        align-items: center;
        padding: 11px 4px;
        margin: 0px;
        background-color: rgba(25, 28, 31, 0.3);
        border-radius: 12px;
        li {
          padding: 0px 12px;
          a {
            svg {
              width: 24px;
            }
          }
        }
      }
    }
  }
  .profile-img-upload-fill {
    position: relative;
    padding: 0px 35px;
    margin-top: -100px;
    .profile-block-img {
      width: 137px;
      height: 137px;
      border-radius: 16px;
      background-color: ${theme.color.white};
      position: relative;
      img {
        width: 137px;
        height: 137px;
        object-fit: cover;
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
  }
  .tab-block-profile {
    .nav-tabs {
      margin-left: 85px;
      border: none;
      width: 88%;
      border-bottom: 2px solid ${theme.color.borderColor};
      .nav-item {
        .nav-link {
          padding: 7px 8px;
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
    .filter-big-con {
      max-width: 1420px;
    }
    .tab-content {
      position: relative;
      padding-top: 15px;

      .table-activity {
        table {
          border: none;
          thead {
            th {
              border: none;
              font-size: 14px;
              line-height: 16px;
              color: rgba(25, 24, 32, 0.6);
              font-weight: 600;
              padding: 4px 10px 24px 10px;
              border-bottom: 2px solid ${theme.color.borderColor};
              &:first-child {
                padding-left: 0px;
              }
              &.align-end-th {
                text-align: right;
              }
            }
          }
          tbody {
            tr {
              background: none !important;
              /* &:(odd) {
								background: none !important;
							} */
              td {
                border: none;
                background: none !important;
                padding: 32px 10px 5px 10px;
                font-size: 16px;
                color: ${theme.color.black};
                font-weight: 700;
                vertical-align: middle;
                &:first-child {
                  padding-left: 0px;
                }
                &.align-end-td {
                  text-align: right;
                }
                span {
                  color: ${theme.color.lightBlue};
                  font-size: 14px;
                  font-weight: 400;
                }
                .item-td {
                  display: flex;
                  align-items: center;
                  h5 {
                    margin: 0px;
                    padding-left: 8px;
                    color: ${theme.color.gray};
                    font-weight: 700;
                  }
                }
                .profile-td-block {
                  display: flex;
                  align-items: center;
                  img {
                    width: 48px;
                    height: 48px;
                    border-radius: 8px;
                  }
                  .profile-td-details {
                    padding-left: 8px;
                    h4 {
                      font-size: 16px;
                      line-height: 18px;
                      margin-bottom: 2px;
                      color: ${theme.color.black};
                      font-weight: 700;
                    }
                    p {
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 16px;
                      color: ${theme.color.black};
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
  .slider-section {
    padding-top: 65px;
    .slider-common-block {
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
    }
  }
  .top-collection-block {
    position: relative;
    .top-banner-main {
      position: relative;
      margin-bottom: 10px;
      height: 322px;
      border-radius: 20px;
      overflow: hidden;
      @media screen and (max-width: 991px) {
        height: 200px;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        background-color: #191820;
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
      img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .add-to-block {
      position: absolute;
      bottom: 25px;
      right: 25px;
      display: flex;
      align-items: center;
      .add-to-wishlist {
        button {
          display: flex;
          padding: 12px 25px;
          align-items: center;
          background-color: #fff;
          border: none;
          border-radius: 30px;
          color: ${theme.color.black};
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          span {
            margin: 0px;
            padding-left: 8px;
          }
        }
      }
      .common-block-dots {
        margin-left: 5px;
        a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      ul {
        margin: 0px -10px;
        padding: 0px;
        list-style: none;
        display: flex;
        align-items: center;
        li {
          padding: 0px 10px;
        }
      }
    }
  }
  .ranking-table-block {
    .ranking-table-block-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ranking-table-block-top-radio {
        display: flex;
        padding: 4px;
        border-radius: 30px;
        border: 1px solid rgba(229, 229, 229, 1);
        .days-radio {
          [type='radio']:checked,
          [type='radio']:not(:checked) {
            position: absolute;
            left: -9999px;
          }
          label {
            font-size: 14px;
            color: rgba(110, 110, 120, 1);
            font-weight: 700;
            padding: 8px 12px 8px 12px;
            cursor: pointer;
            border-radius: 12px;
          }
          [type='radio']:checked + label {
            color: #191820;
            background-color: rgba(25, 24, 32, 0.05);
          }
        }
      }
      .TX-select2-wrapper {
        .TX-fix-select__control {
          width: 200px;
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
            min-height: 45px;
            font-size: 14px;
            line-height: normal;
            color: ${theme.color.black};
            font-weight: 700;
            font-family: 'DM Sans', sans-serif;
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
              min-height: 35px;
              display: flex;
              align-items: center;
              border-radius: 100px;
              min-height: 35px;
              display: flex;
              align-items: center;
              border-radius: 100px;
              padding: 6px 14px;
              background: #f7f7f7;
              border: 1px solid #e5e5e5;
              min-width: 150px;
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
    }
    .ranking-table-block-top-button {
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 991px) {
        flex-wrap: wrap;
      }
      button {
        margin: 0px 7px;
        padding: 8px 16px;
        background-color: #f7f7f7;
        color: #565660;
        border: 1px solid #e5e5e5;
        font-size: 14px;
        line-height: 14px;
        border-radius: 30px;
        text-transform: uppercase;
        box-shadow: none;
        outline: none;
        font-weight: 700;
        &:hover,
        &.selected {
          background-color: #fb4ef1;
          border: 1px solid #fb4ef1;
          color: #fff;
        }
        @media screen and (max-width: 991px) {
          margin-bottom: 10px;
        }
      }
    }
    .ranking-table-block {
      padding-top: 15px;
      @media screen and (max-width: 991px) {
        overflow-x: scroll;
      }
      table {
        @media screen and (max-width: 991px) {
          width: 1030px;
        }
        thead {
          th {
            padding: 15px;
            color: #6c7d80;
            font-weight: 400;
            font-size: 14px;
            font-family: 'DM Sans', sans-serif;
            border: none;
            background-color: transparent;
            /* &:first-child {
              padding-left: 0px;
            } */
          }
        }
        tbody {
          tr {
            &:nth-child(even) {
              background-color: rgb(197, 213, 215, 0.19);
            }
          }
          td {
            vertical-align: middle;
            padding: 15px;
            color: #000;
            font-weight: 700;
            font-size: 16px;
            border: none;
            font-family: 'DM Sans', sans-serif;
            background-color: transparent;
            .puls-chin-logo {
              img {
                width: 30px;
                margin-right: 5px;
              }
            }
            .collection-name {
              display: flex;
              align-items: center;

              .collection-profile {
                position: relative;
                > img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  object-fit: cover;
                }
                .verify-dots {
                  position: absolute;
                  bottom: -5px;
                  right: -3px;
                }
              }
              h3 {
                padding-left: 16px;
                font-weight: 600;
                font-size: 18px;
                margin: 0px;
              }
            }
            .total-volume-block {
              display: flex;
              align-items: center;
              img {
                margin-right: 8px;
                width: 25px;
              }
            }
            .flex-reward {
              display: flex;
              align-items: center;
              .reward-block {
                margin-left: 10px;
                background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
                display: flex;
                align-items: center;
                padding: 3px 5px;
                border-radius: 10px;
                span {
                  font-size: 12px;
                  padding-left: 3px;
                  color: #fff;
                }
              }
            }
            &.green-text {
              color: #48bc65;
            }
            &.red-text {
              color: #e33b3b;
            }
          }
        }
      }
    }
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center !important;
      li {
        padding: 0px 5px;
        @media screen and (max-width: 991px) {
          padding: 0px 3px;
        }
        &.active,
        &:hover {
          a {
            background-color: #fb4ef1;
          }
        }
        a {
          background-color: #e5e5e5;
          display: flex;
          align-items: center;
          justify-content: center !important;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 14px;
          font-weight: 700;
          color: #000000;
          border: none;
          @media screen and (max-width: 991px) {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
  .profile-main-collection {
    margin: -110px auto 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    @media screen and (max-width: 991px) {
      margin: -60px auto 40px;
    }
    .profile-img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 20px;
      @media screen and (max-width: 991px) {
        width: 100px;
        height: 100px;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .details-profile-block {
      margin-top: 30px;
      h3 {
        font-size: 36px;
        line-height: 36px;
        font-weight: 700;
        color: ${theme.color.black};
        @media screen and (max-width: 991px) {
          font-size: 30px;
          line-height: 30px;
        }
      }
      p {
        font-size: 16px;
        color: #fb4ef1;
      }
    }
    ul {
      display: flex;
      align-items: center;
      margin: 0px 20px;
      padding: 0px;
      display: flex;
      @media screen and (max-width: 767px) {
        position: absolute;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
      }
      li {
        padding: 0px 6px;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 47px;
          height: 47px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
          border-radius: 50%;
        }
      }
    }
  }
  .contact-block-main {
    display: flex;
    @media screen and (max-width: 991px) {
      display: block;
    }
    .contact-block-main-left {
      width: 50%;
      @media screen and (max-width: 991px) {
        display: none;
      }

      .last-contact-block {
        width: 100%;
        img {
          width: 100%;
          height: auto;
          border-radius: 15px;
        }
      }
    }
    .contact-block-main-right {
      width: 50%;
      padding: 30px 100px 30px 100px;
      @media screen and (max-width: 1199px) {
        padding: 30px 50px 30px 50px;
      }
      @media screen and (max-width: 991px) {
        padding: 15px;
        width: 100%;
      }

      .contact-title {
        margin-bottom: 45px;
        h2 {
          font-size: 36px;
          line-height: 40px;
          color: #191820;
          margin-bottom: 15px;
          font-weight: 700;
        }
        p {
          color: #667085;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          a {
            color: #fb4ef1;
          }
        }
      }
      .TXtype-details-wrapper {
        input {
          border-radius: 8px;
          height: 64px;
          background-color: transparent;
        }
      }
      .button-contact {
        button {
          border-radius: 30px;
        }
      }
    }
  }
  .help-center-block {
    .help-center-block-title {
      text-align: center;
      margin-bottom: 30px;
      h2 {
        font-size: 30px;
        line-height: 40px;
        color: #191820;
        margin-bottom: 15px;
        font-weight: 700;
      }
      p {
        color: rgba(25, 24, 32, 0.6);
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        width: 60%;
        margin: 0 auto;
        @media screen and (max-width: 991px) {
          width: 100%;
        }
      }
    }
    .help-center-block-form {
      .search-box-form {
        margin: 0px auto;
        position: relative;
        width: 760px;
        @media screen and (max-width: 991px) {
          width: 100%;
        }
        input {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #d1d1d1;
          padding: 14px 46px;
          align-items: flex-start;
          font-size: 16px;
          line-height: normal;
          color: ${theme.color.black};
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          background-color: transparent;
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
        }
        button {
          position: absolute;
          left: 20px;
          padding: 0px;
          height: auto;
          width: auto;
          background: none;
          border: none;
          outline: none;
          top: 10px;
        }
      }
    }
    .start-block-form-flex {
      margin: 0 auto;
      width: 100%;
    }
    .start-block-form {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 50px -5px 0px;

      .start-block-form-inner {
        width: 33.33%;
        padding: 0px 5px 10px;
        @media screen and (max-width: 767px) {
          width: 100%;
        }
        .start-block-form-block {
          width: 100%;
          height: 178px;
          padding: 40px 28px;
          text-align: center;
          border: 1px solid #d8d8d8;
          border-radius: 20px;
          .icon-main {
            width: 60px;
            height: 60px;
            border-radius: 50px;
            background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
          }
          h3 {
            font-size: 20px;
            line-height: 26px;
            color: #191820;
            margin: 0px;
            font-weight: 700;
          }
        }
      }
    }
    &.page-not-found {
      .help-center-block-title {
        h2 {
          font-size: 50px;
          line-height: 50px;
          margin-bottom: 20px;
        }
        button {
          background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
          ${'' /* background: linear-gradient(to right, #80ffcc, #f326b4, #f326b4); */}
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
      }
      .page-not-found {
        text-align: center;
        padding: 0px 220px;
        @media screen and (max-width: 991px) {
          padding: 0px 25px;
        }
      }
    }
    .terms-condition-block {
      display: flex;
      padding: 30px 50px;
      @media screen and (max-width: 1199px) {
        padding: 15px;
      }
      @media screen and (max-width: 767px) {
        display: block;
      }
      .terms-condition-block-link {
        width: 20%;
        padding: 0px 15px;
        @media screen and (max-width: 1199px) {
          width: 26%;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
        .terms-condition-block-link-inner {
          a {
            padding: 15px 20px;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            display: block;
            margin-bottom: 10px;
            &.active {
              border-radius: 15px;
              border: 1px solid #c4c4c4;
              background-color: rgba(196, 196, 196, 0.19);
            }
          }
        }
      }
      .terms-condition-block-content {
        width: 80%;
        padding: 0px 25px;
        @media screen and (max-width: 1199px) {
          width: 74%;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
        h4 {
          color: #000;
          font-size: 20px;
          line-height: 26px;
          font-weight: 700;
          margin: 20px 0px 15px 0px;
        }
        p {
          font-size: 16px;
          line-height: 24px;
          color: #000000;
          margin-bottom: 15px;
        }
      }
    }
    .faq-main-block {
      padding: 0px 250px;
      @media screen and (max-width: 1199px) {
        padding: 0px 50px;
      }
      @media screen and (max-width: 991px) {
        padding: 0px 25px;
      }
      @media screen and (max-width: 767px) {
        padding: 0px 15px;
      }
      .accordion {
        .accordion-item {
          border: none;
          border-bottom: 1px solid #eaecf0;
          background: none;
          .accordion-header {
            .accordion-button {
              padding: 15px 0px;
              background: none;
              outline: none;
              box-shadow: none;
              color: #101828;
              font-size: 20px;
              font-weight: 500;

              &::after {
                content: '';
                background-image: url('data:image/svg+xml,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="%23FB4EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
                position: absolute;
                right: 0px;
                background-size: contain;
                width: 20px;
                height: 20px;
                top: 23px;
                background-repeat: no-repeat;
              }

              &.collapsed {
                &::after {
                  background-image: url('data:image/svg+xml,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="%23FB4EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
                }
              }
            }
          }
          .accordion-body {
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 30px;
            p {
              font-size: 20px;
              line-height: 30px;
              color: #667085;
              font-weight: 500;
            }
          }
        }
      }
    }
    .import-pages-block {
      .import-pages-block-form {
        width: 69%;
        margin: 0 auto;
        label {
          font-size: 20px;
          line-height: 26px;
          margin-bottom: 12px;
          display: block;
        }
        .TX-choose-blockchain-wrapper {
          .TXtype-details-wrapper-file {
            label {
              text-align: center;
              font-size: 20px;
              line-height: 26px;
              color: #191820;
              text-align: center;
              margin: 0 auto 12px;
              display: table;
              font-weight: 700;

              span {
                color: #b9b9bf;
                font-size: 16px;
                font-weight: 400;
              }
            }
          }
          input:not([type='file']) {
            border-radius: 10px;
            height: 62px;
          }
          .TX-select2-wrapper {
            .TX-fix-select__control {
              border-radius: 10px;
            }
          }
          .btn-import-block {
            margin: 0 auto;
            display: table;
            button {
              border-radius: 30px;
              width: 400px;
            }
          }
        }
      }
    }
  }
  .blog-main-inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0px -12px;
    .blog-main-inner-block {
      width: 33.33%;
      padding: 0px 12px 24px;
      @media screen and (max-width: 991px) {
        width: 50%;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      .blog-main-block {
        padding: 23px;
        /* border: 1px solid #e5e5e5; */
        border-radius: 18px;
        @media screen and (max-width: 1199px) {
          padding: 10px;
        }
        .main-blog-img {
          width: 100%;
          height: 240px;
          border-radius: 16px;
          object-fit: cover;
        }
        .title-blog-inner {
          display: flex;
          justify-content: space-between;
          padding: 25px 0px 18px;
          h3 {
            font-size: 24px;
            line-height: 30px;
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            color: #191820;
            text-overflow: ellipsis;
            width: 210px;
            margin: 0px;
          }
          button {
            font-weight: 700;
            color: #fff;
            font-size: 14px;
            background-color: #fb4ef1;
            border-radius: 30px;
            border: none;
            padding: 7px 11px;
          }
        }
        p {
          font-size: 16px;
          line-height: 22px;
          color: rgba(25, 24, 32, 0.6);
          overflow: hidden;
          display: block;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          height: auto;
        }
        .blog-last-block {
          display: flex;
          align-items: center;
          /* justify-content: space-between; */
          padding-top: 20px;
          .blog-last-block-inner {
            display: flex;
            align-items: center;
            h5 {
              margin: 0px;
              color: #565660;
              font-size: 16px;
              padding-left: 5px;
            }
          }
        }
      }
    }
  }
  .blog-details-block {
    display: flex;
    margin: 0px -25px;
    .blog-details-block-left {
      width: 70%;
      padding: 0px 25px;
      h2 {
        font-size: 36px;
        line-height: 40px;
        color: #191820;
        font-weight: 700;
        margin-bottom: 25px;
      }
      .profile-blog {
        display: flex;
        align-items: center;
        padding-bottom: 25px;
        img {
          width: 37px;
          height: 37px;
          border-radius: 50%;
          object-fit: cover;
        }
        ul {
          margin: 0px;
          padding: 0px 0px 0px 10px;
          list-style: none;
          display: flex;
          li {
            padding-right: 25px;
            font-size: 16px;
            line-height: 20px;
            color: #565660;
            position: relative;
            &::before {
              content: '|';
              position: absolute;
              right: 10px;
              top: 0px;
            }
            span {
              color: #191820;
              padding-left: 5px;
            }
            &:last-child {
              &::before {
                content: none;
              }
            }
          }
        }
      }
      .blog-detail-review {
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 30px;
        .blog-detail-review-b {
          img {
            width: 100%;
            height: auto;
            margin-bottom: 25px;
            border-radius: 16px;
          }
          h3,
          h2,
          h4 {
            font-size: 24px;
            line-height: 30px;
            color: #191820;
            margin-bottom: 15px;
            font-weight: 700;
          }
          p {
            font-size: 16px;
            line-height: 22px;
            color: rgba(25, 24, 32, 0.6);
            margin-bottom: 25px;
          }
          .blog-detail-review-img {
            display: flex;
            margin: 0px -10px;
            img {
              width: 100%;
              height: 200px;
              border-radius: 16px;
              object-fit: cover;
            }
            .blog-detail-review-img-inner {
              width: 50%;
              padding: 0px 10px;
            }
          }
          .share-details-block {
            display: flex;
            align-items: center;
            justify-content: space-between;
            ul {
              margin: 0px;
              padding: 0px;
              list-style: none;
              display: flex;
              margin: 0px -3px;
              align-items: center;
              li {
                padding: 0px 3px;
                h4 {
                  color: #191820;
                  font-size: 16px;
                  font-weight: 700;
                  padding-right: 4px;
                  margin: 0px;
                }
                p {
                  margin: 0px;
                }
              }
            }
          }
        }
      }
      .leave-commnet-block {
        padding-top: 50px;
        .form-group-two {
          display: flex;
          margin: 0px -8px;
          > div {
            width: 50%;
            padding: 0px 8px;
          }
        }
        input,
        textarea {
          border-radius: 5px !important;
        }
        button {
          width: auto;
          padding-left: 19px;
          padding-right: 19px;
        }
      }
    }
    .blog-details-block-right {
      width: 30%;
      padding: 0px 25px;
      h2 {
        font-size: 36px;
        line-height: 40px;
        color: #191820;
        font-weight: 700;
        margin-bottom: 25px;
      }
      .blog-details-block-right-profile {
        .blog-details-block-right-profile-inner {
          display: flex;
          border-bottom: 1px solid #e5e5e5;
          padding: 20px 0px;
          img {
            width: 40px;
            height: 40px;
            border-radius: 4px;
          }
          .blog-details {
            width: 100%;
            padding-left: 12px;
            h3 {
              font-weight: 700;
              font-size: 14px;
              line-height: 18px;
              color: #191820;
              margin-bottom: 5px;
            }
            .blog-details-text {
              display: flex;
              align-items: center;
              justify-content: space-between;
              p {
                font-size: 11px;
                line-height: 18px;
                color: rgba(25, 24, 32, 0.6);
              }
              .blog-details-text-p {
                p {
                  white-space: nowrap;
                  -webkit-box-orient: vertical;
                  text-overflow: ellipsis;
                  width: 140px;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
      .popular-tag-block {
        padding-top: 35px;
        ul {
          margin: 0px;
          padding: 0px;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          margin: 0px -4px;
          li {
            padding: 0px 4px 10px;
            button {
              font-size: 13px;
              border: 1px solid #e5e5e5;
              background-color: #f7f7f7;
              padding: 8px 15px;
              display: block;
              border-radius: 30px;
              color: #191820;
              &:hover {
                background-color: #fb4ef1;
                border-color: #fb4ef1;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  &.no-container-padding {
    padding: 50px;
    @media screen and (max-width: 1399px) {
      padding: 15px;
    }
  }
  &.public-profile-page {
    padding: 0px;
  }
  .name-details-block {
    display: flex;
    margin: 0px -15px 40px;
    @media screen and (max-width: 991px) {
      display: block;
    }
    .name-details-block-left {
      width: 50%;
      padding: 0px 15px;
      @media screen and (max-width: 991px) {
        width: 100%;
        margin-bottom: 15px;
        margin-top: 15px;
      }
      h3 {
        font-size: 30px;
        line-height: 35px;
        color: #000;
        font-weight: 400;
        margin-bottom: 50px;
        svg {
          margin-left: 5px;
        }
      }
      .last-text {
        margin-top: 30px;
        width: 60%;
        @media screen and (max-width: 991px) {
          width: 100%;
        }
        strong {
          color: #000;
        }
      }
      .name-details-text {
        display: flex;
        align-items: center;
        @media screen and (max-width: 767px) {
          flex-wrap: wrap;
        }
        p {
          font-size: 16px;
          line-height: 20px;
          color: #636363;
          padding-right: 30px;
          margin-bottom: 10px;
          white-space: nowrap;
          strong {
            font-weight: 700;
            color: #000;
          }
          .high-block {
            color: #000;
            padding: 3px 5px;
            background-color: #2bd7ef;
            border-radius: 8px;
            margin-left: 10px;
          }
          &.highlight-block-gr {
            ${'' /* background: linear-gradient(to right, #2bd7ef, #9095f0, #fb4ef1); */}
            background: linear-gradient(90.25deg, #2BD7EF -18.72%, #9095F0 48.96%, #FB4EF1 121.02%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            word-break: break-word;
            white-space: normal;
          }
          &.d-flex-block {
            display: flex;
          }
        }
      }
    }
    .name-details-block-right {
      width: 50%;
      padding: 0px 15px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      @media screen and (max-width: 991px) {
        width: 100%;
        margin-bottom: 15px;
      }
      .name-details-block-right-inner {
        padding: 20px;
        border-radius: 20px;
        border: 1px solid #e9e9e9;
        width: 400px;
        @media screen and (max-width: 991px) {
          width: 100%;
        }
        .name-details-block-right-date {
          border-bottom: 1px solid #efefef;
          &:last-child {
            margin-top: 15px;
            border: none;
            p {
              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
          p {
            margin-bottom: 15px;
            font-size: 16px;
            font-size: #636363;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              &:last-child {
                color: #000000;
                font-weight: 700;
                text-align: right;
              }
              &.copy-text {
                color: #fb4ef1;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
  }
  .filter-block-common {
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
    .back-button {
      display: flex;
      align-items: center;
      width: 100px;
      height: 50px;
      border-radius: 10px;
      border: 1px solid #d1d1d1;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
      font-size: 18px;
      margin-right: 10px;
      @media screen and (max-width: 767px) {
        order: 4;
        width: 23%;
        margin: 0px;
      }
    }
    .search-form-block {
      width: 75%;
      margin-right: 10px;
      @media screen and (max-width: 767px) {
        order: 1;
        margin-bottom: 10px;
        width: 54%;
      }
      .search-box-form {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        input {
          width: 100%;
          border-radius: 12px;
          border: none;
          background-color: #ffffff;
          height: 51px;
          font-weight: 400;
          font-size: 16px;
          padding: 0px 46px;
          border: 1px solid #d1d1d1;
          outline: none;
          color: #9e9e9e;
          box-shadow: none;
          font-family: 'DM Sans', sans-serif;
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
    }
    .form-group {
      @media screen and (max-width: 767px) {
        order: 3;
        width: 70%;
        margin-right: 15px;
      }
    }
    .TX-select2-wrapper {
      .TX-fix-select__control {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #d1d1d1;
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
          font-family: 'DM Sans', sans-serif;
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
            border-radius: 10px;
            padding: 6px 14px;
            background: #f7f7f7;
            border: 1px solid #d1d1d1;
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
    .odd-filter-block {
      display: flex;
      button {
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: 1px solid #d1d1d1;
        margin-left: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:disabled {
          opacity: 0.5;
        }
      }
      @media screen and (max-width: 767px) {
        order: 2;
        margin-bottom: 10px;
      }
    }
  }
  .filter-block-data-block {
    display: flex;
    padding: 50px 0px;
    margin: 0px -25px;
    @media screen and (max-width: 1399px) {
      padding: 25px 0px;
    }
    @media screen and (max-width: 991px) {
      display: block;
      margin: 0px;
    }
    .filter-block-data-block-left {
      width: 25%;
      padding: 0px 30px;
      @media screen and (max-width: 1199px) {
        padding: 0px 15px;
      }
      @media screen and (max-width: 991px) {
        padding: 0px 15px 25px;
        width: 100%;
      }
      .filter-block-data-block-left-inner {
        background-color: #fff;
        border-radius: 20px;
        padding: 40px;
        @media screen and (max-width: 1399px) {
          padding: 15px;
        }
        .accordion {
          .accordion-item {
            padding: 30px 0px 30px;
            border: none;
            border-bottom: 1px solid #efefef;
            border-radius: 0px;
            @media screen and (max-width: 991px) {
              padding: 15px 0px 15px;
            }
            .accordion-button {
              background: transparent;
              padding: 0px;
              border: none;
              box-shadow: none;
              font-size: 20px;
              font-weight: 700;
              color: #000;
              &::after {
                width: 15px;
                height: 15px;
                background-size: contain;
              }
            }
            .accordion-collapse {
              border: none;
              padding: 30px 0px 0px;
              .accordion-body {
                padding: 0px;
              }
              .status-button {
                display: flex;
                flex-wrap: wrap;
                button {
                  margin-right: 10px;
                  color: #000000;
                  font-size: 16px;
                  font-weight: 700;
                  background-color: #efefef;
                  margin-bottom: 10px;
                  padding: 11px 19px;
                  border-radius: 10px;
                  border: none;
                  transition: 0.5s;
                  font-family: 'DM Sans', sans-serif;

                  &:hover,
                  &.selected {
                    background-color: #000;
                    color: #fff;
                  }
                }
              }
              .search-form-block {
                width: 100%;
                .search-box-form {
                  display: flex;
                  align-items: center;
                  width: 100%;
                  position: relative;
                  input {
                    width: 100%;
                    border-radius: 12px;
                    border: none;
                    background-color: #ffffff;
                    height: 50px;
                    font-weight: 400;
                    font-size: 16px;
                    padding: 0px 46px;
                    border: 1px solid #d1d1d1;
                    outline: none;
                    color: #9e9e9e;
                    box-shadow: none;
                    font-family: 'DM Sans', sans-serif;
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
              }
              .checkbox-block-custom-filter {
                .checkbox-filter-block {
                  margin-bottom: 12px;
                  &:last-child {
                    margin-bottom: 0px;
                  }
                  input {
                    padding: 0;
                    height: initial;
                    width: initial;
                    margin-bottom: 0;
                    display: none;
                    cursor: pointer;
                  }
                  .flex-block-check {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                  }
                  label {
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    span {
                      width: 16px;
                      height: 16px;
                      border: 1px solid #b3b3b3;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      img {
                        display: none;
                      }
                    }
                    h4 {
                      font-size: 16px;
                      margin: 0px;
                      padding-left: 10px;
                      font-weight: 400;
                      color: ${theme.color.black};
                    }
                  }
                  input:checked + label {
                    span {
                      border: none;
                      background-color: ${theme.color.primary};
                      img {
                        display: block;
                      }
                    }
                  }
                }
              }
              .radio-filter-block {
                position: relative;
                input {
                  position: absolute;
                  left: -9999px;
                }
                label {
                  display: flex;
                  align-items: center;
                  border-radius: 8px;
                  padding: 16px 14px;
                  border: 1px solid ${theme.color.borderColor};
                  cursor: pointer;
                  margin-bottom: 5px;
                  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.1);
                  img {
                    width: 20px;
                    filter: grayscale(110%);
                  }
                  h4 {
                    font-size: 16px;
                    margin: 0px;
                    padding-left: 12px;
                    font-weight: 500;
                    color: ${theme.color.black};
                  }
                }
                input:checked + label {
                  img {
                    filter: grayscale(0%);
                  }
                }
              }
              .search-collection-block {
                padding: 30px 0px 0px;
                .search-collection-block-inner {
                  display: flex;
                  margin-bottom: 15px;
                  justify-content: space-between;
                  .search-collection-block-left {
                    display: flex;
                    width: 60%;
                    align-items: center;
                    img {
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                    }
                    .content-block {
                      padding-left: 10px;
                      h4 {
                        display: flex;
                        align-items: center;
                        margin: 0px;
                        span {
                          font-size: 16px;
                          line-height: 20px;
                          white-space: nowrap;
                          font-weight: 600;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          width: 140px;
                          margin-right: 5px;
                          color: #000000;
                        }
                      }
                      p {
                        margin: 0px;
                        font-size: 12px;
                        color: #7b8c8e;
                        line-height: 18px;
                      }
                    }
                  }
                  .search-collection-block-right {
                    width: 40%;
                    text-align: right;
                    p {
                      margin: 0px;
                      font-size: 12px;
                      color: #7b8c8e;
                      line-height: 18px;
                    }
                    h4 {
                      font-size: 16px;
                      line-height: 20px;
                      font-weight: 600;
                      color: #000000;
                      margin: 0px;
                    }
                  }
                }
                .load-more {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 10px;
                  button {
                    padding: 3px 11px;
                    width: 120px;
                    background: none;
                    border-radius: 8px;
                    border: 1px solid #bed3d6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: 0.5s;
                    font-family: 'DM Sans', sans-serif;
                    border-radius: 30px;
                    color: #000000;
                  }
                }
              }
            }
          }
        }
      }
    }
    .filter-block-data-block-right {
      width: 75%;
      padding: 0px 25px;
      @media screen and (max-width: 991px) {
        width: 100%;
        padding: 0px;
      }
      .explore-block-product {
        .common-product-block {
          .common-product-block-inner {
            .common-product-block-inner-width {
              .product-details-profile {
                .product-profile {
                  img {
                    border-radius: 10px;
                  }
                }
              }
            }
          }
        }
      }
      .common-btn-block {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        button {
          width: 190px;
        }
      }
      .top-showing-result-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 12px;
        @media screen and (max-width: 991px) {
          display: block;
          padding-bottom: 15px;
        }
        .select-block-explore {
          display: flex;
          .form-group {
            margin-left: 15px;
            @media screen and (max-width: 991px) {
              width: 50%;
              margin-right: 5px;
              .TX-fix-select__control {
                width: 100% !important;
              }
            }
          }
        }
        p {
          color: ${theme.color.gray};
          @media screen and (max-width: 991px) {
            padding-bottom: 15px;
          }
        }
        .TX-select2-wrapper {
          .TX-fix-select__control {
            width: 240px;
            border-radius: 10px;
            border: 1px solid ${theme.color.borderColor};
            align-items: flex-start;
            font-size: 14px;
            line-height: normal;
            color: ${theme.color.black};
            font-weight: 600;
            outline: none;
            box-shadow: none;
            .TX-fix-select__value-container {
              min-height: 45px;
              font-size: 14px;
              line-height: normal;
              color: ${theme.color.black};
              font-weight: 700;
              font-family: 'DM Sans', sans-serif;
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
                min-height: 35px;
                display: flex;
                align-items: center;
                border-radius: 100px;
                min-height: 35px;
                display: flex;
                align-items: center;
                border-radius: 100px;
                padding: 6px 14px;
                background: #f7f7f7;
                border: 1px solid #e5e5e5;
                min-width: 150px;
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
      }
      .addvertise-block {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        img {
          width: 100%;
        }
      }
    }
  }
  .auction-top-block-main {
    position: relative;
    margin-bottom: 100px;
    .container {
      max-width: 1520px;
      @media screen and (max-width: 1519px) {
        max-width: 100%;
      }
    }
    .auction-top-block {
      display: flex;
      align-items: center;
      position: relative;
      margin: 0px -15px;
      @media screen and (max-width: 991px) {
        display: block;
      }
      .auction-top-block-left {
        width: 40%;
        padding: 0px 15px;
        position: relative;
        @media screen and (max-width: 991px) {
          width: 100%;
        }
        .auction-graphics {
          position: absolute;
          top: -130px;
          right: -20px;
          @media screen and (max-width: 991px) {
            display: none;
          }
        }
        .auction-top-block-left-inner {
          position: relative;
          h2 {
            font-size: 70px;
            line-height: 80px;
            color: #191820;
            font-weight: 700;
            margin-bottom: 116px;
            @media screen and (max-width: 1399px) {
              font-size: 50px;
              line-height: 50px;
              margin-bottom: 0px;
            }
            @media screen and (max-width: 991px) {
              text-align: center;
              margin-bottom: 15px;
              font-size: 30px;
              line-height: 38px;
              br {
                display: none;
              }
            }
          }
          .btn-group-main {
            display: flex;
            align-items: center;
            button {
              width: 170px;
              border-radius: 30px;
              margin-right: 12px;
            }
          }
        }
      }
      .auction-top-block-right {
        width: 60%;
        padding: 0px 15px;
        position: relative;
        @media screen and (max-width: 991px) {
          width: 100%;
        }
        .auction-graphics {
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          margin: 0 auto;
          display: table;
          @media screen and (max-width: 767px) {
            display: none;
          }
        }
        .auction-top-block-right-inner {
          margin: 0 auto;
          display: table;
          position: relative;

          .auction-top-block-frame {
            width: 500px;
            height: 550px;
            border-radius: 30px;
            background: linear-gradient(to left, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.07));
            padding: 24px;
            position: relative;
            @media screen and (max-width: 767px) {
              padding: 20px;
              width: 280px;
              height: 340px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 16px;
            }
            .auction-bid {
              position: absolute;
              top: 30%;
              left: -65px;
              background-color: #f5e6d5;
              border-radius: 16px;
              padding: 16px;
              text-align: center;
              @media screen and (max-width: 767px) {
                padding: 10px;
                left: -25px;
              }
              p {
                color: #565660;
                margin-bottom: 10px;
                font-weight: 700;
                font-size: 16px;
                @media screen and (max-width: 767px) {
                  font-size: 14px;
                }
              }
              h4 {
                color: #3749e9;
                background-color: #fff;
                padding: 8px 12px;
                border-radius: 16px;
                font-size: 20px;
                font-weight: 700;
                @media screen and (max-width: 767px) {
                  font-size: 16px;
                  padding: 8px;
                }
              }
            }
            .bid-profile-block {
              display: flex;
              align-items: center;
              padding: 28px;
              background-color: #e2eee3;
              border-radius: 16px;
              position: absolute;
              bottom: 120px;
              right: -170px;
              @media screen and (max-width: 1399px) {
                bottom: 50px;
                right: 0px;
                padding: 14px;
              }
              img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: cover;
                @media screen and (max-width: 767px) {
                  width: 40px;
                  height: 40px;
                }
              }
              .bid-profile-block-text {
                padding-left: 10px;
                h3 {
                  font-size: 24px;
                  color: #1c4c1d;
                  font-weight: 700;
                  margin-bottom: 10px;
                  @media screen and (max-width: 767px) {
                    font-size: 20px;
                  }
                }
                p {
                  font-weight: 400;
                  color: #628363;
                  font-size: 16px;
                  @media screen and (max-width: 767px) {
                    font-size: 14px;
                  }
                }
              }
            }
          }
          .time-line-block-inner {
            margin: 0 auto;
            display: table;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #e5e5e5;
            position: relative;
            top: -20px;
            h3 {
              margin: 0px;
              display: flex;
              align-items: center;
              font-size: 20px;
              font-weight: 800;
              color: #191820;
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
      }
    }
  }
  .top-collection-block-main {
    padding: 0px 50px;
    @media screen and (max-width: 1600px) {
      padding: 0px 15px;
    }
  }
  .two-block-profile {
    display: flex;
    margin: 0px -15px;
    padding: 40px 0px;
    @media screen and (max-width: 991px) {
      display: block;
      padding: 30px 0px;
    }

    .toggle {
      position: relative;
      width: calc(var(--sz) * 4);
      height: calc(var(--sz) * 2);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    label[for='btn'] {
      position: absolute;
      width: calc(var(--sz) * 4);
      height: calc(var(--sz) * 2);
      background: linear-gradient(0deg, #121720, #0d1217);
      border-radius: var(--sz);
      box-shadow: 0 0 calc(var(--sz) / 50) calc(var(--sz) / 50) #0006,
        0 calc(var(--sz) * -0.05) calc(var(--sz) / 10) calc(var(--sz) / 500) #0b0b10,
        0 0 calc(var(--sz) / 10) calc(var(--sz) / 50) #b9e1ff88,
        0 calc(var(--sz) * -0.05) calc(var(--sz) / 5) calc(var(--sz) / 50) #15182fcc;
    }

    .thumb {
      position: absolute;
      height: calc(calc(var(--sz) * 2) - calc(var(--sz) / 8));
      top: calc(calc(var(--sz) / 10) + calc(var(--sz) / -20));
      background: repeating-conic-gradient(#0002 0.000095%, #fff0 0.0005%, #fff0 0.005%, #fff0 0.0005%),
        repeating-conic-gradient(#0002 0.00001%, #fff0 0.00009%, #fff0 0.00075%, #fff0 0.000025%), var(--bg);
      border-radius: var(--sz);
      box-shadow: 0 calc(var(--sz) * -0.05) calc(var(--sz) * 0.05) 0 #000c inset,
        0 calc(var(--sz) * 0.05) calc(var(--sz) * 0.05) 0 #fff2 inset,
        0 0 calc(var(--sz) / 10) calc(var(--sz) / 50) #000c, 0 calc(var(--sz) / 3) calc(var(--sz) / 3) 0 #000d;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      z-index: 1;
      overflow: hidden;
      padding: calc(var(--sz) * 0.65);
      transition: var(--tr);
      animation: go-left 1s ease 0s;
      width: calc(var(--sz) * 1.875);
      right: calc(var(--sz) * 2.05);
    }

    #btn:checked + label .thumb {
      transition: var(--tr);
      animation: go-right 1s ease 0s;
      width: calc(var(--sz) * 1.875);
      right: calc(var(--sz) * 0.075);
      justify-content: flex-end;
    }

    @keyframes go-left {
      0% {
        width: calc(var(--sz) * 1.875);
        right: calc(var(--sz) * 0.075);
      }
      40%,
      60% {
        width: calc(var(--sz) * 3.85);
        right: calc(var(--sz) * 0.075);
      }
      100% {
        width: calc(var(--sz) * 1.875);
        right: calc(var(--sz) * 2.05);
      }
    }

    @keyframes go-right {
      0% {
        width: calc(var(--sz) * 1.875);
        right: calc(var(--sz) * 2.05);
      }
      40%,
      60% {
        width: calc(var(--sz) * 3.85);
        right: calc(var(--sz) * 0.075);
      }
      100% {
        width: calc(var(--sz) * 1.875);
        right: calc(var(--sz) * 0.075);
      }
    }

    label[for='btn']:before,
    label[for='btn']:after {
      --clr: var(--on);
      content: 'ON';
      color: #fff;
      font-family: 'Varela Round', serif;
      width: 50%;
      float: left;
      text-align: center;
      display: flex;
      justify-content: center;
      height: 100%;
      font-size: calc(var(--sz) * 0.75);
      padding: 0 0 0 calc(var(--sz) * 0.2);
      box-sizing: border-box;
      transform-origin: 100% 50%;
      animation: muelle-on 1.5s var(--elastic) 0.5s;
      color: var(--clr);
      text-shadow: 0 0 calc(var(--sz) * 0.1) var(--clr), 0 0 calc(var(--sz) * 0.3) #000,
        0 0 calc(var(--sz) * 0.5) var(--clr), 0 calc(var(--sz) * 0.0125) calc(var(--sz) * 0.05) #233443,
        0 calc(var(--sz) * -0.0125) calc(var(--sz) * 0.05) #000;
      align-items: center;
      line-height: calc(var(--sz) * 0.55);
    }

    label[for='btn']:after {
      content: 'OFF';
      padding: 0 calc(var(--sz) * 0.325) 0 0;
      transform-origin: 0% 50%;
      --clr: var(--off);
      text-shadow: 0 calc(var(--sz) * 0.0125) calc(var(--sz) * 0.05) #233443,
        0 calc(var(--sz) * -0.0125) calc(var(--sz) * 0.05) #000;
    }

    #btn:checked + label[for='btn']:before {
      animation-name: muelle-off;
    }

    #btn:checked + label[for='btn']:after {
      animation: muelle-off 1.5s var(--elastic) 0.5s;
    }

    @keyframes muelle-on {
      0% {
        transform: scaleX(0.35);
      }
      100% {
        transform: scaleX(1);
      }
    }

    @keyframes muelle-off {
      0% {
        transform: scaleX(0.35);
      }
      100% {
        transform: scaleX(1);
      }
    }

    /* light */
    span.thumb:before {
      content: '';
      background: #121212;
      position: relative;
      width: calc(var(--sz) / 1.75);
      height: calc(var(--sz) / 1.75);
      border-radius: var(--sz);
      box-shadow: 0 0 calc(var(--sz) / 50) calc(var(--sz) / 50) #0008,
        0 calc(var(--sz) * -0.05) calc(var(--sz) / 10) calc(var(--sz) / 500) #000,
        0 calc(var(--sz) * 0.025) calc(var(--sz) / 10) calc(var(--sz) / 500) #fff8,
        0 0 calc(var(--sz) / 20) calc(var(--sz) / 25) #000;
    }

    span.thumb:after {
      content: '';
      transition: var(--tr);
      transition: var(--tr);
      width: calc(var(--sz) / 1.75);
      height: calc(var(--sz) / 1.75);
      position: absolute;
      border-radius: var(--sz);
      --clr: var(--off);
      --shn: #fff8;
      box-shadow: 0 0 0 calc(var(--sz) * 0.025) #000c inset, 0 0 calc(var(--sz) / 2.5) 0 var(--clr),
        0 0 calc(var(--sz) / 3) calc(var(--sz) / 20) var(--clr) inset,
        0 calc(var(--sz) / -20) calc(var(--sz) / 10) calc(var(--sz) / 10) #000c inset;
      background: radial-gradient(
        circle at 50% 32%,
        var(--shn) 0 calc(var(--sz) / 20),
        var(--clr) calc(var(--sz) / 3) calc(var(--sz) / 3)
      );
    }

    #btn:checked + label span.thumb:after {
      --clr: var(--on);
      --shn: #fff;
    }

    .notification-top-bar {
      display: flex;
      gap: 10px;
    }
    .notification-email-btn {
      border-radius: 5px;

      background: #fff;
      padding: 3px 10px;
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.13);
      border: none;
    }
    .notification-email-btn-active {
      box-shadow: none;
      background: #fff;
      border: 1px solid #c7c7c7;
    }
    .toggle-container {
      display: flex;
      height: 15px;
      width: 25px;
      background: black;
      border-radius: 110px;
      align-items: center;
      overflow: hidden;
      transition: all 0.3s ease;
      font-family: 'DM Sans', sans-serif;
    }
    .toggle-enable {
      height: 7px;
      width: 7px;
      background: #ffffff;
      border-radius: 119px;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .toggle-btn-main {
      display: flex;
      align-items: center;
      gap: 10px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
    .tab-notification {
      display: flex;
      gap: 48px;
      cursor: pointer;
      padding: 15px 0px;
    }
    @media screen and (max-width: 480px) {
      .tab-notification {
        overflow-x: scroll;
      }
    }

    .tab-notification div {
      padding: 5px 0px;
    }

    .active-tab {
      border-bottom: 2px solid #fb4ef1;
    }
    .active-tab .text-tab-notification {
      color: #000;
    }
    .text-tab-notification {
      color: #b9b8bb;

      font-family: 'DM Sans', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
    }
    .notification-item-list {
      display: flex;
      gap: 20px;
      align-items: center;
      border-bottom: 1px solid #d9d9d9;
      padding: 1rem 0rem 1rem 0rem;
      font-family: 'DM Sans', sans-serif;
    }
    .notification-item-text {
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      font-family: 'DM Sans', sans-serif;

      line-height: 20px;
    }
    .notification-item-sub-text {
      color: #565660;
      font-family: 'DM Sans', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .notification-item-sub-box {
      display: flex;
      gap: 6px;
      flex-direction: column;
    }
    .notification-checkbox {
      width: 20px;
      height: 20px;
      border-radius: 10px;
    }
    .n-Preferences {
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    .notification-checkbox:checked[type='checkbox'] {
      accent-color: black;
      mix-blend-mode: multiply;
    }
    .two-block-profile-left {
      width: 35%;
      padding: 0px 15px;
      @media screen and (max-width: 991px) {
        width: 100%;
      }
      .two-block-profile-left-inner {
        border-radius: 20px;
        padding: 70px 30px;
        background-color: #fff;
        box-shadow: 5px 5px 25px rgba(35, 75, 81, 0.14);
        position: relative;
        margin-top: -240px;
        @media screen and (max-width: 991px) {
          background: transparent;
          box-shadow: none;
          margin-top: -210px;
          padding: 70px 0px 35px;
        }
        .img-block-profile {
          margin-bottom: 20px;
          text-align: center;
          img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 20px;
          }
          h2 {
            font-size: 30px;
            line-height: 30px;
            color: #000000;
            font-weight: 700;
            margin-bottom: 15px;
            @media screen and (max-width: 991px) {
              font-size: 25px;
              line-height: 25px;
            }
          }
          p {
            background: linear-gradient(to right, #2bd7ef, #9e8bf0, #fb4ef1);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
          }
        }
        .social-list {
          display: flex;
          align-items: center;
          margin: 0 0px 20px;
          padding: 0px;
          justify-content: center;
          li {
            padding: 0px 10px;
            a {
              svg {
                fill: #000000;
                path {
                  fill: #000000;
                }
              }
            }
          }
        }
        .text-block-profile {
          margin-bottom: 20px;
          p {
            color: #636363;
            font-size: 16px;
            line-height: 20px;
            span {
              font-weight: 700;
              color: #000;
            }
          }
        }
        .volume-text-inner {
          padding: 20px;
          border: 1px solid #e9e9e9;
          border-radius: 20px;
          margin-bottom: 20px;
          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            &:last-child {
              margin-bottom: 0px;
            }
            span {
              font-size: 16px;
              line-height: 20px;
              color: #636363;

              &.bold-text {
                font-weight: 700;
                color: #000;
                text-align: right;
              }
            }
          }
        }
        .tabs-block-profile {
          .react-tabs {
            @media screen and (max-width: 991px) {
              overflow: scroll;
            }
            .react-tabs__tab-list {
              display: block;
              margin: 0px;
              border: none;
              @media screen and (max-width: 991px) {
                display: flex;
                align-items: center;
                width: 1000px;
              }
              .react-tabs__tab {
                width: 100%;
                border: none;
                padding: 0px;
                margin-bottom: 15px;
                outline: none;
                @media screen and (max-width: 991px) {
                  margin-right: 25px;
                  width: auto;
                }
                .tabs-block-link {
                  display: flex;
                  align-items: center;
                  padding: 15px 20px;
                  border-radius: 15px;
                  border: 1px solid transparent;
                  @media screen and (max-width: 991px) {
                    padding: 10px 0px;
                    background: transparent;
                    border-radius: 0px;
                  }
                  h4 {
                    margin: 0px;
                    padding-left: 10px;
                    font-weight: 700;
                    color: #000;
                    font-size: 16px;
                    @media screen and (max-width: 991px) {
                      white-space: nowrap;
                    }
                  }
                }
                &.react-tabs__tab--selected {
                  .tabs-block-link {
                    border: 1px solid #fb4ef1;
                    background-color: rgba(251, 78, 241, 0.19);
                    @media screen and (max-width: 991px) {
                      border: none;
                      border-bottom: 2px solid #fb4ef1;
                      background-color: transparent;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .two-block-profile-right {
      padding: 0px 15px;
      width: 65%;
      @media screen and (max-width: 991px) {
        width: 100%;
      }
      .react-tabs {
        .react-tabs__tab-panel {
          .tab-block-right {
            .title-text-right {
              font-size: 36px;
              font-family: 'DM Sans', sans-serif !important;
              line-height: 42px;
              color: #191820;
              margin-bottom: 40px;
              font-weight: 700;
              @media screen and (max-width: 991px) {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 25px;
              }
            }
            .table-block-scroll {
              @media screen and (max-width: 1400px) {
                overflow: scroll;
                table {
                  width: 1100px;
                }
              }
            }
            table {
              thead {
                th {
                  padding: 15px;
                  color: #191820;
                  font-weight: 700;
                  font-size: 14px;
                  font-family: 'DM Sans', sans-serif;
                  border: none;
                  background-color: transparent;
                  white-space: nowrap;
                  button {
                    padding: 0px;
                  }
                  /* &:first-child {
              padding-left: 0px;
            } */
                  a {
                    margin-left: 10px;
                  }
                }
              }
              tbody {
                tr {
                  &:nth-child(odd) {
                    background-color: rgb(197, 213, 215, 0.19);
                  }
                }
                td {
                  vertical-align: middle;
                  padding: 20px 15px;
                  color: #191820;
                  font-weight: 700;
                  font-size: 14px;
                  border: none;
                  font-family: 'DM Sans', sans-serif;
                  background-color: transparent;
                  &:first-child {
                    padding-left: 10px;
                  }
                  &:last-child {
                    padding-right: 10px;
                  }
                  .collection-name {
                    display: flex;
                    align-items: center;

                    .collection-profile {
                      position: relative;
                      &.profile-img-big {
                        > img {
                          width: 56px;
                          height: 56px;
                        }
                      }
                      > img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        object-fit: cover;
                      }
                      .verify-dots {
                        position: absolute;
                        bottom: -5px;
                        right: -3px;
                      }
                    }
                    h3 {
                      padding-left: 10px;
                      font-weight: 700;
                      font-size: 14px;
                      margin: 0px;
                    }
                  }
                  .auction-link-block-left {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .total-volume-block {
                    display: flex;
                    align-items: center;
                    img {
                      margin-right: 8px;
                      width: 25px;
                    }
                    p {
                      color: #191820;
                    }
                  }
                  .flex-reward {
                    display: flex;
                    align-items: center;
                    .reward-block {
                      margin-left: 10px;
                      background: linear-gradientlinear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
                      display: flex;
                      align-items: center;
                      padding: 3px 5px;
                      border-radius: 10px;
                      span {
                        font-size: 12px;
                        padding-left: 3px;
                        color: #fff;
                      }
                    }
                  }
                  &.green-text {
                    color: #48bc65;
                  }
                  &.red-text {
                    color: #e33b3b;
                  }
                }
              }
            }
            .load-more-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 25px;
              button {
                width: 180px;
              }
              &.full-width-block {
                button {
                  width: 100%;
                  border-radius: 30px;
                }
              }
            }
            .following-block-main {
              display: flex;
              flex-wrap: wrap;
              margin: 0px -15px;
              .following-block-main-inner {
                width: 33.33%;
                padding: 0px 15px 30px;
                @media screen and (max-width: 1199px) {
                  width: 50%;
                }
                @media screen and (max-width: 991px) {
                  width: 100%;
                }
                .following-block-main-block {
                  width: 100%;
                  padding: 40px 50px;
                  border: 1px solid #e5e5e5;
                  border-radius: 16px;
                  position: relative;
                  text-align: center;
                  height: 324px;
                  .dropdown {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    button {
                      background: none;
                      border: none;
                      outline: none;
                      padding: 0px;
                      &:after {
                        content: none;
                      }
                    }
                    .dropdown-menu {
                      background-color: #ffffff;
                      z-index: 99;
                      box-shadow: 0px 4px 24px rgba(185, 185, 185, 25%);
                      padding: 0px;
                      border: none;
                      right: 0 !important;
                      overflow: hidden;
                      left: auto !important;
                      a {
                        color: #191820;
                        font-size: 14px;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        padding: 12px 18px;
                        &:hover {
                          background-color: #e3fcff;
                        }
                      }
                    }
                  }
                  > img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                  }
                  h4 {
                    font-size: 20px;
                    line-height: 26px;
                    color: #191820;
                    margin-top: 20px;
                    margin-bottom: 5px;
                    font-weight: 700;
                  }
                  p {
                    font-size: 14px;
                    font-weight: 700;
                    color: #565660;
                    span {
                      color: #b9b8bb;
                      font-weight: 400;
                    }
                  }
                }
                .button-following {
                  position: absolute;
                  bottom: 40px;
                  left: 0px;
                  right: 0px;
                  width: 183px;
                  color: #3749e9;
                  margin: 0 auto;
                }
              }
            }
            .tab-block-right-account {
              display: flex;
              margin: 0px -50px;
              padding-right: 100px;
              @media screen and (max-width: 991px) {
                display: block;
                margin: 0px;
                padding-right: 0px;
              }
              .tab-block-right-account-left {
                width: 70%;
                padding: 0px 50px;
                @media screen and (max-width: 991px) {
                  width: 100%;
                  padding: 0px 0px 20px;
                }
                h3 {
                  font-size: 28px;
                  line-height: 34px;
                  color: #191820;
                  margin-bottom: 25px;
                  font-weight: 700;
                  @media screen and (max-width: 1199px) {
                    font-size: 16px;
                    line-height: 16px;
                    margin-bottom: 15px;
                  }
                }
                label {
                  color: #565660;
                  margin-bottom: 7px;
                  font-weight: 400;
                }
                input:not([type='checkbox']) {
                  border-radius: 10px;
                  height: 60px;
                }
                .file-input {
                  position: relative;
                  .file-input__input {
                    width: 0.1px;
                    height: 0.1px;
                    opacity: 0;
                    overflow: hidden;
                    position: absolute;
                    z-index: -1;
                  }
                  label {
                    display: block;
                  }
                  .file-input__label {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
                    img {
                      width: 22px;
                    }
                  }
                }
              }
              .tab-block-right-account-right {
                @media screen and (max-width: 991px) {
                  width: 100%;
                }
                h3 {
                  font-size: 28px;
                  line-height: 34px;
                  color: #191820;
                  margin-bottom: 30px;
                  font-weight: 700;
                  @media screen and (max-width: 1199px) {
                    font-size: 16px;
                    line-height: 16px;
                    margin-bottom: 15px;
                  }
                }
                .tab-block-right-account-social {
                  .social-block-inner {
                    margin-bottom: 45px;
                    @media screen and (max-width: 991px) {
                      margin-bottom: 25px;
                    }
                    .edit-input-block {
                      margin-top: 20px;
                      input {
                        border-radius: 10px;
                        height: 50px;
                      }
                    }
                  }
                  .social-block {
                    display: flex;
                    align-items: center;

                    position: relative;
                    @media screen and (max-width: 991px) {
                      border-radius: 20px;
                      background-color: #f4f4f4;
                      padding: 10px 20px;
                      justify-content: space-between;
                      button {
                        svg {
                          path {
                            fill: #000;
                          }
                        }
                      }
                    }
                    h4 {
                      font-size: 16px;
                      line-height: 20px;
                      color: #191820;
                      font-weight: 700;
                      padding-left: 40px;
                      width: 165px;
                      margin: 0px;
                    }
                    .icon-svg {
                      position: absolute;
                      left: 0px;
                      @media screen and (max-width: 991px) {
                        left: 20px;
                      }
                    }
                  }
                }
              }
            }
            .tab-block-right-history-left {
              display: flex;
              margin: 0px -15px;
              @media screen and (max-width: 1299px) {
                display: block;
              }
              .tab-block-right-history-profile {
                width: 70%;
                padding: 0px 15px;
                @media screen and (max-width: 1199px) {
                  width: 100%;
                }
                .tab-block-right-history-profile-inner {
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  padding: 20px 15px;
                  border-bottom: 1px solid #d8d8d8;
                  .tab-block-right-history-profile-left {
                    display: flex;

                    img {
                      width: 70px;
                      height: 70px;
                      border-radius: 50%;
                      object-fit: cover;
                    }
                    .tab-block-right-history-content-left {
                      padding-left: 20px;
                      h3 {
                        font-weight: 700;
                        color: #000;
                        font-size: 20px;
                        line-height: 26px;
                        margin: 0px;
                      }
                      .text-title-name {
                        font-size: 14px;
                        line-height: 20px;
                        color: #565660;
                        span {
                          font-weight: 700;
                          color: #fb4ef1;
                        }
                      }
                      .text-date-time {
                        font-size: 14px;
                        line-height: 20px;
                        color: #565660;
                      }
                    }
                  }
                }
                .tab-block-right-history-profile-right {
                  button {
                    padding: 0px;
                    border: none;
                    outline: none;
                    background: transparent;
                    span {
                      font-size: 16px;
                      color: #191820;
                      padding-left: 10px;
                      font-weight: 500;
                    }
                  }
                }
              }
              .tab-block-right-history-search {
                width: 30%;
                padding: 0px 15px;
                @media screen and (max-width: 1299px) {
                  width: 100%;
                }
                .search-box-inner {
                  position: relative;
                  input {
                    width: 100%;
                    border-radius: 12px;
                    border: none;
                    background-color: ${theme.color.white};
                    height: 51px;
                    font-weight: 500;
                    font-size: 16px;
                    padding: 0px 51px 0px 16px;
                    outline: none;
                    color: #9e9e9e;
                    border: 1px solid #d1d1d1;
                    box-shadow: none;
                    font-family: 'DM Sans', sans-serif;
                    &::placeholder {
                      color: #9e9e9e;
                    }

                    &::-ms-input-placeholder {
                      /* Edge 12 -18 */
                      color: #9e9e9e;
                    }
                  }
                  button {
                    position: absolute;
                    background: none;
                    border: none;
                    outline: none;
                    right: 15px;
                    top: 13px;
                  }
                }
                .search-filter-block {
                  margin-top: 30px;
                  .search-filter-block-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 30px;
                    h4 {
                      font-weight: 700;
                      font-size: 30px;
                      line-height: 30px;
                      color: #000;
                      margin: 0px;
                    }
                    p {
                      color: #fb4ef1;
                      font-size: 20px;
                    }
                  }
                  .search-filter-block-button {
                    display: flex;
                    gap: 5px;
                    flex-wrap: wrap;
                    button {
                      background: transparent;
                      outline: none;
                      padding: 5px 14px;
                      border-radius: 20px;
                      border: 1px solid #d8d8d8;
                      width: 49%;
                      display: flex;
                      align-items: center;
                      span {
                        font-weight: 500;
                        font-size: 13px;
                        color: #191820;
                        padding-left: 7px;
                      }
                      &.selected {
                        border: 1px solid #fb4ef1;
                        background-color: rgba(251, 78, 241, 0.19);
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
  }
  .accordian-block {
    margin-top: 80px;
    @media screen and (max-width: 991px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .accordion {
      background-color: #f8f8f8;
      .accordion-item {
        border-radius: 8px;
        .accordion-header {
          border-radius: 8px;
          .accordion-button {
            padding: 22px 40px;
            border: 1px solid #fb4ef1;
            background-color: #ffeefe;
            border-radius: 8px;
            outline: none;
            box-shadow: none;
            @media screen and (max-width: 1299px) {
              padding: 15px;
            }
            .header-svg-block {
              display: flex;
              align-items: center;
              h3 {
                font-size: 20px;
                color: #191820;
                font-weight: 700;
                padding-left: 8px;
                margin: 0px;
              }
            }
            &.collapsed {
              border-color: #dfdfdf;
              background-color: rgba(234, 234, 234, 0.25);
            }
          }
        }
        .accordion-collapse {
          .accordion-body {
            padding: 40px;
            @media screen and (max-width: 1299px) {
              padding: 15px;
            }
          }
          .body-block-inner {
            .details-block-main {
              display: flex;
              @media screen and (max-width: 991px) {
                display: block;
                width: 100%;
              }
              .create-author-block {
                display: flex;
                margin: 0px -15px 0px;
                flex-wrap: wrap;
                width: 30%;
                @media screen and (max-width: 991px) {
                  display: block;
                  width: 100%;
                  margin-bottom: 15px;
                }
                .create-author-block-profile {
                  padding: 0px 15px;
                  @media screen and (max-width: 991px) {
                    margin-bottom: 15px;
                  }
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
                width: 70%;
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
          }
        }
      }
    }
  }
  .traning-nft-block {
    padding: 100px 0px 30px;
    @media screen and (max-width: 991px) {
      padding: 15px 0px 25px;
    }
    .slick-slide {
      padding: 0px 8px;
    }
    .common-product-block {
      margin: 0px;
      /* .common-product-block-inner {
        width: 100%;
        padding: 15px 0px;
      } */
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
  .public-progile-main {
    position: relative;
    .top-banner-img {
      position: relative;
      top: -75px;
      z-index: -2;
      img {
        width: 100%;
        object-fit: cover;
        object-position: top;
      }
      &.vertically-fade-banner {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.35), #fff);
        }
      }
    }
    .profile-main-block {
      position: relative;
      top: -140px;
      .profile-inner-flex {
        display: flex;
        margin: 0px -15px;
        .profile-inner-flex-left {
          width: 78%;
          padding: 0px 15px;
          .profile-inner-flex-left-inner {
            display: flex;
            align-items: center;
            margin: 0px -15px 35px;
            .profile-inner-flex-left-img {
              position: relative;
              overflow: hidden;
              clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
              width: 200px;
              height: 182px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
              }
            }
            .text-name-block {
              padding-left: 30px;
              .text-name-block-name {
                display: flex;
                margin-bottom: 5px;
                align-items: center;
                h2 {
                  font-weight: 700;
                  font-size: 60px;
                  line-height: 60px;
                  color: #000;
                }
                p {
                  background: linear-gradient(90.25deg, #fb4ef1 -18.72%, #f59999 121.02%);
                  padding: 4px 10px;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  font-size: 20px;
                  font-weight: 700;
                  margin-left: 20px;
                  color: #fff;
                  span {
                    padding-left: 5px;
                  }
                  &.text-discription-check {
                    background: transparent;
                    padding: 0px;
                    margin-left: 5px;
                    svg {
                      width: 40px;
                      height: 40px;
                    }
                  }
                }
              }
              .link-text-block {
                a {
                  display: inline-flex;
                  align-items: center;
                  border: 1px solid #fb4ef1;
                  padding: 2px 9px;
                  font-size: 20px;
                  font-weight: 700;
                  border-radius: 10px;
                  color: #fb4ef1;
                  span {
                    padding-right: 5px;
                  }
                }
              }
            }
            .social-link {
              padding-left: 60px;
              position: relative;
              top: -20px;
              ul {
                margin: 0px -15px;
                padding: 0px;
                list-style: none;
                display: flex;
                align-items: center;
                li {
                  padding: 0px 15px;
                  a {
                    display: flex;
                    align-items: center;
                    font-size: 20px;
                    font-weight: 700;
                    font-weight: bold;
                    color: #000;
                    span {
                      padding-left: 5px;
                    }
                  }
                }
              }
            }
          }
          .list-block-inner {
            display: flex;
            margin: 0px -25px 20px;
            .list-block-inner-left {
              padding: 0px 25px;
              &.border-left-main {
                border-right: 1px solid #d9d9d9;
              }
              h3 {
                font-size: 25px;
                line-height: 30px;
                color: #000000;
                font-weight: 700;
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                span {
                  padding-left: 5px;
                }
              }
              p {
                color: #9f9f9f;
                font-size: 16px;
                line-height: 20px;
                font-weight: 700;
              }
            }
          }
          .nft-block-main {
            /* margin-bottom: 30px; */
            display: flex;
            align-items: center;
            margin: 0px -5px 30px;
            p {
              padding: 0px 5px;
              display: flex;
              align-items: center;
              span {
                color: #000;
                font-size: 16px;
                line-height: 20px;
                font-weight: 700;
                &:last-child {
                  color: #9f9f9f;
                  margin-left: 7px;
                }
                &.bg-highlight {
                  background: linear-gradient(90.25deg, #fb4ef1 -18.72%, #f59999 121.02%);
                  padding: 4px 10px;

                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  font-size: 16px;
                  font-weight: 700;
                  color: #fff;
                }
              }
            }
          }
          .block-text-last {
            width: 80%;
            p {
              font-weight: 400;
              color: #000000;
              font-size: 20px;
              line-height: 26px;
            }
            &.disc-collection-text {
              width: 60%;
              p {
                font-size: 16px;
                line-height: 20px;
                font-weight: 400;
                color: #636363;
                span {
                  font-weight: 700;
                  color: #000;
                }
              }
            }
          }
        }
        .profile-inner-flex-right {
          width: 22%;
          padding: 0px 15px;
          .profile-inner-flex-right-inner {
            padding: 20px 25px;
            background: #fff;
            background-clip: padding-box;
            border: solid 2px transparent;
            border-radius: 30px;
            position: relative;
            &::before {
              content: '';
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
            .profile-inner-flex-right-inner-block {
              display: flex;
              justify-content: space-between;
              margin-bottom: 30px;
              &.flex-align-center {
                justify-content: center;
              }
              h3 {
                font-size: 30px;
                line-height: 30px;
                color: #000000;
                font-weight: 700;
                margin: 0px 0px 5px;
              }
              p {
                color: #979797;
                font-size: 16px;
                font-weight: 400;
              }
            }
            .button-follow {
              position: relative;
              z-index: 9;
              button {
                margin-bottom: 20px;
                &:last-child {
                  margin-bottom: 0px;
                }
                span {
                  padding-left: 8px;
                }
                &:hover {
                  svg {
                    path {
                      fill: #fff;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .profile-block-data {
      padding: 10px 80px;
      &.diff-pading-ptofile {
        padding: 10px 50px;
        .react-tabs__tab-list {
          margin: 0px;
          padding: 0px;
        }
      }
      .listed-tab-block {
        display: flex;
        margin: 50px -15px;
        width: 100%;
        .listed-tab-block-inner {
          padding: 0px 15px;
          display: flex;
          margin: 0px -5px;
          width: 25%;
          .listed-tab-block-inner-button {
            width: 50%;
            padding: 0px 5px;
            button {
              width: 100%;
              border-radius: 10px;
              padding: 15px;
              font-weight: 700;
              font-size: 16px;
              border: none;
              background-color: #efefef;
              outline: none;
              color: #000;
              &:disabled {
                opacity: 0.5;
              }
              &.selected {
                background-color: #000;
                color: #fff;
              }
            }
          }
        }
        .tabs-block-title {
          width: 75%;
          padding: 0px 15px;
          .react-tabs {
            border: none;
            .react-tabs__tab-list {
              border: none;
              display: flex;
            }
            .react-tabs__tab {
              margin-right: 80px;
              padding: 15px 0px;
              background: transparent;
              border: none;
              font-weight: bold;
              color: #b9b8bb;
              outline: none;
              &.react-tabs__tab--selected {
                border-bottom: 2px solid #000 !important;
                color: #000;
                &:after {
                  content: none;
                }
                &:before {
                  content: none;
                }
              }
            }
          }
        }
      }
    }
    .filter-block-data-block {
      padding: 0px 80px !important;
      margin: 0px -15px !important;
      .filter-block-data-block-left {
        padding: 0px 15px !important;
        width: 24% !important;
        .filter-block-data-block-left-inner {
          padding: 0px !important;
          background-color: transparent !important;
          .accordion {
            background-color: transparent !important;
          }
          .accordion-item {
            border: none !important;
            background-color: transparent !important;
          }
          .filter-block-data-block-left-inner-public {
            h2 {
              padding: 0px;
              font-size: 20px;
              font-weight: 700;
              color: #000;
            }
            .checkbox-filter-block {
              border-bottom: 1px solid #e5e5e5;
              padding: 25px 0px;
              &:last-child {
                margin-bottom: 0px;
              }
              input {
                padding: 0;
                height: initial;
                width: initial;
                margin-bottom: 0;
                display: none;
                cursor: pointer;
              }
              label {
                position: relative;
                cursor: pointer;
                display: flex;
                align-items: center;
                span {
                  width: 16px;
                  height: 16px;
                  border-radius: 4px;
                  border: 2px solid #000000;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  img {
                    display: none;
                  }
                }
                h4 {
                  font-size: 20px;
                  margin: 0px;
                  padding-left: 15px;
                  font-weight: 700;
                  color: ${theme.color.black};
                }
              }
              input:checked + label {
                span {
                  border: none;
                  background-color: #000;
                  svg {
                    path {
                      stroke: #fff;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .filter-block-data-block-right {
        padding: 0px 15px !important;
        width: 74%;
        .cancel-btn-block-inner {
          display: flex;
          align-items: center;
          margin: 0px -15px 30px;
          .cancel-btn-block {
            padding: 0px 15px;
            width: 15%;
            a {
              font-size: 16px;
              color: #ff0000;
              border: 1px solid #ff0000;
              padding: 5px 10px;
              display: flex;
              border-radius: 20px;
              max-width: max-content;
              align-items: center;
              span {
                padding-left: 10px;
              }
              &.offer-link {
                color: #f51fc6;
                border: 1px solid #f51fc6;
              }
              &.mint-link {
                color: #9e00ff;
                border: 1px solid #9e00ff;
              }
              &.transfer-link {
                color: #f5841f;
                border: 1px solid #f5841f;
              }
              &.sales-link {
                color: #0500ff;
                border: 1px solid #0500ff;
              }
              &.listing-link {
                color: #04c700;
                border: 1px solid #04c700;
              }
              &.purchase-link {
                color: #00eaf9;
                border: 1px solid #00eaf9;
              }
            }
          }
          .profile-img-block {
            display: flex;
            padding: 0px 15px 0px 15px;
            align-items: center;
            width: 35%;
            > img {
              width: 60px;
              height: 60px;
              border-radius: 10px;
              object-fit: cover;
            }
            .text-img-block {
              padding-left: 10px;
              h3 {
                font-size: 20px;
                line-height: 20px;
                margin-bottom: 10px;
                color: #191820;
                font-weight: bold;
              }
              p {
                display: flex;
                align-items: center;
                font-weight: bold;
                font-size: 14px;
                line-height: 18px;
                color: #191820;
              }
            }
          }
          .puls-block-flex {
            padding: 0px 15px 0px 15px;
            width: 20%;
            .puls-block-flex-inner {
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              h3 {
                color: #191820;
                font-size: 20px;
                padding-left: 10px;
                font-weight: bold;
                margin: 0px;
              }
              img {
                width: 30px;
              }
            }
            p {
              color: #191820;
              font-size: 14px;
              line-height: 18px;
              font-weight: bold;
              margin-bottom: 0px;
            }
          }
          .min-ago-block {
            padding: 0px 15px;
            p {
              margin: 0px;
              color: #191820;
              font-size: 14px;
              line-height: 18px;
              font-weight: bold;
            }
          }
        }
        .filter-block-data-block-right-table {
          .title-activity-tab {
            font-size: 16px;
            line-height: 18px;
            font-weight: 700;
            margin-bottom: 25px;
            padding-left: 25px;
          }
          table {
            th {
              padding: 30px 20px;
              color: #6c7d80;
              font-size: 14px;
              font-weight: 400;
              border: none;
              background: none;
            }
          }
          tbody {
            tr {
              &:nth-child(even) {
                background-color: #f4f7f7;
              }
            }
            td {
              padding: 20px 20px;
              font-weight: bold;
              color: #191820;
              font-size: 16px;
              line-height: 18px;
              border: none;
              background: none;
              vertical-align: middle;
              &.color-red {
                color: #fe511b;
              }
              &.color-green {
                color: #48bc65;
              }
              .profile-img-block {
                display: flex;
                align-items: center;
                > img {
                  width: 60px;
                  height: 60px;
                  border-radius: 10px;
                  object-fit: cover;
                }
                .text-img-block {
                  padding-left: 10px;
                  h3 {
                    font-size: 20px;
                    line-height: 20px;
                    margin-bottom: 10px;
                    color: #191820;
                    font-weight: bold;
                  }
                  p {
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 18px;
                    color: #191820;
                  }
                }
                &.diff-img-radius {
                  /* padding-left: 15px; */
                  span {
                    padding-right: 15px;
                  }
                  > img {
                    border-radius: 50%;
                  }
                }
              }
              .puls-block-flex {
                .puls-block-flex-inner {
                  display: flex;
                  align-items: center;
                  margin-bottom: 10px;
                  h3 {
                    color: #191820;
                    font-size: 20px;
                    padding-left: 10px;
                    font-weight: bold;
                  }
                  img {
                    width: 30px;
                  }
                }
                p {
                  color: #191820;
                  font-size: 14px;
                  line-height: 18px;
                  font-weight: bold;
                  margin-bottom: 0px;
                }
              }
            }
          }
        }
        .left-activity-tab {
          .left-activity-tab-block {
            padding: 50px 0px;
            .title-activity-tab {
              font-size: 16px;
              line-height: 18px;
              font-weight: 700;
              margin-bottom: 25px;
              padding-left: 25px;
            }
            .progress-bar-block {
              padding: 20px 0px;
              border-bottom: 1px solid #f0f0f0;
              display: flex;
              align-items: center;
              position: relative;
              h3 {
                color: #d0cfd6;
                padding-right: 25px;
                font-size: 16px;
                font-weight: 700;
                margin: 0px;
              }
              .progress {
                width: 100%;
                height: 30px;
                border-radius: 0px;
                background-color: #f0f0f0;
                .progress-bar {
                  background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
                  border-radius: 0px 30px 30px 0px;
                }
              }
              h4 {
                position: absolute;
                margin: 0px;
                right: 20px;
                font-size: 16px;
                font-weight: 700;
                color: #000;
              }
            }
          }
        }
      }
    }
  }
  .reward-block-main {
    .reward-block-title {
      text-align: center;
      margin-bottom: 50px;
      h1 {
        font-size: 60px;
        line-height: 80px;
        color: #191820;
        margin-bottom: 5px;
        font-weight: 700;
        span {
          background: linear-gradient(to right, #2bd7ef, #fb4ef1);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          &.last-grd {
            background: linear-gradient(to right, #2bef94, #ed4efb);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
      .lookup-address-search {
        position: relative;
        margin: 0 auto;
        display: table;
        .lookup-address-search-inner {
          width: 800px;
          position: relative;
          > p {
            position: absolute;
            z-index: 9;
            top: -11px;
            left: 16px;
            padding: 0px 5px;
            color: #b9b8bb;
            font-size: 16px;
            background: #e4f6fa;
          }
          .form-group {
            position: relative;
            input {
              width: 100%;
              height: 62px;
              padding: 20px;
              font-size: 16px;
              color: #565660;
              border-radius: 12px;
              border: 1px solid #b9b8bb;
              background: transparent;
              box-shadow: none;
              outline: none;
            }
            button {
              position: absolute;
              top: 20px;
              right: 20px;
            }
          }
        }
      }
    }
    .reward-block-main-inner {
      .reward-block-top {
        display: flex;
        border-radius: 30px;
        background-color: #fff;
        padding: 30px;
        box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
        margin: 0px 0px 80px;
        .reward-block-top-inner {
          padding: 0px 30px;
          border-right: 1px solid #d9d9d9;
          &:nth-child(1) {
            width: 50%;
          }
          &:nth-child(2) {
            width: 20%;
          }
          &:nth-child(3) {
            width: 30%;
            border: none;
          }
          > h3 {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            span {
              color: #191820;
              padding-left: 10px;
              font-size: 18px;
              line-height: 20px;
              font-weight: 700;
            }
          }
          .reward-points-block {
            display: flex;
            align-items: center;
            h2 {
              margin-left: 20px;
              width: 100%;
              padding: 25px 20px;
              background: linear-gradient(to right, #2bd7ef, #fb4ef1);
              color: #fff;
              font-weight: 700;
              border-radius: 20px;
            }
            h4 {
              font-size: 40px;
              line-height: 40px;
              color: #191820;
              font-weight: 700;
              margin: 0px;
              margin-top: 25px;
            }
            &.reward-points-block-last {
              justify-content: space-between;
              h5 {
                display: flex;
                align-items: center;
                font-size: 40px;
                line-height: 50px;
                font-weight: 700;
                span {
                  padding-left: 10px;
                }
              }
            }
          }
        }
      }
      .reward-block-middle {
        border-radius: 30px;
        background-color: #fff;
        padding: 30px;
        margin-bottom: 80px;
        box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
        .title-middle-block {
          text-align: center;
          font-size: 24px;
          line-height: 28px;
          color: #000;
          margin-bottom: 30px;
          font-weight: 700;
        }
        .reward-block-middle-inner {
          display: flex;
          align-items: center;
          .reward-block-middle-inner-block {
            position: relative;
            width: 20%;
            display: flex;
            align-items: center;
            flex-direction: column;
            &:before {
              content: '';
              position: absolute;
              right: -140px;
              height: 15px;
              background-color: #b76e2c;
              width: 310px;
              top: 97px;
            }

            img {
              position: relative;
              z-index: 9;
            }
            h3 {
              font-size: 20px;
              line-height: 20px;
              color: #000;
              font-weight: 700;
            }
            h4 {
              font-size: 20px;
              line-height: 20px;
              color: #000;
              font-weight: 700;
              margin: 0px;
              margin-top: 10px;
            }
            &.second-inner-block {
              &::before {
                background-color: #6b6e70;
              }
              h3 {
                color: #6b6e70;
              }
              h4 {
                color: #6b6e70;
              }
            }
            &.third-inner-block {
              &::before {
                background-color: #b58b30;
              }
              h3 {
                color: #b58b30;
              }
              h4 {
                color: #b58b30;
              }
            }
            &.fourth-inner-block {
              &::before {
                background-color: #000;
              }
              h3 {
                color: #75c0ce;
              }
              h4 {
                color: #75c0ce;
              }
            }
            &.fifth-inner-block {
              &::before {
                content: none;
              }
              h3 {
                color: #000;
              }
              h4 {
                color: #000;
              }
            }
          }
        }
      }
      .earn-your-block {
        border-radius: 30px;
        background-color: #fff;
        padding: 30px;
        margin-bottom: 80px;
        box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
        .earn-title {
          font-size: 24px;
          line-height: 30px;
          margin-bottom: 30px;
          color: #000000;
          text-transform: capitalize;
          font-weight: 700;
        }
        .earn-your-block-main {
          .earn-your-block-inner {
            display: flex;
            .earn-your-block-inner-block {
              display: flex;
              align-items: center;
              /* padding: 20px; */
              border: 1px solid #b9b8bb;
              border-radius: 10px;
              position: relative;
              width: 50%;
              margin: 0px 5px;
              position: relative;
              background-clip: padding-box;
              border: solid 2px #b9b8bb;
              &::before {
                content: none;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 9;
                margin: -2px;
                border-radius: inherit;
                background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
              }
              &:hover {
                &::before {
                  content: '';
                }
              }
              > p {
                position: absolute;
                top: -13px;
                background: #fff;
                padding: 0px 5px;
                color: #b9b8bb;
                font-size: 16px;
                z-index: 99;
                left: 12px;
              }
              .link-earn-block {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 18px;
                position: relative;
                z-index: 9;
                background: #fff;
                border-radius: 10px;
                width: 100%;
                .link-earn-block-flex {
                  display: flex;
                  align-items: center;
                  /* justify-content: space-between; */
                  width: 100%;
                  span {
                    font-size: 16px;
                    line-height: 20px;
                    color: #565660;
                    padding-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
      .bonuses-block {
        margin-bottom: 80px;
        .bonuses-title {
          font-size: 36px;
          line-height: 36px;
          margin-bottom: 30px;
          color: #191820;
          font-weight: 700;
        }
        .bonuses-block-inner {
          display: flex;
          align-items: center;
          .bonuses-block-inner-block {
            width: 12.5%;
            border-radius: 30px;
            padding: 19px 7px;
            margin: 0px 4px;
            background: linear-gradient(to right, #2bd7ef, #fb4ef1);
            &.second-bonuses {
              background: linear-gradient(to right, #2bef7f, #fb964e);
            }
            &.third-bonuses {
              background: linear-gradient(to right, #2befa8, #ffe000);
            }
            &.fourth-bonuses {
              background: linear-gradient(to right, #ff7b73, #ff8303);
            }
            &.fifth-bonuses {
              background: linear-gradient(to right, #fc0aa3, #e35cff);
            }
            &.six-bonuses {
              background: #e2e2e2;
            }
            &.seven-bonuses {
              background: #e2e2e2;
            }
            &.eigth-bonuses {
              background: #e2e2e2;
            }
            .img-bonuses {
              width: 100%;
              height: 105px;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            h4 {
              margin-top: 30px;
              text-align: center;
              font-size: 36px;
              line-height: 40px;
              font-weight: 700;
              color: #fff;
              margin-bottom: 8px;
              span {
                font-weight: 400;
                font-size: 20px;
                line-height: 20px;
                display: block;
              }
            }
            h5 {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px 2px;
              color: #945cd9;
              font-size: 16px;
              width: 86px;
              border-radius: 10px;
              background-color: #ffffff;
              text-align: center;
              display: block;
              margin: 0 auto 6px;
            }
          }
        }
      }
      .reward-points-block {
        .reward-points-block-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
          h2 {
            font-size: 36px;
            line-height: 36px;
            margin: 0px;
            color: #000;
            font-weight: 700;
          }
          ul {
            display: flex;
            margin: 0px -5px;
            li {
              padding: 0px 5px;
              button,
              a {
                color: #b9b8bb;
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                padding: 6px 10px;
                border-radius: 10px;
                border: 1px solid #b9b8bb;
                &:hover,
                &.selected {
                  border: 1px solid #fb4ef1;
                  color: #fb4ef1;
                }
              }
            }
          }
        }
        &.reward-points-block-leaderboard {
          .ranking-table-block {
            table {
              tbody {
                tr {
                  /* border-style: none solid solid none; */
                  border-bottom: 2px solid #fff;
                  &.owner {
                    background: linear-gradient(to right, #2bd7ef, #fb4ef1);
                  }
                  &.first-rank {
                    background: #cff7ff;
                  }
                  &.second-rank {
                    background: #fff6de;
                  }
                  &.third-rank {
                    background: #e8e8e8;
                  }
                  &.fourth-rank {
                    background: #ffe7d3;
                  }
                }
                td:first-child {
                  border-top-left-radius: 30px;
                  border-bottom-left-radius: 30px;
                }
                td:last-child {
                  border-top-right-radius: 30px;
                  border-bottom-right-radius: 30px;
                }
              }
            }
          }
        }
      }
      .ranking-table-block {
        padding-top: 15px;
        @media screen and (max-width: 991px) {
          overflow-x: scroll;
        }
        .btn-load-more {
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            border-radius: 30px;
            width: 300px;
          }
        }
        table {
          @media screen and (max-width: 991px) {
            width: 1030px;
          }
          thead {
            th {
              padding: 15px 20px;
              color: #191820;
              font-weight: 700;
              font-size: 14px;
              font-family: 'DM Sans', sans-serif;
              border: none;
              background-color: transparent;
              border: none;
              p {
                display: flex;
                align-items: center;
                svg {
                  margin-left: 7px;
                }
              }
              /* &:first-child {
              padding-left: 0px;
            } */
            }
          }
          tbody {
            tr {
              &:nth-child(odd) {
                background-color: rgb(197, 213, 215, 0.19);
              }
            }
            td {
              vertical-align: middle;
              padding: 15px 20px;
              color: #000;
              font-weight: 700;
              font-size: 14px;
              border: none;
              font-family: 'DM Sans', sans-serif;
              background-color: transparent;
              .puls-chin-logo {
                img {
                  width: 30px;
                  margin-right: 5px;
                }
              }
              .complany-logo-img {
                display: flex;
                align-items: center;
                img {
                  padding: 0px 7px;
                  width: 34px;
                }
                p {
                  font-size: 14px;
                  padding: 0px 7px 0px 0px;
                }
              }
              .award-img-table {
                display: flex;
                align-items: center;
                justify-content: space-between;
                p {
                  font-size: 14px;
                  padding: 0px;
                }
                img {
                  width: 30px;
                }
              }
              .collection-name {
                display: flex;
                align-items: center;

                .collection-profile {
                  position: relative;
                  > img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    object-fit: cover;
                  }
                  .verify-dots {
                    position: absolute;
                    bottom: -5px;
                    right: -3px;
                  }
                }
                h3 {
                  padding-left: 5px;
                  font-weight: 700;
                  font-size: 14px;
                  margin: 0px;
                }
              }
              .total-volume-block {
                display: flex;
                align-items: center;
                img {
                  margin-right: 8px;
                  width: 25px;
                }
              }
              .flex-reward {
                display: flex;
                align-items: center;
                .reward-block {
                  margin-left: 10px;
                  background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
                  display: flex;
                  align-items: center;
                  padding: 3px 5px;
                  border-radius: 10px;
                  span {
                    font-size: 12px;
                    padding-left: 3px;
                    color: #fff;
                  }
                }
              }
              &.green-text {
                color: #48bc65;
              }
              &.red-text {
                color: #e33b3b;
              }
            }
          }
        }
      }
    }
  }
  .membership-block {
    position: relative;
    padding: 0px 0px 50px;
    .membership-block-title {
      text-align: center;
      margin-bottom: 50px;
      h2 {
        margin-bottom: 80px;
        font-size: 40px;
        line-height: 40px;
        color: #000000;
        font-weight: 700;
      }
      p {
        font-size: 18px;
        line-height: 26px;
        margin: 0px;
        width: 79%;
        margin: 0 auto;
        span {
          font-weight: 700;
        }
      }
    }
    .membership-switch-main {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;
      .switch-custom-block {
        margin: 0px 10px;
        label {
          border: 1px solid #999999;
          padding: 10px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          cursor: pointer;
          > span {
            color: #979797;
            font-weight: 700;
            font-size: 16px;
            padding-left: 10px;
          }
          .react-switch-bg {
            height: 17px !important;
            width: 28px !important;
            /* background: transparent !important; */
            border: 2px solid #999999;
            div {
              display: none;
            }
          }
          .react-switch-handle {
            height: 8px !important;
            width: 8px !important;
            left: 3px !important;
            top: 5px !important;
            background-color: #999999 !important;
          }
          &.customized-label {
            border: 1px solid #2bd7ef;
            .react-switch-bg {
              border: none;
            }
            .react-switch-handle {
                  left: -13px !important;
    background: #fff !important;
            }
            > span {
              color: #2bd7ef;
            }
          }
        }
      }
    }
    .membership-block-middle-block {
      position: relative;
      display: flex;
      margin: 0px -15px;
      .membership-block-middle {
        width: 33.33%;
        padding: 0px 15px;
        &:nth-child(1) {
          .membership-block-middle-inner {
            background-image: linear-gradient(to left bottom, #eff8ff, #f4f9ff, #f9fbff, #fcfdff, #ffffff);
          }
        }
        &:nth-child(2) {
          .membership-block-middle-inner {
            background-image: linear-gradient(to left bottom, #ffe8fe, #fdeeff, #fcf4ff, #fcfaff, #ffffff);
          }
        }
        &:nth-child(3) {
          .membership-block-middle-inner {
            background-image: linear-gradient(to left bottom, #dafaff, #e6faff, #f1fbff, #fafcff, #ffffff);
          }
        }
        .membership-block-middle-inner {
          width: 100%;
          border-radius: 30px;
          padding: 40px;
          box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
          .membership-img {
            width: 100%;
            height: 380px;
            margin-bottom: 40px;
            > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          h2 {
            color: #000000;
            font-weight: 700;
            font-size: 25px;
            margin-bottom: 40px;
            text-transform: uppercase;
          }
          ul {
            padding: 0px;
            list-style: none;
            margin: 0px;
            li {
              position: relative;
              margin-bottom: 20px;
              font-weight: 700;
              font-size: 16px;
              line-height: 24px;
              padding-left: 40px;
              color: #000;
              &::before {
                content: '';
                position: absolute;
                left: 0px;
                top: -3px;
                width: 30px;
                height: 30px;
                background: url('data:image/svg+xml,<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15ZM19.6337 13.3837C19.8614 13.148 19.9874 12.8322 19.9846 12.5045C19.9817 12.1768 19.8503 11.8632 19.6185 11.6315C19.3868 11.3997 19.0732 11.2683 18.7455 11.2654C18.4178 11.2626 18.102 11.3886 17.8663 11.6163L13.75 15.7325L11.5087 13.4913C11.273 13.2636 10.9572 13.1376 10.6295 13.1404C10.3018 13.1433 9.98824 13.2747 9.75648 13.5065C9.52472 13.7382 9.39326 14.0518 9.39041 14.3795C9.38756 14.7072 9.51355 15.023 9.74125 15.2587L12.8663 18.3837C13.1007 18.6181 13.4185 18.7497 13.75 18.7497C14.0815 18.7497 14.3993 18.6181 14.6337 18.3837L19.6337 13.3837Z" fill="%232BD7EF"/></svg>');
              }
              &.mega-block-highlight {
                &::before {
                  background: url('data:image/svg+xml,<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15ZM19.6337 13.3837C19.8614 13.148 19.9874 12.8322 19.9846 12.5045C19.9817 12.1768 19.8503 11.8632 19.6185 11.6315C19.3868 11.3997 19.0732 11.2683 18.7455 11.2654C18.4178 11.2626 18.102 11.3886 17.8663 11.6163L13.75 15.7325L11.5087 13.4913C11.273 13.2636 10.9572 13.1376 10.6295 13.1404C10.3018 13.1433 9.98824 13.2747 9.75648 13.5065C9.52472 13.7382 9.39326 14.0518 9.39041 14.3795C9.38756 14.7072 9.51355 15.023 9.74125 15.2587L12.8663 18.3837C13.1007 18.6181 13.4185 18.7497 13.75 18.7497C14.0815 18.7497 14.3993 18.6181 14.6337 18.3837L19.6337 13.3837Z" fill="%23FB4EF1"/></svg>');
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ChatBoxWrapper = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 5px 5px 15px rgba(35, 75, 81, 0.14);
  border-radius: 12px;
  position: relative;
  padding: 30px;
  height: 650px;
  @media screen and (max-width: 1199px) {
    padding: 15px;
  }
  @media screen and (max-width: 991px) {
    display: block;
    height: auto;
  }
  .userlist-body-wrapper {
    width: 500px;
    border-right: 2px solid #b9b8bb;
    padding-right: 40px;
    @media screen and (max-width: 991px) {
      width: 100%;
      padding-right: 0px;
      border: none;
      margin-bottom: 25px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    .search-header-bar {
      padding: 15px 0px 15px 0px;
      // border-bottom: 0.5px solid #e1e1e1;
      height: 80px;
      .search-input-wrapper {
        position: relative;
        i {
          position: absolute;
          left: 17px;
          top: 0;
          bottom: 0;
          margin: auto;
          display: flex;
          width: 18px;
          height: 18px;
          justify-content: center;
          align-items: center;
          img {
            width: 18px;
            height: 18px;
          }
        }
        input {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          letter-spacing: -0.01em;
          color: #959ea6;
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: normal;
          width: 100%;
          padding: 12px 18px;
          padding-left: 42px;
          outline: none;
          box-shadow: none;
        }
      }
    }
    .userlist-wrapper-div {
      max-height: 650px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background: #e9dede;
      }
      &::-webkit-scrollbar-thumb {
        background: #2c2a2a;
      }
      .user-detail-list-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px 15px 0px;
        border-bottom: 0.5px solid #e1e1e1;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:last-child {
          border-bottom: 0;
        }
        &.user-active-tab {
          background: linear-gradient(
            90.25deg,
            #2bd7ef -18.72%,
            #fb4ef1 121.02%
          );
          .user-detail-wrapper-div .user-detail h5,
          .user-detail-wrapper-div .user-detail p {
            color: #fff;
          }
          .user-detail-wrapper-div .time-and-date-detail span {
            color: #fff;
          }
        }
        &:hover {
          background: linear-gradient(
            90.25deg,
            #2bd7ef -18.72%,
            #fb4ef1 121.02%
          );
          .user-detail-wrapper-div .user-detail h5,
          .user-detail-wrapper-div .user-detail p {
            color: #fff;
          }
          .user-detail-wrapper-div .time-and-date-detail span {
            color: #fff;
          }
        }
        .user-img-dost-wrapper {
          position: relative;
          .user-img-div {
            width: 54px;
            height: 54px;
            border-radius: 1000px;
            overflow: hidden;
            @media screen and (max-width: 991px) {
              width: 40px;
              height: 40px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
          }
          .dost-icon {
            width: 15px;
            height: 15px;
            border-radius: 100px;
            background: #959ea6;
            display: flex;
            position: absolute;
            right: -6px;
            top: 6px;
            border: 2px solid white;
            &.dost-active {
              background: #00b67a;
            }
          }
        }
        .user-detail-wrapper-div {
          margin-left: 15px;
          flex: 1;
          display: flex;
          justify-content: space-between;
          .user-detail {
            flex: 1;
            h5 {
              font-size: 16px;
              font-weight: 600;
              line-height: normal;
              letter-spacing: 0em;
              color: #131726;
              margin-bottom: 4px;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p {
              font-size: 14px;
              font-weight: 300;
              line-height: normal;
              letter-spacing: -0.01em;
              color: #959ea6;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .time-and-date-detail {
            width: 80px;
            margin-left: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            span {
              font-size: 10px;
              font-weight: 500;
              line-height: 13px;
              letter-spacing: 0em;
              display: inline-flex;
              color: #959ea6;
              margin-bottom: 6px;
            }
            p {
              min-height: 19px;
              min-width: 19px;
              background: #fb4ef1;
              border-radius: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 10px;
              font-weight: 700;
              line-height: normal;
              letter-spacing: 0px;
              color: white;
            }
          }
        }
      }
    }
  }
  .chat-body-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    @media screen and (max-width: 991px) {
      padding-left: 0px;
    }
    form {
      height: 100%;
      position: relative;
      .chat-body-header-wrapper {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        @media screen and (max-width: 991px) {
          position: relative;
        }
      }
      .chat-footer-wrapper-div {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        @media screen and (max-width: 991px) {
          position: relative;
        }
      }
    }
    .chat-body-header-wrapper {
      padding: 12px 0px 12px 0px;
      border-bottom: 1px solid #d8d8d8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      @media screen and (max-width: 991px) {
        height: auto;
      }
      .chat-user-header {
        display: flex;
        align-items: center;
        .user-img-div {
          width: 54px;
          height: 54px;
          border-radius: 1000px;
          overflow: hidden;
          @media screen and (max-width: 991px) {
            width: 40px;
            height: 40px;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
        .user-detail {
          margin-left: 15px;
          h5 {
            font-size: 16px;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0em;
            color: #131726;
            margin-bottom: 4px;
          }
          p {
            font-size: 12px;
            font-weight: 300;
            line-height: normal;
            letter-spacing: -0.01em;
            color: #959ea6;
            display: flex;
            align-items: center;
            .dost-icon {
              width: 9px;
              height: 9px;
              border-radius: 100px;
              background: #959ea6;
              display: inline-flex;
              margin-right: 8px;
              &.dost-active {
                background: #00b67a;
              }
            }
          }
        }
      }
      .dost-menu-icon {
        width: 21px;
        height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .chat-messages-body-wrapper {
      flex: 1;
      padding: 25px 25px;
      height: calc(100% - 160px);
      overflow: auto;
      position: relative;
      top: 80px;
      @media screen and (max-width: 991px) {
        height: auto;
        top: 0px;
        padding: 25px 0px;
      }
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background: #e9dede;
      }
      &::-webkit-scrollbar-thumb {
        background: #2c2a2a;
      }
      .chat-messages-body {
        height: 100%;
        .infinite-scroll-component__outerdiv {
          height: 100%;
          .infinite-scroll-component {
            display: flex;
            flex-direction: column-reverse;
            height: 100% !important;
            align-items: flex-end;
            overflow-y: auto !important;
            .user-message-list-div {
              display: inline-flex;
              align-items: flex-start;
              margin-bottom: 18px;
              width: 100%;
              .user-imgdiv {
                width: 40px;
                height: 40px;
                overflow: hidden;
                border-radius: 1000px;
                margin-right: 15px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              .message-box-time-text {
                display: flex;
                flex-direction: column;
                .message-box {
                  .message-boxgrey {
                    background: #f1f1f1;
                    padding: 9px 15px;
                    border-radius: 20px;
                    margin-bottom: 8px;
                    width: auto;
                    display: inline-flex;
                    p {
                      font-size: 14px;
                      font-weight: 400;
                      line-height: 21px;
                      letter-spacing: 0em;
                      color: #131726;
                    }
                  }
                }
                .msg-title-text {
                  font-size: 10px;
                  font-weight: 400;
                  line-height: 14px;
                  letter-spacing: 0em;
                  color: #959ea6;
                  display: inline-flex;
                }
              }
              &.right-side-user {
                justify-content: flex-end;
                .message-box-time-text {
                  align-items: flex-end;
                  .message-box {
                    .message-boxgrey {
                      background: #c9c9c9;
                      p {
                        color: #5e5e5e;
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
    .chat-footer-wrapper-div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px 15px 0px;
      height: 80px;
      @media screen and (max-width: 991px) {
        padding: 15px 0px 15px 0px;
      }
      /* border-top: 1px solid #e1e1e1; */
      .upload-file-duc {
        width: 24px;
        height: 24px;
        outline: none;
        box-shadow: none;
        background: transparent;
        border: none;
        margin-right: 15px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .chat-textarea-wrapper {
        display: flex;
        align-items: center;
        flex: 1;
        position: relative;
        textarea {
          width: 100%;
          resize: none;
          border-radius: 100px;
          border: none;
          box-shadow: none;
          height: 60px;
          padding: 18px 24px;
          padding-right: 45px;
          font-size: 15px;
          border: 2px solid #e2e8f0;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: normal;
          color: #959ea6;
          &:focus {
            box-shadow: none;
            outline: none;
          }
        }
        .send-icon {
          position: absolute;
          right: 10px;
          top: 1px;
          bottom: 0;
          padding: 0px;
          background: transparent;
          border: none;
          img {
            width: 21px;
            height: 21px;
            display: flex;
            object-fit: contain;
          }
          &:disabled {
            opacity: 0.5;
          }
        }
      }
    }
  }
`;
