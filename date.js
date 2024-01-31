function getNowDate(){
    const nowMs = Date.now();
    const nowDate = new Date(nowMs);
    const nowDateString = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
    return nowDateString;
}
function getDateBiggerNow(year){
    const nowMs = Date.now();
    const nowDate = new Date(nowMs);
    const nowDateString = `${nowDate.getFullYear() + year}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
    return nowDateString;
}
function getDateRange(startDate, endDate) {
    const dates = [];
    const currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  }
  