//이미지 가지고 오기
//이미지 이름으로 배열만들기
//..ㅇㅅㅇ...랜덤으로.. 출력..
//html주소ㅔ에 편입(?)

const images = ["1.jpg", "2.jpg", "3.jpg"];
const todaysImg = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${todaysImg}`;
document.body.appendChild(bgImg);

//createElement -> 태그 지정해서 HTML요소 만들어 편입시켜줌
//bgImg.src는 위의 태그 요소의 src 지정해줌
//body에 append 시킨다 