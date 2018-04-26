import { observable, action, autorun, computed } from 'mobx';
// import { message } from 'antd-mobile';

const meetState = observable({
  count: 0,
  increment: action.bound(function(){
    this.count++
  }),
  decrement: action.bound(function() {
    this.count--
  }),
  square: computed(function(){
    return this.count * this.count
  })
})

const dispose = autorun(() => {
    // console.log("counter",meetState.count);
    // console.log("square",meetState.square);
    if(meetState.count < 0){
      meetState.count = 0;
      meetState.square = 0;
      throw new Error("count less than 0")
    }
})

dispose.onError(e => {
  // message.warning("count不能小于0");
})

export default meetState;
