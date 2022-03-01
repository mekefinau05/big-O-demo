let x = 20
// time: O(1)
// space: O(1)



let a = 5 
let b = 'five'
let c = true
// 1 + 1 + 1 ==> O(3) ==> O(1)

// time: O(1)
// space: O(1)




let fullArr = [1, 2, 3, 4, 5]

function ourFunc(arr){
  let emptyArr =[]

  arr.forEach(num => {
    emptyArr.push(num * 2)
  })
  
  return emptyArr
}

ourFunc(fullArr)

// time 1+ (1 * n) + 1 ==> 2 + n ==> O(n)
// space: O(n)




function ourFunc2(arr){
  let emptyArr = []

  for (let i = 0; i<4; i++){
    emptyArr.push(arr[i])
  }

  return emptyArr
}

// time: 1 + (1 * 4) + 1 ==> 2 + 4 ==> O(6) ==> O(1)
// space: O(n)





let limit = 10
for (let i = 0; i< limit; i++){
  for (let j = 0; j< limit; j++){
    console.log(i, j)
    count++
  }
}
console.log(count)

//time: 1 + 1 + n * n ==> 2 + n ^2 ==> O(n^2)
//space: O(1)