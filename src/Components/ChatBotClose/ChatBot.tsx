import React from "react";
import "./ChatBot.css";

type Props = {};

const ChatBot = (props: Props) => {
  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <iframe
        className="exw-custom-popup-frame"
        id="popUpIframe"
        srcDoc='<html><head><base target="_parent"></head><body id="exw-launcher-frame-body"><div></div></body></html>'
        style={{ width: "280px", height: "70px" }}
      />
      <iframe
        className="exw-launcher-frame animated swing"
        allow="fullscreen"
        allowFullScreen
        id="exw-launcher-frame"
        srcDoc='<html><head><base target="_parent"></head><body id="exw-launcher-frame-body"><div></div></body></html>'
        style={{ height: "160px", width: "70px" }}
      />
      <div>
        <div className="frame-content">
          <button
            id="launcher"
            type="button"
            className="exw-launcher"
            style={{
              backgroundColor: "rgb(153, 51, 255)",
              height: "60px",
              width: "60px",
            }}
          >
            <div className="exw-open-launcher__container">
              <img
                src="https://tobeto.services.exairon.com/uploads/channels/launcher_button_1.svg"
                className="exw-open-launcher"
                alt=""
              />
            </div>
          </button>
        </div>
        <div
          className="exw-popup-body"
          style={{
            color: "rgb(255, 255, 255)",
            backgroundColor: "rgb(0, 0, 0)",
          }}
        >
          <div className="exw-popup-message">
            <p
              className="exw-static-popup-content"
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(0, 0, 0)",
              }}
            ></p>
            <p>
              <strong>Sorularınız için burdayım 👋</strong>
            </p>
            <p />
          </div>
          <div className="exw-popup-close">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#ffffff"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
