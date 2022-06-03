//시계만들기
/* 1. 표시해줄 요소 선택 (h2)
   2. text로 넣어줌 - 시, 분, 초
   3. 함수
*/

const clock = document.querySelector("#clock");
const todayDate = document.querySelector(".date");

// 시계 가져오기
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//날짜 가져오기
function getDate() {
  const today = new Date();
  const day = today.getDay();
  const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

  const todayString = today.toLocaleDateString();
  const todayDay = days[day];

  todayDate.innerText = `${todayString} ${todayDay}`;
}

getDate();




