import {API_ROUTES} from '@common/constants/api';
import {QUERY_KEYS} from '@common/constants/queryKeys';
import {
  button,
  chip,
  image,
  layout,
  tab,
  tabs,
  text,
} from '@common/types/layout';
import {fetchData} from '@common/utils/api';
import {createMockedResponse} from '@common/utils/response';
import {useQuery} from '@tanstack/react-query';

type props = {
  screenName: string;
  isMock: boolean;
};

const createLayout = ({
  id,
  direction,
  style,
  children,
  type,
  scrollDirection,
}: layout) => {
  return {
    id,
    type,
    direction,
    style,
    children,
    scrollDirection,
  };
};

const createImage = (id: string, url: string): image => ({
  id,
  type: 'image',
  style: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  url,
});

const createTab = (id: string, title: string): tab => {
  return {
    id,
    style: {
      padding: 15,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    textStyle: {
      fontSize: 16,
      color: 'black',
    },
    title,
    activeStyle: {
      borderBottomColor: 'green',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
    },
  };
};

const createTabs = (id: string): tabs => ({
  id,
  type: 'tabs',
  style: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'cornsilk',
  },
  defaultSelectedTabId: 'ex_1',
  list: [
    createTab('ex_1', 'Exhibitors'),
    createTab('ex_2', 'Visitors'),
    createTab('ex_3', 'Boomarked'),
  ],
});

const createText = (id: string, title: string, size: number): text => ({
  id,
  type: 'text',
  title,
  style: {
    fontSize: size,
    color: 'black',
  },
});

const createCardContentChip = (id: string, title: string): chip => ({
  id,
  title,
  type: 'chip',
  style: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
    paddingBottom: 8,
    width: 'auto',
    objectFit: 'cover',
    borderRadius: 8,
    backgroundColor: 'plum',
  },
  textStyle: {
    fontSize: 12,
    color: 'black',
  },
});

const createCardImageLayout = (id: string, imageUrl: string) =>
  createLayout({
    id,
    direction: 'row',
    style: {
      flexBasis: '30%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    children: [createImage(`${id}_image`, imageUrl)],
    type: 'layout',
  });

const createCardContentTagsLayout = (id: string) =>
  createLayout({
    id,
    type: 'layout',
    direction: 'row',
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
    },
    children: [
      createCardContentChip(`${id}_card_content_chip_a`, 'Type A exhibitor'),
      createCardContentChip(`${id}_card_content_chip_b`, 'Category D'),
    ],
  });

const createCardContentTextLayout = (id: string) =>
  createLayout({
    id,
    type: 'layout',
    direction: 'column',
    style: {
      display: 'flex',
      gap: 5,
      padding: 8,
    },
    children: [
      createText(`${id}_card_content_text_a`, 'Exhibitor Name 1', 22),
      createText(`${id}_card_content_text_b`, 'info 1', 16),
      createText(`${id}_card_content_text_c`, 'info 2', 16),
      createText(`${id}_card_content_text_d`, 'info 3', 16),
      createText(
        `${id}_card_content_text_e`,
        'This is a brief description',
        16,
      ),
    ],
  });

const createCardContent = (id: string) =>
  createLayout({
    id,
    type: 'layout',
    direction: 'column',
    style: {
      flexGrow: 1,
      backgroundColor: 'white',
      padding: 10,
      gap: 10,
      display: 'flex',
    },
    children: [
      createCardContentTagsLayout(`${id}_content_tags`),
      createCardContentTextLayout(`${id}_content_text`),
    ],
  });

const createCard = (id: string) =>
  createLayout({
    id,
    direction: 'row',
    style: {
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      marginRight: 50,
    },
    children: [
      createCardImageLayout(
        `${id}_card_img`,
        'https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg?t=st=1714817866~exp=1714821466~hmac=8b9f5f559437f5fe5fa171774e89ac76ac3eff15d1b5598849207521f37227b7&w=1800',
      ),
      createCardContent(`${id}_card_content`),
    ],
    type: 'layout',
  });

const createTag = (id: string, title: string): button => ({
  id,
  type: 'button',
  title,
  textStyle: {
    color: 'white',
  },
  style: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'peru',
  },
});

const tagsList = createLayout({
  id: 'tags_list',
  type: 'layout',
  direction: 'row',
  style: {
    backgroundColor: 'mistyrose',
    gap: 10,
  },
  scrollDirection: 'horizontal',
  children: [
    createTag('tag_a', 'Type A Exhibitor'),
    createTag('tag_b', 'Category B'),
    createTag('tag_c', 'Type C Exhibitor'),
    createTag('tag_d', 'Category B'),
  ],
});

const CardsList = createLayout({
  id: 'content_container_cards_list',
  type: 'layout',
  direction: 'column',
  style: {
    gap: 10,
  },
  //   scrollDirection: 'horizontal',
  children: [
    createCard('a'),
    createCard('b'),
    createCard('c'),
    createCard('d'),
    createCard('e'),
    createCard('f'),
  ],
});

const contentContainer = createLayout({
  id: 'content_container',
  type: 'layout',
  direction: 'column',
  style: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'antiquewhite',
    gap: 10,
    padding: 10,
  },
  scrollDirection: 'vertical',
  children: [tagsList, CardsList],
});

const tabsList = createLayout({
  id: 'tabs_list',
  type: 'layout',
  direction: 'row',
  style: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
    gap: 10,
  },
  children: [createTabs('screen_1')],
});

const mockData = createLayout({
  id: 'main_layout',
  type: 'layout',
  direction: 'column',
  style: {},
  children: [tabsList, contentContainer],
});

const fetchScreenData = (screenName: string) => {
  return fetchData(API_ROUTES.screen(screenName), {method: 'GET'});
};

export const useScreenData = ({screenName, isMock}: props) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.screen, screenName],
    staleTime: 0,
    queryFn: () => {
      if (isMock) {
        return createMockedResponse(mockData, 100);
      }
      fetchScreenData(screenName);
    },
  });
  return query;
};
