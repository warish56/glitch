/* eslint-disable react-native/no-inline-styles */
import React, {
  ForwardedRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {View} from 'react-native';
import styles from './style';
import {Typography} from '@common/components/Typography';
import {TextField} from '@common/components/Input/TextField';
import {Gap} from '@common/components/Gap';
import {AppButton} from '@common/components/Button/AppButton';
import {TextButton} from '@common/components/Button/TextButton';
import {THEME} from '@common/theme';
import {TextInput} from 'react-native-gesture-handler';

type inputProps = {
  value: string;
  onChange: (text: string) => void;
  enterKeyHint?: 'next' | 'done';
};
const OtpInput = React.forwardRef(
  (
    {value, onChange, enterKeyHint = 'next'}: inputProps,
    ref: ForwardedRef<{focus: () => void}>,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput | null>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          focus: () => {
            setIsFocused(true);
            inputRef.current?.focus();
          },
        };
      },
      [],
    );

    return (
      <View style={styles.optInput}>
        <TextField
          ref={inputRef}
          caretHidden={true}
          value={value}
          onChangeText={onChange}
          enterKeyHint={enterKeyHint}
          inputMode="numeric"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            fontSize: 50,
            textAlign: 'center',
            borderColor: isFocused ? THEME.colors.activeBorder : 'black',
            borderWidth: isFocused ? 2 : 1,
          }}
        />
      </View>
    );
  },
);

type props = {
  isLoading: boolean;
  onVerify: (otp: string) => void;
};

export const OtpVerification = ({isLoading, onVerify}: props) => {
  const [text, setText] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
  });
  const inputRef1 = useRef({focus: () => {}});
  const inputRef2 = useRef({focus: () => {}});
  const inputRef3 = useRef({focus: () => {}});
  const inputRef4 = useRef({focus: () => {}});
  const inputRef5 = useRef({focus: () => {}});

  const onSubmit = () => {
    onVerify(`${text[0]}${text[1]}${text[2]}${text[3]}${text[4]}`);
  };

  const onChangeText = (newText: string, index: string) => {
    setText(val => ({...val, [index]: newText.charAt(newText.length - 1)}));
    if (newText) {
      switch (index) {
        case '0':
          inputRef2.current?.focus();
          break;
        case '1':
          inputRef3.current?.focus();
          break;
        case '2':
          inputRef4.current?.focus();
          break;
        case '3':
          inputRef5.current?.focus();
          break;
        default:
          return;
      }
    }
  };
  return (
    <View style={styles.content}>
      <Gap gap={10}>
        <View style={styles.heading}>
          <Typography variant="title" size="xl" style={{fontWeight: 700}}>
            Verify OTP
          </Typography>
          <Typography variant="title" size="sm">
            Code is sent to XXXXXXXX34
          </Typography>
        </View>

        <Gap gap={20}>
          <Gap gap={10}>
            <View style={styles.inputArea}>
              <OtpInput
                ref={inputRef1}
                value={text['0'] || ''}
                onChange={newText => onChangeText(newText, '0')}
              />
              <OtpInput
                ref={inputRef2}
                value={text['1'] || ''}
                onChange={newText => onChangeText(newText, '1')}
              />
              <OtpInput
                ref={inputRef3}
                value={text['2'] || ''}
                onChange={newText => onChangeText(newText, '2')}
              />
              <OtpInput
                ref={inputRef4}
                value={text['3'] || ''}
                onChange={newText => onChangeText(newText, '3')}
              />
              <OtpInput
                ref={inputRef5}
                enterKeyHint="done"
                value={text['4'] || ''}
                onChange={newText => onChangeText(newText, '4')}
              />
            </View>
            <View style={styles.retryArea}>
              <Typography variant="body" size="sm">
                Didn't receive code?
              </Typography>
              <TextButton
                title="Try Again"
                textProps={{
                  variant: 'body',
                  size: 'sm',
                }}
              />
            </View>
          </Gap>
          <AppButton onPress={onSubmit} isLoading={isLoading} title="Verify" />
        </Gap>
      </Gap>
    </View>
  );
};
