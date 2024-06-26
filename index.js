function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function (){
    return "I am the best"
});
function returnsANamedFunction(){
    return function Namedfunction(){
        return "I am good!"
    }
}
function returnsAnAnonymousFunction(){
    return function (){
        return "I am good!"
    }
}
