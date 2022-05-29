loadpage();
async function loadpage() {
        try{
document.getElementById('CoinGecko-Market').src = "https://coingecko-market.glitch.me";
        }catch (err) {
      console.log(err);
    }
            return;
      }
