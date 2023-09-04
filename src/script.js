const billInput = document.querySelector("#bill__input");
const totalBill = document.querySelector('.total-bill')
const peopleInput = document.querySelector('#people__input')
const tipAmount = document.querySelector('.tip-amount')
const tips = document.querySelectorAll('.tips')
const resetButton = document.querySelector('#reset__button')
const customTip = document.querySelector('#custom__tip')
const errorBill = document.querySelector('#errorBill')
const errorPeople = document.querySelector('#errorPeople')


totalBill.innerText = "$" + (0.0).toFixed(2)
tipAmount.innerText = "$" + (0.0).toFixed(2)
console.log(tips)

let currBill = 0.0
let currPeople = 1
let currTip = 0

const customTipInputFn = () => {
    currTip = parseFloat((customTip.value) / 100)
    
    if (isNaN(currTip)) {
        currTip = 0
    }
    calculationTip()
}

const tipInputFn = (tipPercentage) => {
    currTip = parseFloat(tipPercentage)
    calculationTip();
}

const billInputFn = () => {

    currBill = parseFloat(billInput.value)

    if (isNaN(currBill)) {
        errorBill.innerText = 'Not a valid number' 
        billInput.classList.remove('focus:outline', 'outline-strong-cyan')
        billInput.classList.add('focus:outline', 'outline-red')
        currBill = 0.0
    } else {
        errorBill.innerText = '' 
        billInput.classList.remove('focus:outline', 'outline-red')
        billInput.classList.add('focus:outline', 'outline-strong-cyan')
    }
    
    calculationTip();
}

const peopleInputFn = () => {
    currPeople = parseInt(peopleInput.value)

    if (isNaN(currPeople)) {
        errorPeople.innerText = 'Not a valid number' 
        peopleInput.classList.remove('focus:outline', 'outline-strong-cyan')
        peopleInput.classList.add('focus:outline', 'outline-red')
        currPeople = 1
    } else if (currPeople === 0){
        errorPeople.innerText = 'Cannot be zero' 
        peopleInput.classList.remove('focus:outline', 'outline-strong-cyan')
        peopleInput.classList.add('focus:outline', 'outline-red')
        return
    } else {
        errorPeople.innerText = ''
        peopleInput.classList.remove('focus:outline', 'outline-red')
        peopleInput.classList.add('focus:outline', 'outline-strong-cyan')
    }
    calculationTip();
}

const resetButtonFn = () => {
    currBill = 0.0
    currPeople = 1
    currTip = 0

    totalBill.innerText = "$" + (0.0).toFixed(2)
    tipAmount.innerText = "$" + (0.0).toFixed(2)

    peopleInput.value = ""
    billInput.value = ""
    

    tips.forEach(button => {
        button.classList.remove("bg-strong-cyan")
        button.classList.add("bg-dark-cyan")
    })

    resetButton.classList.add("bg-grayish-cyan", "text-dark-grayish-cyan")
    resetButton.classList.remove("bg-strong-cyan", "text-dark-cyan")
}

const calculationTip = () => {
    if (currBill >= 0 && currPeople >= 1) {
        let totalTip = currBill * currTip / currPeople
        let totalAmount = (currBill + totalTip) / currPeople;
        totalBill.innerText = "$" + totalAmount.toFixed(2);
        tipAmount.innerText = "$" + totalTip.toFixed(2);
    } 
}

billInput.addEventListener("input", billInputFn);
peopleInput.addEventListener("input", peopleInputFn);
customTip.addEventListener("input", customTipInputFn)
customTip.addEventListener("click", () => {
    tips.forEach(button => {
        button.classList.remove("bg-strong-cyan")
        button.classList.add("bg-dark-cyan")
        resetButton.classList.remove("bg-grayish-cyan", "text-dark-grayish-cyan")
        resetButton.classList.add("bg-strong-cyan", "text-dark-cyan")
    })
})
resetButton.addEventListener("click", resetButtonFn);
tips.forEach((button) => {
    button.addEventListener('click', () => {
        tips.forEach(button => {
            button.classList.remove("bg-strong-cyan")
            button.classList.add("bg-dark-cyan")
            resetButton.classList.remove("bg-grayish-cyan", "text-dark-grayish-cyan")
            resetButton.classList.add("bg-strong-cyan", "text-dark-cyan")
        })

        button.classList.add("bg-strong-cyan")
        tipInputFn(button.value)
    })
})
