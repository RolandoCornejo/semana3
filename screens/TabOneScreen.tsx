import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const [text1,setText1]=useState('');
  const [text2,setText2]=useState('');
  const [resultado,setResultado]=useState('')

  function sumar (text1:any,text2:any){
    setResultado(`${text1}+${text2}=${parseFloat(text1)+parseFloat(text2)}`)
  }
  function restar (text1:any,text2:any){
    setResultado(`${text1}-${text2}=${parseFloat(text1)-parseFloat(text2)}`)
  }
  function multiplicar (text1:any,text2:any){
    setResultado(`${text1}*${text2}=${parseFloat(text1)*parseFloat(text2)}`)
  }
  function dividir (text1:any,text2:any){

    (text2!='0')?setResultado(`${text1}/${text2}=${parseFloat(text1)/parseFloat(text2)}`):setResultado(`Revice los numeros ingresados`)

    
  }

  return (
    <View style={styles.container}>
      <Text style={{padding:15,fontSize:24,backgroundColor:'orange'}}>Suma de dos numeros</Text>
      <TextInput style={{padding:5,height:40, borderColor:'blue',borderWidth:2,marginTop:10}} placeholder='Valor 1' keyboardType='numeric' onChange={(e)=>setText1(e.nativeEvent.text)}/>
      <TextInput style={{padding:5,height:40, borderColor:'blue',borderWidth:2,marginTop:10}} placeholder='Valor 1' keyboardType='numeric' onChange={(e)=>setText2(e.nativeEvent.text)}/>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{height:45, padding:5 ,backgroundColor:'blue',margin:5,}} onPress={()=>sumar(text1,text2)}>
        <Text style={{fontSize:24,color:'white',}}>Sumar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:45, padding:5,backgroundColor:'blue',margin:5,}} onPress={()=>restar(text1,text2)}>
        <Text style={{fontSize:24,color:'white',}}>Restar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:45, padding:5,backgroundColor:'blue',margin:5,}} onPress={()=>multiplicar(text1,text2)}>
        <Text style={{fontSize:24,color:'white',}}>Multiplicar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:45, padding:5,backgroundColor:'blue',margin:5,}} onPress={()=>dividir(text1,text2)}>
        <Text style={{fontSize:24,color:'white',}}>Dividir</Text>
      </TouchableOpacity>
      </View>
      
      
      <Text style={{fontSize:25,marginTop:10}}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
