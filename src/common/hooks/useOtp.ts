import {API_ROUTES} from '@common/constants/api';
import {loginResponse, otpResponse} from '@common/types/api';
import {fetchData} from '@common/utils/api';
import {convertJsonToFormData, extractPhoneOrEmail} from '@common/utils/helper';
import {useMutation} from '@tanstack/react-query';
import {Platform} from 'react-native';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';
import {useUserDetails} from './useUserDetails';
import {useToken} from './useToken';
import {useMutationError} from './useMutationError';

type verifyProps = {
  phoneOrEmail: string;
  otp: number;
  fcm_token: string;
  platform: string;
  device_model: string;
  uuid: string;
};

const sendOtpApi = (phoneOrEmail: string) => {
  const {email, phone} = extractPhoneOrEmail(phoneOrEmail);
  const data = {
    ...(email ? {email} : {}),
    ...(phone ? {phone} : {}),
    custom_app_id: Config.CUSTOM_APP1_ID,
  };
  return fetchData<otpResponse>(API_ROUTES.sendOtp(), {
    method: 'POST',
    body: convertJsonToFormData('verification', data),
  });
};

const verifyOtpApi = ({
  phoneOrEmail,
  otp,
  fcm_token,
  platform,
  device_model,
  uuid,
}: verifyProps) => {
  const data = {
    email_or_mobile: phoneOrEmail,
    fcm_token,
    platform,
    device_model,
    uuid,
    verification_code: otp,
  };
  return fetchData<loginResponse>(API_ROUTES.login(), {
    method: 'POST',
    body: convertJsonToFormData('login', data),
  });
};

export const useOtp = () => {
  const {onError} = useMutationError();
  const {updateUserData} = useUserDetails();
  const {setToken} = useToken();
  const otpMutation = useMutation({
    mutationFn: sendOtpApi,
    onError,
  });
  const verifyMutation = useMutation({
    mutationFn: verifyOtpApi,
    onError,
  });

  const sendOtp = (phoneOrEmail: string) => {
    return otpMutation.mutateAsync(phoneOrEmail);
  };

  const verifyOtp = async (
    data: Omit<verifyProps, 'device_model' | 'uuid' | 'fcm_token' | 'platform'>,
  ) => {
    const uniqueId = await DeviceInfo.getUniqueId();
    const model = DeviceInfo.getDeviceId();
    return verifyMutation
      .mutateAsync({
        ...data,
        device_model: model,
        uuid: uniqueId,
        fcm_token: uniqueId,
        platform: Platform.OS,
      })
      .then(response => {
        setToken(response.meta.token || '');
        updateUserData(response.data.attributes);
      });
  };

  return {
    sendOtp,
    verifyOtp,
    otpMutation,
    verifyMutation,
  };
};
