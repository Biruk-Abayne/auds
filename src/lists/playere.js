import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";
import { Mzr } from "./mzr";

function Playere() {
  const audioElem = useRef(null);
  const clickRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(Mzr[0]);

  const Pl = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const Plr = styled.div`
    width: 70%;
    height: 160px;
    border-radius: 3px;
    margin: 90px;
    background: black;
    color: white;
    display: flex;
  `;

  const Playsec = styled.section`
    margin-left: 20%;
    display: flex;
    position: absolute;
    background: transparent;
    margin-top: 95px;
    height: 39px;
  `;

  const Pik = styled.div`
    width: ${currentSong.progress + "%"};
    margin: 0px;
    position: relative;

    border-radius: 6px;
    background: green;

    &:hover {
      cursor: pointer;
    }
  `;
  const Kip = styled.div`
    width: 60%;
    display: flex;
    position: absolute;
    margin-top: 50px;
    margin-left: 20px;
    height: 14px;
    border-radius: 6px;
    background: white;
    &:hover {
      cursor: pointer;
    }
  `;

  const Previous = styled.button`
    width: 60px;
    background: #272;
    font-size: 23px;
    color: violet;
    border: 1px, black;
    border-radius: 5px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  `;

  const Play = styled.button`
    width: 60px;
    background: #272;
    margin-left: 35px;
    font-size: 23px;
    color: violet;
    border: 1px, black;
    border-radius: 5px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  `;
  const Pause = styled.button`
    width: 60px;
    background: #272;
    margin-left: 35px;
    font-size: 23px;
    color: violet;
    border: 1px, black;
    border-radius: 5px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  `;

  const Next = styled.button`
    width: 60px;
    background: #272;
    margin-left: 35px;
    font-size: 23px;
    color: violet;
    background: green;
    border: 1px, black;
    border-radius: 5px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  `;

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    console.log(duration, ct);
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = Mzr.findIndex((x) => x.id === currentSong.id);
    if (index === 0) {
      setCurrentSong(Mzr[Mzr.length - 1]);
    } else {
      setCurrentSong(Mzr[index - 1]);
    }

    audioElem.current.currentTime = 0;
  };
  const skipNext = () => {
    const index = Mzr.findIndex((x) => x.id === currentSong.id);
    if (index === Mzr.length - 1) {
      setCurrentSong(index === 0);
    } else {
      setCurrentSong(Mzr[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div>
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />

      <Plr>
        <Kip onClick={checkWidth} ref={clickRef}>
          <Pik min="0" max="100"></Pik>
        </Kip>
        <Playsec>
          {" "}
          <Previous onClick={skipBack}>Prev</Previous>
          {isPlaying ? (
            <Pause onClick={Pl}>pau</Pause>
          ) : (
            <Play onClick={Pl}>play</Play>
          )}
          <Next onClick={skipNext}>Next</Next>
        </Playsec>
      </Plr>
    </div>
  );
}

export default Playere;
