import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontsto from 'react-native-vector-icons/Fontisto'
const SearchBar = () => {
  return (
    <View style={styles.container}>
   <Fontsto name='search' color={'#858585'} size={20}/>
   <Text style={styles.searchText}>Search</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({

  container:{
backgroundColor:'#333333',
flexDirection:'row',
paddingHorizontal:10,
borderRadius:10,
height:30,
alignItems:'center',

  },
  searchText:{
    color:'#858585',
    paddingLeft:10,
    fontSize:20
  }
  
})