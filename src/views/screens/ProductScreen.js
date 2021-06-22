import React from 'react';
import {
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const ProductScreen = ({navigation}) => {
    return(
      <ScrollView>
      <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
        <View style={{flexDirection: "row",}}>
          <Text style={{marginHorizontal:30,marginTop:20, fontSize: 25, fontWeight:'bold', color:COLORS.white}}>
            Product
          </Text>
          <TouchableOpacity style={{flex :1, alignItems:'flex-end', marginVertical: 20, marginHorizontal: 20,}} >
            <Icon name="local-grocery-store" size={30}/>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, height: 50, borderRadius: 10, flexDirection: 'row', backgroundColor: COLORS.light, alignItems: 'center', paddingHorizontal: 20,}}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for Produk"
          />
        </View>
          <View style={{marginVertical:20, marginHorizontal:47 ,}}>
          <Text style={{fontSize: 20, }}>
            Produk Baru
          </Text>
        </View>
        <View>

        </View>
      </SafeAreaView>
      </ScrollView>
    )
    };
    const style = StyleSheet.create({
    categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    },
    });
 export default ProductScreen;