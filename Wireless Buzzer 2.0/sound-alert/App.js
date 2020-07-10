import * as React from 'react';
import { Text, View, Button } from 'react-native';
import {Audio} from 'expo-av'


class SoundAlert extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
     { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
   );
  }

  render() {
    return (
      <Button title="Sound Alert" color="blue" onPress={this.playSound} />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:250}}>
        <SoundAlert/>
      </View>
    );
  }
}


