// Browser is global environment in client side JS
// Local computer is global environment in node JS
valx = window;
valy = window.history;
valz = window.navigator;
valzz = window.location;

// Alert - Both Same
window.alert("msg");
alert("same");

// Prompt - Same as alert but takes input
let input = prompt();

// Confirm
if (confirm("Msg parameter?")) {
  console.log("yes"); // only runs if user selects yes
} else {
  // No
}

// Get Window Dims - Changes according to current window size
let val1 = window.outerHeight;
let val2 = window.outerWidth;
let val3 = window.innerHeight;
let val4 = window.innerWidth;

// Scroll Point
val1 = window.scrollY; // returns Vertical position of scroll bar
val1 = window.scrollX;

// Location Obj
val = window.location; // return 
val - window.location.search // gets query string from url, can extract and use in script

// Redirect
window.location.href = "http://google.com";

// Reload
window.location.reload();

// History obj - will bring browser to page before the current as determined by argument = -1 is previous page
window.history.go(-1);

val = window.history.length; // returns how many pages visited

// Navigator obj - deals with browser
val = window.navigator; // object with property details


