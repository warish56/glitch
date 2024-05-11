import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {ScreenLoader} from './loading';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabChild, TabsHeader, TabsWrapper} from '@common/components/Tabs';
import {useExpoData} from './hooks/useExpoData';
import {FilterList} from '@common/components/FilterList';
import {ExpoCard} from './ExpoCard';
import styles from './style';

type screenProps = {
  screenName: string;
};

const MyScreen = ({screenName}: screenProps) => {
  const [currentFilter, setCurrentFilter] = useState('');
  const {status, data} = useExpoData({
    category: screenName,
    isMock: true,
    tag: currentFilter,
  });

  const onPress = (id: string) => {
    setCurrentFilter(id);
  };

  if (data && !currentFilter) {
    setCurrentFilter(data.data.tags[0].id);
  }

  if (status === 'pending') {
    return <ScreenLoader />;
  }
  if (status === 'error' || !data) {
    return <Text>Something went wrong</Text>;
  }
  return (
    <View style={styles.content}>
      <View>
        <FilterList
          onPress={onPress}
          active={currentFilter}
          items={data.data.tags}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.scrollContainer}
          data={data.data.list}
          renderItem={({item}) => (
            <ExpoCard
              key={item.id}
              url={item.url}
              tags={item.tags}
              title={item.title}
              description={item.description}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* <LayoutRendrer data={data} /> */}
    </View>
  );
};

const tabsData = [
  {
    id: '1',
    title: 'Exhibitors',
  },
  {
    id: '2',
    title: 'Visitors',
  },
  {
    id: '3',
    title: 'Bookmarked',
  },
];

export const ExpoScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <TabsWrapper defaultId={tabsData[0].id}>
          <TabsHeader tabs={tabsData} />
          <TabChild id={tabsData[0].id}>
            <MyScreen screenName={tabsData[0].title} />
          </TabChild>
          <TabChild id={tabsData[1].id}>
            <MyScreen screenName={tabsData[1].title} />
          </TabChild>
          <TabChild id={tabsData[2].id}>
            <MyScreen screenName={tabsData[2].title} />
          </TabChild>
        </TabsWrapper>
      </View>
    </SafeAreaView>
  );
};
