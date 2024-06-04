import styled, { css } from "styled-components";
import theme from "../theme";
import Modal from "react-modal";
// import { mediaQueries } from '../../utils/mediaQuery'

// header section css file end//
export const FooterMian = styled.div`
  /* background-color: ${theme.color.white200}; */
  position: relative;
  .f-top-block {
    padding: 52px 0px;
    @media screen and (max-width: 767px) {
      padding: 30px 0px;
    }
    .container {
      max-width: 1440px;
      @media screen and (max-width: 1439px) {
        max-width: 100%;
      }
    }
    .logo-block-footer {
      p {
        padding: 20px 0px;
        width: 83%;
      }
      .socil-block-login {
        ul {
          display: flex;
          align-items: center;
          margin: 0px -5px;
          padding: 0px;
          li {
            padding: 0px 5px;
            a {
              width: 38px;
              height: 38px;
              background-color: ${theme.color.white};
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                width: 22px;
              }
            }
          }
        }
      }
      .partner-block {
        display: flex;
        align-items: center;
        p {
          margin: 0px;
          width: auto;
          padding-right: 10px;
        }
        .dark-webnir-logo {
          display: none;
        }
      }
    }
    .footer-right-block {
      display: flex;
      margin: 0px -15px;
      @media screen and (max-width: 1439px) {
        margin: 0px;
      }
      @media screen and (max-width: 1199px) {
        padding-top: 25px;
      }
      @media screen and (max-width: 767px) {
        flex-wrap: wrap;
      }
      .f-menu-block {
        width: 17%;
        @media screen and (max-width: 767px) {
          width: 33.33%;
          margin-bottom: 15px;
        }
        h3 {
          font-weight: 800;
          color: ${theme.color.gray};
          font-size: 18px;
          margin-bottom: 18px;
          @media screen and (max-width: 375px) {
            font-size: 16px;
          }
        }
        ul {
          margin: 0px;
          padding: 0px;
          li {
            margin-bottom: 15px;
            a {
              font-size: 14px;
              line-height: 18px;
              color: ${theme.color.gray};
              &:hover {
                background: linear-gradient(90.25deg, #2bd7ef -18.72%, #fb4ef1 121.02%);
                ${'' /* background: linear-gradient(to right, #80ffcc, #f326b4, #f326b4); */}
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              @media screen and (max-width: 375px) {
                font-size: 13px;
              }
            }
          }
        }
        &.f-sub-block {
          width: 32%;
          @media screen and (max-width: 767px) {
            width: 100%;
          }
          p {
            padding: 0px 0px 15px;
            font-size: 14px;
            line-height: 20px;
          }
          .f-input-block {
            .input-group {
              width: 100%;
              position: relative;
              input {
                width: 100%;
                padding: 0px 18px;
                height: 48px;
                border-radius: 30px;
                border: none;
                background: transparent;
                border: 1px solid rgba(169, 169, 194, 0.25);
                font-size: 14px;
                outline: none;
                color: #191820;
                font-family: 'DM Sans', sans-serif;
                &::placeholder {
                  /* Chrome, Firefox, Opera, Safari 10.1+ */
                  color: #191820;
                  opacity: 1; /* Firefox */
                }

                &:-ms-input-placeholder {
                  /* Internet Explorer 10-11 */
                  color: #191820;
                }

                &::-ms-input-placeholder {
                  /* Microsoft Edge */
                  color: #191820;
                }
              }
              button {
                position: absolute;
                right: 0px;
                height: 47px;
                width: 42px;
                border-radius: 0px 30px 30px 0px;
                border: none;
                color: ${theme.color.black};
                outline: none;
                background: var(--Linear, linear-gradient(90deg, #2bd7ef -18.72%, #fb4ef1 121.02%));
                display: flex;
                justify-content: center;
                align-items: center;
                &:disabled {
                  opacity: 0.5;
                }
              }
            }
          }
        }
      }
    }
  }
  .footer-middle {
    position: relative;
    margin-bottom: 60px;
    
    .container {
      max-width: 1440px;
      @media screen and (max-width: 1439px) {
        max-width: 100%;
      }
    }
    .footer-middle-main {
      display: flex;
      flex-wrap: wrap;
      margin: 0px -18px;
      &.dark-mode {
        display: none;
      }
      .footer-middle-inner {
        padding: 0px 16px 18px;
      }
    }
  }
  .f-top-bottom {
    position: relative;
    padding-bottom: 120px;
    @media screen and (max-width: 991px) {
      padding-bottom: 110px;
    }
    .container {
      max-width: 1440px;
      @media screen and (max-width: 1439px) {
        max-width: 100%;
      }
    }
    .f-top-bottom-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 767px) {
        display: block;
      }
      .f-top-bottom-menu {
        @media screen and (max-width: 767px) {
          &:last-child {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .switch__background,
        .switch__background:before,
        .switch__background:after {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
        .switch {
          width: 137px;
          height: 60px;
          display: block;
          position: relative;
          margin: 0px auto;
        }
        .switch__background {
          border-radius: 70px;
          -webkit-box-shadow: 0 35px 70px -16px rgba(32, 15, 55, 0.3);
          box-shadow: 0 35px 70px -16px rgba(32, 15, 55, 0.3);
          -webkit-transition: box-shadow 0.8s;
          -moz-transition: box-shadow 0.8s;
          -o-transition: box-shadow 0.8s;
          -ms-transition: box-shadow 0.8s;
          transition: box-shadow 0.8s;
          overflow: hidden;
        }
        .switch__background:before {
          content: '';
          background: -webkit-linear-gradient(#200f37, #272065);
          background: -moz-linear-gradient(#200f37, #272065);
          background: -o-linear-gradient(#200f37, #272065);
          background: -ms-linear-gradient(#200f37, #272065);
          background: linear-gradient(#200f37, #272065);
          border-radius: 70px;
          -webkit-transition: opacity 0.8s;
          -moz-transition: opacity 0.8s;
          -o-transition: opacity 0.8s;
          -ms-transition: opacity 0.8s;
          transition: opacity 0.8s;
          overflow: hidden;
          z-index: -2;
        }
        .switch__background:after {
          content: '';
          opacity: 0;
          background: -webkit-linear-gradient(left, #21d2f2, #b0fff8);
          background: -moz-linear-gradient(left, #21d2f2, #b0fff8);
          background: -o-linear-gradient(left, #21d2f2, #b0fff8);
          background: -ms-linear-gradient(left, #21d2f2, #b0fff8);
          background: linear-gradient(to right, #21d2f2, #b0fff8);
          border-radius: 70px;
          -webkit-transition: opacity 0.8s;
          -moz-transition: opacity 0.8s;
          -o-transition: opacity 0.8s;
          -ms-transition: opacity 0.8s;
          transition: opacity 0.8s;
          z-index: -2;
        }
        .switch__toggle {
          content: '';
          height: 44px;
          width: 44px;
          position: relative;
          display: block;
          top: 8px;
          left: 8px;
          background: #fff;
          border-radius: 100%;
          -webkit-box-shadow: inset 8px -8px 0 #f8e3ef, 0 0 93.33333333333333px rgba(255, 255, 255, 0.65);
          box-shadow: inset 8px -8px 0 #f8e3ef, 0 0 93.33333333333333px rgba(255, 255, 255, 0.65);
          -webkit-transition: left 0.8s, box-shadow 0.8s;
          -moz-transition: left 0.8s, box-shadow 0.8s;
          -o-transition: left 0.8s, box-shadow 0.8s;
          -ms-transition: left 0.8s, box-shadow 0.8s;
          transition: left 0.8s, box-shadow 0.8s;
          overflow: hidden;
          cursor: pointer;
        }
        .switch__toggle:before,
        .switch__toggle:after {
          content: '';
          height: 90%;
          width: 90%;
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: -1;
          opacity: 0;
          -webkit-transition: transition 0.8s, opacity 0.8s;
          -moz-transition: transition 0.8s, opacity 0.8s;
          -o-transition: transition 0.8s, opacity 0.8s;
          -ms-transition: transition 0.8s, opacity 0.8s;
          transition: transition 0.8s, opacity 0.8s;
          background: rgba(255, 255, 255, 0.65);
          filter: blur(8px);
        }
        .switch__toggle:before {
          -webkit-transform: translate(-50%, -50%) rotate(45deg);
          -moz-transform: translate(-50%, -50%) rotate(45deg);
          -o-transform: translate(-50%, -50%) rotate(45deg);
          -ms-transform: translate(-50%, -50%) rotate(45deg);
          transform: translate(-50%, -50%) rotate(45deg);
        }
        .switch__toggle:after {
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .switch__moon {
          width: 28px;
          height: 28px;
          display: block;
          position: absolute;
          left: 40%;
          top: 35%;
          background: -webkit-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -moz-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -o-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -ms-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: linear-gradient(to bottom left, #f8e3ef, rgba(248, 227, 239, 0));
          -webkit-box-shadow: 28px -28px 0 -8px rgba(248, 227, 239, 0.5);
          box-shadow: 28px -28px 0 -8px rgba(248, 227, 239, 0.5);
          border-radius: 100%;
          -webkit-transition: -webkit-transform 0.8s, opacity 0.8s;
          -moz-transition: -moz-transform 0.8s, opacity 0.8s;
          -o-transition: -o-transform 0.8s, opacity 0.8s;
          -ms-transition: -ms-transform 0.8s, opacity 0.8s;
          transition: transform 0.8s, opacity 0.8s;
        }
        .switch__moon:before {
          content: '';
          width: 23px;
          height: 23px;
          display: block;
          position: absolute;
          left: -70%;
          top: 195%;
          background: -webkit-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -moz-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -o-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -ms-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: linear-gradient(to bottom left, #f8e3ef, rgba(248, 227, 239, 0));
          -webkit-box-shadow: 23px -23px 0 -8px rgba(248, 227, 239, 0.5);
          box-shadow: 23px -23px 0 -8px rgba(248, 227, 239, 0.5);
          border-radius: 100%;
          -webkit-transform: rotate(-60deg);
          -moz-transform: rotate(-60deg);
          -o-transform: rotate(-60deg);
          -ms-transform: rotate(-60deg);
          transform: rotate(-60deg);
        }
        .switch__moon:after {
          content: '';
          width: 35px;
          height: 35px;
          display: block;
          position: absolute;
          left: 190%;
          top: 55%;
          background: -webkit-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -moz-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -o-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: -ms-linear-gradient(top right, #f8e3ef, rgba(248, 227, 239, 0));
          background: linear-gradient(to bottom left, #f8e3ef, rgba(248, 227, 239, 0));
          -webkit-box-shadow: 35px -35px 0 -8px rgba(248, 227, 239, 0.5);
          box-shadow: 35px -35px 0 -8px rgba(248, 227, 239, 0.5);
          border-radius: 100%;
        }
        .switch__stars {
          width: 8px;
          height: 8px;
          display: block;
          position: absolute;
          left: 60%;
          top: 35%;
          background: #fff;
          -webkit-box-shadow: 24px -24px 0 -3px #fff;
          box-shadow: 24px -24px 0 -3px #fff;
          filter: blur(0.5px);
          border-radius: 100%;
          -webkit-transition: -webkit-transform 0.8s, opacity 0.8s;
          -moz-transition: -moz-transform 0.8s, opacity 0.8s;
          -o-transition: -o-transform 0.8s, opacity 0.8s;
          -ms-transition: -ms-transform 0.8s, opacity 0.8s;
          transition: transform 0.8s, opacity 0.8s;
        }
        .switch__stars:before {
          content: '';
          width: 7px;
          height: 7px;
          display: block;
          position: absolute;
          left: 700%;
          top: 560%;
          background: #fff;
          -webkit-box-shadow: 21px -21px 0 -3px #fff;
          box-shadow: 21px -21px 0 -3px #fff;
          filter: blur(0.5px);
          border-radius: 100%;
          -webkit-transform: rotate(-75deg);
          -moz-transform: rotate(-75deg);
          -o-transform: rotate(-75deg);
          -ms-transform: rotate(-75deg);
          transform: rotate(-75deg);
          -webkit-transition: -webkit-transform 0.8s, opacity 0.8s;
          -moz-transition: -moz-transform 0.8s, opacity 0.8s;
          -o-transition: -o-transform 0.8s, opacity 0.8s;
          -ms-transition: -ms-transform 0.8s, opacity 0.8s;
          transition: transform 0.8s, opacity 0.8s;
        }
        .switch__stars:after {
          content: '';
          height: 5px;
          width: 5px;
          position: absolute;
          left: 200%;
          top: 260%;
          opacity: 0;
          background: -webkit-linear-gradient(left, #fff, rgba(255, 255, 255, 0));
          background: -moz-linear-gradient(left, #fff, rgba(255, 255, 255, 0));
          background: -o-linear-gradient(left, #fff, rgba(255, 255, 255, 0));
          background: -ms-linear-gradient(left, #fff, rgba(255, 255, 255, 0));
          background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
          filter: blur(0.5px);
          border-radius: 100%;
          -webkit-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
          -moz-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
          -o-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
          -ms-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
          animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
          -webkit-animation-delay: 3.2s;
          -moz-animation-delay: 3.2s;
          -o-animation-delay: 3.2s;
          -ms-animation-delay: 3.2s;
          animation-delay: 3.2s;
        }
        .switch__clouds {
          height: 28px;
          width: 28px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: -84px;
          display: block;
          -webkit-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -moz-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -o-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -ms-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border-radius: 50% 50% 0 50%;
        }
        .switch__clouds:before,
        .switch__clouds:after {
          content: '';
          height: 23px;
          width: 23px;
          background: #fff;
          position: absolute;
          border-radius: 50% 50% 0 50%;
          left: -33%;
          bottom: 0;
          -webkit-box-shadow: inset 4px -2px 0 #f6f8f8;
          box-shadow: inset 4px -2px 0 #f6f8f8;
        }
        .switch__clouds:after {
          height: 21px;
          width: 21px;
          left: auto;
          right: -30%;
          border-radius: 100%;
        }
        .switch__input {
          display: none;
        }
        .switch__input:checked + .switch__background {
          -webkit-box-shadow: 0 35px 70px -16px rgba(33, 210, 242, 0.3);
          box-shadow: 0 35px 70px -16px rgba(33, 210, 242, 0.3);
        }
        .switch__input:checked + .switch__background:before {
          opacity: 0;
        }
        .switch__input:checked + .switch__background:after {
          opacity: 1;
        }
        .switch__input:checked + .switch__background .switch__toggle {
          left: 85px;
          -webkit-box-shadow: inset 0 0 0.1px #fff, 0 0 32px #fff;
          box-shadow: inset 0 0 0.1px #fff, 0 0 32px #fff;
          -webkit-animation: overlay 0s forwards;
          -moz-animation: overlay 0s forwards;
          -o-animation: overlay 0s forwards;
          -ms-animation: overlay 0s forwards;
          animation: overlay 0s forwards;
          -webkit-animation-delay: 0.4s;
          -moz-animation-delay: 0.4s;
          -o-animation-delay: 0.4s;
          -ms-animation-delay: 0.4s;
          animation-delay: 0.4s;
        }
        .switch__input:checked + .switch__background .switch__toggle:before,
        .switch__input:checked + .switch__background .switch__toggle:after {
          opacity: 1;
          -webkit-transition-delay: 0.4s;
          -moz-transition-delay: 0.4s;
          -o-transition-delay: 0.4s;
          -ms-transition-delay: 0.4s;
          transition-delay: 0.4s;
        }
        .switch__input:checked + .switch__background .switch__toggle:before {
          -webkit-transform: translate(-50%, -50%) rotate(45deg);
          -moz-transform: translate(-50%, -50%) rotate(45deg);
          -o-transform: translate(-50%, -50%) rotate(45deg);
          -ms-transform: translate(-50%, -50%) rotate(45deg);
          transform: translate(-50%, -50%) rotate(45deg);
          -webkit-animation: spin-before 12.8s linear infinite;
          -moz-animation: spin-before 12.8s linear infinite;
          -o-animation: spin-before 12.8s linear infinite;
          -ms-animation: spin-before 12.8s linear infinite;
          animation: spin-before 12.8s linear infinite;
        }
        .switch__input:checked + .switch__background .switch__toggle:after {
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          -webkit-animation: spin-after 12.8s linear infinite;
          -moz-animation: spin-after 12.8s linear infinite;
          -o-animation: spin-after 12.8s linear infinite;
          -ms-animation: spin-after 12.8s linear infinite;
          animation: spin-after 12.8s linear infinite;
        }
        .switch__input:checked + .switch__background .switch__moon {
          opacity: 0;
          -webkit-transform: translate(-50%, 100%) rotate(30deg);
          -moz-transform: translate(-50%, 100%) rotate(30deg);
          -o-transform: translate(-50%, 100%) rotate(30deg);
          -ms-transform: translate(-50%, 100%) rotate(30deg);
          transform: translate(-50%, 100%) rotate(30deg);
        }
        .switch__input:checked + .switch__background .switch__stars {
          opacity: 0;
          -webkit-transform: translateX(-47px);
          -moz-transform: translateX(-47px);
          -o-transform: translateX(-47px);
          -ms-transform: translateX(-47px);
          transform: translateX(-47px);
        }
        .switch__input:checked + .switch__background .switch__stars:before {
          opacity: 0;
          -webkit-transform: translateX(-35px);
          -moz-transform: translateX(-35px);
          -o-transform: translateX(-35px);
          -ms-transform: translateX(-35px);
          transform: translateX(-35px);
        }
        .switch__input:checked + .switch__background .switch__stars:after {
          -webkit-animation: none;
          -moz-animation: none;
          -o-animation: none;
          -ms-animation: none;
          animation: none;
        }
        .switch__input:checked + .switch__background .switch__clouds {
          -webkit-transform: translateX(150px);
          -moz-transform: translateX(150px);
          -o-transform: translateX(150px);
          -ms-transform: translateX(150px);
          transform: translateX(150px);
          -webkit-transition-delay: 0.2s;
          -moz-transition-delay: 0.2s;
          -o-transition-delay: 0.2s;
          -ms-transition-delay: 0.2s;
          transition-delay: 0.2s;
          -webkit-animation: cloud-move 8s linear infinite;
          -moz-animation: cloud-move 8s linear infinite;
          -o-animation: cloud-move 8s linear infinite;
          -ms-animation: cloud-move 8s linear infinite;
          animation: cloud-move 8s linear infinite;
          -webkit-animation-delay: 1.6s;
          -moz-animation-delay: 1.6s;
          -o-animation-delay: 1.6s;
          -ms-animation-delay: 1.6s;
          animation-delay: 1.6s;
        }
        .switch__input:checked + .switch__background .switch__clouds:before,
        .switch__input:checked + .switch__background .switch__clouds:after {
          -webkit-animation: cloud-move 8s linear infinite;
          -moz-animation: cloud-move 8s linear infinite;
          -o-animation: cloud-move 8s linear infinite;
          -ms-animation: cloud-move 8s linear infinite;
          animation: cloud-move 8s linear infinite;
          -webkit-animation-delay: 1.6s;
          -moz-animation-delay: 1.6s;
          -o-animation-delay: 1.6s;
          -ms-animation-delay: 1.6s;
          animation-delay: 1.6s;
        }
        @-moz-keyframes overlay {
          0% {
            overflow: hidden;
          }
          100% {
            overflow: visible;
          }
        }
        @-webkit-keyframes overlay {
          0% {
            overflow: hidden;
          }
          100% {
            overflow: visible;
          }
        }
        @-o-keyframes overlay {
          0% {
            overflow: hidden;
          }
          100% {
            overflow: visible;
          }
        }
        @keyframes overlay {
          0% {
            overflow: hidden;
          }
          100% {
            overflow: visible;
          }
        }
        @-moz-keyframes spin-before {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(45deg);
            -moz-transform: translate(-50%, -50%) rotate(45deg);
            -o-transform: translate(-50%, -50%) rotate(45deg);
            -ms-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(405deg);
            -moz-transform: translate(-50%, -50%) rotate(405deg);
            -o-transform: translate(-50%, -50%) rotate(405deg);
            -ms-transform: translate(-50%, -50%) rotate(405deg);
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
        @-webkit-keyframes spin-before {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(45deg);
            -moz-transform: translate(-50%, -50%) rotate(45deg);
            -o-transform: translate(-50%, -50%) rotate(45deg);
            -ms-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(405deg);
            -moz-transform: translate(-50%, -50%) rotate(405deg);
            -o-transform: translate(-50%, -50%) rotate(405deg);
            -ms-transform: translate(-50%, -50%) rotate(405deg);
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
        @-o-keyframes spin-before {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(45deg);
            -moz-transform: translate(-50%, -50%) rotate(45deg);
            -o-transform: translate(-50%, -50%) rotate(45deg);
            -ms-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(405deg);
            -moz-transform: translate(-50%, -50%) rotate(405deg);
            -o-transform: translate(-50%, -50%) rotate(405deg);
            -ms-transform: translate(-50%, -50%) rotate(405deg);
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
        @keyframes spin-before {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(45deg);
            -moz-transform: translate(-50%, -50%) rotate(45deg);
            -o-transform: translate(-50%, -50%) rotate(45deg);
            -ms-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(405deg);
            -moz-transform: translate(-50%, -50%) rotate(405deg);
            -o-transform: translate(-50%, -50%) rotate(405deg);
            -ms-transform: translate(-50%, -50%) rotate(405deg);
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
        @-moz-keyframes spin-after {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(0);
            -moz-transform: translate(-50%, -50%) rotate(0);
            -o-transform: translate(-50%, -50%) rotate(0);
            -ms-transform: translate(-50%, -50%) rotate(0);
            transform: translate(-50%, -50%) rotate(0);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            -o-transform: translate(-50%, -50%) rotate(360deg);
            -ms-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @-webkit-keyframes spin-after {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(0);
            -moz-transform: translate(-50%, -50%) rotate(0);
            -o-transform: translate(-50%, -50%) rotate(0);
            -ms-transform: translate(-50%, -50%) rotate(0);
            transform: translate(-50%, -50%) rotate(0);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            -o-transform: translate(-50%, -50%) rotate(360deg);
            -ms-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @-o-keyframes spin-after {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(0);
            -moz-transform: translate(-50%, -50%) rotate(0);
            -o-transform: translate(-50%, -50%) rotate(0);
            -ms-transform: translate(-50%, -50%) rotate(0);
            transform: translate(-50%, -50%) rotate(0);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            -o-transform: translate(-50%, -50%) rotate(360deg);
            -ms-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes spin-after {
          0% {
            -webkit-transform: translate(-50%, -50%) rotate(0);
            -moz-transform: translate(-50%, -50%) rotate(0);
            -o-transform: translate(-50%, -50%) rotate(0);
            -ms-transform: translate(-50%, -50%) rotate(0);
            transform: translate(-50%, -50%) rotate(0);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            -o-transform: translate(-50%, -50%) rotate(360deg);
            -ms-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @-moz-keyframes falling-stars {
          0% {
            width: 50%;
            opacity: 1;
            -webkit-transform: translate(70px, -70px) rotate(-45deg);
            -moz-transform: translate(70px, -70px) rotate(-45deg);
            -o-transform: translate(70px, -70px) rotate(-45deg);
            -ms-transform: translate(70px, -70px) rotate(-45deg);
            transform: translate(70px, -70px) rotate(-45deg);
          }
          5% {
            width: 400%;
            opacity: 1;
          }
          15% {
            -webkit-box-shadow: -100px -30px 0 -3px #fff;
            box-shadow: -100px -30px 0 -3px #fff;
          }
          25%,
          100% {
            -webkit-box-shadow: -100px -30px 0 -6px #fff;
            box-shadow: -100px -30px 0 -6px #fff;
            width: 400%;
            opacity: 0;
            -webkit-transform: translate(-70px, 70px) rotate(-45deg);
            -moz-transform: translate(-70px, 70px) rotate(-45deg);
            -o-transform: translate(-70px, 70px) rotate(-45deg);
            -ms-transform: translate(-70px, 70px) rotate(-45deg);
            transform: translate(-70px, 70px) rotate(-45deg);
          }
        }
        @-webkit-keyframes falling-stars {
          0% {
            width: 50%;
            opacity: 1;
            -webkit-transform: translate(70px, -70px) rotate(-45deg);
            -moz-transform: translate(70px, -70px) rotate(-45deg);
            -o-transform: translate(70px, -70px) rotate(-45deg);
            -ms-transform: translate(70px, -70px) rotate(-45deg);
            transform: translate(70px, -70px) rotate(-45deg);
          }
          5% {
            width: 400%;
            opacity: 1;
          }
          15% {
            -webkit-box-shadow: -100px -30px 0 -3px #fff;
            box-shadow: -100px -30px 0 -3px #fff;
          }
          25%,
          100% {
            -webkit-box-shadow: -100px -30px 0 -6px #fff;
            box-shadow: -100px -30px 0 -6px #fff;
            width: 400%;
            opacity: 0;
            -webkit-transform: translate(-70px, 70px) rotate(-45deg);
            -moz-transform: translate(-70px, 70px) rotate(-45deg);
            -o-transform: translate(-70px, 70px) rotate(-45deg);
            -ms-transform: translate(-70px, 70px) rotate(-45deg);
            transform: translate(-70px, 70px) rotate(-45deg);
          }
        }
        @-o-keyframes falling-stars {
          0% {
            width: 50%;
            opacity: 1;
            -webkit-transform: translate(70px, -70px) rotate(-45deg);
            -moz-transform: translate(70px, -70px) rotate(-45deg);
            -o-transform: translate(70px, -70px) rotate(-45deg);
            -ms-transform: translate(70px, -70px) rotate(-45deg);
            transform: translate(70px, -70px) rotate(-45deg);
          }
          5% {
            width: 400%;
            opacity: 1;
          }
          15% {
            -webkit-box-shadow: -100px -30px 0 -3px #fff;
            box-shadow: -100px -30px 0 -3px #fff;
          }
          25%,
          100% {
            -webkit-box-shadow: -100px -30px 0 -6px #fff;
            box-shadow: -100px -30px 0 -6px #fff;
            width: 400%;
            opacity: 0;
            -webkit-transform: translate(-70px, 70px) rotate(-45deg);
            -moz-transform: translate(-70px, 70px) rotate(-45deg);
            -o-transform: translate(-70px, 70px) rotate(-45deg);
            -ms-transform: translate(-70px, 70px) rotate(-45deg);
            transform: translate(-70px, 70px) rotate(-45deg);
          }
        }
        @keyframes falling-stars {
          0% {
            width: 50%;
            opacity: 1;
            -webkit-transform: translate(70px, -70px) rotate(-45deg);
            -moz-transform: translate(70px, -70px) rotate(-45deg);
            -o-transform: translate(70px, -70px) rotate(-45deg);
            -ms-transform: translate(70px, -70px) rotate(-45deg);
            transform: translate(70px, -70px) rotate(-45deg);
          }
          5% {
            width: 400%;
            opacity: 1;
          }
          15% {
            -webkit-box-shadow: -100px -30px 0 -3px #fff;
            box-shadow: -100px -30px 0 -3px #fff;
          }
          25%,
          100% {
            -webkit-box-shadow: -100px -30px 0 -6px #fff;
            box-shadow: -100px -30px 0 -6px #fff;
            width: 400%;
            opacity: 0;
            -webkit-transform: translate(-70px, 70px) rotate(-45deg);
            -moz-transform: translate(-70px, 70px) rotate(-45deg);
            -o-transform: translate(-70px, 70px) rotate(-45deg);
            -ms-transform: translate(-70px, 70px) rotate(-45deg);
            transform: translate(-70px, 70px) rotate(-45deg);
          }
        }
        @-moz-keyframes cloud-move {
          0% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
          }
          50% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
            box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
          }
          90%,
          100% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
          }
        }
        @-webkit-keyframes cloud-move {
          0% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
          }
          50% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
            box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
          }
          90%,
          100% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
          }
        }
        @-o-keyframes cloud-move {
          0% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
          }
          50% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
            box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
          }
          90%,
          100% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
          }
        }
        @keyframes cloud-move {
          0% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33, 210, 242, 0);
          }
          50% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
            box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
          }
          90%,
          100% {
            -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
            box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33, 210, 242, 0);
          }
        }
      }
      p {
        color: rgba(25, 24, 32, 0.5);
        font-size: 14px;
        @media screen and (max-width: 767px) {
          margin-bottom: 20px;
        }
        a {
          color: rgba(25, 24, 32, 0.5);
        }
      }
      ul {
        display: flex;
        align-items: center;
        margin: 0px;
        padding: 0px;
        @media screen and (max-width: 767px) {
          justify-content: space-between;
          margin-bottom: 20px;
        }
        li {
          padding: 0px 25px;
          @media screen and (max-width: 991px) {
            padding: 0px 5px;
          }
          @media screen and (max-width: 767px) {
            padding: 0px;
          }
          a {
            color: rgba(25, 24, 32, 0.5);
            font-size: 14px;
          }
        }
      }
      .f-sub-block {
        @media screen and (max-width: 767px) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .TX-select2-wrapper {
        .TX-fix-select__control {
          width: 100%;
          border-radius: 8px;
          /* border: 1px solid ${theme.color.borderColor}; */
          align-items: flex-start;
          font-size: 14px;
          line-height: normal;
          color: ${theme.color.black};
          font-weight: 600;
          outline: none;
          background-color: rgba(25, 24, 32, 0.06);
          box-shadow: none;
          border: none;
          .TX-fix-select__value-container {
            min-height: 32px;
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
              padding: 6px;
            }
            .TX-fix-select__single-value {
              padding: 6px;
            }
            .TX-fix-select__multi-value {
              min-height: 32px;
              display: flex;
              align-items: center;
              border-radius: 8px;
              min-height: 32px;
              display: flex;
              align-items: center;
              border-radius: 100px;
              padding: 6px 14px;
              background: #f7f7f7;
              border: 1px solid #e5e5e5;
              min-width: 70px;
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
            margin-right: 0;
            .TX-fix-select__indicator-separator {
              display: none;
            }
            .TX-fix-select__indicator {
              padding: 0px 5px 0px 0px;
            }
          }
        }
      }
    }
  }
  .f-bottom-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 50px;
    border-top: 1px solid #ededed;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    background-color: #ffffff;
    z-index: 999;
    @media screen and (max-width: 767px) {
      padding: 0px 5px;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .f-bottom-block-inner-left {
      @media screen and (max-width: 767px) {
       margin-bottom: 15px;
      }
      a {
        display: flex;
        align-items: center;
        span {
          font-weight: bold;
          font-size: 14px;
          color: #000000;
          padding-left: 5px;
        }
      }
    }
    .f-bottom-block-inner-right {
      ul {
        display: flex;
        align-items: center;
        padding:0px;
        margin: 0px;
        // margin: 0px -25px;
        li {
          // padding: 0px 25px;
          a {
            display: flex;
            align-items: center;
            span {
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              padding-left: 5px;

              @media screen and (max-width: 767px) {
                font-size: 10px;
               }

            }
            img {
              width: 18px;
            }
          }
           &.last-img {
            cursor: pointer;
            @media screen and (max-width: 767px) {
              width: 35px;
             }
            a {
              img {
                @media screen and (max-width: 767px) {
                  width: 35px;
                 }
              }
            }
          } 
        }
      }
    }
  }
`;
