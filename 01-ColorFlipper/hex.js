const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener("click", () => {
    let hexColor = '#';

    // for 사용 되도록 X -> 고차함수 사용  
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNumber];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
})

// 책보고 써보고 싶었던 거 있으면 적용 해보기 ( 해보고 싶은 걸로 기능 구현 해보면서 연습. )
// count --, ++ 부분이나 컬러 부분이나 함수화해서 해보고
// js를 연습하는 목적
// 리팩토링 한다고 생각 
// 객체 리터럴
// 객체에 함수 넣어두고 어떤 action을 할 것인지를 정해두고 
// 객체[액션](); 이런식으로 실행하면 
// 모듈화 된 것 처럼.. !! 
// next-btn : () => {
//   어떤 동작을 할 것인지
// }
// 기본 js는 require를 사용하고 import는 안됨 
