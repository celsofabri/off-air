import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {primary, secondary} from './constants';
import {StyledContainer, StyledContainerBig, StyledContainerSmall, StyledBar} from './styled';
import audio from './off-air.mp3';

const App = () => {
  return (
    <StyledContainer>
      <StyledContainerBig>
      {primary.map((color, index) => {

          return(
            <StyledBar key={index} bgColor={color}/>
          )
        })
      }
      </StyledContainerBig>
      <StyledContainerSmall>
        {secondary.map((color, index) => {

          return(
            <StyledBar key={index} bgColor={color}/>
          )
        })
      }
      </StyledContainerSmall>

      <ReactAudioPlayer
        src={audio}
        autoPlay
        controls
        loop="true"
      />
    </StyledContainer>
  );
}

export default App;
