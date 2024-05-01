import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetch } from "./features/audiosSlice";

function App() {
  const audios = useSelector((state) => state.audios.audios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetch());
  }, [dispatch]);
  console.log(audios);
  return (
    <div>
      {audios.map((lo) => (
        <div key={lo.id}>
          <h3>{lo.title} </h3>
          <img src={lo.url} alt="ok thank you" />
        </div>
      ))}
    </div>
  );
}
export default App;
