import { useState } from "react"
import { Header } from "./components/Header.jsx"


function App() {
  const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")




  return (
  <main>

    <header/>

    <h2>Analyze your text <br /> in real-time.</h2>

    <textarea 
    placeholder="Write your text..."
    onChange={(e) => setText(e.target.value)}
    value={text}
    ></textarea>

    <p>Character count.</p>

    
  </main>
  )
}

export {App}
