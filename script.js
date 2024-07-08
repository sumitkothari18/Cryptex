// Selecting elements by their classes
let btc = document.querySelector(".msg1");
let doge = document.querySelector(".msg2");
let eth = document.querySelector(".msg3");

// Function to update rates based on currency selection
const updateRates = async (currency) => {
    let urlBTC, urlETH, urlDOGE;

    if (currency === 'USD') {
        urlBTC = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
        urlETH = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
        urlDOGE = "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD";
    } else if (currency === 'INR') {
        urlBTC = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=INR";
        urlETH = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR";
        urlDOGE = "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=INR";
    }

    try {
        // Fetch BTC rate
        const responseBTC = await fetch(urlBTC);
        const dataBTC = await responseBTC.json();
        btc.textContent = dataBTC[currency];

        // Fetch ETH rate
        const responseETH = await fetch(urlETH);
        const dataETH = await responseETH.json();
        eth.textContent = dataETH[currency];

        // Fetch DOGE rate
        const responseDOGE = await fetch(urlDOGE);
        const dataDOGE = await responseDOGE.json();
        doge.textContent = dataDOGE[currency];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Event listener for select element
const select = document.querySelector("nav select");
select.addEventListener("change", (event) => {
    const selectedCurrency = event.target.value;
    updateRates(selectedCurrency);
});

// Initial call to updateRates with default currency (USD)
updateRates('USD');



