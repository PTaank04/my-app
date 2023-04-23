import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  const handleSearch = async()=>{
    console.log("Presss")
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={{ border: "2px solid black", borderRadius:"4px" , margin:"4px", width:"80%"}}
        placeholder='IP Address'
        onChangeText={newText => setText(newText)}
        value={text}
      />
      <Button 
        title='Search'
        onPress={()=>handleSearch()}
        // style={{borderRadius:"9px"}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
