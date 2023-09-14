/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1
    }
  }), $(".filters a").click(function () {
    $(".filters .active").removeClass("active"), $(this).addClass("active");
    var i = $(this).attr("data-filter");
    return t.isotope({
      filter: i,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1
      }
    }), !1
  });
});


// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });
}

const form = document.getElementById('form')
const btn = document.getElementById('submitbutton')
let a = 0


function validatename() {
  const namee = document.getElementById('name').value
  const nam = namee.trim()
  const NamePattern = /^[A-Za-z]+$/


  const errorDisplay = document.getElementById('error-one')


  if (namee.length >= 3 && NamePattern.test(nam)) {
    errorDisplay.style.color = 'green'
    errorDisplay.innerHTML = 'Succes'
    btn.style.display = ''
    a = 1

  }
  else {

    errorDisplay.innerHTML = 'Invalid Name'
    errorDisplay.style.color = 'red'
    btn.style.display = 'none'
    a = 0

  }
}
// mail checking 
function validatemail() {
  const mail = document.getElementById('mail').value
  const ma = mail.trim()
  const mailPattern = /^[a-z]+[a-zA-Z0-9._%+-]+@[gmail|yahoo|bin]+\.[com|org]{3}$/;
  errrtwoDisplay = document.getElementById('error-two')

  if (mailPattern.test(ma)) {
    errrtwoDisplay.innerHTML = "Succes"
    errrtwoDisplay.style.color = 'green'
    btn.style.display = ''
    a = 1


  }
  else {
    errrtwoDisplay.innerHTML = "Invalid Mail"
    errrtwoDisplay.style.color = 'red'
    btn.style.display = 'none'
    a = 0

  }

}

// validate msg---------
function validatemeg() {
  const msgg = document.getElementById('messages').value

  errrthreeDisplay = document.getElementById('error-three')

  if (msgg.length >= 3) {
    errrthreeDisplay.innerHTML = "Succes"
    errrthreeDisplay.style.color = 'green'
    btn.style.display = ''
    a = 1



  }
  else {
    errrthreeDisplay.innerHTML = "Not enough"
    errrthreeDisplay.style.color = 'red'
    btn.style.display = 'none'
    a = 0

  }
}