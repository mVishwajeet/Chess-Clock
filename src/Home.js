import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStyles from './styles/Homestyles';
import { Button } from 'react-native-paper';


const Home = ({ navigation }) => {

    const renderToPlayerPage = () =>{
        navigation.navigate('PlayerName');
    }
  return (
    <TouchableWithoutFeedback onPress={renderToPlayerPage}>
        <SafeAreaView style={HomeStyles.maincontainer}>
        <View style= {HomeStyles.subcontainer1}>
            <Text style= {HomeStyles.title}>Chess Clock</Text>
        </View>
        <View>
            <Text style={HomeStyles.text}>Tap to Play</Text>
        </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
