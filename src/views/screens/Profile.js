import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const Profile = ({navigation}) => {
    return(
      <SafeAreaView style={{ flex:1, backgroundColor:COLORS.white}}>
        <View style={{flexDirection:'column', height:320, backgroundColor: COLORS.primary,}}>
          <Text style={{marginHorizontal:30,marginTop:20, fontSize: 25, fontWeight:'bold', color:COLORS.white}}>
            Profile
          </Text>
          <View style={{flex:1.5, justifyContent:'center', alignItems:'center', }}>
            <Image
          source={require('../../assets/person.png')}
          style={{height: 160, width: 160, borderRadius: 50, top:-20}}/>
          </View>
          <View style={{flex:0.3, backgroundColor:'#FFFFFF', borderTopStartRadius:60, borderTopEndRadius:60,}}></View>
        </View>
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row', alignItems: 'center', marginHorizontal:40, paddingTop: 50,}}>
              <Icon name="person" size={30} 
              style={{color:COLORS.primary}} />
              <Text style={{marginHorizontal:5, fontWeight:'bold', fontSize:17, alignItems:'center', color:'#0C1229'}}> Holly Immanuel</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center', marginHorizontal:40, paddingTop: 20,}}>
              <Icon name="phone" size={30} 
              style={{color:COLORS.primary}} />
              <Text style={{marginHorizontal:5, fontWeight:'bold', fontSize:17, alignItems:'center', color:'#0C1229'}}> 0896789534277</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center', marginHorizontal:40, paddingTop: 20,}}>
              <Icon name="mail" size={30} 
              style={{color:COLORS.primary}} />
              <Text style={{marginHorizontal:5, fontWeight:'bold', fontSize:17, alignItems:'center', color:'#0C1229'}}> Holimmanuel@gmail.com</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center', marginHorizontal:40, paddingTop: 20,}}>
              <Icon name="notifications" size={30} 
              style={{color:COLORS.primary}} />
              <Text style={{marginHorizontal:5, fontWeight:'bold', fontSize:17, alignItems:'center', color:'#0C1229'}}> Notifications</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center', marginHorizontal:40, paddingTop: 20,}}>
              <Icon name="settings" size={30} 
              style={{color:COLORS.primary}} />
              <Text style={{marginHorizontal:5, fontWeight:'bold', fontSize:17, alignItems:'center', color:'#0C1229'}}> Settings</Text>
          </View>
        </View>
      </SafeAreaView>
    )
    };
 export default Profile;