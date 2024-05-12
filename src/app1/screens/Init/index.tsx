import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useToken} from '@common/hooks/useToken';
import {RootNavigator} from '@common/types/routes';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import {THEME} from '@common/theme';

export const InitScreen = () => {
  const {token, hasInitialValue} = useToken();
  const navigation = useNavigation<RootNavigator>();

  useEffect(() => {
    if (!hasInitialValue) {
      return;
    }
    if (token) {
      navigation.replace('MAIN', {screen: 'HOME'});
    } else {
      navigation.replace('AUTH', {screen: 'LOGIN'});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, hasInitialValue]);

  return (
    <View style={styles.cont}>
      <ActivityIndicator size="large" color={THEME.colors.primary} />
      <Text>Please wait ...</Text>
    </View>
  );
};
