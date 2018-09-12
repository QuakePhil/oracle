// JSON.stringify(oracle.history)
function traindata(train) {
  if (train) {
    return JSON.parse('[{},{},{},{"ddd":{"f":21,"d":38},"ddf":{"f":14,"d":6},"dff":{"f":15,"d":0},"fff":{"f":39,"d":15},"ffd":{"f":1,"d":14},"fdf":{"f":1,"d":12},"dfd":{"f":12,"d":6},"fdd":{"f":0,"d":20}},{"dddd":{"f":7,"d":32},"dddf":{"f":14,"d":6},"ddff":{"f":14,"d":0},"dfff":{"f":6,"d":9},"ffff":{"f":33,"d":6},"fffd":{"f":1,"d":14},"ffdf":{"f":0,"d":1},"fdfd":{"f":10,"d":2},"dfdf":{"f":1,"d":11},"dfdd":{"f":0,"d":6},"fddd":{"f":14,"d":6},"ddfd":{"f":2,"d":4},"ffdd":{"f":0,"d":14},"fdff":{"f":1,"d":0}},{"ddddd":{"f":5,"d":28},"ddddf":{"f":4,"d":3},"dddff":{"f":14,"d":0},"ddfff":{"f":5,"d":9},"dffff":{"f":6,"d":0},"fffff":{"f":27,"d":6},"ffffd":{"f":1,"d":5},"fffdf":{"f":0,"d":1},"ffdfd":{"f":1,"d":0},"fdfdf":{"f":0,"d":10},"dfdfd":{"f":9,"d":2},"fdfdd":{"f":0,"d":2},"dfddd":{"f":5,"d":1},"fdddf":{"f":10,"d":3},"dddfd":{"f":2,"d":4},"ddfdd":{"f":0,"d":4},"fdddd":{"f":2,"d":4},"fffdd":{"f":0,"d":14},"ffddd":{"f":9,"d":5},"ddfdf":{"f":1,"d":1},"dfffd":{"f":0,"d":9},"dfdff":{"f":1,"d":0},"fdfff":{"f":1,"d":0}},{"dddddd":{"f":5,"d":24},"dddddf":{"f":3,"d":2},"ddddff":{"f":4,"d":0},"dddfff":{"f":5,"d":9},"ddffff":{"f":5,"d":0},"dfffff":{"f":6,"d":0},"ffffff":{"f":21,"d":6},"fffffd":{"f":1,"d":5},"ffffdf":{"f":0,"d":1},"fffdfd":{"f":1,"d":0},"ffdfdf":{"f":0,"d":1},"fdfdfd":{"f":8,"d":2},"dfdfdf":{"f":0,"d":9},"dfdfdd":{"f":0,"d":2},"fdfddd":{"f":2,"d":0},"dfdddf":{"f":2,"d":3},"fdddfd":{"f":0,"d":3},"dddfdd":{"f":0,"d":4},"ddfddd":{"f":3,"d":1},"dfdddd":{"f":1,"d":0},"fddddf":{"f":1,"d":1},"ddddfd":{"f":2,"d":1},"fdddff":{"f":10,"d":0},"ffffdd":{"f":0,"d":5},"fffddd":{"f":9,"d":5},"ffdddd":{"f":1,"d":4},"fddddd":{"f":0,"d":4},"dddfdf":{"f":1,"d":1},"ddfdfd":{"f":1,"d":0},"ddfffd":{"f":0,"d":9},"dfffdd":{"f":0,"d":9},"ffdddf":{"f":8,"d":0},"ddfdff":{"f":1,"d":0},"dfdfff":{"f":1,"d":0},"fdffff":{"f":1,"d":0}},{"ddddddd":{"f":4,"d":21},"ddddddf":{"f":3,"d":2},"dddddff":{"f":3,"d":0},"ddddfff":{"f":4,"d":0},"dddffff":{"f":5,"d":0},"ddfffff":{"f":5,"d":0},"dffffff":{"f":5,"d":1},"fffffff":{"f":16,"d":5},"ffffffd":{"f":1,"d":5},"fffffdf":{"f":0,"d":1},"ffffdfd":{"f":1,"d":0},"fffdfdf":{"f":0,"d":1},"ffdfdfd":{"f":1,"d":0},"fdfdfdf":{"f":0,"d":8},"dfdfdfd":{"f":7,"d":2},"fdfdfdd":{"f":0,"d":2},"dfdfddd":{"f":2,"d":0},"fdfdddf":{"f":1,"d":1},"dfdddfd":{"f":0,"d":3},"fdddfdd":{"f":0,"d":3},"dddfddd":{"f":3,"d":1},"ddfdddf":{"f":1,"d":2},"ddfdddd":{"f":1,"d":0},"dfddddf":{"f":0,"d":1},"fddddfd":{"f":0,"d":1},"ddddfdd":{"f":0,"d":1},"dfdddff":{"f":2,"d":0},"fdddfff":{"f":1,"d":9},"fffffdd":{"f":0,"d":5},"ffffddd":{"f":1,"d":4},"fffdddd":{"f":1,"d":4},"ffddddd":{"f":0,"d":4},"fdddddd":{"f":1,"d":3},"dddddfd":{"f":2,"d":0},"ddddfdf":{"f":1,"d":1},"dddfdfd":{"f":1,"d":0},"ddfdfdf":{"f":0,"d":1},"dddfffd":{"f":0,"d":9},"ddfffdd":{"f":0,"d":9},"dfffddd":{"f":8,"d":1},"fffdddf":{"f":8,"d":0},"ffdddff":{"f":8,"d":0},"ffddddf":{"f":1,"d":0},"fddddff":{"f":1,"d":0},"dddfdff":{"f":1,"d":0},"ddfdfff":{"f":1,"d":0},"dfdffff":{"f":1,"d":0},"fdfffff":{"f":1,"d":0}},{"dddddddd":{"f":4,"d":18},"dddddddf":{"f":2,"d":2},"ddddddff":{"f":3,"d":0},"dddddfff":{"f":3,"d":0},"ddddffff":{"f":4,"d":0},"dddfffff":{"f":5,"d":0},"ddffffff":{"f":5,"d":0},"dfffffff":{"f":3,"d":2},"ffffffff":{"f":13,"d":3},"fffffffd":{"f":1,"d":4},"ffffffdf":{"f":0,"d":1},"fffffdfd":{"f":1,"d":0},"ffffdfdf":{"f":0,"d":1},"fffdfdfd":{"f":1,"d":0},"ffdfdfdf":{"f":0,"d":1},"fdfdfdfd":{"f":6,"d":2},"dfdfdfdf":{"f":0,"d":7},"dfdfdfdd":{"f":0,"d":2},"fdfdfddd":{"f":2,"d":0},"dfdfdddf":{"f":1,"d":1},"fdfdddfd":{"f":0,"d":1},"dfdddfdd":{"f":0,"d":3},"fdddfddd":{"f":2,"d":1},"dddfdddf":{"f":1,"d":2},"ddfdddfd":{"f":0,"d":2},"dddfdddd":{"f":1,"d":0},"ddfddddf":{"f":0,"d":1},"dfddddfd":{"f":0,"d":1},"fddddfdd":{"f":0,"d":1},"ddddfddd":{"f":1,"d":0},"ddfdddff":{"f":1,"d":0},"dfdddfff":{"f":1,"d":1},"fdddffff":{"f":1,"d":0},"ffffffdd":{"f":0,"d":5},"fffffddd":{"f":1,"d":4},"ffffdddd":{"f":0,"d":4},"fffddddd":{"f":0,"d":4},"ffdddddd":{"f":1,"d":3},"fddddddd":{"f":0,"d":3},"ddddddfd":{"f":2,"d":0},"dddddfdf":{"f":1,"d":1},"ddddfdfd":{"f":1,"d":0},"dddfdfdf":{"f":0,"d":1},"ddfdfdfd":{"f":1,"d":0},"fdfdddff":{"f":1,"d":0},"fdddfffd":{"f":0,"d":9},"dddfffdd":{"f":0,"d":9},"ddfffddd":{"f":8,"d":1},"dfffdddf":{"f":7,"d":0},"fffdddff":{"f":8,"d":0},"ffdddfff":{"f":0,"d":8},"dfffdddd":{"f":1,"d":0},"fffddddf":{"f":1,"d":0},"ffddddff":{"f":1,"d":0},"fddddfff":{"f":1,"d":0},"fddddddf":{"f":1,"d":0},"ddddfdff":{"f":1,"d":0},"dddfdfff":{"f":1,"d":0},"ddfdffff":{"f":1,"d":0},"dfdfffff":{"f":1,"d":0},"fdffffff":{"f":0,"d":1},"dffffffd":{"f":0,"d":1},"ffffdddf":{"f":1,"d":0}},{"ddddddddd":{"f":2,"d":17},"ddddddddf":{"f":2,"d":2},"dddddddff":{"f":2,"d":0},"ddddddfff":{"f":3,"d":0},"dddddffff":{"f":3,"d":0},"ddddfffff":{"f":4,"d":0},"dddffffff":{"f":5,"d":0},"ddfffffff":{"f":3,"d":2},"dffffffff":{"f":2,"d":1},"fffffffff":{"f":11,"d":2},"ffffffffd":{"f":1,"d":2},"fffffffdf":{"f":0,"d":1},"ffffffdfd":{"f":1,"d":0},"fffffdfdf":{"f":0,"d":1},"ffffdfdfd":{"f":1,"d":0},"fffdfdfdf":{"f":0,"d":1},"ffdfdfdfd":{"f":1,"d":0},"fdfdfdfdf":{"f":0,"d":6},"dfdfdfdfd":{"f":5,"d":2},"fdfdfdfdd":{"f":0,"d":2},"dfdfdfddd":{"f":2,"d":0},"fdfdfdddf":{"f":1,"d":1},"dfdfdddfd":{"f":0,"d":1},"fdfdddfdd":{"f":0,"d":1},"dfdddfddd":{"f":2,"d":1},"fdddfdddf":{"f":1,"d":1},"dddfdddfd":{"f":0,"d":2},"ddfdddfdd":{"f":0,"d":2},"fdddfdddd":{"f":1,"d":0},"dddfddddf":{"f":0,"d":1},"ddfddddfd":{"f":0,"d":1},"dfddddfdd":{"f":0,"d":1},"fddddfddd":{"f":1,"d":0},"ddddfdddf":{"f":0,"d":1},"dddfdddff":{"f":1,"d":0},"ddfdddfff":{"f":1,"d":0},"dfdddffff":{"f":1,"d":0},"fdddfffff":{"f":1,"d":0},"fffffffdd":{"f":0,"d":4},"ffffffddd":{"f":1,"d":4},"fffffdddd":{"f":0,"d":4},"ffffddddd":{"f":0,"d":4},"fffdddddd":{"f":1,"d":3},"ffddddddd":{"f":0,"d":3},"fdddddddd":{"f":2,"d":1},"dddddddfd":{"f":2,"d":0},"ddddddfdf":{"f":1,"d":1},"dddddfdfd":{"f":1,"d":0},"ddddfdfdf":{"f":0,"d":1},"dddfdfdfd":{"f":1,"d":0},"ddfdfdfdf":{"f":0,"d":1},"dfdfdddff":{"f":1,"d":0},"fdfdddfff":{"f":0,"d":1},"dfdddfffd":{"f":0,"d":1},"fdddfffdd":{"f":0,"d":9},"dddfffddd":{"f":8,"d":1},"ddfffdddf":{"f":7,"d":0},"dfffdddff":{"f":7,"d":0},"fffdddfff":{"f":0,"d":8},"ffdddfffd":{"f":0,"d":8},"ddfffdddd":{"f":1,"d":0},"dfffddddf":{"f":1,"d":0},"fffddddff":{"f":1,"d":0},"ffddddfff":{"f":1,"d":0},"fddddffff":{"f":1,"d":0},"dfffffffd":{"f":0,"d":2},"ffddddddf":{"f":1,"d":0},"fddddddff":{"f":1,"d":0},"dddddfdff":{"f":1,"d":0},"ddddfdfff":{"f":1,"d":0},"dddfdffff":{"f":1,"d":0},"ddfdfffff":{"f":1,"d":0},"dfdffffff":{"f":0,"d":1},"fdffffffd":{"f":0,"d":1},"dffffffdd":{"f":0,"d":1},"fffffdddf":{"f":1,"d":0},"ffffdddff":{"f":1,"d":0}},{"dddddddddd":{"f":2,"d":16},"dddddddddf":{"f":1,"d":1},"ddddddddff":{"f":2,"d":0},"dddddddfff":{"f":2,"d":0},"ddddddffff":{"f":3,"d":0},"dddddfffff":{"f":3,"d":0},"ddddffffff":{"f":4,"d":0},"dddfffffff":{"f":3,"d":2},"ddffffffff":{"f":2,"d":1},"dfffffffff":{"f":2,"d":0},"ffffffffff":{"f":9,"d":2},"fffffffffd":{"f":1,"d":1},"ffffffffdf":{"f":0,"d":1},"fffffffdfd":{"f":1,"d":0},"ffffffdfdf":{"f":0,"d":1},"fffffdfdfd":{"f":1,"d":0},"ffffdfdfdf":{"f":0,"d":1},"fffdfdfdfd":{"f":1,"d":0},"ffdfdfdfdf":{"f":0,"d":1},"fdfdfdfdfd":{"f":4,"d":2},"dfdfdfdfdf":{"f":0,"d":5},"dfdfdfdfdd":{"f":0,"d":2},"fdfdfdfddd":{"f":2,"d":0},"dfdfdfdddf":{"f":1,"d":1},"fdfdfdddfd":{"f":0,"d":1},"dfdfdddfdd":{"f":0,"d":1},"fdfdddfddd":{"f":1,"d":0},"dfdddfdddf":{"f":1,"d":1},"fdddfdddfd":{"f":0,"d":1},"dddfdddfdd":{"f":0,"d":2},"ddfdddfddd":{"f":1,"d":1},"dfdddfdddd":{"f":1,"d":0},"fdddfddddf":{"f":0,"d":1},"dddfddddfd":{"f":0,"d":1},"ddfddddfdd":{"f":0,"d":1},"dfddddfddd":{"f":1,"d":0},"fddddfdddf":{"f":0,"d":1},"ddddfdddfd":{"f":0,"d":1},"fdddfdddff":{"f":1,"d":0},"dddfdddfff":{"f":1,"d":0},"ddfdddffff":{"f":1,"d":0},"dfdddfffff":{"f":1,"d":0},"fdddffffff":{"f":1,"d":0},"ffffffffdd":{"f":0,"d":2},"fffffffddd":{"f":0,"d":4},"ffffffdddd":{"f":0,"d":4},"fffffddddd":{"f":0,"d":4},"ffffdddddd":{"f":1,"d":3},"fffddddddd":{"f":0,"d":3},"ffdddddddd":{"f":2,"d":1},"fddddddddd":{"f":0,"d":1},"ddddddddfd":{"f":2,"d":0},"dddddddfdf":{"f":1,"d":1},"ddddddfdfd":{"f":1,"d":0},"dddddfdfdf":{"f":0,"d":1},"ddddfdfdfd":{"f":1,"d":0},"dddfdfdfdf":{"f":0,"d":1},"ddfdfdfdfd":{"f":1,"d":0},"fdfdfdddff":{"f":1,"d":0},"dfdfdddfff":{"f":0,"d":1},"fdfdddfffd":{"f":0,"d":1},"dfdddfffdd":{"f":0,"d":1},"fdddfffddd":{"f":8,"d":1},"dddfffdddf":{"f":7,"d":0},"ddfffdddff":{"f":7,"d":0},"dfffdddfff":{"f":0,"d":7},"fffdddfffd":{"f":0,"d":8},"ffdddfffdd":{"f":0,"d":8},"dddfffdddd":{"f":1,"d":0},"ddfffddddf":{"f":1,"d":0},"dfffddddff":{"f":1,"d":0},"fffddddfff":{"f":1,"d":0},"ffddddffff":{"f":1,"d":0},"fddddfffff":{"f":1,"d":0},"ddfffffffd":{"f":0,"d":2},"dfffffffdd":{"f":0,"d":2},"fffddddddf":{"f":1,"d":0},"ffddddddff":{"f":1,"d":0},"fddddddfff":{"f":1,"d":0},"fddddddddf":{"f":1,"d":1},"dffffffffd":{"f":0,"d":1},"ddddddfdff":{"f":1,"d":0},"dddddfdfff":{"f":1,"d":0},"ddddfdffff":{"f":1,"d":0},"dddfdfffff":{"f":1,"d":0},"ddfdffffff":{"f":0,"d":1},"dfdffffffd":{"f":0,"d":1},"fdffffffdd":{"f":0,"d":1},"dffffffddd":{"f":1,"d":0},"ffffffdddf":{"f":1,"d":0},"fffffdddff":{"f":1,"d":0},"ffffdddfff":{"f":0,"d":1}}]')
  }
  return []
}

var Oracle = function(train) {
  this.tail = ''
  this.tailmax = 10

  this.history = traindata(train)
  // only makes sense to use history[3] and higher
  if (this.history.length == 0) for (let i = 0; i <= this.tailmax; ++i) {
    this.history.push({})
  }
}

// for train()
Oracle.prototype.dump = function() {
  console.log(JSON.stringify(this.history))
}

Oracle.prototype.predict = function() {
  let remember = undefined
  // find this.tail in this.history
  // if not found then 50/50 guess or try one less until 3
  for (let i = this.tailmax; i >= 3; i--) {
    let partial = this.tail.substring(this.tailmax - i, this.tailmax)
    remember = this.history[i][partial]
    // undefined will reduce to smaller tails if not enough found
    if (remember !== undefined && remember.f + remember.d < Math.pow(1.3, i)) {
      remember = undefined
    }
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
    let partial = this.tail.substring(this.tailmax - i, this.tailmax)
    if (partial.length >= i) {
      if (this.history[i][partial] === undefined) {
        this.history[i][partial] = {f: 0, d: 0}
      }
      this.history[i][partial][observed]++
    }
  }
//  console.log(this.history[i])

  this.tail += observed
  if (this.tail.length > this.tailmax) {
    this.tail = this.tail.substring(1)
  }
}
