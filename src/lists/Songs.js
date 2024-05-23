import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Playere from "./playere";
import { Link } from "react-router-dom";
import audios from "../features/audiosSlice";

import {
  getFetch,
  setCurrentSongImg,
  setCurrentSongIndex,
  setAudios,
  setbwidth,
} from "../features/audiosSlice";

function Songs({ audioElem, setIsPlaying, isPlaying }) {
  const audios = useSelector((state) => state.audios.audios);

  const currentSongIndex = useSelector(
    (state) => state.audios.currentSongIndex
  );

  const currentSongImg = useSelector((state) => state.audios.currentSongImg);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetch());
  }, [dispatch]);

  const Picturect = (loUrl, e) => {
    dispatch(setCurrentSongImg(loUrl));

    audioElem.current.play();

    var playPromise = audioElem.current.play();
    audioElem.current.currentTime = 0;

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          setIsPlaying(!isPlaying);
        })
        .catch((error) => {});
    }
  };

  const Indexchr = (event) => {
    dispatch(setCurrentSongIndex(event));
  };

  const wnder = audios.map((song) =>
    song.id !== currentSongIndex ? song : null
  );

  const filteredArray = wnder.filter((item) => item !== null);

  const handleDelete = (e) => {
    dispatch(setAudios(filteredArray));
  };

  const Button = styled.div`
    color: blue;
    padding: 5px;
    display: flex;
    background: #eee;
    width: 300px;
    height: 170px;
    position: absolute;

    &:hover {
      opacity: 0.7;
    }

    @media (min-width: 721px) and (max-width: 1533px) {
      width: 200px;
      height: 160px;
    }

    @media (max-width: 720px) {
      margin-left: 20px;
      margin-top: 30px;
      width: 220px;
      height: 69px;
    }
  `;

  const Buttona = styled.div`
    color: white;
    padding: 5px;
    margin-left: 55px;
    margin-top: 12px;
    background: #333;
    width: 350px;
    height: 570px;

    @media (min-width: 721px) and (max-width: 1533px) {
      height: 450px;
      width: 290px;
      margin-left: 13px;
    }

    @media (max-width: 720px) {
      margin-left: 20px;
      height: 400px;
    }
  `;
  const Title = styled.h5`
    width: 300px;
    height: 200px;
    margin: 7px;
    position: absolute;

    color: black;
    text-wight: bold;
    opacity: 1;

    &:hover {
      opacity: 1;
    }
    @media (min-width: 721px) and (max-width: 1533px) {
      width: 170px;
      position: absolute;
    }
  `;
  const Div = styled.div`
    color: blue;
    padding: 5px;

    background: #eee;
    width: 300px;
    height: 170px;

    @media (min-width: 721px) and (max-width: 1533px) {
      width: 210px;
      padding: 2px;
    }
  `;

  const Frame = styled.div`
    background: #ccc;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    margin-top: 23px;

    margin-left: 15px;

    @media (min-width: 721px) and (max-width: 1533px) {
      width: 235px;
      height: 204px;
    }

    @media (max-width: 750px) {
      height: 200px;
    }
  `;
  const Section = styled.section`
    background: transparent;

    font-size: 31px;
    align-item: center;
    margin-top: 60px;
    padding-left: 40px;

    @media (min-width: 721px) and (max-width: 1533px) {
      margin-top: 30px;
      font-size: 43px;
      padding-left: 20px;
    }
    @media (max-width: 750px) {
      margin-top: 40px;
    }
  `;

  const Editor = styled.button`
    width: 60px;
    background: #272;
    font-size: 16px;
    color: violet;
    border: 1px, black;
    border-radius: 5px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  `;

  const Delete = styled.button`
    width: 60px;
    background: #272;
    margin-left: 35px;
    font-size: 16px;
    color: violet;
    border: 1px, black;
    border-radius: 5px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
    @media (min-width: 721px) and (max-width: 1533px) {
      margin-left: 15px;
    }
  `;

  const Update = styled.button`
    width: 70px;
    background: #272;
    margin-left: 35px;
    font-size: 15px;
    color: violet;
    border: 1px, black;
    border-radius: 5px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
    @media (min-width: 721px) and (max-width: 1533px) {
      margin-left: 15px;
    }
  `;

  const Hulu = styled.div`
    margin-left: 190px;
    margin-top: 40px;

    background: #ddd;
    width: 900px;
    height: 657px;
    display: flex;

    @media (min-width: 721px) and (max-width: 1533px) {
      margin-left: 20px;
      display: flex;
      width: 520px;
      position: relative;
    }

    @media (max-width: 720px) {
      margin-left: 20px;
      margin-top: 150px;

      width: 390px;
      float: right;
      height: 40px;
      display: flex;
    }
  `;
  const Wonder = styled.div`
    display: flex;
    @media (max-width: 720px) {
      display: flex;
      margin-left: 20px;
      margin-top: 30px;
      flex-wrap: wrap;
    }
  `;

  const Mzmur = styled.div`
    display: flex;
    gap: 26px;
    position: absolute;
    padding: 8px;
    height: 630px;
    width: 870px;
    flex-wrap: wrap;
    overflow: scroll;
    flex-direction: column;

    @media (min-width: 721px) and (max-width: 1533px) {
      width: 500px;
      overflow: scroll;
      position: absolute;
      flex-direction: row;
    }

    @media (max-width: 720px) {
      margin-left: 20px;
      margin-top: 30px;
      flex-direction: row;
      overflow: auto;
      width: 350px;
    }
  `;

  const Aga = styled.div`
    padding: 13px;
    width: 300px;
    justify-content: center;
    background: lightblue;
    font-size: 26px;
    text-align: center;
    color: green;

    @media (min-width: 721px) and (max-width: 1533px) {
      width: 230px;
    }
  `;
  const Img = styled.img`
    position: absolute;
    width: 300px;
    height: 147px;
    border-radius: 5px;
    margin-top: 3px;
    height: 297px;

    margin-left: 5px;

    @media (min-width: 721px) and (max-width: 1533px) {
      width: 230px;
      height: 200px;
    }

    @media (max-width: 720px) {
      height: 196px;
      width: 297px;
    }
  `;
  const Imge = styled.img`
    position: absolute;
    display: flex;
    width: 200px;

    height: 147px;
    border-radius: 5px;
    margin-top: 3px;
    height: 147px;
    margin-left: 5px;

    @media (min-width: 730px) and (max-width: 960px) {
      width: 200px;
      display: flex;

      margin-left: 5px;
      padding: 4px;
    }

    @media (max-width: 720px) {
      margin-left: 20px;
      margin-top: 30px;
      width: 200px;
      height: 80px;
    }
  `;

  const Box = styled.div`
    display: flex;
    @media (max-width: 720px) {
      margin-left: 20px;
      margin-top: 30px;
    }
  `;

  return (
    <div>
      <Box>
        <Wonder>
          <Buttona>
            <Aga>{currentSongIndex}</Aga>

            <Frame>
              <Img src={currentSongImg}></Img>
            </Frame>

            <Section>
              <Editor>
                <Link to="/create">Create</Link>
              </Editor>
              <Update>
                <Link to="/update">Update</Link>
              </Update>
              <Delete onClick={handleDelete}>Delete</Delete>
            </Section>
          </Buttona>

          <Hulu>
            <Mzmur>
              {audios.map((lo) => (
                <Div key={lo.id}>
                  <Button>
                    <Title>{lo.title}</Title>
                    <Imge
                      src={lo.url}
                      alt="ok thank you"
                      onClick={() => {
                        Picturect(lo.url);
                        Indexchr(lo.id);
                      }}
                    ></Imge>
                  </Button>
                </Div>
              ))}
              ;
            </Mzmur>
          </Hulu>
        </Wonder>
      </Box>
    </div>
  );
}

export default Songs;
