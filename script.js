// TO ACTIVATE THE THREE DOTS(JAB THREE DOTS(BAR) KO 
//OPEN KAREN TO SAARA NAVBAR DIKHNA CHAHIYE USKE LIYE ACTIVE BANAYE H )
const bar=document.getElementById('bar');
// cross click karne pe opened navbar close ho jaye
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
// AB EK CLOSE BUTTON BHI BANANA HOGA JO KI OPENED NAVBAR KO CLOSE KARE
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
// opened navbar me shopping bag ni aana chahiye kyunki already wo bar ke sath aa raha h
//go to index.html give id="lg-bag" to shopping bag wale list ko