import React, {Component} from 'react';
import {StyleSheet, View, Platform, ImageBackground, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import CustomSlider from '../../components/sliders/CustomSlider';
import Bottom from '../../components/Bottoms/Bottom';
import {Icon} from 'native-base';
import AudioRec from '../../screens_functionality/AudioRec'
//import {useNavigation} from '@react-navigation/native';
//import {AudioRecorder, AudioSource, AudioUtils} from 'react-native-audio';

class AudioAnalysisSecond extends Component {

  /*state = {
    percentage: 70,
  };

  onValueChange(value) {
    this.setState({percentage: value});
  }*/
  state = {
    stateText: "Let's start recording",
  };

  render() {
    //const percentageText = String(this.state.percentage) + ' %';
    const stateText = String(this.state.stateText);
    //const navigation = ()=>{const navigation=useNavigation(); return navigation};

    return (
      <ImageBackground
        source={require('../../assets/images/recording2.jpg')}
        style={styles.image}>
        <Header text={'processing'} />
        <View style={styles.bodyView}>
          <View style={styles.textDescriptionView}>
            <Text style={styles.text}>{I18n.t('tell_us_how_you_feel')}</Text>
          </View>
        </View>
        <View style={styles.sliderView}>
          <View style={styles.buttonsView}>
            <Icon type="Entypo" name="controller-play" style={styles.icon} onPress={()=>{AudioRec.start(), this.setState({stateText: "Recording"})}} />
            <Icon type="Entypo" name="controller-stop" style={styles.icon} onPress={()=>{AudioRec.stop(), this.setState({stateText:"Let's start recording"})}} />
            {/*<Icon type="MaterialIcons" name="navigate-next" style={styles.icon} onPress={()=>{navigation.navigate("AudioAnalysisThirdScreen", {})}} />*/}
            {/*<Icon type="Entypo" name="controller-paus" style={styles.icon} onPress={AudioRec.pause} />
            <Icon type="FontAwesome" name="eject" size={100} style={[styles.icon, {transform: [{rotate: '90deg'}]}]} onPress={AudioRec.resume} />*/}
          </View>
          {/*<CustomSlider
            onValueChange={(value) => this.onValueChange(value)}
            defaultValue={70}
          />*/}
          <View style={styles.bottomView}>
            <Bottom
              text={/*I18n.t('recording') + '  ' + percentageText*/stateText}
              leftScreenName="AudioAnalysisFirstScreen"
              rightScreenName="AudioAnalysisThirdScreen"
              textFontWeight={'400'}
              textFontSize={CONSTANTS.FONT.HEADER_H1_IOS}
            />
          </View>
        </View>
      </ImageBackground>
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
    resizeMode: 'center',
    justifyContent: 'center',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
  },
  textDescriptionView: {
    alignContent: 'center',
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
    bottom: Platform.OS === 'ios' ? 30 : 15,
  },
  bottomView: {
    paddingBottom: 10,
    paddingTop: 30,
  },
  icon: {
    fontSize: Platform.OS === 'ios' ? 30 : 28,
    color: CONSTANTS.COLOR.EASTERN_BLUE,
    paddingHorizontal: 20,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AudioAnalysisSecond;
