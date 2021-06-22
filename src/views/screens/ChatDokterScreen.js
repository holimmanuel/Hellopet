import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {FlatList, TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import biodata from '../../consts/biodata';

const ChatDokterScreen = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <ScrollView showsHorizontalScrollIndicator={false}
        contentContainer Style={style.categoriesListContainer}>
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailBiodata', biodata)}>
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 90, width: 90}} />
        <View
          style={{
            height: 100,
            marginLeft: 20,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Rp.{item.price}</Text>
        </View>
            <View style={{marginRight: 10, alignItems: 'center'}}>
              <View style={style.actionBtn}>
              <Text style={{fontWeight: 'bold', fontSize: 20,  textAlign:'center', color: '#FFFFFF'}}>Chat</Text>
              </View>
            </View>
      </View>
      </TouchableHighlight>
      </ScrollView>
    );
  };
    return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Text style={{fontSize: 20, textAlign:'justify', fontWeight: 'bold'}}>Chat Dokter</Text>
      </View>
      <View style={style.inputContainer}>
          <Icon name="search" size={25} />
          <TextInput style={{marginHorizontal: 5,alignContent: 'center', flex: 1, fontSize: 18}}
            placeholder="Search for Dokter"/>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={biodata}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 10, marginTop: 10}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  header: {
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 120,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 8,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 100,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    justifyContent: 'center',

  },
});

export default ChatDokterScreen;
