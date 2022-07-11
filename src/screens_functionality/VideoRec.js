import React, {Component} from 'react';
import { RNCamera } from 'react-native-camera';

class VideoRec extends Component{
    //takeVideo {"deviceOrientation": 1, "isRecordingInterrupted": true, "uri": "file:///data/user/0/com.psyscan/cache/Camera/1f288fc3-13e0-4c88-b8e6-87a67525a475.mp4", "videoOrientation": 1}
    static #isRecording=false;
    static #saveRecord=false;
    static #videoPath='/storage/emulated/0/PsyScan/Video/';
  
    constructor(props){
      super(props);
      console.log("Video recorder constructor");
    }
  
    static init(){
      require('react-native-fs').mkdir(VideoRec.#videoPath);
    }
    static async start(aCamera, recordOptions, videoScreen){
      if(!VideoRec.#isRecording){
        VideoRec.init();
        if (aCamera) {
          try {
            const promise = videoScreen.camera.recordAsync(recordOptions);
            if (promise) {
              videoScreen.setState({ stateText: "Recording" });
              VideoRec.#isRecording=true;
              console.log("Recording started");
              const data = await promise;
              if(videoScreen){
                videoScreen.setState({ stateText: "Let's start recording" });
              }
              VideoRec.#isRecording=false;
              console.log("Recording stopped");
              console.log("2: "+VideoRec.#saveRecord);
              if(!VideoRec.#saveRecord){
                async ()=>{
                  await require('react-native-fs').unlink(data.uri);
                  VideoRec.#saveRecord=false;
                }
              }else{
                console.log('File saved to path: ', data.uri);
                var slash_ind=String(data.uri).lastIndexOf('/');
                var filename=String(data.uri).substr(slash_ind+1);
                require('react-native-fs').moveFile(data.uri, VideoRec.#videoPath+filename);
                console.log('File moved to path: '+VideoRec.#videoPath+filename);
              }
            }
          } catch (e) {
            console.error(e);
          }
        }
      }  
    }
    static stop(aCamera, saveRecord=false){
      if(VideoRec.#isRecording){
        VideoRec.#saveRecord=saveRecord;
        console.log("1: "+VideoRec.#saveRecord);
        aCamera.stopRecording();
        console.log('Stop button pressed');
      }
    }
}

export default VideoRec;