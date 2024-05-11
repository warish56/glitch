import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './style';
import {tag} from '@common/types/expo';
import {Chip} from '@common/components/Chip';

type props = {
  url: string;
  tags: tag[];
  title: string;
  description: string;
};
export const ExpoCard = ({url, tags, title, description}: props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.tagsContainer}>
          {tags.map(data => {
            return <Chip key={data.id} title={data.title} />;
          })}
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{description}</Text>
        </View>
      </View>
    </View>
  );
};
