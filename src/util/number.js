const Num = {
  numToLetter(num) {
    return String.fromCharCode(96 + num)
  },

  letterToNum(letter) {
    return letter.charCodeAt(0) -  96
  }
}

export default Num
