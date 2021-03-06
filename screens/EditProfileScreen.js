/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TouchableOpacity,  
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';

import {useTheme} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Animated from 'react-native-reanimated';

const EditProfileScreen = (props) => {
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const {colors} = useTheme();
  
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

   const [user, setUser] = useState(initialState);
   const getUserDetails = async (id) => {
    const user1= auth().currentUser;    
    setUser({ ...user, name:user1.displayName,email:user1.email,phone:user1.phoneNumber});
     };
  

   


 const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

const updateUser = async () => {
  setUser(initialState);  
   const update = {
   displayName:user.name,email:user.email,phoneNumber:user.phone,
   };
   update;
  await auth().currentUser.updateProfile(update); 
      Alert.alert("Success ✅", "Updated profile successfully")
  props.navigation.navigate("Home");
  };

  

   

  fall = new Animated.Value(1);

   useEffect(() => {
    getUserDetails('');
  },[]);

  return (
    
    <View style={styles.container}>
      
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
           {user.email}
          </Text>
        </View>

       
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Name"
            value={user.name}
            placeholderTextColor="#666666"
            autoCorrect={false}
             onChangeText={(value) => handleTextChange(value, "name")}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>        
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <Text
            placeholder="Email"
            value={user.email}
           
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
             onChangeText={(value) => handleTextChange(value, "email")}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          >{user.email}</Text>
        </View>
       
        <TouchableOpacity style={styles.commandButton} onPress={() => updateUser()}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};


export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,    
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,    
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
