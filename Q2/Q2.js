const breakfast = "7:00 a.m";
const lunch = "12:00 p.m";
const dinner = "7:00 p.m";

function convertToMinutes(time) {
  const [hour, minute] = time.split(":");
  const isPM = time.includes("p.m");
  let totalMinutes = (parseInt(hour) % 12) * 60 + parseInt(minute);

  if (isPM) {
    totalMinutes += 12 * 60;
  }

  return totalMinutes;
}

function calculateTimeDifference(startTime, endTime) {
  const startMinutes = convertToMinutes(startTime);
  let endMinutes = convertToMinutes(endTime);

  if (endMinutes < startMinutes) {
    endMinutes += 24 * 60;
  }

  const timeDifferenceInMinutes = endMinutes - startMinutes;
  const hours = Math.floor(timeDifferenceInMinutes / 60);
  const minutes = timeDifferenceInMinutes % 60;

  return { hours, minutes };
}

function calculateTimeToNextMeal(timeString) {
  const mealTimes = [
    { name: "breakfast", time: "7:00 a.m" },
    { name: "lunch", time: "12:00 p.m" },
    { name: "dinner", time: "7:00 p.m" },
  ];

  const parsedTime = timeString.match(
    /^(\d{1,2}):(\d{2})\s?([ap]\.m\.?)$/i
  );

  if (!parsedTime) {
    console.log("Invalid time format");
    return;
  }

  const inputHours = parseInt(parsedTime[1], 10);
  const inputMinutes = parseInt(parsedTime[2], 10);
  const isPM = parsedTime[3].toLowerCase() === "p.m";

  const inputTimeInMinutes = inputHours * 60 + inputMinutes;

  //the input is the exact time of the meal
  for (const meal of mealTimes) {
    if (meal.time == timeString) {
      return console.log(`It's ${meal.name} time!`);
    }
  }
  if (!isPM) {
    //it's a.m
    if (inputHours < 7) {
      const diff = calculateTimeDifference(timeString, "7:00 a.m");
      console.log(
        `${diff.hours} hours and ${diff.minutes} until next meal, breakfast`
      );
    } else {
      const diff = calculateTimeDifference(timeString, "12:00 p.m");
      console.log(
        `${diff.hours} hours and ${diff.minutes} until next meal, lunch`
      );
    }
  } else {
    //it's p.m
    if (inputHours < 7) {
      const diff = calculateTimeDifference(timeString, "7:00 p.m");
      console.log(
        `${diff.hours} hours and ${diff.minutes} until next meal, dinner`
      );
    } else {
      const diff = calculateTimeDifference(timeString, "7:00 a.m");
      console.log(
        `${diff.hours} hours and ${diff.minutes} until next meal, breakfast`
      );
    }
  }
}

const currentTime = "1:00 a.m";
calculateTimeToNextMeal(currentTime);
