import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Songs from "./Songs";
import {
  letCurrentSong,
  setCurrentSongUrl,
  setbwidth,
} from "../features/audiosSlice";
import { ImPause2 } from "react-icons/im";
import { GrPlayFill } from "react-icons/gr";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { css } from "@emotion/react";

import { FaVolumeUp } from "react-icons/fa";
import { HiVolumeOff } from "react-icons/hi";
import { ImVolumeLow } from "react-icons/im";

function Playere() {
  const audioElem = useRef(null);
  const clickRef = useRef();
  const currentSong = useSelector((state) => state.audios.currentSong);
  const dispatch = useDispatch();
  const currentSongUrl = useSelector((state) => state.audios.currentSongUrl);
  const audios = useSelector((state) => state.audios.audios);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(10);
  const [muteVolume, setMuteVolume] = useState(false);

  const bwidth = useSelector((state) => state.audios.bwidth);

  const Plr = styled.div`
    width: 70%;
    height: 160px;
    border-radius: 3px;
    margin-top: 100px;
    margin-left: 76px;
    background: black;
    color: white;
    display: flex;
    @media (min-width: 721px) and (max-width: 1533px) {
      width: 90%;
      margin-top: 30px;
    }

    @media (max-width: 720px) {
      display: flex;
      margin-left: 60px;
      hight: 70px;
      width: 360px;
      margin-top: 1px;
      position: fixed;
      margin-top: 3px;
      position: relative;
      top: -193px;
    }
  `;

  const Pik = styled.div`
    width: ${bwidth}%;
    margin: 0px;
    position: relative;

    background: green;

    &:hover {
      cursor: pointer;
    }
    @media (max-width: 720px) {
      height: 8px;
    }
  `;

  const Playsec = styled.section`
    margin-left: 20%;
    display: flex;
    position: absolute;
    background: transparent;
    margin-top: 95px;
    height: 39px;
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
    @media (min-width: 721px) and (max-width: 1533px) {
      width: 80%;
    }

    @media (max-width: 720px) {
      height: 8px;
      width: 300px;
    }
  `;
  const Next = styled.button`
    width: 50px;
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

  const Pause = styled.button`
    width: 50px;
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
  const Play = styled.button`
    width: 50px;
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
  const Previous = styled.button`
    width: 50px;
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
  const Vb = styled.input`
    height: 5px;

    @media (max-width: 750px) {
      width: 90px;
    }
  `;
  const Vd = styled.div`
    margin-left: 50px;
    @media (max-width: 750px) {
      margin-top: -90px;
      margin-left: -70px;
    }
  `;
  useEffect(() => {
    dispatch(letCurrentSong(audios.targete));
  }, [audios.targete, dispatch]);

  const Pl = (e) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = (e) => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    const br = (ct / duration) * 100;

    dispatch(setbwidth(br));

    dispatch(
      letCurrentSong({
        ...currentSong,
        progress: (ct / duration) * 100,
        length: duration,
      })
    );
  };

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    if (width && Number.isInteger(offset) && currentSong) {
      const divprogress = (offset / width) * 100;
      audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
    } else {
      return null;
    }
  };

  const skipBack = () => {
    const index = audios.findIndex((x) => x.id === currentSong.id);
    const newIndex = index === 0 ? audios.length - 1 : index - 1;
    dispatch(letCurrentSong(audios[newIndex]));
    audioElem.current.currentTime = 0;
  };
  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;
      audioElem.current.muted = muteVolume;
    }
  }, [volume, audioElem, muteVolume]);

  const skipNext = () => {
    const index = audios.findIndex((x) => x.id === currentSong.id);
    const newIndex = index === audios.length - 1 ? 0 : index + 1;
    dispatch(letCurrentSong(audios[newIndex]));
    audioElem.current.currentTime = 0;
  };

  return (
    <div>
      <audio src={currentSongUrl} ref={audioElem} onTimeUpdate={onPlaying} />
      <Songs
        audioElem={audioElem}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      <Plr>
        <Kip onClick={checkWidth} ref={clickRef}>
          <Pik min="0" max="100"></Pik>
        </Kip>
        <Playsec>
          <Previous onClick={skipBack}>
            <BiSolidSkipPreviousCircle />
          </Previous>
          {isPlaying ? (
            <Pause onClick={Pl}>
              <ImPause2 />
            </Pause>
          ) : (
            <Play onClick={Pl}>
              <GrPlayFill />
            </Play>
          )}
          <Next onClick={skipNext}>
            <BiSolidSkipNextCircle />
          </Next>
          <Vd>
            <button onClick={() => setMuteVolume((prev) => !prev)}>
              {muteVolume || volume < 5 ? (
                <HiVolumeOff />
              ) : volume < 40 ? (
                <ImVolumeLow />
              ) : (
                <FaVolumeUp />
              )}
            </button>
            <Vb
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </Vd>
        </Playsec>
      </Plr>
    </div>
  );
}

export default Playere;
