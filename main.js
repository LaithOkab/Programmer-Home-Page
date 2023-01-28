let btn = document.getElementById("#generate");

function btnClick() {

    let quoteNum = Math.floor(Math.random() * 5);

    document.addEventListener('click', btn)
    {
        if (quoteNum === 0) {
            document.getElementById("quote-area").value = '"Any fool can write code that a computer can understand."'
        }
        else if (quoteNum === 1) {
            document.getElementById("quote-area").value = '"First, solve the problem"'
        }
        else if (quoteNum === 2) {
            document.getElementById("quote-area").value = '"Make it work, make it right, make it fast."'
        }
        else if (quoteNum === 3) {
            document.getElementById("quote-area").value = '"In order to be irreplaceable, one must always be different"'
        }
        else if (quoteNum === 4) {
            document.getElementById("quote-area").value = '"Java is to Javascript what car is to Carpet"'
        }
    }
}


