const loggerMiddleware = (store) => (next) => (action) => {
  //미들웨어 기본구조
  console.group(action && action.type); //액션이 맞으면 타입으로 log를 그룹화함
  console.log("이전상태", store.getState());
  console.log("액션", action);
  next(action); //다음미들웨어 혹은 리듀서에게 전달
  // next(action)을 호룰하면 그 다음 처리해야 할 미들웨어에게 액션을 남겨주고 리듀서에게 액션을 넘겨준다는 것

  console.log("다음상태", store.getState());
  console.groupEnd(); //그룹 끝
};

export default loggerMiddleware;

// const loggerMiddleware = function loggerMiddleware(store){
//     return function(next){
//       return function(action){
//         //미들웨어 기본 구조
//       };
//     };
//   };
