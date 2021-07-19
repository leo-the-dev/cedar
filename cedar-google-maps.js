<script> 
    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(44.473761,-77.815641),
            zoom: 7,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}],
        }
        var mapElement = document.getElementById('sharednetworkmap');
        var map = new google.maps.Map(mapElement, mapOptions);



        /*  Add new locations to this list  */
        

        var locations = [
['18th and 11th', 'Code: SNC0002<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.966008,  -79.707017, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Bond Head', 'Code: SNC0003<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.073612,  -79.685393, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['89 & Luther Marsh', 'Code: SNC0004<br />Available Height: 70m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.027481,  -80.433500, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Stouffville SE', 'Code: SNC0006<br />Available Height: 28m<br />Incumbents: 2', 'undefined', 'undefined', 'undefined', 43.962528,  -79.214722, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Watson & Eastview', 'Code: SNC0007<br />Available Height: 45m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.585350000000005,  -80.21258888888889, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Stouffville NW', 'Code: SNC0009<br />Available Height: 42m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined',  43.978689,  -79.277333, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Dixie & Old Base', 'Code: SNC0011<br />Available Height: 60m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined',  43.824192,  -79.883178, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Countryside & Clarkway', 'Code: SNC0015<br />Available Height: 41m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.82607222222222,  -79.70363888888889, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Bowmanville', 'Code: SNC0017<br />Available Height: 37m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.90713888888889,  -78.72252777777778, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Hwy 10 & King', 'Code: SNC0020<br />Available Height: 30m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.768653,  -79.876322, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Kennedy & Centre', 'Code: SNC0023<br />Available Height: TBD<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.709622,  -79.772987, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Hwy 10 & Wanless', 'Code: SNC0024<br />Available Height: 22m<br />Incumbents: 2', 'undefined', 'undefined', 'undefined', 43.722194,  -79.816417, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Central Park Dr & Grenoble Blvd', 'Code: SNC0027<br />Available Height: 14.8m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.73332777777778,  -79.72058333333334, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Goreway & Cottrelle', 'Code: SNC0032<br />Available Height: 30m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.766026, -79.703959, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Kennedy & Dougall', 'Code: SNC0033<br />Available Height: 12.5m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.75312777777778,  -79.82704444444444, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Hwy 416 & Cambrian', 'Code: SNC0056<br />Available Height: 58m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 45.247861,  -75.788833, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Rideaucrest & Woodroffe', 'Code: SNC0057<br />Available Height: 13.2m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 45.284124999999996,  -75.72400277777778, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Yonge & D`Ambrosio', 'Code: SNC0069<br />Available Height: 40m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.362289,  -79.655992, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Maple Beach', 'Code: SNC0071<br />Available Height: 60m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.369647,  -79.176770, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Hwy 27 & King-Vaughan', 'Code: SNC0072<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.878156,  -79.644838, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Eagle & Scott', 'Code: SNC0073<br />Available Height: 12.5m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.04774166666667,  -79.46924444444444, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Hyde Park & Medway', 'Code: SNC0076<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.031023,  -81.358084, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Adelaide & Medway', 'Code: SNC0077<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.065570,  -81.251838, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Concession Rd 6 & Acres', 'Code: SNC0079<br />Available Height: 75m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.994869,  -78.691339, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Abbott & Iber', 'Code: SNC0080<br />Available Height: 44m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 45.276303,  -75.901559, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Richardson & Huntmar', 'Code: SNC0081<br />Available Height: 44m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 45.30867222222222,  -75.95129722222222, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Mt Pleasant & Conklin', 'Code: SNC0083<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.093667,  -80.297786, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Hallecks', 'Code: SNC00084<br />Available Height: 75m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined',  44.552892,  -75.760662, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Belleville East', 'Code: SNC00085<br />Available Height: 55m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined',  44.181330,  -77.364501, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Brighton Town', 'Code: SNC00087<br />Available Height: 55m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined',  44.038079,  -77.730564, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Ashby Field & Bovaird', 'Code: SNC0091<br />Available Height: 12.5m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.67299722222222,  -79.82128055555555, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Napanee West', 'Code: SNC0092<br />Available Height: 55m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.235056,  -76.961917, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Aultsville & 401', 'Code: SNC0094<br />Available Height: 72m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 44.989167,  -75.056333, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Kraft & Gore', 'Code: SNC0095<br />Available Height: 72m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 45.118167,  -74.563000, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['416 & Bryers', 'Code: SNC0096<br />Available Height: 75m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.788300,  -75.500753, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Smithfield', 'Code: SNC0098<br />Available Height: 70m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.057136, -77.663736, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Woodstock Centre', 'Code: SNC0100<br />Available Height: 45m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.141128, -80.719644, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Penetang and Old Barrie', 'Code: SNC0101<br />Available Height: 62m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 44.512974,  -79.713690, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Newtonville', 'Code: SNC0103<br />Available Height: 48m<br />Incumbents: 2', 'undefined', 'undefined', 'undefined', 43.930172,  -78.478962, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Delaware', 'Code: SNC0104<br />Available Height: 72m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 42.909106,  -81.380983, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Mer Bleue & Renaud', 'Code: SNC0105<br />Available Height: 60m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 45.439256,  -75.496047, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Vineland', 'Code: SNC0106<br />Available Height: 42m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.162570,  -79.407168, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Willowbark', 'Code: SNC0107<br />Available Height: 14.9m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 45.449133,  -75.535740, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Upper James & Rymal', 'Code: SNC0108<br />Available Height: 40m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.203368,  -79.890147, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Fairway & Lackner', 'Code: SNC0110<br />Available Height: 16m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.442928,  -80.414883, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['McLaughlin and Old School', 'Code: SNC0112<br />Available Height: 32m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.744189,  -79.864803, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Birkett & Erie', 'Code: SNC0113<br />Available Height: 60m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.115270,  -80.257698, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Fernbank & Blacks Side Road', 'Code: SNC0114<br />Available Height: 60m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 45.241056,  -75.930861, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Talbot & Malden', 'Code: SNC0117<br />Available Height: 72m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 42.240933,  -82.841822, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Claremont', 'Code: SNC0120<br />Available Height: 41m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.978879,  -79.109215, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Thunder Bridge & Angeline', 'Code: SNC0123<br />Available Height: 55m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.380611, -78.757056, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Weston and Rutherford', 'Code: SNC0125<br />Available Height: 25m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.826414,  -79.557144, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Lincoln & Coventry', 'Code: SNC0130<br />Available Height: 43m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 42.985950,  -79.240339, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Elora-Fergus', 'Code: SNC0133<br />Available Height: 60m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.681765,  -80.392056, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['St. Catherines West', 'Code: SNC0135<br />Available Height: 35m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.156502,  -79.275952, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Camborne', 'Code: SNC0140<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.040297,  -78.231415, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Waterdown NW', 'Code: SNC0143<br />Available Height: 52m<br />Incumbents: 1', 'undefined', 'undefined', 'undefined', 43.156502,  -79.275952, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Precious Corners', 'Code: SNC0144<br />Available Height: 50m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.995589,  -78.197437, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Coldwater', 'Code: SNC0150<br />Available Height: 65m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.717884,  -79.641217, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Waubaushene', 'Code: SNC0151<br />Available Height: 50m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 44.765506,  -79.692935, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Martintown', 'Code: SNC0152<br />Available Height: 75m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 45.145062,  -74.717995, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
['Baden-New Hamburg', 'Code: SNC0154<br />Available Height: 60m<br />Incumbents: 0', 'undefined', 'undefined', 'undefined', 43.395057,  -80.702413, 'http://sharednetwork.ca/wp-content/themes/anw_sharednetworks/mapmarker.png'],
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                    iw.close();
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}
</script>
