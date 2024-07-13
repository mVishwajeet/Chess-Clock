import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStyles from './styles/Homestyles';
import PlayerStyles from './styles/Playerstyles';
import players from './data/Players'
import { TextInput } from 'react-native-paper';


const PlayerName =( {navigation}) =>{

    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');



    const SaveAndNavigate = () =>{
        // setPlayer1(p1);
        // setPlayer2(p2);
        console.log("Player 1"+player1+"  "+"Player 2"+player2);
        navigation.navigate('Clock');
    }

    return(
        <SafeAreaView style= {PlayerStyles.maincontainer}>
            <View>
                <Text style={PlayerStyles.text}>Player 1 </Text>
                <TextInput style={PlayerStyles.placeholder}
                    placeholder="Type Player 1..."
                    value={player1}
                    onChangeText={setPlayer1}
                />
            </View>
            <View style={{marginTop: 20}}>
            <Text style = {PlayerStyles.text}>Player 2 </Text>
                <TextInput style={PlayerStyles.placeholder}
                    placeholder="Type Player 2..."
                    value={player2}
                    onChangeText={setPlayer2}
                />
            </View>

            
                <View style={PlayerStyles.buttonArea}>
                    <TouchableOpacity style={PlayerStyles.button} onPress={ SaveAndNavigate}>
                    <Text style={PlayerStyles.text}>Submit</Text> 
                    </TouchableOpacity>
                </View>


            <View style = {PlayerStyles.bottomContainer}>
                    < TouchableOpacity style={PlayerStyles.button} onPress={()=> {navigation.navigate('Home')}}>
                    <Text style={PlayerStyles.text}>Home</Text> 
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )

}

export default PlayerName;