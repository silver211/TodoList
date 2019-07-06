//jshint esversion:6
module.exports.getDate=
function (){
  let today=new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let day=today.toLocaleDateString("en-US",options);
  return day;
};
