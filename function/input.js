let inputDirecktion = { x:0 , y:0}
let lastInputDirecktion = { x:0 , y:0}


export function getInputDirecktion() {
    lastInputDirecktion = inputDirecktion
    return inputDirecktion;
}

addEventListener('keydown', e => {
    switch(e.key) {
        
        case "w":
            if(lastInputDirecktion.y != 0) break

            inputDirecktion = {x:0 , y:-1}
            break
        case "s":
            if(lastInputDirecktion.y != 0) break

            inputDirecktion = {x:0 , y:1}
            break
        case "a":
            if(lastInputDirecktion.x != 0) break

            inputDirecktion = {x:-1 , y:0}
            break
        case "d":
            if(lastInputDirecktion.x != 0) break

            inputDirecktion = {x:1 , y:0}
            break
    }
    
})