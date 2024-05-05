import React, {Fragment} from 'react';
import {layout} from '@common/types/layout';
import {Column} from '../../Column';
import {Row} from '../../Row';
import {ChildRenderer} from '../Child';
import {ScrollView} from 'react-native-gesture-handler';

export const LayoutRendrer = ({data}: {data: layout}) => {
  const {direction, style, children, scrollDirection} = data;
  const Wrapper = scrollDirection ? ScrollView : Fragment;
  if (direction === 'column') {
    return (
      <Wrapper
        horizontal={scrollDirection === 'horizontal'}
        showsHorizontalScrollIndicator={false}>
        <Column style={style}>
          {children.map(childData => {
            if (childData.type === 'layout') {
              return <LayoutRendrer key={childData.id} data={childData} />;
            }
            return <ChildRenderer key={childData.id} data={childData} />;
          })}
        </Column>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      horizontal={scrollDirection === 'horizontal'}
      showsHorizontalScrollIndicator={false}>
      <Row style={style}>
        {children.map(childData => {
          if (childData.type === 'layout') {
            return <LayoutRendrer key={childData.id} data={childData} />;
          }
          return <ChildRenderer key={childData.id} data={childData} />;
        })}
      </Row>
    </Wrapper>
  );
};
