const Stats = ({
    characters, 
    words, 
    sentences, 
    readingTime}) => {
    return (
        <div>
            <p>Total Characters: {characters} </p>
            <p>Total Words: {words}</p>
            <p>Total Sentences: {sentences}</p>
            <p>Reading Time: &lt;{readingTime} min</p>
        </div>
    )
}

export{Stats}