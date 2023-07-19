import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactMenuBtn=[
  {
    type:"starred",
    name:"Starred"
  },
  {
    type:"contact",
    name:"Sk Jasimuddin",
    photo:require("../assets/photo1.jpg")
  },
  {
    type:"contact",
    name:"Nazia Mani",
    photo:require("../assets/photo2.jpg")
  },
  {
    type:"contact",
    name:"Jemi Lai",
    photo:require("../assets/photo3.jpeg")
  }

]

const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {/* view container */}
      {
        contactMenuBtn.map((item,index)=>(
          <View style={styles.row} key={index}>
          {/* View Images */}
         { item.photo?(<Image style={styles.images} source={item.photo} />):
          <View style={styles.starredIcon}>
           
          <AntDesign name="star" size={35} color="#efefef"/>
  
           
          </View>}
          {/* Text */}
          <Text style={styles.text}>{item.name}</Text>
  
        </View>
        ))
      }
    </View>
  )
}

export default ContactMenu

const styles = StyleSheet.create({
  container:{},
  row:{
    flexDirection:"row",
    marginTop:20,
    alignItems:'center',
    
  },
  images:{
    width:50,
    height:50,
    borderRadius:20
  },
  starredIcon:{
    backgroundColor:"#333333",
    height:55,
    width:55,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:20

  },
  text:{
    color:"#efefef",
    paddingLeft:20,
    fontSize:18
    
  }
})