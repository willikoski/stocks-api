import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Grabbing the Stock symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  //state to hold the coin data
  const [stock, setStock] = useState(null);

  //function to fetch coin data
  const getStock = async () => {
    try{
        const response = await fetch(`/api/stocks/${symbol}`);
        const data = await response.json();
        setStock(data);
    }catch(error){
        console.error(error)
    }   
  };

  // useEffect to run getStock when component mounts
  useEffect(() => {
    getStock();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.name}/USD
        </h1>
        <h2>Last Price: {stock.lastPrice}</h2>
        <h3>Symbol: {stock.symbol}</h3>
        <h3>Change: {stock.change}</h3>
        <h3>High: {stock.high}</h3>
        <h3>Low: {stock.low}</h3>
        <h3>Open: {stock.open}</h3>
        <h3>Put more data here if you want</h3>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if stock has data, run the loaded function, otherwise, run loading
  return stock ? loaded() : loading();
};