// Split the current URL at the '?'. This will create an array, the first
// member being the URL before the '?' and the second member, the URL after
// the '?'. So the second member of the array will be the actual query string.
import qs from "querystring";
const music = document.querySelectorAll('span');
const urlParts = window.location.href.split('?');
// Parse the query string into an object called 'get'
const get = qs.parse(urlParts[1]);
music[0].innerText = get.title;
music[1].innerText = get.artist;
// We can now access the parameters with get.paramName, e.g. for the query string:
// http://website/index.html?param1=value1&param2=value2
// we would access the parameters with get.param1 and get.param2.