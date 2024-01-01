var isValid = function(s) {
    let valid = false;
    for(let i =0; i<s.length;i++){
        
        if(s[i]=="("){
            if(s[i+1]==")"){
                valid=true;
            }
            else{
                return false;
            }
        }
        
        
        if(s[i]=="{"){
            if(s[i+1]=="}"){
                valid=true;
            }
            else{
                return false;
            }
        }
        if(s[i]=='['){
            if(s[i+1]==']'){
                valid=true;
            }  
            else{
                return false;
            }
        }
    }
    
    return valid;
};

let s = "()"
console.log(isValid(s));