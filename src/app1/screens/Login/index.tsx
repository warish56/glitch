import React, {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {KeyboardWrapper} from '@common/components/KeyboardWrapper';
import {PhoneOrEmail} from './PhoneOrEmail';
import styles from './style';
import {OtpVerification} from './Verification';
import {useOtp} from '@common/hooks/useOtp';
import {useNavigation} from '@react-navigation/native';
import {RootNavigator} from '@common/types/routes';

const backImge =
  'https://img.freepik.com/free-vector/minimal-mobile-wallpaper-background-vector_53876-136599.jpg?w=740&t=st=1715415186~exp=1715415786~hmac=c33d9a6434305f35c0ba57f4a34a0c89e67128ccaf57489df10ffdf2b0ad6544';

export const LoginScreen = () => {
  const [otpVisible, setOtpVisible] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const {sendOtp, otpMutation, verifyMutation, verifyOtp} = useOtp();
  const {navigate} = useNavigation<RootNavigator>();

  const onSendOtp = () => {
    sendOtp(phoneOrEmail).then(() => {
      setOtpVisible(true);
    });
  };

  const onVerifyOtp = (otp: string) => {
    verifyOtp({
      otp: Number(otp),
      phoneOrEmail: phoneOrEmail,
    }).then(() => {
      setTimeout(() => {
        navigate('MAIN', {screen: 'HOME'});
      }, 1000);
    });
  };

  return (
    <KeyboardWrapper>
      <ImageBackground
        style={styles.backgroundImg}
        resizeMode="cover"
        source={{
          uri: backImge,
        }}>
        <View style={styles.container}>
          {otpVisible ? (
            <OtpVerification
              onVerify={onVerifyOtp}
              isLoading={verifyMutation.isPending}
            />
          ) : (
            <PhoneOrEmail
              isLoading={otpMutation.isPending}
              value={phoneOrEmail}
              onChange={val => setPhoneOrEmail(val)}
              onSubmit={onSendOtp}
            />
          )}
        </View>
      </ImageBackground>
    </KeyboardWrapper>
  );
};
