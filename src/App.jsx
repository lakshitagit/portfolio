import { Dock, Navbar,Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Terminal } from "#windows";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock></Dock>
      <Terminal></Terminal>
    </main>
  );
};

export default App;