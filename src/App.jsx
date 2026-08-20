import { useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controls } from "./components/Controls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"
import "./index.css"

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
      percentage: total === 0 ? 0 : (amountLetter / total) * 100
    }

    return infoToRenderLetter

  })

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  const [showAll, setShowAll] = useState(false)

  const visibleLetters = showAll ?  sortLetters : sortLetters.slice(0, 5)

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
  }

  const handleLimitValue = () => {
    setLimitValue(!limitValue)
  }

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
  <main>

    <section className="card">

      <Header/>

      <h2 className="title">Analyze your text in real-time.</h2> 

      <WriteArea className="write-area"
        handleChangeTextArea={handleChangeTextArea}
        text={text}
      />

      <Controls
        excludeSpaces = {excludeSpaces}
        handleExcludeSpaces = {handleExcludeSpaces}
        limitCharacter = {limitCharacter}
        handleChangeInputLimit = {handleChangeInputLimit}
        limitValue = {limitValue}
        handleLimitValue = {handleLimitValue}
        readingTime = {readingTime}
      />

      <Stats
      characters = {characters} 
      words = {words}
      sentences = {sentences}
      />

      <LetterDensity
      visibleLetters={visibleLetters}
      handleShowAll={handleShowAll}
      showAll={showAll}
      />
    
    </section>

  </main>

  )
}

export {App}
