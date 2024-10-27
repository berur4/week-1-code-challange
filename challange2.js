const checkSpeed = (speed) => {
    const speedLimit = 70;
    const demeritPointsPerSpeeding = 5;
    const maxDemeritPoints = 12;
  
    const calculateSpeedingPoints = () => Math.floor((speed - speedLimit) / demeritPointsPerSpeeding);
  
    const giveResult = (points) => {
        if (points <= 0) {
            return "OK";
        } else if (points <= maxDemeritPoints) {
            return `Points: ${points}`;
        } else {
            return "License suspended";
        }
    };
  
    return giveResult(calculateSpeedingPoints());
};
  

// These are use case scenarios.
console.log(checkSpeed(80)); 
console.log(checkSpeed(150));