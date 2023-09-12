export function test (element) {
    console.log(element)


}

export function swapText (element) {
    element.addEventListener( 'click', (e) => {
        element.textContent = 'Do not ignore these commandments!'
    })
}

export function rotate (element) {
    //let degrees = 0;
    element.addEventListener('click', (e) => {
        //degrees += 10
        //element.style = `transform: rotate(${degrees}deg)`

        element.classList.add('rotate')

        console.log('hallo')
    })
}