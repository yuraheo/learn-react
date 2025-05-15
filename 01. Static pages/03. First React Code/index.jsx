// Challenge: Re-write the first lines of React code we just had.
// You can render anything you want to the screen, doesn't have
// to be an h1 element.
import {createRoot} from "react-dom/client"
//1. create a root
const root = createRoot(document.getElementById("root"))
//2. render some markup to the root
root.render(<h1>Hello, React!</h1>)
