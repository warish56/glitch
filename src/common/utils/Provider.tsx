import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

type props = {
  children: React.ReactNode;
};
export const AppProvider = ({children}: props) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
