class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId =0
    
  }
  startClick(callback) {
    setInterval( ()=> {
      this.currentTime =this.currentTime+1
    
    }, 1000)

  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  };

  
   getSeconds (){

    return this.currentTime%60;
   }
  
  
  twoDigitsNumber() {
    return ('0' +Number ).slice(-2)
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
  this.currentTime=0
  }
  splitClick() {
    let time = this.twoDigitsNumber(this.getMinutes())
    let seconds =this.twoDigitsNumber(this.getSeconds())
  return `${minutes}:${seconds}`
  }
}
