function averageMinMax(amm) {
    let min = Math.min.apply(null, amm);
    console.log(min);
    let max = Math.max(...amm);
    console.log(max);
    let average = amm.length;
    console.log(eval(amm.join('+'))/average);
}

averageMinMax([30, 20, 100]);