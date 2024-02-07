export default function startBitCoin() {}

const spanBTC = document.querySelector(".bitcoin");

async function apiBtc() {
  try {
    const btcResponse = await fetch("https://blockchain.info/ticker");
    const btcJSON = await btcResponse.json();
    spanBTC.innerText = (100 / btcJSON.BRL.buy).toFixed(5);
  } catch (erro) {
    console.log(erro);
  }
}
apiBtc();
