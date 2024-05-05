import React from 'react';
import {button, image, chip, text, tabs} from '@common/types/layout';
import {Button} from '@common/components/Button';
import {Image, Text} from 'react-native';
import {Chip} from '@common/components/Chip';

type props = {
  data: button | image | chip | text | tabs;
};
export const ChildRenderer = ({data}: props) => {
  const {type} = data;

  switch (type) {
    case 'button': {
      const {textStyle, title, style} = data;
      return <Button textStyle={textStyle} title={title} style={style} />;
    }
    case 'text': {
      const {title, style} = data;
      return <Text style={style}>{title}</Text>;
    }
    case 'chip': {
      const {title, style, textStyle} = data;
      return <Chip title={title} style={style} textStyle={textStyle} />;
    }
    case 'image': {
      const {url, style} = data;
      return <Image style={style} source={{uri: url}} />;
    }
    // case 'tabs': {
    //     const { list, style, defaultSelectedTabId, id } = data;
    //     return <Tabs type='tabs' id={id} style={style} list={list} defaultSelectedTabId={defaultSelectedTabId} />
    // }
    default:
      return null;
  }
};
