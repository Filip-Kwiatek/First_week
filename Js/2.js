// ex 2

function rockpaperscrissors(gracz1, gracz2) {
    const draw = "Remis!";
    const win1 = "Wygrana gracza nr 1";
    const win2 = "Wygrana gracza nr 2";
    const ex = "Nikt nie wygrał";

    if(gracz1 =="kamień" && gracz2 =="kamień") {
        console.log("remis")
    } else if(gracz1 =="papier" && gracz2 =="papier") {
        console.log("remis")
    } else if(gracz1 =="nożyce" && gracz2 =="nożyce") {
        console.log("remis")
    } else if(gracz1 =="kamień" && gracz2 =="nożyce") {
        console.log(win1)
    } else if(gracz1 =="papier" && gracz2 =="kamień") {
        console.log(win1)
    } else if(gracz1 =="papier" && gracz2 =="nożyce") {
        console.log(win2)
    } else {
        console.log("Błąd")
    }
        
}

console.log(rockpaperscrissors("papier", "nożyce"));