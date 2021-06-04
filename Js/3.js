// ex 3
function rockpaperscrissors(gracz1, gracz2) {
    const draw = "Remis!";
    const win1 = "Wygrana gracza nr 1";
    const win2 = "Wygrana gracza nr 2";
    const ex = "Nikt nie wygrał";

    if(gracz1 =="kamień" && gracz2 =="kamień") {
        return("remis")
    } else if(gracz1 =="papier" && gracz2 =="papier") {
        return("remis")
    } else if(gracz1 =="nożyce" && gracz2 =="nożyce") {
        return ("remis")
    } else if(gracz1 =="kamień" && gracz2 =="nożyce") {
        return (win1)
    } else if(gracz1 =="papier" && gracz2 =="kamień") {
        return(win1)
    } else if(gracz1 =="papier" && gracz2 =="nożyce") {
        return(win2)
    } else {
        return("Argument Error")
    }
        
}

console.log(rockpaperscrissors("papier", "nożyce"));