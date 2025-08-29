import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
function login(){


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(username === "ambulance" && password === "123"){
      alert("Login successfully");
    }else{
      alert("Invalid username or password");
    }
  };

return(
  <View style={styles.mainContainer}>
    
    <Image style={styles.imageLogo} source={require("../assets/images/hospital.jpg")} ></Image>

    <Text style={styles.loginText}> LOGIN</Text>

    
      <View style={styles.inputBox}>

        <TextInput 
        style={styles.inputs}
        placeholder='username'
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.inputs}
        placeholder='password'
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        
      />

       <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <view style={styles.linkBox}>
       
        <Link href={"#"} style={styles.linkstyle}>Forgot Password</Link>
       
        
        <Link href="/createAccount" style={styles.linkstyle}>Create account</Link>
       
      </view>
      </View>

     
  </View>
);
}

export default login;

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3ECBE4',
    padding: "200px",
  },
  imageLogo:{
    width: 150,
    height: 150,
    marginBottom: 20, 
    resizeMode: 'contain',
  },
  loginText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '48px',
    fontFamily: 'Jaro',
    textDecorationLine: 'underline',
    padding: "20px",

  },
  inputBox:{
    width: "100%",
    backgroundColor: "#cbbfbfff",
    borderRadius: 10,
    borderColor: "#bb2121ff",
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    
  },
  inputs:{
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    marginBottom: 15,
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "Maven pro",
    fontSize: "20px",
    
  },
  button:{
    backgroundColor: "#06defadf",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText:{
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textAlign: 'center',
  },
  linkBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  linkstyle:{
    fontSize:16,
    fontFamily: "Afacad",
    color: "#0929F4",
    paddingRight: 150,
    textAlignVertical: 'auto',
    
  }
})