import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function createAccount(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [cellNumber, setCellNumber] = useState("");
    const[password, setPassword] = useState("");
    const[confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    

    const handlingAccount = () => {
       if(!(email.endsWith("@gmail.com") || email.endsWith(".co.za"))){
        setError("Email must end with @gmail.com or .co.za");
        return;
       }
       if(password !== confirm){
        setError("Password do not match");
        return;
       }
       setError("")
       alert("Acount created successfully");
    };
    return(
        <View style={styles.mainBox}>
            <Text style={styles.englishText}>English(UK)</Text>
            <Text style={styles.createAccountText}>Create Account</Text>

            <TextInput 
            placeholder='First Name'
            value={firstName}
            onChangeText={setFirstName}
            />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
        </View>
    );
}
export default createAccount;

const styles = StyleSheet.create({
    mainBox:{
        flex:1,
        alignItems: 'center',
        padding: "200px",
        backgroundColor: "#F0DADA",
    },
    englishText:{
        position: 'absolute',
        top: 20,
        right: 20,
        fontSize: 20,
        color: "black",
    },
    createAccountText:{
        textAlign: 'center',
        fontFamily: "Archivo Black",
        fontSize: 40,
        fontWeight: 'bold',
        
    },
})