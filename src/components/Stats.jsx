const Stats = ({
    characters, 
    words, 
    sentences, 
    readingTime}) => {
    return (
        <div className="stats">
            <div className="total">
                <p className="description">
                    Total Characters:
                </p>
                <p className="number">
                    {characters}
                </p>
            </div>
            <div className="word">
                <p className="description">
                    Total Words:
                </p>
                <p className="number">
                    {words}
                </p>
            </div>
            <div className="sentence">
                <p className="description">
                    Total Sentences:
                </p>
                <p className="number">
                    {sentences}
                </p>
            </div>
        </div>
    )
}

export{Stats}