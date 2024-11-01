var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("footer").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function contactMe() {
            // Detect if the user is on an Android device
            if (/Android/.test(navigator.userAgent)) {
                // Construct a mailto link with pre-filled details
                window.location.href = "mailto:mdtorikulislam5748@gmail.com?subject=Contact%20Request&body=Hi%20Buddy!%20How%20are%20you...";
            } else {
                // Redirect to a specific URL (e.g., a contact form or email address)
                window.location.href = "https://www.facebook.com/Tnayem48?mibextid=ZbWKwL";
            }
        }