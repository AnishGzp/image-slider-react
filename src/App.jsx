import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"5"}
      />
    </>
  );
}

export default App;
