//Map()
//performs a function for each element in an array, then stores the returned values in a new arrow

let storeSA = [50, 60, 70, 80, 90]

function toEuros(value) {
    value *= 0.057
    return value
}

let storeEUR = storeSA.map(toEuros)

console.log(storeEUR);