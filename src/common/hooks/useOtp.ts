import {API_ROUTES} from '@common/constants/api';
import {fetchData} from '@common/utils/api';
import {useMutation} from '@tanstack/react-query';

const sendOtpApi = (phoneOrEmail: string) => {
  return fetchData(API_ROUTES.loginOtp(), {
    method: 'POST',
    body: JSON.stringify({
      phoneOrEmail,
    }),
  });
};

const verifyOtpApi = (otp: number) => {
  return fetchData(API_ROUTES.verifyOtp(), {
    method: 'POST',
    body: JSON.stringify({
      otp,
    }),
  });
};

export const useOtp = () => {
  const otpMutation = useMutation({
    mutationFn: sendOtpApi,
  });
  const verifyMutation = useMutation({
    mutationFn: verifyOtpApi,
  });

  const sendOtp = (phoneOrEmail: string) => {
    return otpMutation.mutateAsync(phoneOrEmail);
  };

  const verifyOtp = (otp: number) => {
    return verifyMutation.mutateAsync(otp);
  };

  return {
    sendOtp,
    verifyOtp,
    otpMutation,
    verifyMutation,
  };
};
