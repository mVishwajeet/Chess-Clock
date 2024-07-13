import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");

const HomeStyles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#deb887',
    width: {width},

  },
  subcontainer1: {
    marginBottom: 200,
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#191970',
    },

  subcontainer2: {
    backgroundColor: 'green',
    width: 200, // Set a fixed width for the button
    height: 40, // Set a fixed height for the button
    borderRadius: 5,
  },

  
  text:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: '#4b0082'
  }
 

});

export default HomeStyles;
