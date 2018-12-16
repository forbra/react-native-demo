import { Navigation} from 'react-native-navigation';

import MainScreen from './screens/Main';
import DetailScreen from './screens/Detail';

//Register Screens
Navigation.registerComponent("app.MainScreen", () => MainScreen);
Navigation.registerComponent("app.DetailScreen", () => DetailScreen);

//Start app for navigation
Navigation.startSingleScreenApp({
  screen: {
    screen: "app.MainScreen",
    title: "Company Revenue",
    animated: true
  }
});