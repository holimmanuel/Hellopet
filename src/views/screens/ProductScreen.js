import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const ProductScreen = ({navigation}) => {
    return(
      <SafeAreaView style={{ flex:1, backgroundColor:COLORS.white}}>
        <View style={{flexDirection:'column', height:320, backgroundColor: COLORS.primary,}}>
          <Text style={{marginHorizontal:30,marginTop:20, fontSize: 25, fontWeight:'bold', color:COLORS.white}}>
            Product
          </Text>
        </View>
      </SafeAreaView>
    )
    };
 export default ProductScreen;