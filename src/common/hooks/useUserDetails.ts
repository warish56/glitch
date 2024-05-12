import {QUERY_KEYS} from '@common/constants/queryKeys';
import {user} from '@common/types/user';
import {appQueryClient} from '@common/utils/queryClient';
import {useQuery} from '@tanstack/react-query';

export const useUserDetails = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.user],
    staleTime: 1000 * 60 * 20, // 20 min
  });
  const updateUserData = (data: user) => {
    appQueryClient.setQueryData([QUERY_KEYS.user], data);
  };
  return {
    ...query,
    updateUserData,
  };
};
