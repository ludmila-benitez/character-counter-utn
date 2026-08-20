const Controls = (
{    excludeSpaces,
    handleExcludeSpaces,
    limitCharacter,
    handleChangeInputLimit,
    limitValue,
    handleLimitValue, 
    readingTime}) => {
    return(
    <div className="
    controls">
      <label className="check">
      <input type="checkbox"
      checked= {excludeSpaces}
      onChange={() => handleExcludeSpaces(!excludeSpaces)}
      />
      Exclude Spaces
      </label>
      <label className="check">
      <input type="checkbox"
      checked= {limitCharacter}
      onChange={handleChangeInputLimit}
      />
      Set Character Limit
      </label>
      {
        limitCharacter && 
        <input className="limit" type="number"
        value={limitValue}
        onChange = {(e) => handleLimitValue(Number(e.target.value))}
         />
      }
      <p>Reading Time: &lt;{readingTime} min</p>
    </div>
    )
}

export {Controls}