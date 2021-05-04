import React, { useState, useEffect } from 'react';
import {StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import {Button, Overlay, Input} from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import axios from 'axios';


export default function TabOneScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState (null);
  const [longitude, setLongitude] = useState(null);
  const [markerss, setMarkers] = useState([]);
  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []
      
  
  );

  let currLatitude = Number(latitude);
  let currLongitude = Number(longitude);

   const link = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+currLatitude+","+currLongitude+'&radius=16093&keyword=recycle&key=';

     
  let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
  
      


  

  return (
    <View style={styles.container}>
    <View style={styles.map}>
      <MapView style = {StyleSheet.absoluteFillObject}
      provider = {PROVIDER_GOOGLE}
      region = {{
        latitude: Number(latitude),
        longitude: Number(longitude),
        latitudeDelta:0.09,
        longitudeDelta: 0.035 
      }}
      showsUserLocation={true}>
      {markerss.map(each => {
        return (<Marker coordinate = {{latitude : each.lat1, longitude : 
          each.long1
        }}>
          <Callout>
            <Text>{each.place}</Text>
            <Text>{each.add}</Text>        
          </Callout>
        </Marker>
          )
        }
      )
    }
     
       </MapView>
       </View>
              <View style={styles.header}>
              <Button title="Find Recycling Depot Near Me" 
              // buttonStyle={styles.button1}
              color="#009900"
              onPress={() => {
                axios.get(link).then(
                  response => {
                    var newmarker = [];
                    response.data.results.map(
                      location => {
                        let pointlat = location.geometry.location.lat;
                        let pointlong = location.geometry.location.lng;
                        let address = "Address: " + String(location.vicinity);
                        let name = "Name :" + String(location.name);
              
                        let point = { 
                          lat1: pointlat,
                          long1: pointlong,
                          add: address,
                          place: name
                      }

                      newmarker.push(point);

                      // console.log(newmarker);
                      }
                    )
                    setMarkers(newmarker);
                    console.log(markerss);
                    console.log(markerss[0].add);
            
                    
                     
    
            }
                )
          }
        } 
            />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: 400,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 10,
    paddingHorizontal: 14
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
