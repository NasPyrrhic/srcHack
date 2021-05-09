
const eventURLTemplateGoogle = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=here+goes+the+title&dates=date/dateEnd&details=Details&recur=&location=&trp=false&sprop=name:name:Peter+Szabo';
const eventURLTemplateOutlook = 'https://event.webinarjam.com/registration/reminder/calendar?ts=TS&startTs=startTime&endTs=endTime&title=title%20test&recur=&details=details';

const pad = (number) => {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

const getEventDateFormatGoogle = (eventDate) => {
  this.eventDate = eventDate;
  const _date = 
    this.eventDate.getFullYear() +
    pad(this.eventDate.getMonth() + 1) +
    pad(this.eventDate.getDate()) + 'T' +
    pad(this.eventDate.getHours()) +
    pad(this.eventDate.getMinutes()) +
    pad(this.eventDate.getSeconds()) +
    '00/' +
    this.eventDate.getFullYear() +
    pad(this.eventDate.getMonth() + 1) +
    pad(this.eventDate.getDate()) + 'T' +
    // we add one hour to the original time
    pad(this.eventDate.getHours() + 1) +
    pad(this.eventDate.getMinutes()) +
    pad(this.eventDate.getSeconds()) +
    '00';

  return _date;
}
const getEventDateFormatOutlook = (eventDate) => {
  this.eventDate = eventDate;
  const _dateStart = 
    this.eventDate.getFullYear() +
    pad(this.eventDate.getMonth() + 1) +
    pad(this.eventDate.getDate()) + 'T' +
    pad(this.eventDate.getHours()) +
    pad(this.eventDate.getMinutes()) +
    '00Z'
  const _dateEnd = this.eventDate.getFullYear() +
    pad(this.eventDate.getMonth() + 1) +
    pad(this.eventDate.getDate()) + 'T' +
    // we add one hour to the original time
    pad(this.eventDate.getHours() + 1) +
    pad(this.eventDate.getMinutes()) +
    '00Z';

  return [_dateStart, _dateEnd]
}

const EVENT_TITLE = "The 1 Simple Shift That Let This Teenager Make Millions"

function customString(object) {
  let string = "";
  Object.keys(object).forEach(key => {
      string += '' + key + ': ' + object[key] + '%0A';
  });
  return string;
}

const eventDetails = {
  webinar: "The 1 Simple Shift That Let This Teenager Make Millions",
  description: "and how you too can create more abundance in the next 24-48 hrs by doing the same",
  host: "Peter Szabo",
  webinarLink: ""
}

eventDetails.webinarLink = encodeURIComponent(uniqueLinkLiveRoom);

const googleURLParams = new URLSearchParams(eventURLTemplateGoogle);
const outlookURLParams = new URLSearchParams(eventURLTemplateOutlook);

const entries = googleURLParams.entries();
const googleDateFormat = getEventDateFormatGoogle(webiDate);

// Setting Event URL Params for google link
googleURLParams.set("text", EVENT_TITLE)
googleURLParams.set("dates", googleDateFormat)
googleURLParams.set("details", customString(eventDetails))

const googleEventLink = decodeURIComponent(googleURLParams.toString())

const googleEventButton = document.querySelector('#js-google-calendar-link')
googleEventButton.href = googleEventLink;

// Setting Event URL Params for outlook link, don't work... yet

const [dateStart,dateEnd] = getEventDateFormatOutlook(webiDate)
const details = googleURLParams.get("details")
const detailsURI = details.replace(/ /gm, "+")
const detailsEncode = window.btoa(detailsURI)

outlookURLParams.set("ts",eventTs)
outlookURLParams.set("title",EVENT_TITLE)
outlookURLParams.set("startTs",dateStart)
outlookURLParams.set("endTs",dateEnd)
outlookURLParams.set("details",detailsEncode)

const outlookEventLink = decodeURIComponent(outlookURLParams.toString())
