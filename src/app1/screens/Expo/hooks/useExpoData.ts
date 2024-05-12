import {API_ROUTES} from '@common/constants/api';
import {QUERY_KEYS} from '@common/constants/queryKeys';
import {expo} from '@common/types/expo';
import {serverResponse} from '@common/types/response';
import {fetchData} from '@common/utils/api';
import {createMockedResponse} from '@common/utils/response';
import {useQuery} from '@tanstack/react-query';

const imageUrl =
  'https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg?t=st=1714817866~exp=1714821466~hmac=8b9f5f559437f5fe5fa171774e89ac76ac3eff15d1b5598849207521f37227b7&w=1800';

const mockData = {
  status: 200,
  meta: {
    message: 'OK',
  },
  data: {
    tags: [
      {id: '1', title: 'Type A Exhibitor'},
      {id: '2', title: 'Category B'},
      {id: '3', title: 'Type D Exhibitor'},
    ],
    list: [
      {
        id: 'a',
        url: imageUrl,
        tags: [
          {id: '1', title: 'Type A Exhibitor'},
          {id: '2', title: 'Category D'},
        ],
        title: 'Exhibitor Name 1',
        description: 'This is a brief description within 50 words',
      },

      {
        id: 'b',
        url: imageUrl,
        tags: [
          {id: '1', title: 'Type A Exhibitor'},
          {id: '2', title: 'Category D'},
        ],
        title: 'Exhibitor Name 1',
        description: 'This is a brief description within 50 words',
      },

      {
        id: 'c',
        url: imageUrl,
        tags: [
          {id: '1', title: 'Type A Exhibitor'},
          {id: '2', title: 'Category D'},
        ],
        title: 'Exhibitor Name 1',
        description: 'This is a brief description within 50 words',
      },

      {
        id: 'd',
        url: imageUrl,
        tags: [
          {id: '1', title: 'Type A Exhibitor'},
          {id: '2', title: 'Category D'},
        ],
        title: 'Exhibitor Name 1',
        description: 'This is a brief description within 50 words',
      },
    ],
  },
};

const fetchExpoData = (category: string, tag: string) => {
  return fetchData(API_ROUTES.expo(category, tag), {method: 'GET'});
};

type props = {
  isMock: boolean;
  category: string;
  tag: string;
};

export const useExpoData = ({category, tag, isMock}: props) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.components, category, tag],
    staleTime: 0,
    queryFn: () => {
      if (isMock) {
        return createMockedResponse<serverResponse<expo>>(mockData, 100);
      }
      fetchExpoData(category, tag);
    },
  });
  return query;
};
