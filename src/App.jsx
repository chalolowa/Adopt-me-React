import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Money" animal="Dog" breed="German Shepherd" />
      <Pet name="Pac" animal="Dog" breed="German Shepherd" />
      <Pet name="Pit" animal="Dog" breed="Mix" />
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
