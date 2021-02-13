import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert} from 'react-native';
import db from "../config"
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId : "",
            password : ""
        }
    }

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then((response)=>{
            console.log("The user  has been added")
            return Alert.alert("The user  has been added")
            
        }).catch((function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            return Alert.alert(errorMessage);
        }))
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then((response)=>{
            console.log("Successfull login")
            return Alert.alert("Successfull login")
            
        }).catch((function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            return Alert.alert(errorMessage);
        }))
    }

    render(){
        return(
            <View style={styles.container}>

                <View>
                    <Text style={styles.text}>Book Santa </Text>
                </View>
                
                <View>
                    <TextInput style={styles.inputBox} placeholder="Enter Email id" keyboardType="email-address" onChangeText={(text)=>{
                        this.setState({
                            emailId : text
                        })
                    }}/>

                    <TextInput style={styles.inputBox} placeholder="Enter Password" secureTextEntry={true} onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>

                    <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]} onPress={()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}>
                        <Text style={styles.btText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.userSignUp(this.state.emailId,this.state.password)
                    }}>
                        <Text style={styles.btText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:'#aec6cf',
        justifyContent:"center"
    },
    text:{
        fontSize:65,
        fontWeight:300,
        paddingBottom:30,
        color:'#f5f2d0'
    },
    inputBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#B6977D',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        backgroundColor:'#B6977D',
        
    },
    btText:{
        color:"#f5f2d0",
        fontSize:25,
        fontWeight:250
    }
})