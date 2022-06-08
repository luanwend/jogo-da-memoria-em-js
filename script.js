const cards=document.querySelectorAll('.card');
let hasflippedcard=false;
let firstcard, secondcard;
let lockboard=false;

function virarcarta(){
    if(lockboard) return;
    if(this===firstcard) return;
    this.classList.add('flip');
    if(!hasflippedcard){
        hasflippedcard=true;
        firstcard=this;
        return;
    }
    secondcard=this;
    hasflippedcard=false;
    checkformath();

}
function checkformath(){
    if(firstcard.dataset.card===secondcard.dataset.card){
        disablecards();
        return;
    }
    unflipcards();
}

function disablecards(){
    firstcard.removeEventListener('click', virarcarta);
    secondcard.removeEventListener('click', virarcarta);
    resetboard();
}

function unflipcards(){
    lockboard=true;
    setTimeout(()=>{
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        resetboard();
    },1500);
}

function resetboard(){
    [hasflippedcard, lockboard]=[false,false];
    [firstcard, secondcard]=[null,null];

}

(function shuffle(){
    cards.forEach((card) =>{
        let randon=Math.floor(Math.random() *12);
        card.style.order=randon;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', virarcarta)
})
