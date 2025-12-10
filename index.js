let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;

let new1C = (day1TempF - 32) * 5/9;
let new2F = (day2TempC * 9/5) + 32;
let new3C = (day3TempF - 32) * 5/9;
let new4F = (day4TempC * 9/5) + 32;
let new5C = (day5TempF - 32) * 5/9;
let new6F = (day6TempC * 9/5) + 32;
let new7C = (day7TempF - 32) * 5/9;
let new8F = (day8TempC * 9/5) + 32;
let new9C = (day9TempF - 32) * 5/9;
let new10F = (day10TempC * 9/5) + 32;
let new11C = (day11TempF - 32) * 5/9;
let new12F = (day12TempC * 9/5) + 32;
let new13C = (day13TempF - 32) * 5/9;
let new14F = (day14TempC * 9/5) + 32;
let new15C = (day15TempF - 32) * 5/9;
let new16F = (day16TempC * 9/5) + 32;
let new17C = (day17TempF - 32) * 5/9;
let new18F = (day18TempC * 9/5) + 32;
let new19C = (day19TempF - 32) * 5/9;
let new20F = (day20TempC * 9/5) + 32;
let new21C = (day21TempF - 32) * 5/9;
let new22F = (day22TempC * 9/5) + 32;
let new23C = (day23TempF - 32) * 5/9;
let new24F = (day24TempC * 9/5) + 32;
let new25C = (day25TempF - 32) * 5/9;
let new26F = (day26TempC * 9/5) + 32;
let new27C = (day27TempF - 32) * 5/9;
let new28F = (day28TempC * 9/5) + 32;
let new29C = (day29TempF - 32) * 5/9;
let new30F = (day30TempC * 9/5) + 32;
let tot_temperature_in_fahrenheit = new2F + new4F + new6F + new8F + new10F + new12F + new14F + new16F + 
    new18F + new20F + new22F + new24F + new26F + new28F + new30F + day1TempF + day3TempF + day5TempF + day7TempF
    + day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF
    + day25TempF + day27TempF + day29TempF;
let tot_temperature_in_celsius = new1C + new3C + new5C + new7C + new9C + new11C + new13C +
    new15C + new17C +  new19C + new21C + new23C + new25C + new27C + new29C + day2TempC + day4TempC + day6TempC + day8TempC
    + day10TempC + day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC + day24TempC + day26TempC + 
    day28TempC + day30TempC
let totalDays = 30;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / totalDays
let avg_temperature_in_celsius = tot_temperature_in_celsius / totalDays














//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work
module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};