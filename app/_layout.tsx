import { Stack } from "expo-router";


export default function Layout(){
  return(
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="login" options={{headerShown: false}} />
      <Stack.Screen name="createAccount" options={{headerShown:false}}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
     
    </Stack>
  );
}