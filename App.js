import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native'
import Contacts from './screens/Contacts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from './screens/Profile';
import Routes from './screens/Routes';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import Favorites from './screens/Favorites';
import User from './screens/User';

const App = () => {
  return (
      <Routes/>
  );
}
export default App;
