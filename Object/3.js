function rmCensored(obj) {
  for (const entry of Object.entries(obj)) {
    const key = entry[0];
    const value = entry[1];
    
    if (key.includes("*") || value.includes("*") || value.includes("***")) {
      delete obj[key];
    }
    console.log(obj);
  }
}
rmCensored({
  "s*it": "m*rde",
  "sweet jesus": "doux jesus",
  "f***": "f***",
  omg: "w*sh",
  "marde": "dupo"
});

// Dla potomnych. Jak to będzie ktoś czytał w przyszłości to ja bym powiedział, że to jest dobrze zrobione.
{
}
