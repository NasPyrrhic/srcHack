//getting url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


//saving especific params
const nextEventDate = urlParams.get('wj_next_event_date');
const nextEventTime = urlParams.get('wj_next_event_time');
const nextEventTimeZone = urlParams.get('wj_next_event_timezone');
const uniqueLinkLiveRoom = urlParams.get('wj_lead_unique_link_live_room');

//nextEventDate&Time to Date object
const dateString = nextEventDate +", "+ nextEventTime
const webiDate = new Date(Date.parse(dateString))

//inserting the date
const dateSpan = document.createElement("span");
dateSpan.innerHTML = dateString;
const dateOne = document.querySelector('#js_date_1');
dateOne.appendChild(dateSpan);

//inserting the timeZone
const timeZone = document.querySelector('#js_timezone_2');
timeZone.innerHTML = nextEventTimeZone;

//inserting live link
const liveLink = document.querySelector('#js_live_link_1');
liveLink.innerHTML = uniqueLinkLiveRoom;

// console.log(queryString);

