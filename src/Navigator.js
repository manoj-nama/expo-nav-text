import React from 'react';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import { Ionicons as Icon } from '@expo/vector-icons';

import Login from './login.screen';
import List from './list.screen';
import Profile from './profile.screen';
import Settings from './settings.screen';

const stackRoutes = {
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  },
};

const profileStack = StackNavigator(stackRoutes, {
  initialRouteName: 'Profile'
});

const routes = {
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => {
        return <Icon name={'ios-key'} color={tintColor} size={22} />
      }
    }
  },
  Profile: {
    screen: profileStack,
    navigationOptions: {
      tabBarLabel: 'User',
      tabBarIcon: ({ tintColor }) => {
        return <Icon name={'ios-person'} color={tintColor} size={22} />
      }
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      tabBarLabel: 'List Page',
      tabBarIcon: ({ tintColor }) => {
        return <Icon name={'md-list'} color={tintColor} size={22} />
      }
    }
  }
};

export default TabNavigator(routes, {
  initialRouteName: 'Login',
  tabBarOptions: {
    activeTintColor: '#d22',
  }
});