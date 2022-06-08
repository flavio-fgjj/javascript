let users = [
  {
    id: 0,
    name: 'Flavio de Almeida Alvarenga', 
    gender: 'M', 
    age: 40, 
    state: 'SP',
    city: 'São Paulo'
  },
  {
    id: 1,
    name: 'Estela M F Alcântara', 
    gender: 'F', 
    age: 37, 
    state: 'RJ',
    city: 'Rio de Janeiro'
  },
  {
    id: 2,
    name: 'Joao Eugenio Alcântara Alvarenga', 
    gender: 'M', 
    age: 3, 
    state: 'RS',
    city: 'Porto Alegre'
  },
  {
    id: 3,
    name: 'Teo Snow', 
    gender: 'M', 
    age: 6, 
    state: 'SP',
    city: 'Campinas'
  },
  {
    id: 4,
    name: 'Maria Cecilia Alcântara Alvarenga', 
    gender: 'F', 
    age: 0, 
    state: 'PR',
    city: 'Curitiba'
  }
]

let products = [
  {
    id: 0,
    description: 'Monitor', 
    brand: 'LG',
  },
  {
    id: 1,
    description: 'Monitor', 
    brand: 'HP',
  },
  {
    id: 2,
    description: 'Mouse', 
    brand: 'XIAOMI',
  },
  {
    id: 3,
    description: 'Teclado', 
    brand: 'HP',
  },
  {
    id: 4,
    description: 'Headphone', 
    brand: 'JBL',
  },
  {
    id: 5,
    description: 'Headphone', 
    brand: 'XIAOMI',
  },
  {
    id: 6,
    description: 'Teclado', 
    brand: 'NEMESIS',
  }
]

//console.table(users)
//console.table(products)

const numbers = [5, 9, 99, 30, 51, 12, 7]

// Reduce
function groupBy(arr,key) {
  return arr.reduce(function(group, item) {
    // check if key exists
    if(!group[item[key]]) {
      group[item[key]] = []
    }
    
    // add key to the new group
    group[item[key]].push(item)

    // return the new group
    return group
  }, {})
}
console.log('')
console.log('')

const sumOfNumbers = numbers.reduce(function (group, actualValue) {
  return group + actualValue
}, 0)
console.log('### reduce example: sum of numbers ###')
console.log(sumOfNumbers)
console.log('')
console.log('')

const averageOfNumbers = numbers.reduce(function (group, actualValue, index, arr) {
  group+= actualValue

  if(index === arr.length -1) {
    return group / arr.length
  }

  return group
}, 0)
console.log('### reduce example: average of numbers ###')
console.log(averageOfNumbers)
console.log('')
console.log('')

const groupByGender = groupBy(users, 'gender')

console.log('### reduce example: group users by gender ###')
console.log(groupByGender)
console.log('')
console.log('')

const groupByBrand = groupBy(products, 'brand')

console.log('### reduce example: group products by brand ###')
console.log(groupByBrand)
console.log('')
console.log('')

const multiplicationUsingReduce = numbers.reduce(function(group, newValue) {
  return [ ...group, newValue * 2]
}, [])

console.log('### reduce example: return numbers multiplicated per 2 ###')
console.log('array', numbers)
console.log('new array', multiplicationUsingReduce)
console.log('')
console.log('')

// Map

const multiplicationUsingMap = numbers.map(function(value) {
  return value * 2
})
console.log('### map example: return numbers multiplicated per 2 ###')
console.log('array', numbers)
console.log('new array', multiplicationUsingMap)
console.log('')
console.log('')