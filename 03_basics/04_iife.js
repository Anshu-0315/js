// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    
})();                     //ecplicitly we have to use ; because next func will not work error mesage will appear

(  (name) =>  {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
}   )('Anshuman')

