var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var rip=document.getElementById("ripple");
var trn=document.getElementById("tron");
var dg=document.getElementById("dogecoin");
var lit=document.getElementById("litecoin");
var tet=document.getElementById("tether");
var cd=document.getElementById("cardano");
var cs=document.getElementById("cosmos");
var bts=document.getElementById("bitshares");
var sl=document.getElementById("solana");
var pd=document.getElementById("polkadot");




var liveprice={
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Ctron%2Cdogecoin%2Clitecoin%2Ctether%2Ccardano%2Ccosmos%2Cbitshares%2Csolana%2Cpolkadot&vs_currencies=usd",
    "method": "GET",
    "headers":{}
}
$.ajax(liveprice).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    rip.innerHTML=response.ripple.usd;
    trn.innerHTML=response.tron.usd;
    dg.innerHTML=response.dogecoin.usd;
    lit.innerHTML=response.litecoin.usd;
    tet.innerHTML=response.tether.usd;
    cd.innerHTML=response.cardano.usd;
    cs.innerHTML=response.cosmos.usd;
    bts.innerHTML=response.bitshares.usd;
    sl.innerHTML=response.solana.usd;
    pd.innerHTML=response.polkadot.usd;

});