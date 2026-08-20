const LetterDensity = ({visibleLetters, handleShowAll, showAll}) => {
    return(
    <section className="letter-density">
      <h3>Letter Density</h3>
      <article className="statistics">
         {
         visibleLetters.map(letter =>
          <div key={letter.letterName}>
            <span>{letter.letterName.toLocaleUpperCase()}</span>
            <meter min= "0" max= "100" value={letter.percentage}></meter>
            <span>{letter.amount} ({letter.percentage.toFixed(1)} %)</span>
          </div>)
         }
      </article>
      <button onClick={()=>handleShowAll(!showAll)}
        >{showAll ? "See less ▲": "See more ▼"  }
      </button>
    </section>
    )
}

export {LetterDensity}