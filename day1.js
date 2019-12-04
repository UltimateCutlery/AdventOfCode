
//https://adventofcode.com/2019/day/1

const input = [90859,127415,52948,92106,106899,72189,60084,79642,138828,103609,149073,127749,86976,104261,139341,81414,102622,131030,
    120878,96809,130331,119212,52317,108990,136871,67279,76541,113254,77739,75027,53863,97732,65646,87851,63712,92660,131821,127837,
    52363,70349,66110,132249,50319,125948,98360,137675,61957,143540,137402,135774,51376,144833,118646,128136,141140,82856,63345,143617,
    79733,73449,116126,73591,63899,110409,79602,77485,64050,131760,90509,112728,55181,55329,98597,126579,108227,80707,92962,90396,123775,
    125248,128814,64593,63108,76486,107135,111064,142569,68579,149006,52258,143477,131889,142506,146732,58663,92013,62410,71035,51208,
    66372]; // list of module masses

var totalmodulefuel=null;

function fuelformula(mass){
    return Math.floor(mass/3)-2;} //formula to determine fuel needed per module

input.forEach(function(mass){
    totalmodulefuel += fuelformula(mass); //sum of fuel for all modules
});

console.log('module fuel required: ' + totalmodulefuel);//part 1 result

//Part 2

var totalfuel=null; //but the fuel has mass and therefore we need additional fuel

function calctotalfuel(mass) {
    let fuel = fuelformula(mass);
    return fuel > 0 ? fuel += calctotalfuel(fuel) : 0; // if fuel > 0 then it goes through the equation again
  }
  
  input.forEach(function(mass){
      totalfuel += calctotalfuel(mass)});
  
  console.log('total fuel required: ' + totalfuel);//part 2 result, sum of the fuel needed for each module and the fuel needed for the additional fuel

