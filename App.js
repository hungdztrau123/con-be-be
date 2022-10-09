import * as React from "react";
import { Button, View, Text, TextInput, StyleSheet, ImageBackground, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Buttonn } from "./Components/Buttonn";
import { useState } from "react";
function HomeScreen({ navigation }) {

  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style={{  width: 200,  borderRadius: 20, overflow: 'hidden', marginBottom : 10,}}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      </View>
      <View style={{  width: 200,  borderRadius: 20, overflow: 'hidden', marginBottom : 10,}}>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
      </View>
      <View style={{  width: 200,  borderRadius: 20, overflow: 'hidden', marginBottom : 10,}}>
      <Button
        title="Forgot password"
        onPress={() => navigation.navigate("ForgotPassword")}
      />
      </View>
    </View>
  );
}
function Register() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="UserName" style={styles.input} />
      <TextInput placeholder="PassWord" style={styles.input} />
      <TextInput placeholder="Re enter PassWord" style={styles.input} />

      <Buttonn>Register </Buttonn>
      
    </View>
  );
}

function Login({navigation}) {

  const [account, setAccount] = useState("");
  const [passWord, setPassword] = useState("");
  const handleClick = () => {
    if(account && passWord)
    {
      return navigation.navigate("HomePage");
    }
    else 
    {
      Alert.alert("thieu roi");
    }
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput onChangeText={setAccount}  value={account}  placeholder="UserName" style={styles.input} />
      <TextInput onChangeText={setPassword} value={passWord}  placeholder="PassWord" style={styles.input} />
      <Buttonn callback ={handleClick}>Login </Buttonn>
    
    </View>
  );
}
function ForgotPassword() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="UserName" style={styles.input} />
      <Buttonn>Get passWord</Buttonn>
    </View>
  );
}

function AfterLogin() { 
return (
  <ImageBackground 
  source={require("./img/anhdep.jpg")} 
  style ={{width: '100%', height: '100%',}}>
    <View>
      <Text style={{color: 'white', fontSize : 30,}}> Xin chao cac ban tre </Text>
    </View>

  </ImageBackground>

);
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="HomePage" component={AfterLogin} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 0,
    paddingLeft: 50,
    borderRadius: 20,
    backgroundColor: "white",
  },
  btn: {
    width: "70%",
  },
});

export default App;