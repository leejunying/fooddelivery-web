import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import { Mapstyle } from "../Styled/Heremap";
import { useState, useEffect } from "react";
import { Isonsharelocation } from "../../../Ultis/Common_function";
//ui.addBubble
const Map = (props) => {
  const mapRef = useRef(null);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const currentlocation = () => {
    if (Isonsharelocation() === true) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    currentlocation();
  }, []);

  useEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "YXzxIem9jbwd0f9hYiHws2gCa_pQoOOIdV3u7CY-JPU",
    });
    const defaultLayers = platform.createDefaultLayers();
    var service = platform.getSearchService();
    if (location != undefined) {
      console.log(location);

      service.geocode(
        {
          q: `${props.location}`,
        },
        (result) => {
          if (result.items.length > 0) {
            let item = result.items[0];
            // Assumption: ui is instantiated
            // Create an InfoBubble at the returned location with
            // the address as its contents:
            console.log(item);
            //icon location
            var icon = new H.map.Icon("./iconlocation.png");

            var marker = new H.map.Marker(
              { lat: item.position.lat, lng: item.position.lng },
              { icon: icon }
            );

            const hMap = new H.Map(
              mapRef.current,
              defaultLayers.vector.normal.map,
              {
                center: { lat: item.position.lat, lng: item.position.lng },
                zoom: 16,
              }
            );

            hMap.addObject(marker);

            const behavior = new H.mapevents.Behavior(
              new H.mapevents.MapEvents(hMap)
            );

            const ui = H.ui.UI.createDefault(hMap, defaultLayers);
            return () => {
              hMap.dispose();
            };
          }
        },
        alert
      );
    }

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
  }, [mapRef]);

  return (
    <Grid>
      <Grid
        container={true}
        className="map"
        ref={mapRef}
        style={{ height: "500px" }}
      ></Grid>
    </Grid>
  );
};
export default Map;
