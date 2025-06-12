
const humansarray = ['김성진', '김영재', '유현석'];
// const objectarray = [
//     {
//         name: '김성진',
//     },
//     {
//         name: '김영재',
//     },
//     {
//         name: '유현석',
//     },
// ];
// // push:마지막 배열에 추가
// const array = [1, 2, 3, 4, 5,];
// /*array.push(6);
//pop 마지막 배열을 삭제
// array.pop();*/
// array.unshift(0)
// array.shift()
// console.log(array);
// splice: 배열 안에 원하는 위치에 추가/삭제
// 추가
// array.splice(2, 0, 3);
// console.log(array);
// array.splice(2, 2);

// console.log(array);
//slice 배열일부를 복사
// const slice = array.slice(0,2 );
// console.log(slice)
// //concat: 배열합치기
// const array2 = [6, 7, 8,];
// // console.log(array.concat(array2));
// // console.log(...array, ...array2); //스프레드
// //indexof: 배열위치찾기
// console.log(array.indexOf()); //인덱스 위치
// console.log(array.indexOf(100)); // -1
// //includes: 배열안에 값이 있는지 확인
// console.log(array.includes(3));
// //map조건에 따라 새로운 배열을 만들어줌
// console.log(5 % 3);

// const newArray = array.map((e) => e * 2);
// console.log(newArray);
//fillter: 조건에 맞는 값만 추출(새로운 배열로 만들어줌)
// find: 조건에 맞는 첫번째 값을 반환
// const findArray = array.find((e) => e % 2 === 0);
// console.log(findArray);
// // reduce: 배열의 누적 계산
// // reduce((누적값, 현재값)=>{})
// const totalArray = array.reduce((acc, cur) => {
//     return acc * cur 
// })
// console.log(totalArray);

//sort: 배열을 정렬
// const nonSortArray = [100, 20, 4, 3000];
// const sortArray = nonSortArray.sort();
// const realSortArray = nonSortArray.sort((a, b) => a - b);
// console.log(realSortArray);





/*
const array1 = []
const array2 = []

for (let i = 0; i <= 100; i++) {
    array1.push(i);
}
for (let i = 101; i <= 200; i++) {
    array2.push(i);
}
const concatarray = array1.concat(array2);
console.log(concatarray);

const filterArray = concatarray.filter((e) => e % 2 === 0);
const sortArray = concatarray.sort((a, b) => b - a);
const reduceArray = sortArray.reduce((acc, cur) => {
    return acc + cur;
}
);
console.log(concatarray);
*/
//한번에 하는법


// for (let i = 0; i < array. length; i++){
//     console.log(array[i]);
// }

// for (const data of array) {
//     console.log(data);
// }
//for each 데이터값
// humansarray.forEach((data, index) =>{
//     console.log(data, index);
// })
//map
// const newArray = array.map ((data, index) => {
//     console.log(data, index);
//     return date * 2;
// });

// let sum = 0;
// let count = 0;

const scores = [85, 90, 50, 58, 92, 82, 61, 45, 70, 74]
const newScores = [];
// // 스코어 배열에 60점 이상인 점수만 골라서 뉴스코어에 넣어주고
// //그 배열에 평균 점수를 출력해주세요 필터나 맵을 사용하지않고 반복문으로
// for (let i = 0; i < scores.length ; i++) {
//     if (scores[i] >= 60) {
//         newScores.push(scores[i]);
//          sum += scores[i];
//         count++;
//    }
// }
// let average = 0;
// if (count > 0) {
//     average = sum / count;
// }

// 결과 출력
//console.log("60점 이상인 점수들 (newScore):", newScores);
//console.log("newScore 배열의 평균 점수:", average);

const array4 = [1, 2, 3, 4, 5];
console.log(array4.length);
scores.forEach((scores) => {
    if (scores >= 60) {

        newScores.push(scores);
    }
});
const totalscore = newScores.reduce((acc, cur) => {
    return acc + cur;

});
const average = totalscore / newScores.length;
console.log("newScore 배열의 평균 점수:", average);
console.log("60점 이상인 점수들 (newScore):", newScores);
