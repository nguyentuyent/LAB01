import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import ProductList from './index';


export default function App() {
  
  const [showStatus, setshowStatus] = useState(true);
  return (


    <View style={styles.container}>
     
      

      <Text style={styles.text}>Ho Va Ten: Nguyen trong tuyen</Text>
      <Text style={styles.text}>Ma Sinh Vien: PH25940</Text>
      <Button title={'Them moi'}
              onPress={()=> setshowStatus(!showStatus)}
      ></Button>
      {
        showStatus
         ? 
         <>
         

      <TextInput id='name' style={styles.input} placeholder="Nhap ho ten"></TextInput>
      <TextInput id='msv' style={styles.input} placeholder="MSV"></TextInput>
      <TextInput id='link' style={styles.input} placeholder="Link"></TextInput>

               <Button title='Luu'></Button>
               <Button title='Huy'
              onPress={()=> setshowStatus(!showStatus)}></Button> 
              {
                showStatus
                ?
                <>
                <ProductList />
                </>
                  : null
              }
              
            
              
     

      
      </>
        
         : null   
      }
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
  text:{
    color: "red",
    fontStyle:"italic",
    fontWeight:"bold",
    fontSize: 18,
  },
  input:{
    borderWidth: 0.6,
    margin: 5,
    height: 25,
    width: 300,
  }
});
