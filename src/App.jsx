import { Dock, Navbar,Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Finder, Resume, Safari, Terminal, Text , ImageContent, Contact} from "#windows";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock></Dock>
      <Terminal></Terminal>
      <Safari></Safari>
      <Resume></Resume>
      <Finder></Finder>
      <Text></Text>
     <ImageContent></ImageContent>
     <Contact></Contact>
    </main>
  );
};

export default App;