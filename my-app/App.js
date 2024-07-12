import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Homepage from './pages/homepage';
import Checkoutpage from './pages/checkoutpage';
import Detailpage from './pages/detailpage';
import DrawerNavigator from './components/DrawerNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkoutpage} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detailpage} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;

