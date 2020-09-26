'use strict'

fetch('/api/household/')
  .then(function (response) {
    if (response.ok) { return response.json() } else { throw 'failed to load household: response code invalid' }
  })
  .then(function (data) {
    data.forEach(element => {
      var mydiv = document.getElementById('householdSpace')
      var aTag = document.createElement('a')
      aTag.setAttribute('href', `/${element.id}/expense`)
      aTag.innerText = 'Add Expense'

      var aTagHousehold = document.createElement('a')
      aTagHousehold.setAttribute('href', `/${element.id}/expense`)

      const eName = null
      const eExpense = null
      const eSplit = null
      const splitExpense = null
      const e = false
      const newHouse = document.createElement('li')
      // const msg = document.createTextNode(element.name)
      aTagHousehold.innerText = `${element.name}`
      // const houseHead = document.getElementById('nameHousehold')
      // houseHead.innerHTML = `${element.name}`

      // mydiv.appendChild(aTag)
      newHouse.appendChild(aTagHousehold)
      // document.getElementById('top-thing').appendChild(houseHead)
      // document.getElementById('member').innerHTML = `${household.name}`
      document.getElementById('members').appendChild(newHouse)
    })
  })
  .catch(function (e) {
    alert(e)
  })

fetch('/api/bill')
  .then(function (response) {
    if (response.ok) { return response.json() } else { throw 'failed to load household: response code invalid' }
  })
  .then(function (data) {
    data.forEach(element => {
      const expenseList = document.getElementById('expensesList')
      const eExpense = document.createElement('li')
      // eAmount = document.createElement('li')
      const eName = document.createTextNode(`${element.expenseDescription} was added to your household which costs R${element.expenseAmount}, your share is R${element.myShare}`)
      // amount = document.createTextNode(element.expenseAmount)
      // eAmount.appendChild(amount)
      // splitExpense = document.createTextNode(`You paid R${element.expenseAmount} and you are owed R${element.expenseAmount / element.members} by ${element.members - 1} members`)
      eExpense.appendChild(eName)
      console.log(element.expenseDescription)
      // eSplit = document.createElement('li')
      // eSplit.appendChild(splitExpense)
      // document.getElementById('expensesList').appendChild(eExpense)
      expenseList.appendChild(eExpense)
      // document.getElementById('expensesList').appendChild(eSplit)

      // const expense = document.getElementById('expensesList')
    //  const expense = document.getElementById('expensesList')
      // expense.innerHTML = `You added ${element.expenseName} which costs R${element.expenseAmount}`
    })
    // mydiv.appendChild(aTag)
    // newHouse.appendChild(aTagHousehold)
    // document.getElementById('top-thing').appendChild(houseHead)
    // document.getElementById('member').innerHTML = `${household.name}`
    // document.getElementById('members').appendChild(newHouse)
  })
  .catch(function (e) {
    alert(e)
  })
