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
        onChangeText={setPassword}
      />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
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
    width: 120,
    height: 120,
    marginBottom: 20, 
    resizeMode: 'contain',
  },
  loginText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '48px',
    fontFamily: 'Jaro',
    textDecorationLine: 'underline',

  },
  inputBox:{
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 10,
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
    backgroundColor: "#0321a5ff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText:{
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textAlign: 'center',
  },
})