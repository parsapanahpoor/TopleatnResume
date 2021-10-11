var myCenter = new google.maps.LatLng(38.064950, 46.327596);

function initialize() {
	var mapProp = {
		center: myCenter,
		scrollwheel: false,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var marker = new google.maps.Marker({
		position: myCenter,
		map: map,
	});

	var styles = [
		{
			"stylers": [
				{
					"hue": "#0063d1"
				}
			]
		}
	];

	map.setOptions({
		styles: styles
	});
	marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
