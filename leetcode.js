// // var isValid = function(s) {
// //     let valid = false;
// //     for(let i =0; i<s.length;i++){
        
// //         if(s[i]=="("){
// //             if(s[i+1]==")"){
// //                 valid=true;
// //             }
// //             else{
// //                 return false;
// //             }
// //         }
        
        
// //         if(s[i]=="{"){
// //             if(s[i+1]=="}"){
// //                 valid=true;
// //             }
// //             else{
// //                 return false;
// //             }
// //         }
// //         if(s[i]=='['){
// //             if(s[i+1]==']'){
// //                 valid=true;
// //             }  
// //             else{
// //                 return false;
// //             }
// //         }
// //     }
    
// //     return valid;
// // };

// // let s = "()"
// // console.log(isValid(s));
// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] === 9) {
//             digits[i] = 0;
//         } else {
//             digits[i]++;
//             return digits;
//         }
//     }

//     // If all digits are 9, we need to add a new digit at the beginning
//     digits.unshift(1);
//     return digits;
// };

// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0];
// let result = plusOne(digits);
// console.log(result);