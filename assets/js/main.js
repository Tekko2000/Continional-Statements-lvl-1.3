function checkAge() {
    event.preventDefault()
    let age = document.getElementById("age").value
    let resultCheck = document.getElementById('result-check')
    console.log(age)
    if (age >= 18) {
        resultCheck.innerHTML = "Ja. Du kannst Shisha rauchen."
    } else {
        resultCheck.innerHTML = "Du darfst noch nicht Shisa rauchen."
    }
}