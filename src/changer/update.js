import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setaudios, updateSong } from "../features/audiosSlice";

function Update() {
  const currentSongIndex = useSelector(
    (state) => state.audios.currentSongIndex
  );

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
      width: 400px;
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
    border-radius: 5px;
    font-size: 20px;
    top: 150px;
    width: 300px;

    align-item: center;

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
    @media (min-width: 721px) and (max-width: 1533px) {
      width: 320px;
    }

    @media (max-width: 720px) {
      width: 320px;
    }
  `;

  const ImUrl = styled.input`
    border: 1px black;
    border-radius: 5px;
    font-size: 17px;
    top: 400px;
    margin-left: 5px;
    width: 370px;
    padding: 9px;
    display: flex;

    position: absolute;
    background: #ccc;
    @media (min-width: 721px) and (max-width: 1533px) {
      width: 320px;
    }

    @media (max-width: 720px) {
      width: 320px;
    }
  `;
  const Buttn = styled.button`
    background: green;
    top: 560px;
    font-size: 30px;
    margin-left: 37px;
    position: absolute;
  `;

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateSong({
        id: currentSongIndex,
        url,
        mr,
        title,
      })
    );

    navigate("/");
  };

  return (
    <div>
      <Box>
        <Mg>
          <Heading>Update song</Heading>
          <Label>Title of the song</Label>
          <Titls
            type="text"
            name="title"
            placeholder="Enter the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Titls>
          <SongUrl> song url</SongUrl>
          <Url
            type="text"
            name="mr"
            placeholder="Enter song Url"
            value={mr}
            onChange={(e) => setMr(e.target.value)}
          ></Url>
          <ImgUrl>Image url</ImgUrl>
          <ImUrl
            type="text"
            name="url"
            placeholder="Enter Image Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Buttn onClick={handleUpdate}>Done</Buttn>
        </Mg>
      </Box>
    </div>
  );
}

export default Update;
