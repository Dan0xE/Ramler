const ramler = document.createElement('canvas');
let ramlerContext = ramler.getContext('2d');

function fillRamler() {
  ramlerContext.canvas.width = document.body.clientWidth;
  ramlerContext.canvas.height = document.body.clientHeight;

  const newRamler = document.createElement('canvas').getContext('2d');
  ramlerContext.ramlerContext = newRamler;
  newRamler.drawImage(newRamler.canvas, 0, 0);

  ramlerContext = newRamler;
}

while(true)setInterval(fillRamler, 1);