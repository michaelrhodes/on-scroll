module.exports = onscroll

function onscroll (view, cb) {
  var x, y, ox, oy, cx, cy, rid
  var stopped = false

  rid = requestAnimationFrame(init)

  function init () {
    x = view.scrollLeft
    y = view.scrollTop
    cb(x, y)
    rid = requestAnimationFrame(check)
  }

  function check () {
    if (stopped) return
    ox = x, oy = y
    x = view.scrollLeft
    y = view.scrollTop
    cx = ox !== x
    cy = oy !== y
    if (cx || cy) cb(x, y)
    rid = requestAnimationFrame(check)
  }

  return function stop () {
    cancelAnimationFrame(rid)
    stopped = true
  }
}
