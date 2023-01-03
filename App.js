// import React, {useState, useEffect} from 'react';
// import type {Node} from 'react';
// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     useColorScheme,
//     View,
//     Image,
//     TouchableOpacity
// } from 'react-native';
//
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
//
// import Direction from './src/components/direction'
// import DirectionCarAnimation from './src/components/directionCarAnimation'
// import DragMarker from './src/components/startScreenSetMyLocation'
// import GoogleMap from './src/components/googlemap'
// import TestDirection from './src/components/testDirection'
// import ReduxExample from './src/components/reduxExample'
// import ReduxExample2 from './src/components/reduxExample2'
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import { Input } from 'react-native-elements';
//
// export default function App() {
//
//
//     // Destination
//
//     return (
//         <Provider store={store}>
//                 {/*<Direction/>*/}
//                 {/*<DirectionCarAnimation/>*/}
//                 {/*<DragMarker/>*/}
//                 {/*<TestDirection/>*/}
//                 {/*<ReduxExample/>*/}
//                 <ReduxExample2/>
//
//                 {/*<GooglePlacesInput/>*/}
//                 {/*<GoogleMap/>*/}
//
//         </Provider>
//
//     );
// };
//
// const styles = StyleSheet.create({
//     page: {
//         height: '100%',
//         width:'100%',
//         flex: 1,
//     },
//     container: {
//         height: '100%',
//         width: '100%',
//     },
//     map: {
//         flex: 1,
//         zIndex: -1
//     },
//
//     first_styles_for_direction_market: {
//         height: 20,
//         width: 20,
//         backgroundColor: 'white',
//         borderRadius: 50,
//         borderColor: 'red',
//         borderWidth: 3,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     center_styles_for_direction_market: {
//         height: 20,
//         width: 20,
//         backgroundColor: 'white',
//         borderRadius: 50,
//         borderColor: 'black',
//         borderWidth: 3,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     last_styles_for_direction_market: {
//         height: 20,
//         width: 20,
//         backgroundColor: 'black',
//         borderRadius: 50,
//         borderColor: 'white',
//         borderWidth: 3,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
// });
//
// // export default App;



import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
  );
};

export default App;
