import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './pages/homepage';
import Checkoutpage from './pages/checkoutpage';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
          <Stack.Screen name="Checkout" component={Checkoutpage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;

