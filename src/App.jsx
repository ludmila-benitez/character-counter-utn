import { useState } from "react"
import { Header } from "./components/Header.jsx"


function App() {
  const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)
  const handleChangeTextArea = (e) => {
    const value = e.target.value
    if(limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } else {
      setText(value)
    }
  }
  const handleChangeInputLimit = () => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(sentence => sentence.trim() != "").length
  const readingTime = Math.ceil(words / 200) 
  const cleanText = text.toLowerCase().replace(/[^a-záéíóúñ]/g, "")
  const dictionaryLetters = {}

  const total = cleanText.length


  cleanText.split("").forEach(letter =>{
    dictionaryLetters[letter]= (dictionaryLetters[letter] || 0) + 1
  })


  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
    const letter = dataLetter[0]
    const amountLetter = dataLetter[1]

    const infoToRenderLetter = {
      letterName: letter,
      amount: amountLetter,
      percentage: (amountLetter / total) * 100,
    }

    return infoToRenderLetter

  })

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)









  return (
  <main>

    <header/>

    <h2>Analyze your text <br /> in real-time.</h2>

    <textarea 
    placeholder="Write your text..."
    onChange={handleChangeTextArea}
    value={text}
    ></textarea>

    <div>
      <label>
      <input type="checkbox"
      checked= {excludeSpaces}
      onChange={() => setExcludeSpaces(!excludeSpaces)}
      />
      Exclude Spaces
      </label>
      <label>
      <input type="checkbox"
      checked= {limitCharacter}
      onChange={handleChangeInputLimit}
      />
      Set Character Limit
      </label>
      {
        limitCharacter && 
        <input type="number"
        value={limitValue}
        onChange = {(e) => setLimitValue(e.target.value)}
         />
      }




    </div>

    <p>Total Characters: {characters} </p>
    <p>Total Words: {words}</p>
    <p>Total Sentences: {sentences}</p>

    <p>Reading Time: &lt;{readingTime} min</p>

    <section>
      <h2>Letter Density</h2>
      <article>
         {
         sortLetters.map(letter =>
          <div key={letter.letterName}>
            <span>{letter.letterName.toLocaleUpperCase()}</span>
            <meter min= "0" max= "100" value={letter.percentage}></meter>
            <span>{letter.amount} ({letter.percentage.toFixed(1)} %)</span>
          </div>)
         }
      </article>
      <button>See more ▼</button>
    </section>




    
  </main>
  )
}

export {App}
