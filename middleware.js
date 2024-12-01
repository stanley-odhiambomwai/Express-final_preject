// middleware/timeMiddleware.js
function workingHoursMiddleware(req, res, next) {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours(); 
  
    const isWorkingDay = day >= 1 && day <= 5; 
    const isWorkingHour = hour >= 9 && hour < 17; 
  
    if (isWorkingDay && isWorkingHour) {
      next(); 
    } else {
      res.send(`<h1>Sorry, the site is only available Monday to Friday, 9 AM to 5 PM.</h1>`);
    }
  }
  
  module.exports = workingHoursMiddleware;
  