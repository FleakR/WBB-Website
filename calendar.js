document.addEventListener('DOMContentLoaded', function () {

  const calendarEl = document.getElementById('calendar');
  const detailsEl = document.getElementById('show-details');

  const calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: 'dayGridMonth',

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },

    events: [
      {
        title: 'Rhuddlan Food Festival',
        start: '2026-05-16',
        extendedProps: {
          time: '11:00am',
          venue: 'Rhuddlan',
          description: 'Parliament Street, Rhuddlan, Wales, LL18 5AL'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-05-30',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'Pirate Weekend - Conwy',
        start: '2026-06-12',
        extendedProps: {
          time: '07:00pm',
          venue: 'Conwy',
          description: '21 Castle Street, Llandudno, LL32 8AY'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-06-26',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-06-29',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'Ruthin Festival',
        start: '2026-07-04',
        extendedProps: {
          time: '01:00pm',
          venue: 'Ruthin',
          description: 'St Peters Square, Ruthin, LL15'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-07-25',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'Pentre Arms, Llangrannog',
        start: '2026-08-01',
        extendedProps: {
          time: '07:00pm',
          venue: 'Llangrannog',
          description: 'Pentre Arms, Llangrannog, Llandysul SA44 6SP'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-08-04',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-08-08',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-08-15',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'St Dyfnogs Well Fundraiser, Llanrhaeadr',
        start: '2026-08-29',
        extendedProps: {
          time: '07:00pm',
          venue: 'Llanrhaeadr-yng-Nghinmeirch',
          description: 'The Kings Head, Llanrhaeadr, Denbigh LL16 4NL'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-09-12',
        extendedProps: {
          time: '01:00am',
          venue: 'Private',
          description: 'Private'
        }
      },

      {
        title: 'Session gig, Llangollen',
        start: '2026-11-08',
        extendedProps: {
          time: '07:00pm',
          venue: 'The Bull Inn, Llangollen',
          description: '20 Castle St, Llangollen LL20 8NU'
        }
      },

      {
        title: 'Session gig, Llangollen',
        start: '2026-11-15',
        extendedProps: {
          time: '07:00pm',
          venue: 'The Bull Inn, Llangollen',
          description: '20 Castle St, Llangollen LL20 8NU'
        }
      },

      {
        title: 'Private Doo',
        start: '2026-12-12',
        extendedProps: {
          time: '01:00pm',
          venue: 'Private',
          description: 'Private'
        }
      },
    
    ],

    eventClick: function(info) {

      detailsEl.innerHTML = `
        <h3>${info.event.title}</h3>
        <p><strong>Date:</strong> ${info.event.start.toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${info.event.extendedProps.time}</p>
        <p><strong>Venue:</strong> ${info.event.extendedProps.venue}</p>
        <p>${info.event.extendedProps.description}</p>
      `;
    }
  });

  calendar.render();

});