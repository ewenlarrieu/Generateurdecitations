 export function generateCitation(array){
   const rand=  Math.floor(Math.random()* array.length)
   return array[rand]
}