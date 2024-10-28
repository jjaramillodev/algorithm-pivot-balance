// array de números, con lenght impar
const numbers = [1, 2, 3, 4, 5, 10]

// función para encontrar el pivote balanceado

// function findPivotBalance (numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     let left = 0
//     let right = 0
//     for (let j = 0; j < numbers.length; j++) {
//       if (j < i) left += numbers[j]
//       if (j > i) right += numbers[j]
//     }
//     if (left === right) return i
//   }
//   return -1
// }

function findPivotBalance (numbers) {
  // calculamos el total de la suma de todos los números
  const total = numbers.reduce((acc, number) => acc + number, 0)
  // inicializamos la suma de la izquierda en 0
  let left = 0
  // recorrremos los números
  for (let i = 0; i < numbers.length; i++) {
    // la suma de la derecha es el total menos la suma de la izquierda y el elemento actual
    const right = total - left - numbers[i]
    // si la suma de la izquierda es igual a la suma de la derecha, retornamos el índice
    if (left === right) return i
    // actualizar la suma de la izquierda sumando el elemento actual
    left += numbers[i]
  }
  return -1
}

console.log(findPivotBalance(numbers))