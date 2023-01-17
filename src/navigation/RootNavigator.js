import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
// import Home from '../screens/Home/Home';
// import SetToAddress from "../screens/SetToAddress/SetToAddress";
// import DirectionChooseTariffs from "../screens/DirectionChooseTariffs/Index";
// import SetFromAddress from "../screens/SetFromAddress/SetFromAddress";


import HomeComponent from '../components/MainComponents/Home/HomeComponent';
import SearchComponent from "../components/MainComponents/Search/SearchComponent";
import SingleAdsComponent from "../components/MainComponents/SingleAds/SingleAdsComponent";
import FavoritesComponent from "../components/MainComponents/Favorites/FavoritesComponent";
import AuthComponent from "../components/Auth/AuthComponent";
import CatalogSelectMarkComponent from "../components/MainComponents/Catalog/CatalogSelectMark/CatalogSelectMarkComponent";
import CatalogSelectModelComponent from "../components/MainComponents/Catalog/CatalogSelectModel/CatalogSelectModelComponent";
import CatalogSelectPakaleniComponent from "../components/MainComponents/Catalog/CatalogSelectPakaleni/CatalogSelectPakaleniComponent";
import CatalogSelectModifikaciaComponent from "../components/MainComponents/Catalog/CatalogSelectModifikacia/CatalogSelectModifikaciaComponent";
import CatalogSelectKomplektaciaComponent from "../components/MainComponents/Catalog/CatalogSelectKomplektacia/CatalogSelectKomplektaciaComponent";
import CatalogSelectDone from '../components/MainComponents/Catalog/CatalogSelectDone/CatalogSelectDone'
import JournalPage from '../components/MainComponents/Journal/JournalPage'
import JournalSinglePage from '../components/MainComponents/Journal/JournalSinglePage/JournalSinglePage'
import JournalThemes from '../components/MainComponents/Journal/JournalThemes/JournalThems'
import JournalMarks from '../components/MainComponents/Journal/JournalMarks/JournalMarks'
import CompanyScreen from '../components/MainComponents/Company/CompanyScreen'
import CompanyFilter from '../components/MainComponents/Company/CompanyFilter/CompanyFilter'
import CompanyMap from '../components/MainComponents/Company/CompanyMap/CompanyMap'
import AboutCompany from '../components/MainComponents/Company/AboutCompany/AboutCompany'
import MyProfile from '../components/MainComponents/Profile/ProfileScreen'
import OurServices from '../components/MainComponents/Company/OurServices/OurServices'
import MyAnnouncements from '../components/MainComponents/Profile/MyAnnouncements/MyAnnouncements'
import WalletScreen from '../components/MainComponents/Profile/Wallet/Wallet'


// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarOptions = {
    showLabel: false,
    activeTintColor: '#9381ff',
    style: {
        height: '10%',
    },
    headerShown: false,
};


const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='HomeComponent'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="HomeComponent"
                    component={HomeComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />

                <Stack.Screen
                    name="AuthComponent"
                    component={AuthComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />



                <Stack.Screen
                    name="SearchComponent"
                    component={SearchComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />

                <Stack.Screen
                    name="SingleAdsComponent"
                    component={SingleAdsComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />

                <Stack.Screen
                    name="FavoritesComponent"
                    component={FavoritesComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />

                <Stack.Screen
                    name="CatalogSelectMarkComponent"
                    component={CatalogSelectMarkComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />


                <Stack.Screen
                    name="CatalogSelectModelComponent"
                    component={CatalogSelectModelComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />


                <Stack.Screen
                    name="CatalogSelectPakaleniComponent"
                    component={CatalogSelectPakaleniComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />


                <Stack.Screen
                    name="CatalogSelectModifikaciaComponent"
                    component={CatalogSelectModifikaciaComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />


                <Stack.Screen
                    name="CatalogSelectKomplektaciaComponent"
                    component={CatalogSelectKomplektaciaComponent}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />

                <Stack.Screen
                    name="CatalogSelectDone"
                    component={CatalogSelectDone}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name="JournalPage"
                    component={JournalPage}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name="JournalSinglePage"
                    component={JournalSinglePage}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name="JournalThemes"
                    component={JournalThemes}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name="JournalMarks"
                    component={JournalMarks}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name="CompanyScreen"
                    component={CompanyScreen}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name="CompanyFilter"
                    component={CompanyFilter}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name='CompanyMap'
                    component={CompanyMap}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name='AboutCompany'
                    component={AboutCompany}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />

                <Stack.Screen
                    name='MyProfile'
                    component={MyProfile}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />

                <Stack.Screen
                    name='MyAnnouncements'
                    component={MyAnnouncements}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name='OurServices'
                    component={OurServices}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name='WalletScreen'
                    component={WalletScreen}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
