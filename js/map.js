google.maps.event.addDomListener(window, "load", function () {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.LatLng(7.8906391, 98.29500014248785),
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  var infoWindow = new google.maps.InfoWindow();

  var onMapmouseover = function () {
    var map = this;
    var latLng = marker.getPosition();
    infoWindow.open(map);
  };
  google.maps.event.addListener(map, "mouseover", function () {
    infoWindow.close();
  });

  var onMarkermouseover = function () {
    var marker = this;
    var latLng = marker.getPosition();
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
  };
  google.maps.event.addListener(map, "mouseover", function () {
    infoWindow.close();
  });

  var marker1 = new google.maps.Marker({
    map: map,
    title: "DoubleTree by Hilton Phuket Banthai Resort",
    icon: "../img/marker-icon.png",
    position: new google.maps.LatLng(7.8906391, 98.29500014248785),
  });
  // infoWindow.open(map, marker1);
  google.maps.event.addListener(marker1, "mouseover", onMarkermouseover);
  google.maps.event.addListener(map, "mouseover", onMapmouseover);
});
