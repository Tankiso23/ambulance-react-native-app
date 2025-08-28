//Welcome page
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

function Welcome(){
  return(
    <View style ={styles.mainContainer}>
      <Text>Welcome!!</Text>
      <Link href="/login"> Go to login </Link>
    </View>
  );
}
export default Welcome;

const styles = StyleSheet.create({

  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e95b5bff',
  },

  buttonStyle:{
    backgroundColor: '#0baffcff',
    textShadowColor: "#fff"
  }
});