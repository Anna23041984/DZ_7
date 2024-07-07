function oneNumber(){

    for (let i=0; i<10; i++){
        let entryField = prompt('Enter a number > 100');

        if(entryField < 100){ continue;
            
        }else{
            console.log(entryField)
        }break;
   
    }
  
}
oneNumber()
