import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js';
import { useEffect, useState } from 'react';
type Props = {};

const Calendar = (props: Props) => {
  const tarih=new Date(Date.now());
  const tarihString=tarih.getFullYear()+"-0"+(tarih.getMonth()+1)+"-0"+tarih.getDate();
  const [events, setEvents] = useState<any>([
    { title: 'Course Name', start:tarihString, time: "09:00", course: "Course", instructor: "Instructor",color:'ocean',borderColor:'blue'}
  ]);

  function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt('Please enter a new title for your event');
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // seçilen tarihten seçimi kaldır
    setEvents([...events, { ...selectInfo }]);
  }

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <FullCalendar
          locales={[trLocale]}
          locale="tr"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={false}
          selectable={false}
          selectMirror={true}
          weekends={true}
          eventColor='green'
          events={{ events }}
          select={(arg) => handleDateSelect(arg)} // tarihlerden herhangi birisi seçildiğinde tetiklenir.
          eventContent={renderEventContent} // tarihlerin gösterileceği fonksiyon, aslında bir component
          eventClick={(arg) => console.log(arg)} // tarihin içindeki eventlere tıklandığında tetiklenir
          eventsSet={(arg) => console.log(arg)} // ay,hafta,gün gibi seçimlerde tetiklenir.
        />
      </div>
    </div>
  );
};

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>      
      <div className="d-flex flex-column ms-4 my-1">
        <span>{eventInfo.event.extendedProps.time}</span>
        <span className="text-truncate">{eventInfo.event.extendedProps.course}</span>
        <span className="text-truncate">{eventInfo.event.extendedProps.instructor}</span>
      </div>
    </>
  );
}

export default Calendar;
