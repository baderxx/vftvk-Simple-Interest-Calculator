function compute(){
    if(!validateNumber()) return

    const principalAmount = document.getElementById('principal').value
    const numberOfYears = document.getElementById('years').value
    const interestRate = document.getElementById('rate').value
    const currentYear = new Date().getFullYear()
    const resultYear = currentYear + parseInt(numberOfYears)
    const totalInterest = principalAmount * numberOfYears * interestRate / 100

    const resultEl = document.getElementById('result')
    resultEl.innerHTML = `
        If you deposit <mark> ${principalAmount} </mark>, <br />
        at an interest rate of <mark> ${interestRate} </mark>, <br />
        you will receive an amount of <mark> ${totalInterest} </mark>, <br />
        in the year <mark> ${resultYear} </mark>, <br />
    `
}

function validateNumber() {
    const principalAmountEl = document.getElementById("principal");

    if(principalAmountEl.value <= 0) {
        alert('Please enter a positive number')
        principalAmountEl.focus()
        return false
    }

    return true
}

function updateRateValue() {
    const rateRangeEl = document.getElementById("rate")
    const rateRangeResultEl = document.getElementById("rate-value")

    rateRangeResultEl.innerHTML = rateRangeEl.value
}