
const eventURLTemplate = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=here+goes+the+title&dates=date/dateEnd&details=Details&recur=&location=&trp=false&sprop=name:name:Peter+Szabo';
// const eventURLTemplate = 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Webinar+test&dates=20210503T110000Z/20210503T120000Z&details=Webinar:+Webinar+test%0ADescription:+Webinar+test%0AHost(s):+Peter+Szabo%0AWebinar+link:+https://event.webinarjam.com/go/live/9/xxk4mb3sz0uqp4pby989&recur&location&trp=false&sprop=name:name:Peter+Szabo';
const webinarURLParamsTest = 'https://now.peterszabo.co/thank-you/?wj_lead_email=sergio%40peterszabo.co&wj_lead_first_name=sergio&wj_lead_last_name=&wj_lead_phone_country_code=&wj_lead_phone_number=&wj_lead_unique_link_live_room=https%3A%2F%2Fevent.webinarjam.com%2Fgo%2Flive%2F5%2Fxxk4mb0u9tlgkgbklml&wj_event_ts=1619773200&wj_event_tz=Europe%2FBerlin&wj_next_event_date=Friday%2C+30+April+2021&wj_next_event_time=11%3A00+AM&wj_next_event_timezone=Amsterdam%2C+Berlin%2C+Bern%2C+Rome%2C+Stockholm%2C+Vienna+GMT+%2B2'

const TITLE = "The 1 Simple Shift That Let This Teenager Make Millions"


// test%0ADescription
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

// console.log(customString(eventDetails))

const pad = (number) => {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

const getEventDateFormat = (eventDate) => {
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


// const webinarParams = new URLSearchParams(webinarURLParamsTest);

// const linkRoomTest = webinarParams.get("wj_lead_unique_link_live_room")
eventDetails.webinarLink = encodeURIComponent(uniqueLinkLiveRoom);

const urlParamsEventTemplate = new URLSearchParams(eventURLTemplate);

const entries = urlParamsEventTemplate.entries();
// const entriesW = webinarParams.entries();
// Getting Date Format
// const webiDateTest = new Date(Date.parse(webinarParams.get('wj_next_event_date') +','+ webinarParams.get('wj_next_event_time')))
const googleDateFormat = getEventDateFormat(webiDate);

// Setting Event URL Params
urlParamsEventTemplate.set("text", TITLE)
urlParamsEventTemplate.set("dates", googleDateFormat)
urlParamsEventTemplate.set("details", customString(eventDetails))

const googleEventLink = decodeURIComponent(urlParamsEventTemplate.toString())

for(const entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}