import './style.css'
import {test, swapText, rotate} from './test.js'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <img src='img/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'></img>
    <h1> Learn and then win! </h1>
    <p> Panic rolling takes you nowhere, just git gud! </p>
    
  </main>

`

test(document.querySelector('#app'))
swapText(document.querySelector('h1'))
rotate(document.querySelector('img'))