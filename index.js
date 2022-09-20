function scuberGreetingForFeet(distance){
  let result
  if (distance <= 400) {
    result = `This one is on me!`;
  } else if (distance >= 400 && distance <= 2000) {
    result = `That will be twenty bucks.`;
  } else if (distance > 2000 && distance <= 2500) {
    result = `I will gladly take your thirty bucks.`;
  } else if (distance > 2500) {
    result = `No can do.`;
  }
  return result
}

/*function ternaryCheckCity(city){
  let output
  if (city = 'NYC') {
    output =  `Ok, sounds good.`;
  } else if !(city = 'NYC') {
    output = 'No go.'
  }
  return output
}*/

function ternaryCheckCity(city){
  let output
  city === 'NYC' ? (output = `Ok, sounds good.`) : (output = `No go.`);
  return output
}

function switchOnCharmFromTip(tip){
  let gratitude;
  switch (tip) {
    case `generous`:
      gratitude = `Thank you so much.`;
      break;
    case `not as generous`:
      gratitude =  `Thank you.`;
      break;
    default:
      gratitude = `Bye.`;
      break;
  }
  return gratitude;
}