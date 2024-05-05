import {API_ROUTES} from '@common/constants/api';
import {QUERY_KEYS} from '@common/constants/queryKeys';
import {componentsStyleData} from '@common/types/styles';
import {fetchData} from '@common/utils/api';
import {createMockedResponse} from '@common/utils/response';
import {useQuery} from '@tanstack/react-query';

const mockData = {
  data: {
    filterList: {
      wrapper: {
        style: null,
      },
      btn: {
        style: null,
      },
      text: {
        style: null,
      },
    },
    tabsGroup: {
      wrapper: {
        style: null,
      },
      btn: {
        style: null,
      },
      text: {
        style: null,
      },
    },
  },
};

const fetchComponentsStyleData = () => {
  return fetchData(API_ROUTES.componentsStyle(), {method: 'GET'});
};

type props = {
  isMock: boolean;
};

export const useComponentsStyle = ({isMock}: props) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.components],
    staleTime: 1000 * 60 * 5,
    queryFn: () => {
      if (isMock) {
        return createMockedResponse<componentsStyleData>(mockData, 100);
      }
      fetchComponentsStyleData();
    },
  });
  return query;
};
