//nextEventDate&Time to Date object
const dateString = nextEventDate +", "+ nextEventTime
const webiDate = new Date(Date.parse(dateString))

//insert date
const dateSpan = document.createElement("span");
dateSpan.innerHTML = dateString;
const dateOne = document.querySelector('#js_date_1');
dateOne.appendChild(dateSpan);

//insert timeZone
const timeZone = document.querySelector('#js_timezone_2');
timeZone.innerHTML = nextEventTimeZone;

//insert live link
const liveLink = document.querySelector('#js_live_link_1');
liveLink.innerHTML = uniqueLinkLiveRoom;

// console.log(queryString);