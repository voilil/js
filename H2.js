let country = {
    Belarus: -15,
    Russia: -20,
    Italia: 27,
    Spain: 18,
    Ukraine: -8,
    Latvia: 0,
    China: 4,
}
let kol = 0;
for (let key in country){
    if ( country[key] <= 0)
    console.log("Прогноз теспературы в некоторых странах: \n" + key + " " + country[key]);
    else
    console.log("Прогноз теспературы в некоторых странах: \n" + key + " + " + country[key]);
    if (key in country){
        kol = kol + 1;
    }
}
let sum = 0;
let sr = 0;
for ( let key in country){
    sum += country[key];
    sr = sum / kol;
    sr = Math.round(sr)
}
if ( sr <= 0)
alert("Средняя температура этих стран" + sr);
else
alert("Средняя температура этих стран + " + sr);
function maximum(term){
    var max = -1000;
    for (let key in term){
        if ( term[key] > max)
        max = term[key];
    }
    if ( max <= 0)
    alert("Максимальная температура: " + max);
    else
    alert("Максимальная температура: + " + max);
}
maximum(country);