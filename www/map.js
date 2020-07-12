// This is a JavaScript file

function initialize() {
  var latlng = new google.maps.LatLng(34.253650, 132.904402);
  var opts = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  var m_latlng1 = new google.maps.LatLng(34.253650, 132.904402);
  var marker1 = new google.maps.Marker({
    position: m_latlng1,
    map: map
  });

  
}