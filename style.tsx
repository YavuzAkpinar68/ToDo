import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerView_container:{
    justifyContent:"flex-end",
    flex:1,
    backgroundColor:"cadetblue"
  },
  textInputView_container:{
    backgroundColor:"red",
    margin:10,
    borderRadius:15,
    flex:2
  },
  textInput_container:{
    backgroundColor:"gray",
    margin:10,
    borderBottomWidth:1,
    borderColor:"silver"
  },
  
  titleView_container:{
    backgroundColor:"steelblue",
    flexDirection:"row",
    flex:1,
    paddingTop:30,
    paddingLeft:10,
    borderBottomWidth:1,
    borderColor:"silver"
  },
  flatlistView_container:{
    backgroundColor:"steelblue",
    margin:10,
    borderRadius:15,
    flex:9
  },
  touchable_container:{
    paddingVertical:15,
    backgroundColor:"lightblue",
    paddingHorizontal:10,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center",
    margin:10
  },
  title_container:{
    fontSize:30,
    flex:5,
    color:"yellow"
  },
  counter_container:{
    fontSize:30,
    flex:1,
    color:"yellow"
  },
  flatlist_container:{

  },
  flatlistinner_container:{
    margin:5,
    borderRadius:10,
    borderWidth:1,
    backgroundColor:"lightblue"
  },
  flatlistinnerText_container:{
    fontSize:15,
    color:"black",
    textAlign:"center"
  },
  viewToucIndex_container:{
    backgroundColor:"gray",
    margin:10,
    borderRadius:15
  },
  flatlistinnerTextd_container:{
    paddingLeft:10,
    fontSize:15,
    color:"black"
  }
})

export default styles