const express = require('express');
const ical = require('ical-generator');
const app = express();

app.get('/calendar.ics', (req, res) => {
  const cal = ical({
    domain: 'example.com',
    name: 'My Calendar'
  });

  // Add event 1
  cal.createEvent({
    start: new Date('2022-01-01T00:00:00Z'),
    end: new Date('2022-01-01T01:00:00Z'),
    summary: 'New Year\'s Day'
  });

  // Add event 2
  cal.createEvent({
    start: new Date('2022-02-14T00:00:00Z'),
    end: new Date('2022-02-14T01:00:00Z'),
    summary: 'Valentine\'s Day'
  });

  res.set('Content-Type', 'text/calendar');
  res.set('Content-Disposition', 'attachment;filename=calendar.ics');
  res.send(cal.toString());
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});
