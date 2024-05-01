import React from "react";
import { useDispatch, useSelector } from "react-redux";
import /* actions */ "../actions/exampleActions";

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const exampleData = useSelector((state) => state.example.data);

  // You can place your functions here, for example:
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://65ff597bdf565f1a61450318.mockapi.io/b/vd/audio"
      );
      const data = await response.json();
      // Assuming 'data' contains the image URL in a property named 'imageUrl'
      dispatch({ type: "SET_IMAGE", payload: data.avatar });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  };

  return (
    <div>
      <h1>Example Component</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {/* Display data here */}
    </div>
  );
};

export default ExampleComponent;
