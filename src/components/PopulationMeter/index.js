import React from 'react';
import People from '../../people.svg';
import './styles.css';

function PopulationMeter(props) {

  const { times } = props;
  const timesMap = times.map(time => time.populartimes.map(day => day.data));
  
  console.log(timesMap);
  const peopleByWeekHours = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 0, 0]
  ];

  timesMap.forEach(place => {
    place.forEach((day, dayIndex) => {
      day.forEach((people, hourIndex) => {
        peopleByWeekHours[dayIndex][hourIndex] = peopleByWeekHours[dayIndex][hourIndex] + people
      })
    })
  });

  const today = new Date();
  const weekday = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const hour = today.getHours();
  const peopleNow = peopleByWeekHours[weekday][hour];
  
  let color = '';
  if(peopleNow >= 0 && peopleNow <= 20) {
    color = 'green';
  }
  if(peopleNow >= 20 && peopleNow <= 100) {
    color = 'yellow';
  }
  if(peopleNow >= 100) {
    color = 'red';
  }

  console.log(weekday);
  console.log(hour);

  return (
    <div className="Meter">
      <header className={`Meter-header ${color}`}>
        <div className="info-data">
          <span className="number">
            {peopleNow}
          </span>
          <img src={People} className="People-logo" alt="logo" />
        </div>
        <p>
          Extrema las precauciones para evitar el contagio
        </p>
      </header>
    </div>
  ) ;
}

export default PopulationMeter;
