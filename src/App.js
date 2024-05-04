import Playere from "./lists/playere";
import styled from "@emotion/styled";
import Songs from "./lists/Songs";

function App() {
  const Mdiv = styled.div`
    height: 990px;
    background-image: linear-gradient(
      to right,
      white,
      grey,
      white,
      LightGreen,
      white
    );
  `;

  return (
    <Mdiv>
      <div>
        <Songs />
        <Playere />
      </div>
    </Mdiv>
  );
}
export default App;
