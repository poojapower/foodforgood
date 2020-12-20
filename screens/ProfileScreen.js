/* eslint-disable prettier/prettier */

import React,{useEffect,useState} from 'react';
import auth from '@react-native-firebase/auth';
import firebase from "firebase";
import "firebase/firestore";
//import firestore from "firebase/firestore";
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import firebasedb from '../database/firebasedb';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

import files from '../assets/filesBase64';

const ProfileScreen = () => {
   const initialState = {
    name: "",
    email: "",
    phone: "",
  };



  const [user, setUser] = useState(initialState);
   const [order, setOrder] = useState(initialState);
  const [loading, setLoading] = useState(true);
   const getUserDetails = async (id) => {
    const user1= auth().currentUser;
   //  console.log("name"+user1.password);
    setUser({ ...user, name:user1.displayName,email:user1.email,phone:user1.phoneNumber});
   };

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log("Share Response"+JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
   
  };

  const componentMount= async()=>{
 //   console.log(firebasedb.db.collection('users').get());
 
    firebasedb.db
  .collection("orders")
  .get()
  .then((documentSnapshot ) => {
    console.log(' orders exist: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
    }
  });

  };

  
   useEffect(() => {
    getUserDetails('');
    componentMount();
  },[]);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{user.name}</Title>
            <Caption style={styles.caption}>{user.email}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          {/* <Icon name="phone" color="#777777" size={20}/> */}
          <Text style={{color:"#777777", marginLeft: 20}}>{user.phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{user.email}</Text>
        </View>
      </View>

 
             
      <View style={styles.menuWrapper}>
       
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
