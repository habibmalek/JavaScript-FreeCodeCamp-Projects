/*
Three states in the cash register, when the cash-in-drawer is less than the change "INSUFFICIENT",
and when the cash-in-drawer as the value for the key change "CLOSED",
and last, the cash-in-drawer change is the change itself due in coins and bills, sorted in highest to lowest order, as the value of the change key specified.
*/


function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let cidTotal = 0;
  for(let elm of cid){
    cidTotal += elm[1]*100
  }
  if(change > cidTotal){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if(change === cidTotal){
    return {status: "CLOSED", change: cid}
  } else {
    let holder = []
    cid = cid.reverse()
    let moneyUnits = {
      "ONE HUNDRED":10000,
      "TWENTY":2000,
      "TEN":1000,
      "FIVE":500,
      "ONE":100,
      "QUARTER":25,
      "DIME":10,
      "NICKEL":5,
      "PENNY":1
    }
    for(let elm of cid){
      let holder2 = [elm[0], 0]
      elm[1] = elm[1]*100
      while(change >= moneyUnits[elm[0]] && elm[1] > 0){
        change -= moneyUnits[elm[0]]
        elm[1] -= moneyUnits[elm[0]]
        holder2[1] += moneyUnits[elm[0]]/100
      }
      if(holder2[1] > 0){
        holder.push(holder2)
      }
    }
    if(change > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: holder}
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);



