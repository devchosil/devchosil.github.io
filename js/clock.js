//시계만들기
//setTimeout, setInterval
/* 1. 표시해줄 요소 선택 (h2)
   2. text로 넣어줌 - 시, 분, 초 넣어야겟네
   3. 함수 걸기..ㅇㅅㅇ..
*/

const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);   //여기서 getClock()하는거랑 ()떼는거랑 뭐가다르지..?

//모든 변수랑, 과정을.. 함수에 넣어주는거
//setInterval 실행할때




