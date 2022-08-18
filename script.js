/* sobre o "continue": https://www.javatpoint.com/javascript-continue-statement#:~:text=The%20continue%20statement%20in%20JavaScript%20is%20used%20to,in%20for%20loop%2C%20while%20loop%2C%20and%20do-while%20loop.*/ 

function snapCrackle(maxValue){

    let string = ''

    for(let i = 1; i <= maxValue; i++){
            
        if(i % 2 !== 0 && i % 5 == 0){
                 (string += 'SnapCrackle, ')
                 continue
        }
        
        if(i % 2 !== 0){
            (string += 'Snap, ')
            continue
        }
        
        if(i % 5 == 0){
            (string += 'Crackle, ')
            continue
        }
        
        string += i + ', '
    }
     console.log(string)
}

snapCrackle(50)