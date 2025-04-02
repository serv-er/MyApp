/**
 * @format
 */
import 'react-native-gesture-handler';
 import 'react-native-reanimated';
import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { enableScreens } from 'react-native-screens';

enableScreens();

AppRegistry.registerComponent(appName, () => App);