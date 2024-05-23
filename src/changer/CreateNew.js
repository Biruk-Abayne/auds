import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { postAudio, postProc } from "../features/audiosSlice";
import { nanoid } from "@reduxjs/toolkit";

function CreateNew() {
  const audios = useSelector((state) => state.audios);
  const song = useSelector((state) => state.audios.audios);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mr, setMr] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const Box = styled.div`
    width: 500px;
    height: 700px;
    background: white;
    color: black;
    border: 1px black;
    border-radius: 5px;
    margin-left: 200px;
    display: flex;

    @media (min-width: 721px) and (max-width: 1533px) {
      margin-left: 20px;
    }

    @media (max-width: 720px) {
      margin-left: 20px;
    }
  `;
  const Heading = styled.h3`
    font-size: 35px;
    text-align: center;
    color: black;
    margin-left: 38px;
  `;
  const Label = styled.label`
    font-size: 34px;
    padding: 4px;
    padding-right: 9px;
    background: lightblue;
    text-align: center;

    position: absolute;
    top: 89px;
    margin-left: 15px;
    width: 277px;
    border-radius: 4px;
  `;
  const Mg = styled.div`
    margin-left: 12px;
  `;

  const SongUrl = styled.label`
    font-size: 32px;
    padding-left: 5px;
    padding: 9px;
    background: lightblue;
    text-align: center;
    position: absolute;
    top: 200px;
    width: 277px;
    margin-left: 15px;
    border-radius: 4px;
  `;
  const ImgUrl = styled.label`
    font-size: 32px;
    padding-left: 5px;
    padding: 9px;
    background: lightblue;
    text-align: center;
    position: absolute;
    top: 330px;
    width: 277px;
    margin-left: 15px;
    border-radius: 4px;
  `;
  const Titls = styled.input`
    border: 1px black;
    border-radius: 5px;
    font-size: 25px;
    top: 150px;

    padding: 3px;

    position: absolute;
    background: #ccc;

    margin-left: 5px;
  `;
  const Url = styled.input`
    border: 1px black;
    border-radius: 5px;
    font-size: 17px;
    top: 270px;
    margin-left: 5px;
    width: 370px;
    padding: 9px;

    position: absolute;
    background: #ccc;
  `;

  const ImUrl = styled.input`
    border: 1px black;
    border-radius: 5px;
    font-size: 17px;
    top: 400px;
    margin-left: 5px;
    width: 370px;
    padding: 9px;

    position: absolute;
    background: #ccc;
  `;
  const Buttn = styled.button`
    background: green;
    top: 560px;
    font-size: 30px;
    margin-left: 37px;
    position: absolute;
  `;

  const HaddData = (event) => {
    event.preventDefault();

    // Check if song.length is not 0, url, mr, and title are not null or NaN
    if (song.length !== 0 && url && mr && title) {
      dispatch(
        postProc({
          id: song.length + 1,
          url: url,
          mr: mr,
          title: title,
        })
      );
    }
    navigate("/");
  };

  // If array is empty, start ids from 1

  return (
    <div>
      <Box>
        <Mg>
          <Heading>Adding new Song</Heading>
          <Label>Title of the song</Label>
          <Titls
            type="text"
            name="title"
            value={title}
            placeholder="Enter the Title"
            onChange={(e) => setTitle(e.target.value)}
          ></Titls>
          <SongUrl> song url</SongUrl>
          <Url
            type="text"
            name="mr"
            value={mr}
            placeholder="Enter song Url"
            onChange={(e) => setMr(e.target.value)}
          ></Url>
          <ImgUrl>Image url</ImgUrl>
          <ImUrl
            type="text"
            name="url"
            value={url}
            placeholder="Enter Image Url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <Buttn onClick={HaddData}>Done</Buttn>
        </Mg>
      </Box>
    </div>
  );
}

export default CreateNew;
