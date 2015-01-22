# MyMap
* Introduction
* Methods
* Functions
* Further Application


### Introduction
This webpage is a simple demonstration of the works I've done since last month. The webpage consists of a Google Map and three buttons.
Clicking on the different buttons will draw different areas on the map, and a alert message will inform the user about the information of the area.


The webpage is implemented using **_Google Maps Javascript APIv3_**.
For furthur information about **_Google Maps Javascript APIv3_**, please visit the links below:
  https://developers.google.com/maps/documentation/javascript/3.exp/reference


### Methods
The map contains three different structures: **_Map_**, **_Polygon_**, **_Circle_**.  
**_Map_** is the object which will create a Google Maps inside of the given HTML container, which is **_map-canvas_** in this case. There's several map options that is required while creating the map. **_Center_** is the initial **_Map_** geographical center, defined by **_LatLng_**. **_Zoom_** is the zooming level of the initial map. **_mapTypeId_** sets the initial map's type.  
```javascript
mapOptions={
			zoom: 15,
			center: new google.maps.LatLng(24.786809, 120.997288),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
```


**_Polygon_** is object that can draw a polygon map overlay using the latitude and longitude initialized by the designer. **_PolygonOptions_** defines the attribute of the polygon like **_path_**, which is a connected line of coordinates.  
```javascript
var triangleCoords=[
			new google.maps.LatLng(24.788167, 120.996638), //Science Building I
			new google.maps.LatLng(24.786806, 121.001917), //Electronics and Information Research Center
			new google.maps.LatLng(24.784712, 120.997357) //Assembly Building I
		];
		
...
	
	myTriangle=new google.maps.Polygon({
			paths: triangleCoords,
			strokeColor: '#ff0000', // set the color of the stroke.
			strokeOpacity: 0.8,     // set the opacity(transparency) of the stroke.
			strokeWeight: 3,        // set the width of the stroke.
			fillColor: '#ff0000',   // set the fill-in color of the polygon
			fillOpacity: 0.35       // set the opacity(transparency) of the polygon
		});
```


**_Circle_** object has almost the same attribute as **_Polygon_**, except that **_Circle_**'s position and range is defined by two attributes: **_center_**, **_radius_**. Attribute **_center_** is defined by **_google.maps.LatLng_** object. **_Radius_** is the meters on the Earth's surface.  
```javascript
var circleOptions={
			strokeColor: '#ee82ee',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#ee82ee',
			fillOpacity: 0.35,
			map: map,                                              //which google.map object the circle is displayed on. 
			center: new google.maps.LatLng(24.786632, 120.998251), //NCTU Library. Geographical center on the map
			radius: 200
		};

...

myCircle=new google.maps.Circle(circleOptions);
```


### Functions
In the Google Maps API, the overlay objects is first initialized with the attributes mentioned above, then these objects can be shown or hid on the map using **_setMap( map:Map )_** function. The function will render the features on the specific **_map:Map_**. If **_map:Map_** is set to _null_, the feature will be removed from the map.


By using this function, it is simple to implement my function **_showRange( rangeId, alertmsg )_**. The function is triggered when the webpage buttons is clicked, showing the different ranges, specified by **_rangeId_** on the map. Upon the time showing the range, an alert message, which is passed by parameter **_alertmsg_**, will pop up to tell the user about the information of this range. When the range is shown, clicking the button again will make it dispear from the map.  
```javascript
function showRange(rangeId, alertmsg){
		if(!showedRange[rangeId]){
			rangeArray[rangeId].setMap(map);  //setMap(map) function will render the overlay object, specified by rangeId, on the map
			alert(alertmsg);                  //pop out the alert message.
			showedRange[rangeId]=1;           //toggle the value in showedRange array to 1, indicating that the object is shown.
		}
		else if(showedRange[rangeId]){
			rangeArray[rangeId].setMap(null); //setMap(null) clears the overlay.
			showedRange[rangeId]=0;           //toggle the value to 0.
		}
	}
```


### Further Applications
This map application can combine with the reporting system that we designed and implemented previously. We can deploy several beacons and classify them into different sections. When anyone sends a report using the reporting Android App., the report information will be logged and stored in the database. The other user can see this on the webpage. Furthurmore, users can see which section that this report coming from on the Google Maps, which the section range is shown by using this method. 


Another possible application would be that allowing the reporting system administrator to see the beacons' deployment. It can probably attach with a statistic report about the sections' reporting analysis, reporting rate or reporting time interval for example.

