let count = 0 ;
let countinfo = document.getElementById("count-info");
let saveinfo = document.getElementById("save-info");
let saveresult;

function Increment() {
    count +=1;
    countinfo.textContent = count;
}


function Save() {
    saveresult = count + " - " ;
    saveinfo.textContent += saveresult;
    countinfo.textContent = 0 ;
    count = 0;

}