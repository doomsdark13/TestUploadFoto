import React, {Component} from 'react';
import {Text, View, TextInput, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';

const FoodForm = () => {
  const [imgSource, setImgSource] = React.useState(
    'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
  );
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  //   React.useEffect(() => {
  //     setTimeout(async () => {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'We need your permission',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('You can use the camera');
  //       }
  //     }, 1000);
  //   }, []);

  const handleImagepicker = async () => {
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const source = response.uri;

    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //     setImgSource(source);
    //   }
    // });

    ImagePicker.launchCamera(options, (response) => {
      // Same code as in above section!
      const source = response.uri;
      setImgSource(source);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
      }}>
      <View
        style={{
          height: 500,
          borderColor: 'black',
          borderWidth: 0.5,
          marginBottom: 10,
        }}>
        <Image source={{uri: imgSource}} style={{width: '100%', height: 500}} />
      </View>
      <Button title="pick image" onPress={handleImagepicker} />
    </View>
  );
};

export default FoodForm;
