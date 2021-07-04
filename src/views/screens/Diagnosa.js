import React from 'react';
import {SafeAreaView, View, Text,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const Diagnosa = ({Navigation}) => {
  return(
      <SafeAreaView>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,}}>
        <Icon name="arrow-back-ios" size={28}/>
        <Text style={{
          marginVertical:20, 
          fontSize: 25, 
          fontWeight:'bold', 
          color:COLORS.white}}>
          Diagnosa
        </Text>
        </View>  
      </SafeAreaView>    
  )
};
export default Diagnosa;