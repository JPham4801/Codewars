 
function calculateYears(principal, interest, tax, desired) {
    let year = 0
    
    while(principal < desired){
      let yearlyInterest = principal * interest
      let total = (principal + yearlyInterest) - (yearlyInterest * tax)
      principal = total
      year += 1
    }
    return year
}