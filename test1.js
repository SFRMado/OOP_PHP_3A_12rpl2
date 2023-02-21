function main() {
  var distance = parseInt(readLine(), 10);
  //your code goes here
  var speed = 40;
  var minutes = 60;
  var TimeInHour = distance / speed;
  var TimeInMinutes = TimeInHour * minutes;

  console.log(TimeInMinutes);
}
