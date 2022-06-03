const logoutBtn = document.querySelector("#greeting button");

//로그아웃할때 함수
function logout() {
  localStorage.clear();
  location.reload();
}

//로그아웃할 때 이벤트
logoutBtn.addEventListener("click",logout());