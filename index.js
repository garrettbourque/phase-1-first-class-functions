function receivesAFunction(testFunc){
    testFunc();
}

function returnsANamedFunction(){
  
    return function func2(){console.log('test1');};
}

function returnsAnAnonymousFunction(){
    return ()=>{console.log('test1');

  
}}