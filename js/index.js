console.log("it's working!");

let menuElements = document.querySelectorAll( '.pageCities' );
console.log(menuElements);

function alertCity(event){
    console.log(event.target);
    alert(`Loading weather report on ${event.target.textContent}`);
}

for( let i = 0; i < alertCity.length; i ++ ){
    menuElements[i].addEventListener( 'click', alertCity );
}

function removePopUp(){
    let deleteCookie = document.querySelector('.popUp');
    deleteCookie.remove();
}

function cToF(temp){
    return Math.round(9 / 5 * temp + 32);
}

function fToC(temp){
    return Math.round(5 / 9 * (temp - 32));
}

function convert (element){
    console.log(element.value);
    for(let i = 1; i < 9; i++){
        let tempNum = document.querySelector("#tempNumber" + i);
        let tempValue = parseInt ( tempNum.innerText);
        if(element.value == "°C"){
            tempNum.innerText = fToC(tempValue);
        } else {
            tempNum.innerText = cToF(tempValue);
        }
    }
}