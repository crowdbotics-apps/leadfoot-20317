import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen14102287Navigator from '../features/BlankScreen14102287/navigator';
import Settings101970Navigator from '../features/Settings101970/navigator';
import UserProfile101963Navigator from '../features/UserProfile101963/navigator';
import Settings101962Navigator from '../features/Settings101962/navigator';
import Settings101960Navigator from '../features/Settings101960/navigator';
import SignIn2101958Navigator from '../features/SignIn2101958/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen14102287: { screen: BlankScreen14102287Navigator },
Settings101970: { screen: Settings101970Navigator },
UserProfile101963: { screen: UserProfile101963Navigator },
Settings101962: { screen: Settings101962Navigator },
Settings101960: { screen: Settings101960Navigator },
SignIn2101958: { screen: SignIn2101958Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
