import { data } from "./citation.js";
import { generateCitation } from "./display.js";
console.log(generateCitation(data))

document.getElementById('random').addEventListener('click',()=>{
    const citation = generateCitation(data)
    document.querySelector('p').textContent= citation.texte
    document.querySelector('h2').textContent= citation.auteur
})
