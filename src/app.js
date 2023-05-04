const endDate = "20 May 2023 05:00 PM"

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const current= new Date()
    const diff = (end- current)/1000;
    if(diff > 0){
        // Days
        inputs[0].value = Math.floor(diff /3600 /24);
        // Hours
        inputs[1].value = Math.floor((diff /3600)%24);
        //Minutes
        inputs[2].value = Math.floor((diff /60) %60);
        //Seconds
        inputs[3].value = Math.floor(diff %60);
    }
    else{
        window.location ='https://royalkarang.github.io/Resume/';
    }
}
clock()

setInterval(
    () => {
        clock()
    },
    1000
)