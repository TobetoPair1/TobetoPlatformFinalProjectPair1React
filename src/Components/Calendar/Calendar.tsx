import "./Calendar.css";

const Calendar = () => {
  return (
    <>
      <div className="row mx-0">
        <div className="col-lg-3 col-md-4 col-12 mt-3  p-0">
          <div className="filter-left equal-box ">
            <div className="d-flex flex-column">
              <div className="filter-header mb-2">
                <span>Eğitim Arama</span>
              </div>
              <input
                type="text"
                id="search-event"
                className="cal-filter-input"
                placeholder="Eğitim arayın..."
              />
            </div>
            <div className="d-flex flex-column">
              <div className="filter-header mb-2">
                <span>Eğitmen</span>
              </div>
              <div className="calender-select css-b62m3t-container">
                <span
                  id="react-select-2-live-region"
                  className="css-7pg0cj-a11yText"
                />
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  className="css-7pg0cj-a11yText"
                />
                <div className=" css-14cgata-control">
                  <div className=" css-hlgwow">
                    <div
                      className=" css-1jqq78o-placeholder"
                      id="react-select-2-placeholder"
                    >
                      Eğitmen Seçiniz
                    </div>
                    <div className=" css-19bb58m" data-value>
                      <input
                        autoCapitalize="none"
                        autoComplete="off"
                        autoCorrect="off"
                        id="react-select-2-input"
                        spellCheck="false"
                        tabIndex={0}
                        type="text"
                        aria-autocomplete="list"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="combobox"
                        aria-describedby="react-select-2-placeholder"
                        defaultValue
                        style={{
                          color: "inherit",
                          background: "0px center",
                          opacity: 1,
                          width: "100%",
                          gridArea: "1 / 2",
                          font: "inherit",
                          minWidth: "2px",
                          border: "0px",
                          margin: "0px",
                          outline: "0px",
                          padding: "0px",
                        }}
                      />
                    </div>
                  </div>
                  <div className=" css-1wy0on6">
                    <span className=" css-1u9des2-indicatorSeparator" />
                    <div
                      className=" css-1xc3v61-indicatorContainer"
                      aria-hidden="true"
                    >
                      <svg
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        className="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="filter-header mb-2">
                <span>Eğitim Durumu</span>
              </div>
              <div className="edu-status-filter">
                <span>
                  <input
                    className="form-check-input me-2 checkEventEnded"
                    type="checkbox"
                    name="eventEnded"
                    defaultValue="eventEnded"
                  />
                  Bitmiş Dersler
                </span>
                <span>
                  <input
                    className="form-check-input me-2 checkEventContinue"
                    type="checkbox"
                    name="eventContinue"
                    defaultValue="eventContinue"
                  />
                  Devam Eden Dersler
                </span>
                <span>
                  <input
                    className="form-check-input me-2 checkEventBuyed"
                    type="checkbox"
                    name="eventBuyed"
                    defaultValue="eventBuyed"
                  />
                  Satın Alınmış Dersler
                </span>
                <span>
                  <input
                    className="form-check-input me-2 checkEventNotStarted"
                    type="checkbox"
                    name="eventNotStarted"
                    defaultValue="eventNotStarted"
                  />
                  Başlamamış Dersler
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-12 mt-3  p-0">
          <div className="calendar-bg equal-box">
            <div className="calendar-desktop">
              <div
                className="fc fc-media-screen fc-direction-ltr fc-theme-standard"
                style={{ height: "110vh" }}
              >
                <div className="fc-header-toolbar fc-toolbar ">
                  <div className="fc-toolbar-chunk">
                    <button
                      type="button"
                      title="Bugün"
                      disabled
                      aria-pressed="false"
                      className="fc-today-button fc-button fc-button-primary"
                    >
                      Bugün
                    </button>
                    <div className="fc-button-group">
                      <button
                        type="button"
                        title="geri"
                        aria-pressed="false"
                        className="fc-prev-button fc-button fc-button-primary"
                      >
                        <span className="fc-icon fc-icon-chevron-left" />
                      </button>
                      <button
                        type="button"
                        title="ileri"
                        aria-pressed="false"
                        className="fc-next-button fc-button fc-button-primary"
                      >
                        <span className="fc-icon fc-icon-chevron-right" />
                      </button>
                    </div>
                  </div>
                  <div className="fc-toolbar-chunk">
                    <h2 className="fc-toolbar-title" id="fc-dom-1">
                      Ocak 2024
                    </h2>
                  </div>
                  <div className="fc-toolbar-chunk">
                    <div className="fc-button-group">
                      <button
                        type="button"
                        title="Ay"
                        aria-pressed="true"
                        className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active"
                      >
                        Ay
                      </button>
                      <button
                        type="button"
                        title="Hafta"
                        aria-pressed="false"
                        className="fc-timeGridWeek-button fc-button fc-button-primary"
                      >
                        Hafta
                      </button>
                      <button
                        type="button"
                        title="Gün"
                        aria-pressed="false"
                        className="fc-timeGridDay-button fc-button fc-button-primary"
                      >
                        Gün
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  aria-labelledby="fc-dom-1"
                  className="fc-view-harness fc-view-harness-active"
                >
                  <div className="fc-dayGridMonth-view fc-view fc-daygrid">
                    <table
                      role="grid"
                      className="fc-scrollgrid  fc-scrollgrid-liquid"
                    >
                      <thead role="rowgroup">
                        <tr
                          role="presentation"
                          className="fc-scrollgrid-section fc-scrollgrid-section-header "
                        >
                          <th role="presentation">
                            <div className="fc-scroller-harness">
                              <div
                                className="fc-scroller"
                                style={{ overflow: "hidden scroll" }}
                              >
                                <table
                                  role="presentation"
                                  className="fc-col-header "
                                  style={{ width: "908px" }}
                                >
                                  <colgroup />
                                  <thead role="presentation">
                                    <tr role="row">
                                      <th
                                        role="columnheader"
                                        className="fc-col-header-cell fc-day fc-day-mon"
                                      >
                                        <div className="fc-scrollgrid-sync-inner">
                                          <a
                                            aria-label="Pazartesi"
                                            className="fc-col-header-cell-cushion"
                                          >
                                            Pazartesi
                                          </a>
                                        </div>
                                      </th>
                                      <th
                                        role="columnheader"
                                        className="fc-col-header-cell fc-day fc-day-tue"
                                      >
                                        <div className="fc-scrollgrid-sync-inner">
                                          <a
                                            aria-label="Salı"
                                            className="fc-col-header-cell-cushion"
                                          >
                                            Salı
                                          </a>
                                        </div>
                                      </th>
                                      <th
                                        role="columnheader"
                                        className="fc-col-header-cell fc-day fc-day-wed"
                                      >
                                        <div className="fc-scrollgrid-sync-inner">
                                          <a
                                            aria-label="Çarşamba"
                                            className="fc-col-header-cell-cushion"
                                          >
                                            Çarşamba
                                          </a>
                                        </div>
                                      </th>
                                      <th
                                        role="columnheader"
                                        className="fc-col-header-cell fc-day fc-day-thu"
                                      >
                                        <div className="fc-scrollgrid-sync-inner">
                                          <a
                                            aria-label="Perşembe"
                                            className="fc-col-header-cell-cushion"
                                          >
                                            Perşembe
                                          </a>
                                        </div>
                                      </th>
                                      <th
                                        role="columnheader"
                                        className="fc-col-header-cell fc-day fc-day-fri"
                                      >
                                        <div className="fc-scrollgrid-sync-inner">
                                          <a
                                            aria-label="Cuma"
                                            className="fc-col-header-cell-cushion"
                                          >
                                            Cuma
                                          </a>
                                        </div>
                                      </th>
                                      <th
                                        role="columnheader"
                                        className="fc-col-header-cell fc-day fc-day-sat"
                                      >
                                        <div className="fc-scrollgrid-sync-inner">
                                          <a
                                            aria-label="Cumartesi"
                                            className="fc-col-header-cell-cushion"
                                          >
                                            Cumartesi
                                          </a>
                                        </div>
                                      </th>
                                      <th
                                        role="columnheader"
                                        className="fc-col-header-cell fc-day fc-day-sun"
                                      >
                                        <div className="fc-scrollgrid-sync-inner">
                                          <a
                                            aria-label="Pazar"
                                            className="fc-col-header-cell-cushion"
                                          >
                                            Pazar
                                          </a>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                </table>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody role="rowgroup">
                        <tr
                          role="presentation"
                          className="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid"
                        >
                          <td role="presentation">
                            <div className="fc-scroller-harness fc-scroller-harness-liquid">
                              <div
                                className="fc-scroller fc-scroller-liquid-absolute"
                                style={{ overflow: "hidden scroll" }}
                              >
                                <div
                                  className="fc-daygrid-body fc-daygrid-body-unbalanced "
                                  style={{ width: "908px" }}
                                >
                                  <table
                                    role="presentation"
                                    className="fc-scrollgrid-sync-table"
                                    style={{ width: "908px", height: "920px" }}
                                  >
                                    <colgroup />
                                    <tbody role="presentation">
                                      <tr role="row">
                                        <td
                                          aria-labelledby="fc-dom-2"
                                          role="gridcell"
                                          data-date="2024-01-01"
                                          className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="1 Ocak 2024"
                                                id="fc-dom-2"
                                                className="fc-daygrid-day-number"
                                              >
                                                1
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-4"
                                          role="gridcell"
                                          data-date="2024-01-02"
                                          className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="2 Ocak 2024"
                                                id="fc-dom-4"
                                                className="fc-daygrid-day-number"
                                              >
                                                2
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-6"
                                          role="gridcell"
                                          data-date="2024-01-03"
                                          className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="3 Ocak 2024"
                                                id="fc-dom-6"
                                                className="fc-daygrid-day-number"
                                              >
                                                3
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-8"
                                          role="gridcell"
                                          data-date="2024-01-04"
                                          className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="4 Ocak 2024"
                                                id="fc-dom-8"
                                                className="fc-daygrid-day-number"
                                              >
                                                4
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-10"
                                          role="gridcell"
                                          data-date="2024-01-05"
                                          className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="5 Ocak 2024"
                                                id="fc-dom-10"
                                                className="fc-daygrid-day-number"
                                              >
                                                5
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-12"
                                          role="gridcell"
                                          data-date="2024-01-06"
                                          className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="6 Ocak 2024"
                                                id="fc-dom-12"
                                                className="fc-daygrid-day-number"
                                              >
                                                6
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-14"
                                          role="gridcell"
                                          data-date="2024-01-07"
                                          className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="7 Ocak 2024"
                                                id="fc-dom-14"
                                                className="fc-daygrid-day-number"
                                              >
                                                7
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr role="row">
                                        <td
                                          aria-labelledby="fc-dom-16"
                                          role="gridcell"
                                          data-date="2024-01-08"
                                          className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="8 Ocak 2024"
                                                id="fc-dom-16"
                                                className="fc-daygrid-day-number"
                                              >
                                                8
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-18"
                                          role="gridcell"
                                          data-date="2024-01-09"
                                          className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="9 Ocak 2024"
                                                id="fc-dom-18"
                                                className="fc-daygrid-day-number"
                                              >
                                                9
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-20"
                                          role="gridcell"
                                          data-date="2024-01-10"
                                          className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="10 Ocak 2024"
                                                id="fc-dom-20"
                                                className="fc-daygrid-day-number"
                                              >
                                                10
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-22"
                                          role="gridcell"
                                          data-date="2024-01-11"
                                          className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="11 Ocak 2024"
                                                id="fc-dom-22"
                                                className="fc-daygrid-day-number"
                                              >
                                                11
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+5 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +5 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-24"
                                          role="gridcell"
                                          data-date="2024-01-12"
                                          className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="12 Ocak 2024"
                                                id="fc-dom-24"
                                                className="fc-daygrid-day-number"
                                              >
                                                12
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Veri Bilimi Programı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ali Seyhan
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+8 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +8 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-26"
                                          role="gridcell"
                                          data-date="2024-01-13"
                                          className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="13 Ocak 2024"
                                                id="fc-dom-26"
                                                className="fc-daygrid-day-number"
                                              >
                                                13
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-28"
                                          role="gridcell"
                                          data-date="2024-01-14"
                                          className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="14 Ocak 2024"
                                                id="fc-dom-28"
                                                className="fc-daygrid-day-number"
                                              >
                                                14
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr role="row">
                                        <td
                                          aria-labelledby="fc-dom-30"
                                          role="gridcell"
                                          data-date="2024-01-15"
                                          className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="15 Ocak 2024"
                                                id="fc-dom-30"
                                                className="fc-daygrid-day-number"
                                              >
                                                15
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-32"
                                          role="gridcell"
                                          data-date="2024-01-16"
                                          className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="16 Ocak 2024"
                                                id="fc-dom-32"
                                                className="fc-daygrid-day-number"
                                              >
                                                16
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+6 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +6 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-34"
                                          role="gridcell"
                                          data-date="2024-01-17"
                                          className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="17 Ocak 2024"
                                                id="fc-dom-34"
                                                className="fc-daygrid-day-number"
                                              >
                                                17
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-36"
                                          role="gridcell"
                                          data-date="2024-01-18"
                                          className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="18 Ocak 2024"
                                                id="fc-dom-36"
                                                className="fc-daygrid-day-number"
                                              >
                                                18
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:00</span>
                                                    <span className="text-truncate">
                                                      Mentör Buluşmaları
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>19:45</span>
                                                    <span className="text-truncate">
                                                      Kick - off - Eğitmenler
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-38"
                                          role="gridcell"
                                          data-date="2024-01-19"
                                          className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="19 Ocak 2024"
                                                id="fc-dom-38"
                                                className="fc-daygrid-day-number"
                                              >
                                                19
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:10</span>
                                                    <span className="text-truncate">
                                                      Kick - off - Eğitmenler
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Veri Bilimi Programı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+8 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +8 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-40"
                                          role="gridcell"
                                          data-date="2024-01-20"
                                          className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="20 Ocak 2024"
                                                id="fc-dom-40"
                                                className="fc-daygrid-day-number"
                                              >
                                                20
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-42"
                                          role="gridcell"
                                          data-date="2024-01-21"
                                          className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="21 Ocak 2024"
                                                id="fc-dom-42"
                                                className="fc-daygrid-day-number"
                                              >
                                                21
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:05</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+2 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +2 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr role="row">
                                        <td
                                          aria-labelledby="fc-dom-44"
                                          role="gridcell"
                                          data-date="2024-01-22"
                                          className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="22 Ocak 2024"
                                                id="fc-dom-44"
                                                className="fc-daygrid-day-number"
                                              >
                                                22
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+5 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +5 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-46"
                                          role="gridcell"
                                          data-date="2024-01-23"
                                          className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="23 Ocak 2024"
                                                id="fc-dom-46"
                                                className="fc-daygrid-day-number"
                                              >
                                                23
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+3 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +3 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-48"
                                          role="gridcell"
                                          data-date="2024-01-24"
                                          className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="24 Ocak 2024"
                                                id="fc-dom-48"
                                                className="fc-daygrid-day-number"
                                              >
                                                24
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-50"
                                          role="gridcell"
                                          data-date="2024-01-25"
                                          className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="25 Ocak 2024"
                                                id="fc-dom-50"
                                                className="fc-daygrid-day-number"
                                              >
                                                25
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:00</span>
                                                    <span className="text-truncate">
                                                      Mentör Buluşmaları
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Mobil Geliştirici
                                                      (Flutter) - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Engin Demiroğ
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+6 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +6 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-52"
                                          role="gridcell"
                                          data-date="2024-01-26"
                                          className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="26 Ocak 2024"
                                                id="fc-dom-52"
                                                className="fc-daygrid-day-number"
                                              >
                                                26
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Veri Bilimi Programı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ali Seyhan
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; React Fullstack
                                                      - 1C
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+9 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +9 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-54"
                                          role="gridcell"
                                          data-date="2024-01-27"
                                          className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="27 Ocak 2024"
                                                id="fc-dom-54"
                                                className="fc-daygrid-day-number"
                                              >
                                                27
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-56"
                                          role="gridcell"
                                          data-date="2024-01-28"
                                          className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="28 Ocak 2024"
                                                id="fc-dom-56"
                                                className="fc-daygrid-day-number"
                                              >
                                                28
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; React Fullstack
                                                      - 1B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+2 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +2 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr role="row">
                                        <td
                                          aria-labelledby="fc-dom-58"
                                          role="gridcell"
                                          data-date="2024-01-29"
                                          className="fc-day fc-day-mon fc-day-today fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="29 Ocak 2024"
                                                id="fc-dom-58"
                                                className="fc-daygrid-day-number"
                                              >
                                                29
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-today eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-today eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-today eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-today eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-today eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-today eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-today eventEnded fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+6 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +6 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-60"
                                          role="gridcell"
                                          data-date="2024-01-30"
                                          className="fc-day fc-day-tue fc-day-future fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="30 Ocak 2024"
                                                id="fc-dom-60"
                                                className="fc-daygrid-day-number"
                                              >
                                                30
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>11:00</span>
                                                    <span className="text-truncate">
                                                      Hoşgeldin Buluşması - 5
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+4 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +4 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-62"
                                          role="gridcell"
                                          data-date="2024-01-31"
                                          className="fc-day fc-day-wed fc-day-future fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="31 Ocak 2024"
                                                id="fc-dom-62"
                                                className="fc-daygrid-day-number"
                                              >
                                                31
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+4 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +4 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-64"
                                          role="gridcell"
                                          data-date="2024-02-01"
                                          className="fc-day fc-day-thu fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="1 Şubat 2024"
                                                id="fc-dom-64"
                                                className="fc-daygrid-day-number"
                                              >
                                                1
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:00</span>
                                                    <span className="text-truncate">
                                                      Mentör Buluşmaları
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+3 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +3 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-66"
                                          role="gridcell"
                                          data-date="2024-02-02"
                                          className="fc-day fc-day-fri fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="2 Şubat 2024"
                                                id="fc-dom-66"
                                                className="fc-daygrid-day-number"
                                              >
                                                2
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Veri Bilimi Programı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ali Seyhan
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>11:00</span>
                                                    <span className="text-truncate">
                                                      Veri Bilimi Programı - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Mentör Buluşmaları -
                                                      5.Gruplar
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:30</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ahmet Çetinkaya
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+7 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +7 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-68"
                                          role="gridcell"
                                          data-date="2024-02-03"
                                          className="fc-day fc-day-sat fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="3 Şubat 2024"
                                                id="fc-dom-68"
                                                className="fc-daygrid-day-number"
                                              >
                                                3
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-70"
                                          role="gridcell"
                                          data-date="2024-02-04"
                                          className="fc-day fc-day-sun fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="4 Şubat 2024"
                                                id="fc-dom-70"
                                                className="fc-daygrid-day-number"
                                              >
                                                4
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr role="row">
                                        <td
                                          aria-labelledby="fc-dom-72"
                                          role="gridcell"
                                          data-date="2024-02-05"
                                          className="fc-day fc-day-mon fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="5 Şubat 2024"
                                                id="fc-dom-72"
                                                className="fc-daygrid-day-number"
                                              >
                                                5
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      İş Analisti - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+4 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +4 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-74"
                                          role="gridcell"
                                          data-date="2024-02-06"
                                          className="fc-day fc-day-tue fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="6 Şubat 2024"
                                                id="fc-dom-74"
                                                className="fc-daygrid-day-number"
                                              >
                                                6
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:00</span>
                                                    <span className="text-truncate">
                                                      Herkes İçin Kodlama - 5A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>16:00</span>
                                                    <span className="text-truncate">
                                                      Herkes İçin Kodlama - 5B
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+5 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +5 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-76"
                                          role="gridcell"
                                          data-date="2024-02-07"
                                          className="fc-day fc-day-wed fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="7 Şubat 2024"
                                                id="fc-dom-76"
                                                className="fc-daygrid-day-number"
                                              >
                                                7
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+2 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +2 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-78"
                                          role="gridcell"
                                          data-date="2024-02-08"
                                          className="fc-day fc-day-thu fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="8 Şubat 2024"
                                                id="fc-dom-78"
                                                className="fc-daygrid-day-number"
                                              >
                                                8
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Yazılım Kalite ve Test
                                                      Uzmanı - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>10:00</span>
                                                    <span className="text-truncate">
                                                      Oyun Yazılımı Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventBuyed fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>12:00</span>
                                                    <span className="text-truncate">
                                                      Mentör Buluşmaları
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Dijital Pazarlama - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+4 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +4 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-80"
                                          role="gridcell"
                                          data-date="2024-02-09"
                                          className="fc-day fc-day-fri fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="9 Şubat 2024"
                                                id="fc-dom-80"
                                                className="fc-daygrid-day-number"
                                              >
                                                9
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:00</span>
                                                    <span className="text-truncate">
                                                      Java &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Veri Bilimi Programı - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Ali Seyhan
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Veri Bilimi Programı - 2A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:00</span>
                                                    <span className="text-truncate">
                                                      .NET &amp; Angular
                                                      Fullstack - 3A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>14:00</span>
                                                    <span className="text-truncate">
                                                      Mentör Buluşmaları -
                                                      5.Gruplar
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                style={{
                                                  visibility: "hidden",
                                                  top: "0px",
                                                  left: "0px",
                                                  right: "0px",
                                                }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>17:00</span>
                                                    <span className="text-truncate">
                                                      Sistem ve Network - 1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a
                                                  tabIndex={0}
                                                  title="+5 daha fazla"
                                                  aria-expanded="false"
                                                  aria-controls
                                                  className="fc-daygrid-more-link fc-more-link"
                                                >
                                                  +5 daha fazla
                                                </a>
                                              </div>
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-82"
                                          role="gridcell"
                                          data-date="2024-02-10"
                                          className="fc-day fc-day-sat fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="10 Şubat 2024"
                                                id="fc-dom-82"
                                                className="fc-daygrid-day-number"
                                              >
                                                10
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>09:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-event-harness"
                                                style={{ marginTop: "0px" }}
                                              >
                                                <a className="fc-event fc-event-start fc-event-end fc-event-future eventNotStarted fc-daygrid-event fc-daygrid-dot-event">
                                                  <div className="d-flex flex-column ms-4 my-1">
                                                    <span>13:30</span>
                                                    <span className="text-truncate">
                                                      Siber Güvenlik Programı -
                                                      1A
                                                    </span>
                                                    <span className="text-truncate">
                                                      Gürkan İlişen
                                                    </span>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                        <td
                                          aria-labelledby="fc-dom-84"
                                          role="gridcell"
                                          data-date="2024-02-11"
                                          className="fc-day fc-day-sun fc-day-future fc-day-other fc-daygrid-day"
                                        >
                                          <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                            <div className="fc-daygrid-day-top">
                                              <a
                                                aria-label="11 Şubat 2024"
                                                id="fc-dom-84"
                                                className="fc-daygrid-day-number"
                                              >
                                                11
                                              </a>
                                            </div>
                                            <div className="fc-daygrid-day-events">
                                              <div
                                                className="fc-daygrid-day-bottom"
                                                style={{ marginTop: "0px" }}
                                              />
                                            </div>
                                            <div className="fc-daygrid-day-bg" />
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="calendar-mobile">
              <div
                id={41}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2022 18:00</span>
                  <span className="timeEnd">15 Ara 2022 20:00</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={42}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2022 16:00</span>
                  <span className="timeEnd">18 Ara 2022 18:00</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={43}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2022 16:00</span>
                  <span className="timeEnd">19 Ara 2022 18:00</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={44}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2022 16:00</span>
                  <span className="timeEnd">22 Ara 2022 18:00</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={45}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2022 16:00</span>
                  <span className="timeEnd">25 Ara 2022 18:00</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={49}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Oca 2023 13:00</span>
                  <span className="timeEnd">28 Oca 2023 15:00</span>
                </div>
                <span className="text-truncate">
                  Object Oriented Programming (OOP) (Basic)
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={50}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Oca 2023 14:00</span>
                  <span className="timeEnd">30 Oca 2023 16:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={212}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Oca 2023 14:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={213}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Şub 2023 16:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={51}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Şub 2023 16:00</span>
                  <span className="timeEnd">1 Şub 2023 18:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={52}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2023 13:00</span>
                  <span className="timeEnd">2 Şub 2023 15:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={214}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2023 13:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={53}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Şub 2023 13:00</span>
                  <span className="timeEnd">4 Şub 2023 15:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={215}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Şub 2023 13:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Web API</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={104}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Mar 2023 19:30</span>
                  <span className="timeEnd">31 Mar 2023 21:30</span>
                </div>
                <span className="text-truncate">SQL Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={268}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Mar 2023 19:30</span>
                </div>
                <span className="text-truncate">SQL Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={269}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">SQL Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={105}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Nis 2023 19:30</span>
                  <span className="timeEnd">3 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">SQL Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={216}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Nis 2023 22:30</span>
                </div>
                <span className="text-truncate">
                  Örnek Ders ASPNET Core MVC (Basic)
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={217}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Nis 2023 22:30</span>
                </div>
                <span className="text-truncate">
                  Örnek Ders ASPNET Core MVC (Basic)
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={106}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Nis 2023 19:30</span>
                  <span className="timeEnd">7 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">SQL Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={270}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">SQL Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={218}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Nis 2023 22:30</span>
                </div>
                <span className="text-truncate">
                  Örnek Ders ASPNET Core MVC (Basic)
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={54}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Nis 2023 22:30</span>
                  <span className="timeEnd">9 Nis 2023 00:30</span>
                </div>
                <span className="text-truncate">
                  Örnek Ders ASPNET Core MVC (Basic)
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={107}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Nis 2023 19:30</span>
                  <span className="timeEnd">10 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">C# Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={271}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">C# Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={110}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Nis 2023 19:30</span>
                  <span className="timeEnd">11 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">HTML Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={274}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">HTML Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={111}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Nis 2023 19:30</span>
                  <span className="timeEnd">15 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">HTML Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={275}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">HTML Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={272}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">C# Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={108}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Nis 2023 19:30</span>
                  <span className="timeEnd">16 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">C# Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={273}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">C# Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={109}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Nis 2023 19:30</span>
                  <span className="timeEnd">17 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">C# Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={116}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Nis 2023 23:30</span>
                  <span className="timeEnd">18 Nis 2023 01:30</span>
                </div>
                <span className="text-truncate">ReactJS Başlangıç Eğitimi</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={279}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Nis 2023 23:30</span>
                </div>
                <span className="text-truncate">ReactJS Başlangıç Eğitimi</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={276}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">HTML Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={112}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Nis 2023 19:30</span>
                  <span className="timeEnd">18 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">HTML Başlangıç Eğitimi</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={117}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Nis 2023 23:30</span>
                  <span className="timeEnd">19 Nis 2023 01:30</span>
                </div>
                <span className="text-truncate">ReactJS Başlangıç Eğitimi</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={280}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Nis 2023 23:30</span>
                </div>
                <span className="text-truncate">ReactJS Başlangıç Eğitimi</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={277}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Nis 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Javascript Başlangıç Eğitimi
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={113}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Nis 2023 19:30</span>
                  <span className="timeEnd">19 Nis 2023 21:30</span>
                </div>
                <span className="text-truncate">
                  Javascript Başlangıç Eğitimi
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={281}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Nis 2023 23:30</span>
                </div>
                <span className="text-truncate">ReactJS Başlangıç Eğitimi</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={118}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Nis 2023 23:30</span>
                  <span className="timeEnd">25 Nis 2023 01:30</span>
                </div>
                <span className="text-truncate">ReactJS Başlangıç Eğitimi</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={114}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 May 2023 13:30</span>
                  <span className="timeEnd">1 May 2023 15:30</span>
                </div>
                <span className="text-truncate">
                  Javascript Başlangıç Eğitimi
                </span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={278}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 May 2023 13:30</span>
                </div>
                <span className="text-truncate">
                  Javascript Başlangıç Eğitimi
                </span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={115}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 May 2023 16:00</span>
                  <span className="timeEnd">1 May 2023 18:00</span>
                </div>
                <span className="text-truncate">
                  Javascript Başlangıç Eğitimi
                </span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={241}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 May 2023 13:00</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={68}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 May 2023 13:00</span>
                  <span className="timeEnd">25 May 2023 15:30</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={93}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 May 2023 22:30</span>
                  <span className="timeEnd">26 May 2023 01:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={245}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 May 2023 22:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={242}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 May 2023 13:00</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={69}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 May 2023 13:00</span>
                  <span className="timeEnd">26 May 2023 15:30</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={94}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 May 2023 22:30</span>
                  <span className="timeEnd">27 May 2023 01:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={246}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 May 2023 22:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={225}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 May 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Windows Form Application Programming (Basic)
                </span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={76}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 May 2023 16:00</span>
                  <span className="timeEnd">27 May 2023 22:00</span>
                </div>
                <span className="text-truncate">
                  Windows Form Application Programming (Basic)
                </span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={77}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 May 2023 20:00</span>
                  <span className="timeEnd">28 May 2023 22:00</span>
                </div>
                <span className="text-truncate">
                  Windows Form Application Programming (Basic)
                </span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={226}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 May 2023 20:00</span>
                </div>
                <span className="text-truncate">
                  Windows Form Application Programming (Basic)
                </span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={70}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Haz 2023 13:00</span>
                  <span className="timeEnd">1 Haz 2023 15:30</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={243}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Haz 2023 13:00</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={247}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Haz 2023 23:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={95}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Haz 2023 23:30</span>
                  <span className="timeEnd">2 Haz 2023 01:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={71}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Haz 2023 13:00</span>
                  <span className="timeEnd">2 Haz 2023 15:30</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={244}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Haz 2023 13:00</span>
                </div>
                <span className="text-truncate">Bootstrap-JS-SASS</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={248}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Haz 2023 22:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={96}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Haz 2023 22:30</span>
                  <span className="timeEnd">3 Haz 2023 00:30</span>
                </div>
                <span className="text-truncate">Javascript (Basic)</span>
                <span className="text-truncate">Mehmet Emin Kortak</span>
              </div>
              <div
                id={227}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Haz 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Windows Form Application Programming (Basic)
                </span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={78}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Haz 2023 16:00</span>
                  <span className="timeEnd">3 Haz 2023 18:00</span>
                </div>
                <span className="text-truncate">
                  Windows Form Application Programming (Basic)
                </span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={46}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Tem 2023 20:30</span>
                  <span className="timeEnd">24 Tem 2023 00:00</span>
                </div>
                <span className="text-truncate">
                  Object Oriented Programming (OOP) (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={209}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Tem 2023 20:30</span>
                </div>
                <span className="text-truncate">
                  Object Oriented Programming (OOP) (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={231}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Tem 2023 22:30</span>
                </div>
                <span className="text-truncate">DAPPER</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={82}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Tem 2023 22:30</span>
                  <span className="timeEnd">24 Tem 2023 02:00</span>
                </div>
                <span className="text-truncate">DAPPER</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={253}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Tem 2023 13:00</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={72}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Tem 2023 13:00</span>
                  <span className="timeEnd">24 Tem 2023 15:30</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={210}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Tem 2023 20:30</span>
                </div>
                <span className="text-truncate">
                  Object Oriented Programming (OOP) (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={47}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Tem 2023 20:30</span>
                  <span className="timeEnd">24 Tem 2023 23:30</span>
                </div>
                <span className="text-truncate">
                  Object Oriented Programming (OOP) (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={211}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Tem 2023 20:30</span>
                </div>
                <span className="text-truncate">
                  Object Oriented Programming (OOP) (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={48}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Tem 2023 20:30</span>
                  <span className="timeEnd">28 Tem 2023 00:00</span>
                </div>
                <span className="text-truncate">
                  Object Oriented Programming (OOP) (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={61}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Tem 2023 13:00</span>
                  <span className="timeEnd">28 Tem 2023 17:00</span>
                </div>
                <span className="text-truncate">Entity Framework Core</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={234}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Tem 2023 13:00</span>
                </div>
                <span className="text-truncate">Entity Framework Core</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={83}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Tem 2023 22:30</span>
                  <span className="timeEnd">30 Tem 2023 01:30</span>
                </div>
                <span className="text-truncate">DAPPER</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={232}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Tem 2023 22:30</span>
                </div>
                <span className="text-truncate">DAPPER</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={233}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Tem 2023 22:30</span>
                </div>
                <span className="text-truncate">DAPPER</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={84}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Tem 2023 22:30</span>
                  <span className="timeEnd">31 Tem 2023 02:00</span>
                </div>
                <span className="text-truncate">DAPPER</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={254}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Tem 2023 13:00</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={73}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Tem 2023 13:00</span>
                  <span className="timeEnd">31 Tem 2023 15:30</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={74}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Ağu 2023 13:00</span>
                  <span className="timeEnd">1 Ağu 2023 15:30</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={255}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={75}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Ağu 2023 13:00</span>
                  <span className="timeEnd">2 Ağu 2023 15:30</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={256}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">ASPNET Core MVC (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={62}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Ağu 2023 13:00</span>
                  <span className="timeEnd">3 Ağu 2023 16:00</span>
                </div>
                <span className="text-truncate">Entity Framework Core</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={235}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">Entity Framework Core</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={236}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">Entity Framework Core</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={63}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ağu 2023 13:00</span>
                  <span className="timeEnd">4 Ağu 2023 16:00</span>
                </div>
                <span className="text-truncate">Entity Framework Core</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={224}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ağu 2023 20:00</span>
                </div>
                <span className="text-truncate">
                  Microsoft SQL Server Database (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={57}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ağu 2023 20:00</span>
                  <span className="timeEnd">5 Ağu 2023 00:00</span>
                </div>
                <span className="text-truncate">
                  Microsoft SQL Server Database (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={89}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ağu 2023 13:00</span>
                  <span className="timeEnd">7 Ağu 2023 15:30</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={264}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={56}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ağu 2023 20:30</span>
                  <span className="timeEnd">7 Ağu 2023 23:30</span>
                </div>
                <span className="text-truncate">
                  Microsoft SQL Server Database (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={223}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">
                  Microsoft SQL Server Database (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={97}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ağu 2023 22:30</span>
                  <span className="timeEnd">8 Ağu 2023 01:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={249}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={265}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={90}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ağu 2023 13:00</span>
                  <span className="timeEnd">8 Ağu 2023 15:30</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={98}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ağu 2023 22:30</span>
                  <span className="timeEnd">9 Ağu 2023 01:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={250}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={55}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ağu 2023 20:30</span>
                  <span className="timeEnd">11 Ağu 2023 23:30</span>
                </div>
                <span className="text-truncate">
                  Microsoft SQL Server Database (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={222}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">
                  Microsoft SQL Server Database (Basic)
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={237}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={64}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ağu 2023 22:30</span>
                  <span className="timeEnd">12 Ağu 2023 01:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={101}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ağu 2023 20:30</span>
                  <span className="timeEnd">13 Ağu 2023 00:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Razor Pages</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={257}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">ASPNET Core Razor Pages</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={65}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ağu 2023 22:30</span>
                  <span className="timeEnd">13 Ağu 2023 01:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={238}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={102}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ağu 2023 20:30</span>
                  <span className="timeEnd">14 Ağu 2023 00:00</span>
                </div>
                <span className="text-truncate">ASPNET Core Razor Pages</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={258}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">ASPNET Core Razor Pages</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={80}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ağu 2023 22:30</span>
                  <span className="timeEnd">14 Ağu 2023 02:00</span>
                </div>
                <span className="text-truncate">ADONET</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={229}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">ADONET</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={266}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={91}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 13:00</span>
                  <span className="timeEnd">14 Ağu 2023 15:30</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={219}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={58}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 20:30</span>
                  <span className="timeEnd">14 Ağu 2023 23:30</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={79}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 22:30</span>
                  <span className="timeEnd">15 Ağu 2023 01:30</span>
                </div>
                <span className="text-truncate">ADONET</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={99}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 22:30</span>
                  <span className="timeEnd">15 Ağu 2023 01:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={251}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={228}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">ADONET</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={92}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ağu 2023 13:00</span>
                  <span className="timeEnd">15 Ağu 2023 15:30</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={267}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ağu 2023 13:00</span>
                </div>
                <span className="text-truncate">ReactJS (Basic)</span>
                <span className="text-truncate">Barbaros Ciga</span>
              </div>
              <div
                id={100}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ağu 2023 22:30</span>
                  <span className="timeEnd">15 Ağu 2023 23:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={230}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">ADONET</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={81}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ağu 2023 22:30</span>
                  <span className="timeEnd">16 Ağu 2023 02:00</span>
                </div>
                <span className="text-truncate">ADONET</span>
                <span className="text-truncate">Aykut Baştuğ</span>
              </div>
              <div
                id={252}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">
                  Javascript (Basic) - JQuery - AJAX
                </span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={220}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={59}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Ağu 2023 20:30</span>
                  <span className="timeEnd">18 Ağu 2023 00:00</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={221}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={60}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ağu 2023 20:30</span>
                  <span className="timeEnd">19 Ağu 2023 00:00</span>
                </div>
                <span className="text-truncate">C# Programming</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={103}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ağu 2023 20:30</span>
                  <span className="timeEnd">19 Ağu 2023 23:30</span>
                </div>
                <span className="text-truncate">ASPNET Core Razor Pages</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={259}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ağu 2023 20:30</span>
                </div>
                <span className="text-truncate">ASPNET Core Razor Pages</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={85}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ağu 2023 22:00</span>
                  <span className="timeEnd">20 Ağu 2023 01:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={260}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ağu 2023 22:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={261}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ağu 2023 20:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={86}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ağu 2023 20:00</span>
                  <span className="timeEnd">20 Ağu 2023 23:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={66}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ağu 2023 22:30</span>
                  <span className="timeEnd">26 Ağu 2023 01:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={239}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={262}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ağu 2023 16:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={87}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ağu 2023 16:00</span>
                  <span className="timeEnd">26 Ağu 2023 19:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={240}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ağu 2023 22:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={67}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ağu 2023 22:30</span>
                  <span className="timeEnd">26 Ağu 2023 23:30</span>
                </div>
                <span className="text-truncate">HTML-CSS-SASS</span>
                <span className="text-truncate">Semih Karduz</span>
              </div>
              <div
                id={263}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ağu 2023 16:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={88}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ağu 2023 16:00</span>
                  <span className="timeEnd">27 Ağu 2023 17:00</span>
                </div>
                <span className="text-truncate">Git ve Github</span>
                <span className="text-truncate">Serkan Tekin</span>
              </div>
              <div
                id={157}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Eyl 2023 16:00</span>
                  <span className="timeEnd">2 Eyl 2023 21:00</span>
                </div>
                <span className="text-truncate" />
                <span className="text-truncate">Kader Yavuz</span>
              </div>
              <div
                id={158}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Eyl 2023 16:00</span>
                  <span className="timeEnd">3 Eyl 2023 21:00</span>
                </div>
                <span className="text-truncate" />
                <span className="text-truncate">Kader Yavuz</span>
              </div>
              <div
                id={156}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Eyl 2023 19:15</span>
                  <span className="timeEnd">5 Eyl 2023 21:00</span>
                </div>
                <span className="text-truncate" />
                <span className="text-truncate">Kader Yavuz</span>
              </div>
              <div
                id={205}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Eyl 2023 23:00</span>
                  <span className="timeEnd">8 Eyl 2023 02:55</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={419}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Eyl 2023 23:00</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={206}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Eyl 2023 12:55</span>
                  <span className="timeEnd">12 Eyl 2023 13:05</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={420}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Eyl 2023 12:55</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={207}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Eyl 2023 18:00</span>
                  <span className="timeEnd">12 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Kader Yavuz</span>
              </div>
              <div
                id={421}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Eyl 2023 18:00</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Kader Yavuz</span>
              </div>
              <div
                id={208}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Eyl 2023 16:45</span>
                  <span className="timeEnd">14 Eyl 2023 17:30</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={422}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Eyl 2023 16:45</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={423}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">
                  Herkes İçin Kodlama - Eğitmenler
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={424}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Eyl 2023 13:00</span>
                </div>
                <span className="text-truncate">
                  Herkes İçin Kodlama - Eğitmenler
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={425}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Eyl 2023 18:00</span>
                </div>
                <span className="text-truncate">
                  Herkes İçin Kodlama - Eğitmenler
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={426}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Eyl 2023 13:00</span>
                </div>
                <span className="text-truncate">
                  Herkes İçin Kodlama - Eğitmenler
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={427}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Eyl 2023 22:00</span>
                </div>
                <span className="text-truncate">
                  Herkes İçin Kodlama - Eğitmenler
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={183}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Eyl 2023 22:00</span>
                  <span className="timeEnd">18 Eyl 2023 00:00</span>
                </div>
                <span className="text-truncate">
                  Herkes İçin Kodlama - Eğitmenler
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={150}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Eyl 2023 14:00</span>
                  <span className="timeEnd">18 Eyl 2023 15:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 1</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={392}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Eyl 2023 14:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 1</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={282}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={292}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={287}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={297}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={193}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                  <span className="timeEnd">21 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate" />
              </div>
              <div
                id={293}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={185}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                  <span className="timeEnd">21 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate" />
              </div>
              <div
                id={189}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                  <span className="timeEnd">21 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate" />
              </div>
              <div
                id={298}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={283}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={197}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                  <span className="timeEnd">21 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate" />
              </div>
              <div
                id={288}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={299}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={284}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={194}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                  <span className="timeEnd">25 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate" />
              </div>
              <div
                id={198}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                  <span className="timeEnd">25 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate" />
              </div>
              <div
                id={289}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={190}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                  <span className="timeEnd">25 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate" />
              </div>
              <div
                id={186}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                  <span className="timeEnd">25 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate" />
              </div>
              <div
                id={294}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={191}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                  <span className="timeEnd">27 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate" />
              </div>
              <div
                id={199}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                  <span className="timeEnd">27 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate" />
              </div>
              <div
                id={187}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                  <span className="timeEnd">27 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate" />
              </div>
              <div
                id={195}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                  <span className="timeEnd">27 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate" />
              </div>
              <div
                id={300}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={295}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={285}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={290}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={196}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate" />
              </div>
              <div
                id={122}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={192}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate" />
              </div>
              <div
                id={301}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={119}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={200}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1D</span>
                <span className="text-truncate" />
              </div>
              <div
                id={291}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={286}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={121}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={296}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={120}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={188}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Eyl 2023 19:00</span>
                  <span className="timeEnd">29 Eyl 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 1A</span>
                <span className="text-truncate" />
              </div>
              <div
                id={184}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Eki 2023 14:00</span>
                  <span className="timeEnd">2 Eki 2023 15:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 2</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={393}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Eki 2023 14:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 2</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={204}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Eki 2023 14:00</span>
                  <span className="timeEnd">2 Eki 2023 15:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 2</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={312}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={307}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={302}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={308}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={303}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={313}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={314}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={309}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={304}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={310}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={305}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={315}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={311}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={316}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={306}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Eki 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={201}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Eki 2023 19:00</span>
                  <span className="timeEnd">13 Eki 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={203}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Eki 2023 19:00</span>
                  <span className="timeEnd">13 Eki 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2C</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={202}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Eki 2023 19:00</span>
                  <span className="timeEnd">13 Eki 2023 20:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 2B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={516}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Eki 2023 17:10</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={519}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={712}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={551}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={744}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={583}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Eki 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={652}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={672}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={632}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={692}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={520}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={713}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={552}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={745}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={584}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Eki 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={653}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={673}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={509}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Eki 2023 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={693}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={633}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={521}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={714}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={746}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={553}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={585}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Eki 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={715}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={522}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={518}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Eki 2023 14:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 3</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={554}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={747}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={586}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Eki 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={654}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={674}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Eki 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={694}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={634}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Eki 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={716}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={523}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={748}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={555}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={587}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={655}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={675}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={510}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Kas 2023 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={635}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={695}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={317}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={322}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={717}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={524}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={556}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={749}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={810}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Kas 2023 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 3.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={588}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={525}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={718}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={557}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={750}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={589}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={676}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={656}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={636}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={696}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={323}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={318}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={719}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={526}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={751}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={558}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={590}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={677}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={657}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={511}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Kas 2023 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={637}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={697}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={324}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={319}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={527}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={720}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={752}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={559}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={811}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Kas 2023 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 3.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={591}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={528}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={721}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={560}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={753}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={592}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={658}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={678}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={698}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={638}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={320}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={325}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={722}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={529}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={754}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={561}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={812}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Kas 2023 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 3.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={593}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={659}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={679}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={512}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Kas 2023 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={639}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={699}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={326}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={321}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Kas 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 3A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={530}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={723}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={755}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={562}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={594}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={531}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={724}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={756}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={563}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={595}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={660}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={680}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={640}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={700}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={725}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={532}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={564}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={757}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={813}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Kas 2023 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 3.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={596}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={681}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={661}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={641}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={701}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={726}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={533}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Kas 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={758}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={565}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Kas 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={597}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Kas 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={919}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Kas 2023 14:00</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Kader Yavuz</span>
              </div>
              <div
                id={534}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={727}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={819}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ara 2023 14:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 4</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={566}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={759}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={598}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={840}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={662}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={682}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={782}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={642}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={702}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={823}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={841}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={535}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={728}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={567}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={760}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={599}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={842}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={683}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={663}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={703}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={643}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={843}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={729}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={536}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={761}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={568}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={820}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 4.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={600}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={844}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={537}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={730}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={762}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={569}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={601}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={920}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={845}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={684}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={664}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={644}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={955}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={704}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={824}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={814}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 4A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={846}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={731}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={538}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={763}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={570}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={921}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={602}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={956}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={847}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1031}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={665}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={685}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={990}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={513}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={705}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={645}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={1032}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 18:30</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={848}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={732}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={539}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={1010}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={764}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={571}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={821}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 4.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={603}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={957}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={922}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={849}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={733}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={540}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={765}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={572}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={604}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={923}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={958}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={850}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={666}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={686}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={991}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={706}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={646}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={918}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 4A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={817}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 4A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={851}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={734}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={541}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={766}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={573}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={959}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={605}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={924}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={852}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={687}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={667}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={992}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={514}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={707}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={647}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={825}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={853}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={542}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={735}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={1011}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 13:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={1072}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 14:00</span>
                </div>
                <span className="text-truncate">
                  Acun Medya Akademi - Fullstack 101
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={767}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={574}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={822}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 4.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1076}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 17:15</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={960}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={925}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={606}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={854}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1073}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 21:00</span>
                </div>
                <span className="text-truncate">
                  Acun Medya Akademi - Fullstack 201
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1077}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Ara 2023 21:00</span>
                </div>
                <span className="text-truncate">
                  Acun Medya Akademi - Fullstack 101
                </span>
                <span className="text-truncate">Kader Yavuz</span>
              </div>
              <div
                id={1074}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1075}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={736}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={543}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={575}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={768}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={961}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={926}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={607}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={855}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1078}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Ara 2023 20:15</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={688}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={668}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={993}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ara 2023 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={708}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={648}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={826}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={856}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={544}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={737}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={769}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={576}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={927}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={608}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={962}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={857}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={669}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={689}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={994}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={515}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={709}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={649}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={1071}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={858}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={738}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={545}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={1012}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 13:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={770}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={577}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={609}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={963}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={859}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Ara 2023 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1110}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={784}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1030}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1109}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Ara 2023 15:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1052}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Oca 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1053}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Oca 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1054}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={546}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={739}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={771}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={578}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={929}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={964}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={610}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={860}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={690}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={670}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={995}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={710}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={650}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={827}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={928}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={861}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={547}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={740}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={772}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={579}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={930}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={965}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={611}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={862}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={671}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={691}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={996}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={711}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={651}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={863}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={741}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={548}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={1013}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={773}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={580}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={966}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={931}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={612}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={864}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1055}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Oca 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1056}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Oca 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1057}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={742}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={549}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={581}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={774}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={932}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={967}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={613}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={865}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={797}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={791}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={997}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={794}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={800}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={828}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Oca 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={866}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={550}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={743}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={775}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={582}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={968}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={933}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={614}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={867}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={798}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={792}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={998}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={803}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={801}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={795}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={868}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1230}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Oca 2024 22:45</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={779}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={1234}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 12:10</span>
                </div>
                <span className="text-truncate">Kick - off - Eğitmenler</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1014}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={780}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={829}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={934}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={778}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={969}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={869}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1058}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Oca 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1059}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Oca 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1232}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Oca 2024 15:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1233}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Oca 2024 15:05</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1231}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Oca 2024 17:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1035}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1198}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1036}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1166}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={970}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={935}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={1142}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={999}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={830}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Oca 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={870}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={787}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={776}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={789}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={777}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={936}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={785}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={971}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={871}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={793}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={799}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 1A</span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={1000}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={804}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Oca 2024 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={796}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 1A
                </span>
                <span className="text-truncate">Engin Demiroğ</span>
              </div>
              <div
                id={802}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Mobil Geliştirici (Flutter) - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={872}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={788}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={781}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={1015}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={783}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={790}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={831}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={937}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={786}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; React Fullstack - 1C
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={972}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={873}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1060}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Oca 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1061}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Oca 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1062}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1236}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Oca 2024 15:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1B
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1235}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Oca 2024 15:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; React Fullstack - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1199}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1037}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1038}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1167}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={938}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={973}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={874}
                className="d-flex flex-column ms-4 my-1 p-3 eventEnded"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1143}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1001}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Oca 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={917}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Oca 2024 14:00</span>
                </div>
                <span className="text-truncate">Hoşgeldin Buluşması - 5</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={832}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Oca 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={875}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1200}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Oca 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1168}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Oca 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={974}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={939}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Oca 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={876}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">31 Oca 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1144}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1002}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={805}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Şub 2024 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={877}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1201}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1016}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={1131}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 14:00</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1169}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1111}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 5.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={975}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={940}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={878}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1063}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1064}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Şub 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1065}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1202}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1039}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1040}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1170}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={879}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1145}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1003}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={833}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={915}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Şub 2024 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 5A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1033}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Şub 2024 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 5B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={880}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1203}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1171}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={881}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1146}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1004}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={806}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Şub 2024 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={834}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={882}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1204}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1017}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={1132}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1172}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1112}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 5.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={883}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">9 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1066}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1067}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 Şub 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1205}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1041}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1173}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1042}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={941}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={976}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={884}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1147}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1005}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={835}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1034}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Şub 2024 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 5B</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={916}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Şub 2024 19:00</span>
                </div>
                <span className="text-truncate">Herkes İçin Kodlama - 5A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={885}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1206}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1174}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1113}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">
                  Mentör Buluşmaları - 5.Gruplar
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={977}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={942}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={886}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1148}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1006}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={807}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Şub 2024 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={836}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={887}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1207}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1018}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={1133}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1175}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={978}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={943}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={888}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1068}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1069}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Şub 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1070}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1208}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1043}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1176}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1044}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={979}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={944}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={889}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1149}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1007}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={837}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={890}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1209}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1177}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={945}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={980}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={891}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1150}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1008}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={809}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Şub 2024 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={838}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={892}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1210}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1028}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={1178}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={946}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={981}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={893}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1079}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Şub 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1080}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Şub 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1081}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1211}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1045}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1046}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1179}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={982}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={947}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={894}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1151}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1009}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={839}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Şub 2024 17:00</span>
                </div>
                <span className="text-truncate">Dijital Pazarlama - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={895}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1212}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1180}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Şub 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={948}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={983}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Şub 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={896}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1152}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Şub 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1019}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Şub 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={897}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Şub 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1213}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1134}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1181}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={949}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={984}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={898}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1082}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1083}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Mar 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1084}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1047}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1214}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1182}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1048}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={950}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={985}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={899}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1153}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1020}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={900}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1215}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1183}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={986}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={951}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={901}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1154}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1021}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={902}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">7 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1216}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1135}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1184}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={952}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={987}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={903}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1049}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1217}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1185}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1050}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={953}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={988}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={904}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1155}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1022}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={905}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1218}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1186}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={954}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={989}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Mar 2024 19:30</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 2A
                </span>
                <span className="text-truncate">Ahmet Çetinkaya</span>
              </div>
              <div
                id={906}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1156}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1023}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={907}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">14 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1219}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1029}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 1A</span>
                <span className="text-truncate">Ali Seyhan</span>
              </div>
              <div
                id={1136}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1187}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={908}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1085}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1086}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Mar 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1087}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1051}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1220}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1114}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1188}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={909}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1157}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1024}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={910}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1221}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1189}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={911}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1158}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1025}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={912}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1222}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1137}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={808}
                className="d-flex flex-column ms-4 my-1 p-3 eventBuyed"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Mar 2024 15:00</span>
                </div>
                <span className="text-truncate">Mentör Buluşmaları</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1190}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={913}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={914}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Mar 2024 20:00</span>
                </div>
                <span className="text-truncate">Sistem ve Network - 1A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1088}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1089}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">23 Mar 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1090}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">24 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1223}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1115}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1191}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1116}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1159}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1026}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">26 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1224}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1192}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1160}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1027}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Mar 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Oyun Yazılımı Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1225}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Mar 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1138}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1193}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Mar 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1091}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">30 Mar 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1226}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1117}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1194}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1118}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">1 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1161}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">2 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1227}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1195}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">3 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1162}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1228}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1139}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Nis 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1196}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1092}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Nis 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1093}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 Nis 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1119}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1120}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">8 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1121}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1122}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">15 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1163}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">16 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1229}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Java &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1197}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">17 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">
                  .NET &amp; Angular Fullstack - 3A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1164}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1140}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 Nis 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1094}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Nis 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1095}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">20 Nis 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1096}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">21 Nis 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1123}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1124}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">22 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1165}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">25 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">
                  Yazılım Kalite ve Test Uzmanı - 2A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1097}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Nis 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1098}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">27 Nis 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1099}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">28 Nis 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1125}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Nis 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1126}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">29 Nis 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1100}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 May 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1101}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">4 May 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1102}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">5 May 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1127}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 May 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1128}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">6 May 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1141}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">10 May 2024 12:30</span>
                </div>
                <span className="text-truncate">Veri Bilimi Programı - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1103}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 May 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1104}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">11 May 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1105}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">12 May 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1129}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 May 2024 12:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1130}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">13 May 2024 16:00</span>
                </div>
                <span className="text-truncate">İş Analisti - 2A</span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1106}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 May 2024 12:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1107}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">18 May 2024 16:30</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
              <div
                id={1108}
                className="d-flex flex-column ms-4 my-1 p-3 eventNotStarted"
                style={{ gap: "8px", fontWeight: 500 }}
              >
                <div className="d-flex " style={{ gap: "1em" }}>
                  <span className="timeStart">19 May 2024 13:00</span>
                </div>
                <span className="text-truncate">
                  Siber Güvenlik Programı - 1A
                </span>
                <span className="text-truncate">Gürkan İlişen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;