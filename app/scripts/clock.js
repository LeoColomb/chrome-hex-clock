function refreshData() {
  'use strict';
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  if (h <= 9) { h = '0' + h; }
  if (m <= 9) { m = '0' + m; }
  if (s <= 9) { s = '0' + s; }

  document.getElementById('background').style.backgroundColor = '#' + h + m + s;
  document.getElementById('hrs').textContent = h;
  document.getElementById('min').textContent = m;
  document.getElementById('sec').textContent = s;

  setTimeout(refreshData, 1000);
}

refreshData(); // execute function
