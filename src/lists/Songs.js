import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetch } from "../features/audiosSlice";

function Songs() {
  const audios = useSelector((state) => state.audios.audios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetch());
  }, [dispatch]);

  const Button = styled.div`
    color: blue;
    padding: 5px;

    background: #eee;
    width: 300px;
    height: 170px;
    position: absolute;

    &:hover {
      opacity: 0.7;
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
  `;
  const Title = styled.p`
    position: absolute;
    width: 200px;
    height: 200px;
    margin: 7px;
    color: black;
    text-wight: bold;
    opacity: 0;

    &:hover {
      opacity: 1;
    }
  `;
  const Div = styled.div`
    color: blue;
    padding: 5px;
    overflow: auto;

    background: #eee;
    width: 300px;
    height: 170px;
  `;

  const Frame = styled.div`
    background: #ccc;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    margin-top: 23px;

    margin-left: 15px;
  `;
  const Section = styled.section`
    background: transparent;

    font-size: 31px;
    align-item: center;
    margin-top: 60px;
    padding-left: 40px;
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
  `;

  const Hulu = styled.div`
    margin-left: 190px;
    margin-top: 40px;

    background: #ddd;
    width: 900px;
    height: 657px;
    display: flex;
    flex-wrap: wrap;
  `;
  const Wonder = styled.div`
    display: flex;
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
  `;

  const Aga = styled.div`
    padding: 13px;
    width: 300px;
    justify-content: center;
    background: lightblue;
    font-size: 26px;
    text-align: center;
  `;

  const Box = styled.div``;

  return (
    <Box>
      <Wonder>
        <Buttona>
          <Aga>currentSongs Title</Aga>
          <Frame></Frame>
          <Section>
            <Editor>Create</Editor> <Update>Update</Update>{" "}
            <Delete>Delete</Delete>
          </Section>
        </Buttona>

        <Hulu>
          <Mzmur>
            {audios.map((lo) => (
              <Div>
                <Button key={lo.id}>
                  <Title>{lo.mr} </Title>
                  <img
                    src={lo.url}
                    alt="ok thank you"
                    width="250px"
                    height="170px"
                  />
                </Button>
              </Div>
            ))}
            ;
          </Mzmur>
        </Hulu>
      </Wonder>
    </Box>
  );
}

export default Songs;
