const title = document.querySelector("#title");
//document.getElement 하면 여러가지 나오는데 이거 많이쓸꺼임 쿼리~
//클래스는 .title id는 #title
console.log(title);

//DOM Document Object Module
/* 자바스크립트는 너의 html에 있는 모든 요소를
가지고 와서 그걸 객체로 바꿀 것임.*/

/*객체는 많은 키를 가지고 있음.
.~~ .xx .tt 등등 그 일례가 .innerHTML*/
title.innerHTML = "Hi From JS";


/*네 페이지에서 자바스크립트로 선택한 것은
객체가 되는 거지. 이 title 안에 또 뭐가 있을까?*/
//console.dir(title);
title.style.color = "red";
//onsole.dir(document);
document.title = "Change Title";

/*자바스크립트는 html, css를 바꾸고 싶어서 만들어 진게 아님.
이벤트에 반응하기 위해 만들어진것임.
웹사이트에서 발생하는 것들, 클릭 등등
좋은 사실은 이 이벤트를 중간에 가로챌 수 있다는것
window를 예시로 볼까?*/
function handleResize(){
    console.log("I have been resized");
}
/*window에 이벤트를 주려면 , 로 함수를 줘야해.
그런데 handleResize()라고 적으면 무조건 실행
handleResize 라고 적으면 사이즈가 변경될때 실행*/
window.addEventListener("resize", handleResize);

/*title을 클릭할때 이벤트를 부여해볼까
클릭하면 색깔이 바뀌는 거야 */
function handelClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handelClick);