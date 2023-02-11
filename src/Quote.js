import { useEffect, useState } from "react";

const Quote = () => {

    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then((data) => {
                setQuote(data.content);
                setAuthor(data.author);
            })
    }, [count])

    return ( 
        <div className="quote-display">
            <h1>{quote}</h1>
            <p>--{author}</p>
            <button className="quote-btn" onClick={() => setCount(count+1)}>New Quote</button>
        </div>
     );
}
 
export default Quote;