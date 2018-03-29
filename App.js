import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 23.736906;
const LONGITUDE = 90.397768;
const LATITUDE_DELTA = 0.022;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      offlineMap: false
    };
  }

  _toggleOfflineMap = () => {
    this.setState({
      offlineMap: !this.state.offlineMap
    });
  }

  render() {
    return (
      <View
        style={styles.container}>
        <TouchableOpacity
          style={{ position: "absolute", bottom: 0, backgroundColor: this.state.offlineMap ? "lightblue" : "white", zIndex: 100, height: 50, width: width, justifyContent: "center", alignItems: "center" }}
          onPress={() => this._toggleOfflineMap()}>
          <Text> {this.state.offlineMap ? "Online Map" : "Offline Map"} </Text>
        </TouchableOpacity>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee">
          {this.state.offlineMap ? <MapView.LocalTile
            pathTemplate={"{z}/{x}/{y}"}
            tileSize={256} /> : null}

        </MapView>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});