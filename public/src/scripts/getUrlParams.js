//getting url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


//saving especific params
const nextEventDate = urlParams.get('wj_next_event_date');
const nextEventTime = urlParams.get('wj_next_event_time');
const nextEventTimeZone = urlParams.get('wj_next_event_timezone');
const uniqueLinkLiveRoom = urlParams.get('wj_lead_unique_link_live_room');
const eventTs = urlParams.get('wj_event_ts')
const firstName = urlParams.get('wj_lead_first_name')
const lastName = urlParams.get('wj_lead_last_name') || ""
const email = urlParams.get('wj_lead_email')