function subDigits(main) {
    let check = (main % 10);
    console.log(check);

    let check2 = (Math.round(main/10));
    console.log(check2);

    let sum = main - check - check2;
    console.log(sum);
    
}

function subDigits2(main) {
    let check = (main % 100);
    console.log(check);

    let check2 = (Math.round(main/100));
    console.log(check2);

    let check3 = (Math.round(main/100));
    console.log(check3);

    let sum = main - check2- check3;
    console.log(sum);
    
}
function subDigits3(main) {
    let check = (main % 1000000);
    console.log(check);

    let check2 = (Math.round(main/1000000));
    console.log(check2);

    let check3 = (Math.round(main/1000000));
    console.log(check3);

    let sum = main - check2;
    console.log(sum);
    
}

subDigits2(451);
subDigits(12);
subDigits3(4000000);
// nie umiałem dalej obstawiam, że trzeba było zastosować pętle