import React, {Component} from 'react';
import {StyleSheet, View, Platform, ImageBackground, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/Headers/Header';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import CustomSlider from '../../components/sliders/CustomSlider';
import Bottom from '../../components/Bottoms/Bottom';
import {Icon} from 'native-base';
import { RNCamera } from 'react-native-camera';
import VideoRec from '../../screens_functionality/VideoRec'

class VideoAnalysisSecond extends Component {
  
  state = {
    stateText: "Let's start recording",
  };

  render() {
    const stateText = String(this.state.stateText);
    
    const startRecord = () => {
      VideoRec.start(this.camera, this.state.recordOptions, this);
    };

    const stopRecord = () => {
      VideoRec.stop(this.camera, true);
    };

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}    
        />
        <Header text={'processing'} />
        <View style={styles.sliderView}>
          <View style={styles.buttonsView}>
            <Icon type="Entypo" name="controller-play" style={styles.icon} onPress={startRecord}/>
            <Icon type="Entypo" name="controller-stop" style={styles.icon} onPress={stopRecord}/>
          </View>
          <View style={styles.bottomView}>
            <Bottom
              text={/*I18n.t('complete') + '  ' + percentageText*/stateText}
              leftScreenName="VideoAnalysisFirstScreen"
              rightScreenName="VideoAnalysisResultScreen"
              textFontWeight={'400'}
              textFontSize={CONSTANTS.FONT.HEADER_H1_IOS}
              textColor={CONSTANTS.COLOR.BLACK}
            />
          </View>
        </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c5980',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
  },
  textView: {
    justifyContent: 'center',
    width: 200,
    paddingBottom: Platform.OS === 'ios' ? '100%' : '80%',
  },
  textInstruction: {
    color: CONSTANTS.COLOR.MATISSE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    fontSize: Platform.OS === 'ios' ? 30 : 28,
    color: CONSTANTS.COLOR.EASTERN_BLUE,
    paddingHorizontal: 20,
  },
  text: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_SIZE_ANDROID,
  },
  sliderView: {
    width: '100%',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 5,
  },
  bottomView: {
    paddingBottom: 10,
    paddingTop: 30,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default VideoAnalysisSecond;
