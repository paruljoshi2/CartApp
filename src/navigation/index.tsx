import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import APP_SCREENS from '../constants/navigators'; // We can also change it to relative paths like @compoents/navigators
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={APP_SCREENS.PRODUCTS_SCREEN} component={Products} />
    <Stack.Screen
      name={APP_SCREENS.PRODUCT_DETAIL_SCREEN}
      component={ProductDetail}
    />
  </Stack.Navigator>
);

const Navigators = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default Navigators;
