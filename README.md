# MyMap
* Introduction
* Methods
* Functions
* Furthur Application


### Introduction
This webpage is a simple demonstration of the works I've done since last month. The webpage consists of a Google Map and three buttons.
Clicking on the different buttons will draw different areas on the map, and a alert message will inform the user about the information of the area.


The webpage is implemented using **_Google Maps Javascript APIv3_**.
For furthur information about **_Google Maps Javascript APIv3_**, please visit the links below:
  https://developers.google.com/maps/documentation/javascript/3.exp/reference


### Methods
The map contains three different structures: **_Map_**, **_Polygon_**, **_Circle_**. **_Map_** is the object which will create a Google Maps inside of the given HTML container, which is **_map-canvas_** in this case. There's several map options that is required while creating the map. **_Center_** is the initial **_Map_** geographical center, defined by **_LatLng_**. **_Zoom_** is the zooming level of the initial map.


**_Polygon_** is object that can draw a polygon map overlay using the latitude and longitude initialized by the designer. **_PolygonOptions_** defines the attribute of the polygon like **_path_**, which is a connected line of coordinates.


**_Circle_** object has almost the same attribute as **_Polygon_**, except that **_Circle_**'s position and range is defined by two attributes: **_center_**, **_radius_**. Attribute **_center_** is defined by **_google.maps.LatLng_** object. **_Radius_** is the meters on the Earth's surface.


### Functions
In the Google Maps API, the overlay objects is first initialized with the attributes mentioned above, then these objects can be shown or hid on the map using **_setMap( map:Map )_** function. The function will render the features on the specific **_map:Map_**. If **_map:Map_** is set to _null_, the feature will be removed from the map.


By using this function, it is simple to implement my function **_showRange( rangeId, alertmsg )_**. The function is triggered when the webpage buttons is clicked, showing the different ranges, specified by **_rangeId_** on the map. Upon the time showing the range, an alert message, which is passed by parameter **_alertmsg_**, will pop up to tell the user about the information of this range. When the range is shown, clicking the button again will make it dispear from the map.


### Furthur Applications
This map application can combine with the reporting system that we designed and implemented previously. We can deploy several beacons and classify them into different sections. When anyone sends a report using the reporting Android App., the report information will be logged and stored in the database. The other user can see this on the webpage. Furthurmore, users can see which section that this report coming from on the Google Maps, which the section range is shown by using this method. Another possible application would be that allowing the reporting system administrator to see the beacons' deployment, probably with a statistic report about the sections' reporting analysis.

