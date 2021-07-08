import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/HomeStack'
import auth from './firebase/ApiKeys'
import RootNav from './routes/rootStack'

export default function App({navigation}) {
  const [isAuth,setisAuth] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(onAuthStateChanged);
  },[])

  function onAuthStateChanged(user){
    setisAuth(!!user)
  }
  return (
      // <Navigator/>
      <View style={styles.container}>
        { (isAuth === false) ? <Navigator/> : <RootNav/>}    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
