// todo reduce to smaller tails if not enough found (currently if not any found)

// JSON.stringify(oracle.history)
// trained first on max = 3, then 4, etc
function traindata(train) {
  if (train) {
    return [] // need to regenerate this (or better yet update continuously somewhere) JSON.parse('[{},{},{},{"ddf":"fffffdddddfddfdddddd","dff":"fffdffffdddfdfdf","fff":"dddddffdffffdfdfd","ffd":"ddfffddddfdfddf","fdd":"ddfdfffdfdffddfdffff","ddd":"fffddddddfdffddffd","fdf":"dddddddfddddddfdfdddddfdfdddfdddddfddddfdd","dfd":"fdffffffffdffdffffdffdfffffffffffdffddfdfdffffd","dddd":"fddddfddddddfdddddfdfdf","dddf":"fffffffdddd","ddff":"fddfffdf","dfff":"dffffdffd","fffd":"dddddfff","ffdd":"fddddf","fddf":"fddddddd","dffd":"dfffffffffffff","fddd":"dddddfffff","ffdf":"dfddddddffdffdfd","fdfd":"dfddffffffffffffffdffdfffffdfd","dfdd":"ddffdfdfdfdf","ffff":"ffffffdddffdfdd","fdff":"dddddddddffddf","dfdf":"dfdddffddfddddfdddfddddfdddf","ddfd":"fdfdfddfdf","dfffd":"dddddddf","fffdd":"dddddddddfdddd","ffddd":"dddddffffdddddf","fdddd":"fddffddffff","ddddf":"fffffffffdd","dddff":"ffffffffdfffdff","ddfff":"fffddddddffffd","dffff":"dddffdffdd","ffffd":"ddddddfffd","ddddd":"ffff","fdddf":"ffffff","ddffd":"df","dffdd":"dd","ffddf":"f","fddff":"f","fffff":"ddffdfd","dffdf":"d","ffdfd":"fffff","fdfdf":"dddfddfdddddddddddddfddd","dfdfd":"dffdffffffffffffffffff","fdfdd":"dd","dfddd":"fd","fffdf":"dddd","dfdff":"fdff","fdfff":"fff","dddfd":"ff","ddfdf":"fd","fdffd":"d"},{"dddd":"fddddfddddddfdddddfdfdf","dddf":"fffffffdddd","ddff":"fddfffdf","dfff":"dffffdffd","fffd":"dddddfff","ffdd":"fddddf","fddf":"fddddddd","dffd":"dfffffffffffff","fddd":"dddddfffff","ffdf":"dfddddddffdffdfd","fdfd":"dfddffffffffffffffdffdfffffdfd","dfdd":"ddffdfdfdfdf","ffff":"ffffffdddffdfdd","fdff":"dddddddddffddf","dfdf":"dfdddffddfddddfdddfddddfdddf","ddfd":"fdfdfddfdf","dfffd":"dddddddf","fffdd":"dddddddddfdddd","ffddd":"dddddffffdddddf","fdddd":"fddffddffff","ddddf":"fffffffffdd","dddff":"ffffffffdfffdff","ddfff":"fffddddddffffd","dffff":"dddffdffdd","ffffd":"ddddddfffd","ddddd":"ffff","fdddf":"ffffff","ddffd":"df","dffdd":"dd","ffddf":"f","fddff":"f","fffff":"ddffdfd","dffdf":"d","ffdfd":"fffff","fdfdf":"dddfddfdddddddddddddfddd","dfdfd":"dffdffffffffffffffffff","fdfdd":"dd","dfddd":"fd","fffdf":"dddd","dfdff":"fdff","fdfff":"fff","dddfd":"ff","ddfdf":"fd","fdffd":"d"},{"dfffd":"dddddddf","fffdd":"dddddddddfdddd","ffddd":"dddddffffdddddf","fdddd":"fddffddffff","ddddf":"fffffffffdd","dddff":"ffffffffdfffdff","ddfff":"fffddddddffffd","dffff":"dddffdffdd","ffffd":"ddddddfffd","ddddd":"ffff","fdddf":"ffffff","ddffd":"df","dffdd":"dd","ffddf":"f","fddff":"f","fffff":"ddffdfd","dffdf":"d","ffdfd":"fffff","fdfdf":"dddfddfdddddddddddddfddd","dfdfd":"dffdffffffffffffffffff","fdfdd":"dd","dfddd":"fd","fffdf":"dddd","dfdff":"fdff","fdfff":"fff","dddfd":"ff","ddfdf":"fd","fdffd":"d"},{}]')
  }
  return []
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
      console.log('Remembered ' + JSON.stringify(remember) + ' for ' + partial)
      //console.log(partial, this.history[i], this.history[i][partial])
      break
    }
  }

  // default to 50/50 if nothing remembered
  if (remember === undefined) {
    let guess = Math.floor(Math.random() * 2)
    return guess == 0 ? 'd' : 'f'
  }
  return remember.f > remember.d ? 'f' : 'd'
}

Oracle.prototype.remember = function(observed) {
//  console.log(observed, this.tail)
  for (let i = this.tailmax; i >= 3; i--) {
    if (this.tail.length >= i) {
      if (this.history[i][this.tail] === undefined) {
        this.history[i][this.tail] = {f: 0, d: 0}
      }
      this.history[i][this.tail][observed]++
    }
  }
//  console.log(this.history[i])

  this.tail += observed
  if (this.tail.length > this.tailmax) {
    this.tail = this.tail.substring(1)
  }
}
