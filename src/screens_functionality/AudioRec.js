import React, {Component} from 'react';
import {Recorder} from '@react-native-community/audio-toolkit'

class AudioRec extends Component{

    static #recorder = null;
    static #isRecording=false;
    static #isPaused=false;
  
    constructor(props){
      super(props);
      AudioRec.init();
      console.log("constructor");
    }
  
    static isRecording(){
        return AudioRec.#isRecording;
    }
    static init(){
        AudioPath='/storage/emulated/0/PsyScan/Audio/';
        try{
            require('react-native-fs').mkdir(AudioPath);
            AudioRec.#recorder = new Recorder(AudioPath+new Date().getTime().toString()+'.aac');
            AudioRec.#recorder.prepare((err)=>{
                if(err){
                    console.log(err);
                    AudioRec.#recorder = null;
                }else{
                    console.log("inited");
                }
            });
        }catch(e){
            console.log(e)
        } 
    }
    static start(){
      if(!AudioRec.#isRecording){
        AudioRec.init();
        if(AudioRec.#recorder != null){
          AudioRec.#recorder.record((err)=>{
            if(err){
              console.log(err);
              AudioRec.#recorder = null;
            }else{
              AudioRec.#isRecording=true;
              console.log("start");
            }
          });
        }
      }  
    }
    static stop(){
      if(AudioRec.#isRecording){
        if(AudioRec.#recorder != null){
          AudioRec.#recorder.stop((err)=>{
            if(err){
              console.log(err);
              AudioRec.#recorder = null;
            }else{
              AudioRec.#isRecording=false;
              console.log("stop");
            }
          });
        }
      }
    }
}

export default AudioRec;