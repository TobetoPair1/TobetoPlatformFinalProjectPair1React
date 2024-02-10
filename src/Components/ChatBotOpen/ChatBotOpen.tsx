import React from "react";
import "./ChatBotOpen.css";

type Props = {};

const ChatBotOpen = (props: Props) => {
  return (
    <div className="frame-content">
      <div className="exw-conversation-container">
        <div className="exw-header-and-loading">
          <div
            className="exw-header exw-with-subtitle"
            style={{
              backgroundColor: "rgba(153, 51, 255, 0.9)",
              color: "rgb(255, 255, 255)",
            }}
          >
            <div className="exw-header-avatar-section">
              <img
                src="https://tobeto.services.exairon.com/uploads/channels/channel-1696501679589-avatar-newphoto.png"
                className="exw-avatar"
                alt="chat avatar"
              />
              <div className="exw-header-title-section">
                <h4 className="exw-title exw-with-avatar">Tobeto Yardım</h4>
                <span className="exw-with-avatar">Merhaba 👋</span>
              </div>
            </div>
            <div className="exw-header-buttons">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 16 16"
                className="exw-minimize-button header-button"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                <path
                  fillRule="evenodd"
                  d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z"
                />
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 640 512"
                className="exw-end-session-button header-button"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  color: "rgb(255, 255, 255)",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                <path d="M64 240c0 49.6 21.4 95 57 130.7-12.6 50.3-54.3 95.2-54.8 95.8-2.2 2.3-2.8 5.7-1.5 8.7 1.3 2.9 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 27.4 0 53.7-3.6 78.4-10L72.9 186.4c-5.6 17.1-8.9 35-8.9 53.6zm569.8 218.1l-114.4-88.4C554.6 334.1 576 289.2 576 240c0-114.9-114.6-208-256-208-65.1 0-124.2 20.1-169.4 52.7L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3z" />
              </svg>
            </div>
            <div
              className="exw-finishSessionCheck"
              style={{ borderLeft: "7px solid rgb(153, 51, 255)", opacity: 0 }}
            >
              <span>Görüşmeyi bitirmek istediğinize emin misiniz?</span>
              <div className="finishSessionCheckButtons">
                <button>Evet</button>
                <button>Hayır</button>
              </div>
            </div>
          </div>
        </div>
        <div id="exw-messages" className="exw-messages-container">
          <div className="exw-group-message exw-from-response">
            <div className="exw-message exw-with-avatar">
              <div style={{ display: "flex" }}>
                <img
                  src="https://tobeto.services.exairon.com/uploads/channels/channel-1696501679589-avatar-newphoto.png"
                  className="exw-avatar"
                  alt="profile"
                />
                <div
                  className="exw-response"
                  style={{
                    color: "rgb(0, 0, 0)",
                    backgroundColor: "rgb(229, 232, 231)",
                  }}
                >
                  <div className="exw-message-text">
                    <div className="exw-sender-response">
                      <p>Merhabalar, Tobeto'ya hoş geldiniz. 👋</p>
                    </div>
                  </div>
                </div>
              </div>
              <span className="exw-message-time  ">00:23</span>
            </div>
            <div className="exw-message exw-with-avatar">
              <div style={{ display: "flex" }}>
                <img
                  src="https://tobeto.services.exairon.com/uploads/channels/channel-1696501679589-avatar-newphoto.png"
                  className="exw-avatar"
                  alt="profile"
                />
                <div
                  className="exw-response"
                  style={{
                    color: "rgb(0, 0, 0)",
                    backgroundColor: "rgb(229, 232, 231)",
                  }}
                >
                  <div className="exw-message-text">
                    <div className="exw-sender-response">
                      <p>
                        Size hitap edebilmek için isminizi öğrenebilir miyim?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <span className="exw-message-time  ">00:23</span>
            </div>
          </div>
          <div className="exw-message exw-with-avatar exw-inline-response-container">
            <div style={{ display: "flex" }}>
              <img
                src="https://tobeto.services.exairon.com/uploads/channels/channel-1696501679589-avatar-newphoto.png"
                className="exw-avatar"
                alt="profile"
              />
            </div>
            <div className="exw-inline-response">
              <div className="exw-inline-response-header">Ad Soyad</div>
              <div className="exw-inline-response-input-container">
                <input />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="fixedLogoContainer-chat">
            <a
              href="https://exairon.com/"
              target="_blank"
              className="exaironBanner"
              rel="noopener noreferrer"
            >
              <img
                className="fixedLogo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0UExURf///+/6+mnSz0bIxKvm5MzZ5WWLsWiOstbg6uX39wy2sgCzrge1sNXy8vb4+jNmmBBMhjBklvX4+pDe3DnEwHibuxFNhsHQ3/z+/ozd2lrOyxi6tgl3l22Ste76+ZTf3XzY1QSXoxpTi/Dz99z09IPa11zOyweFnKvA1Pf8/HXW0xy5thBUiSNaj+rv9HnX1Kjl41+HrtDx8AW0r0rJxihekrHF11TMyVjNyuH29c7a5lmDq4ZJZ3AAAAAJcEhZcwAALEkAACxJAdrDVSAAAAB1SURBVChTnchHEoIAFATRUQHFbxhzRFDMmHO4/72UqrmA9u41/iuTzTmA6+ULGn7RSuVKlbW6BhpmzRbbHRHo9vqDIQMpbRRG40kspE1n8wWXwrdVtE423O5EYG92CMijiNPZLoiv5E3DuT+ewOvtuRo/BXwAsGoIEc8Sxn0AAAAASUVORK5CYII="
                alt=""
              />
              <span>&nbsp;&nbsp;We run on Exairon</span>
            </a>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default ChatBotOpen;