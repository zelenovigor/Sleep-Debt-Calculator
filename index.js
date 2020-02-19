const getSleepHours = day => {
  if(day === 'monday') {
     return 6;
  } 
  else if(day === 'tuesday') {
    return 5;
  } 
  else if(day === 'wednesday'){
    return 5;
  }
  else if(day === 'thursday'){
  return 6;
  }
  else if(day === 'friday'){
  return 9;  
  }
  else if(day === 'saturday'){
  return 9;  
  }
  else(day === 'sunday'); 
  return 8;  
};

const getActualSleepHours = () => 
  getSleepHours('monday')+
  getSleepHours('tuesday')+
  getSleepHours('wednesday')+
  getSleepHours('thursday')+
  getSleepHours('friday')+
  getSleepHours('saturday')+
  getSleepHours('sunday');

console.log(getActualSleepHours());

getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
};

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours)
  {
    console.log('You`ve got the perfect amount of sleep!');
  }

  else if (actualSleepHours > idealSleepHours) {
    console.log('You`ve got ' + (idealSleepHours - actualSleepHours) + ' more hours this week');
  }

  else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest because you`ve slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week');
  }
  
  else{
    console.log('Error! Something went wrong, check you code');
  }

};

calculateSleepDebt();
