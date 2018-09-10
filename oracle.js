// todo, refactor to use {f: 99, d: 99} instead of 'ffff..ddd..'

// JSON.stringify(oracle.history)
// trained first on max = 3, then 4, etc
function traindata(train) {
  if (train) {
    return JSON.parse('[{},{},{},{"ddf":"fffffdddddfddfdddddd","dff":"fffdffffdddfdfdf","fff":"dddddffdffffdfdfd","ffd":"ddfffddddfdfddf","fdd":"ddfdfffdfdffddfdffff","ddd":"fffddddddfdffddffd","fdf":"dddddddfddddddfdfdddddfdfdddfdddddfddddfdd","dfd":"fdffffffffdffdffffdffdfffffffffffdffddfdfdffffd","dddd":"fddddfddddddfdddddfdfdf","dddf":"fffffffdddd","ddff":"fddfffdf","dfff":"dffffdffd","fffd":"dddddfff","ffdd":"fddddf","fddf":"fddddddd","dffd":"dfffffffffffff","fddd":"dddddfffff","ffdf":"dfddddddffdffdfd","fdfd":"dfddffffffffffffffdffdfffffdfd","dfdd":"ddffdfdfdfdf","ffff":"ffffffdddffdfdd","fdff":"dddddddddffddf","dfdf":"dfdddffddfddddfdddfddddfdddf","ddfd":"fdfdfddfdf","dfffd":"dddddddf","fffdd":"dddddddddfdddd","ffddd":"dddddffffdddddf","fdddd":"fddffddffff","ddddf":"fffffffffdd","dddff":"ffffffffdfffdff","ddfff":"fffddddddffffd","dffff":"dddffdffdd","ffffd":"ddddddfffd","ddddd":"ffff","fdddf":"ffffff","ddffd":"df","dffdd":"dd","ffddf":"f","fddff":"f","fffff":"ddffdfd","dffdf":"d","ffdfd":"fffff","fdfdf":"dddfddfdddddddddddddfddd","dfdfd":"dffdffffffffffffffffff","fdfdd":"dd","dfddd":"fd","fffdf":"dddd","dfdff":"fdff","fdfff":"fff","dddfd":"ff","ddfdf":"fd","fdffd":"d"},{"dddd":"fddddfddddddfdddddfdfdf","dddf":"fffffffdddd","ddff":"fddfffdf","dfff":"dffffdffd","fffd":"dddddfff","ffdd":"fddddf","fddf":"fddddddd","dffd":"dfffffffffffff","fddd":"dddddfffff","ffdf":"dfddddddffdffdfd","fdfd":"dfddffffffffffffffdffdfffffdfd","dfdd":"ddffdfdfdfdf","ffff":"ffffffdddffdfdd","fdff":"dddddddddffddf","dfdf":"dfdddffddfddddfdddfddddfdddf","ddfd":"fdfdfddfdf","dfffd":"dddddddf","fffdd":"dddddddddfdddd","ffddd":"dddddffffdddddf","fdddd":"fddffddffff","ddddf":"fffffffffdd","dddff":"ffffffffdfffdff","ddfff":"fffddddddffffd","dffff":"dddffdffdd","ffffd":"ddddddfffd","ddddd":"ffff","fdddf":"ffffff","ddffd":"df","dffdd":"dd","ffddf":"f","fddff":"f","fffff":"ddffdfd","dffdf":"d","ffdfd":"fffff","fdfdf":"dddfddfdddddddddddddfddd","dfdfd":"dffdffffffffffffffffff","fdfdd":"dd","dfddd":"fd","fffdf":"dddd","dfdff":"fdff","fdfff":"fff","dddfd":"ff","ddfdf":"fd","fdffd":"d"},{"dfffd":"dddddddf","fffdd":"dddddddddfdddd","ffddd":"dddddffffdddddf","fdddd":"fddffddffff","ddddf":"fffffffffdd","dddff":"ffffffffdfffdff","ddfff":"fffddddddffffd","dffff":"dddffdffdd","ffffd":"ddddddfffd","ddddd":"ffff","fdddf":"ffffff","ddffd":"df","dffdd":"dd","ffddf":"f","fddff":"f","fffff":"ddffdfd","dffdf":"d","ffdfd":"fffff","fdfdf":"dddfddfdddddddddddddfddd","dfdfd":"dffdffffffffffffffffff","fdfdd":"dd","dfddd":"fd","fffdf":"dddd","dfdff":"fdff","fdfff":"fff","dddfd":"ff","ddfdf":"fd","fdffd":"d"},{}]')
  }
  return []
}

function randomchar(string) {
  return string[Math.floor(Math.random() * string.length)]
}

var Oracle = function(train) {
  this.tail = ''
  this.tailmax = 5

  this.history = traindata(train)
  // only makes sense to use history[3] and higher
  if (this.history.length == 0) for (let i = 0; i <= this.tailmax; ++i) {
    this.history.push({})
  }
}

Oracle.prototype.predict = function() {
  let remember = undefined
  // find this.tail in this.history
  // if not found then 50/50 guess or try one less until 3
  for (let i = this.tailmax; i >= 3; i--) {
    let partial = this.tail.substring(this.tailmax - i, this.tailmax)
    remember = this.history[i][partial]
    if (remember !== undefined) {
      console.log('Remembered ' + remember + ' for ' + partial)
      //console.log(partial, this.history[i], this.history[i][partial])
      break
    }
  }

  // default to 50/50 if nothing remembered
  if (remember === undefined) {
    remember = 'df'
  }
  return randomchar(remember)
}

Oracle.prototype.remember = function(observed) {
//  console.log(observed, this.tail)
  for (let i = this.tailmax; i >= 3; i--) {
    if (this.tail.length >= i) {
      if (this.history[i][this.tail] === undefined) {
        this.history[i][this.tail] = ''
      }
      this.history[i][this.tail] += observed // TODO: sort|uniq or gcd this value to save memory
    }
  }
//  console.log(this.history[i])

  this.tail += observed
  if (this.tail.length > this.tailmax) {
    this.tail = this.tail.substring(1)
  }
}
