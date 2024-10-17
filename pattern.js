let num =5;
for (i=1;i<=num;i++){
    var pattern="";
    for(j=1;j<=i;j++){
            pattern=pattern+"*";
    }
    console.log(pattern)
}

// Output
// *
// **
// ***
// ****
// *****

for (i=num;i>=1;i--){
    var pattern="";
    for(j=i;j>=1;j--){
            pattern=pattern+"*";
    }
    console.log(pattern)
}

// output
// *****
// ****
// ***
// **
// *

for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= num - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    console.log(pattern);
}
