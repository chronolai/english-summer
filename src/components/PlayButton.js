import React from 'react';
import { FaPlay } from 'react-icons/fa';

import styles from './PlayButton.module.css';

const synth = window.speechSynthesis;

const speak = (msg) => {
  const voices = synth.getVoices();
  const voice = voices.filter(v => v.name === 'Samantha')[0];

  const u = new SpeechSynthesisUtterance();
  u.voice = voice;
  u.text = msg;
  synth.speak(u);
};

function Component(props) {
  return (
    <span onClick={() => speak(props.value)} className={styles.button}>
      {/* <FaPlay /> */}
      {props.value}
    </span>
  );
}

export default Component;