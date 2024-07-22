import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {FAB} from '@rneui/themed';
import Snackbar from 'react-native-snackbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppwriteContext from '../../appwrite/AppwriteContext';
//context Api
type userObj = {
  name: String;
  email: String;
};

const HomeScene = () => {
  const [userData, setUserData] = useState<userObj>();
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout SuccesFully',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };
  useEffect(() => {
    appwrite.getCurrentUser().then(response => {
      if (response) {
        const user: userObj = {name: response.name, email: response.email};
        setUserData(user);
      }
    });
  }, [appwrite]);

  return (
    <SafeAreaView style={styles.containour}>
      <View style={styles.welComeContiouner}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
            width: 400,
            height: 300,
            cache: 'default',
          }}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          Build Fast. Scale Big. All in One Place
        </Text>
        {userData && (
          <View style={styles.userContiouner}>
            <Text style={styles.userDetiles}>Name:{userData.name}</Text>
            <Text style={styles.userDetiles}>Email:{userData.email}</Text>
          </View>
        )}
      </View>
      <FAB
        placement="right"
        color="#f02e65"
        size="large"
        title={'Logout'}
        icon={{name: 'logout', color: '#FFF'}}
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
};

export default HomeScene;

const styles = StyleSheet.create({
  containour: {flex: 1, backgroundColor: '#0B0D32'},
  welComeContiouner: {
    padding: 12,
    flex: 1,
    alignItems: 'center',
  },
  message: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '500',
  },
  userContiouner: {
    marginTop: 24,
  },
  userDetiles: {
    fontSize: 20,
    color: '#FFF',
  },
});
