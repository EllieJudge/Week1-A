//Cash machine attempt 2 lols.
let userInput;
let pin = 1;
let balance = 20;
let depositAmount;
// let withdrawalAmount;
let newBalance;
let run = false;

alert("Welcome...")

//check pin function
function checkPin() {
    userInput = prompt("Please enter your pin: ")
    if (userInput == pin) {
        console.log("Pin Correct")
        alert("Pin correct.")
        run = true;
    }
    else{
        alert("Pin incorrect. Get lost. Fraud.")
    }
}
checkPin()

//if pin correct && run is true, menu option function
function menuOptions() {
    userInput = prompt("Would you like to \n1. Check your balance \n2. Withdraw moola \n3. Make a deposit \n4. Change your pin")
    if (userInput == 1) {
        checkBalanceFunc()
    } else if (userInput == 2) {
        withdrawMoolaFunc()
    } else if (userInput == 3) {
        makeDepositFunc()
    } else if (userInput == 4) {
        changePinFunc()
    } else alert("Does not compute. Bye.")
}
if (run){
    menuOptions();
}

//check user balance function
function checkBalanceFunc() {
    userInput = prompt(`Your balance is £${balance}. Would you like another service? \n1. Yes \n2. No`)
    if (userInput == 1) {
        menuOptions()
    } else if (userInput == 2) {
        alert("Goodbye")
    } else {
        alert("Does not compute. Try again?")
        menuOptions()
    }
}

function withdrawMoolaFunc() {
    userInput = prompt(`How much would you like to withdraw today? \n1. £5  \n2. £10 \n3. £20 \n4. £50 \n5. Other`)
<<<<<<< HEAD
    switch (userInput) {
        case "1":
            withdrawalSum(5)
            break;
        case "2":
            withdrawalSum(10)
            break;
        case "3":
            withdrawalSum(20)
            break;
        case "4":
        withdrawalSum(50)
        break;

    }
}

function withdrawalSum(moola) {
    balance = balance - moola
=======
switch(userInput) {
    case 1:
    withdrawalAmount = 5;
    balance = balance - withdrawalAmount
    alert(`You have withdrawn £5. Your new balance is £${balance}`)
    break;
    case 2:
    withdrawalAmount = 10;
    balance = balance - withdrawalAmount
    alert(`You have withdrawn £10. Your new balance is £${balance}`)
    break

    //this is not working - why? hmm
}
}



function makeDepositFunc(){
>>>>>>> 037472f242c8a0b532d06f96f099d732bcedcc6d

    if (balance < 0) {
        prompt("You dont have enough money to withdraw that amount. Would you like another service? \n1. Yes \n2. No")
        return
    }
    alert(`You have withdrawn £${moola}. Your new balance is £${balance}`)
}

function makeDepositFunc() {

}

function changePinFunc() {

}