Solar System
To use, go here: https://efhiii.github.io/solar-system
# Controls
function keyPressed() {
  if(holding[1][UP_ARROW]){
    if (key === "w") {
      tickspf*=1.5;
    }
    else if (key === "t") {
      trailsPerFrame*=1.5;
    }
    else if (key === "T") {
      trailSize*=1.5;
    }
  }
  else if(holding[1][DOWN_ARROW]){
    if (key === "w") {
      tickspf/=1.5;
    }
    else if (key === "t") {
      trailsPerFrame/=1.5;
    }
    else if (key === "T") {
      trailSize/=1.5;
    }
  }
  else if(holding[0]["w"]){
    if (keyCode === UP_ARROW) {
      tickspf*=1.5;
    }
    else if (keyCode === DOWN_ARROW) {
      tickspf/=1.5;
      if(tickspf<1){tickspf=1;}
    }
    else if (keyCode === LEFT_ARROW) {
      tickspf=1;
    }
    else if (keyCode === RIGHT_ARROW) {
      tickspf=1000;
    }
  }
  else if(holding[0]["t"]){
    if (keyCode === UP_ARROW) {
      trailsPerFrame*=1.5;
    }
    else if (keyCode === DOWN_ARROW) {
      trailsPerFrame/=1.5;
    }
    else if (keyCode === LEFT_ARROW) {
      trailsPerFrame=1;
    }
    else if (keyCode === RIGHT_ARROW) {
      trailsPerFrame/=10;
    }
  }
  else if(holding[0]["T"]){
    if (keyCode === UP_ARROW) {
      trailSize*=1.5;
    }
    else if (keyCode === DOWN_ARROW) {
      trailSize/=1.5;
    }
  }
  else if (holding[1][SHIFT]){
    if (key === " ") {
      speed=1/tickspf/30*60*60*24*30;
    }
    else if (keyCode === BACKSPACE) {
      scle=5e-7;
      bubble=2e7;
      mlt=15;
    }
    else if (keyCode === CONTROL) {
      thetas[1]=-Math.PI/2;
    }
    else if (key === "E") {
      bubble*=15;
    }
    else if (key === "D") {
      bubble/=15;
    }
    else if (key === "T") {
      continuousTrail=!continuousTrail;
    }
    else if (key === "Q") {
      sensi*=1.5;
    }
    else if (key === "A") {
      sensi/=1.5;
    }
    else if (key === "R") {
      resetbodies();
    }
    else if (key === "N") {
      showNames=!showNames;
    }
    else if (key === "H") {
      for(var i=0;i<bodies.length;i++){
        bodies[i].hide=!bodies[i].hide;
      }
      bodies[focusBody].hide=false;
    }
    else if (key === "Z") {
      thetas=[0,0];
    }
  }
  else if (key === " ") {
    speed=1/tickspf/30;
  }
  else if (keyCode === BACKSPACE) {
    bubble=1;
    mlt=1;
  }
  else if (keyCode === CONTROL) {
    thetas[1]=0;
  }
  else if (key === "z") {
    thetas=[0,0];
    scle=5e-7;
    bubble=1;
    mlt=1;
  }
  else if (key === "o") {
    pts*=1.5;
    if(pts>1e10){pts=1e10;}
    for(var i=0;i<points.length;i++){
      while(points[i].length<pts){points[i].unshift([-1,-1]);}
    }
  }
  else if (key === "l") {
    pts/=1.5;
    if(pts<1){pts=1;}
    for(var i=0;i<points.length;i++){
      while(points[i].length>pts){points[i].shift();}
    }
  }
  else if (key === "r") {
    focusBody++;
    if(focusBody>=bodies.length){
      focusBody=0;
    }
  }
  else if (key === "f") {
    focusBody--;
    if(focusBody<0){
      focusBody=bodies.length-1;
    }
  }
  else if (key === "q") {
    mlt*=1.5;
  }
  else if (key === "a") {
    mlt/=1.5;
  }
  else if (key === "w") {
    speed*=1.5;
  }
  else if (key === "s") {
    speed/=1.5;
  }
  else if (key === "e") {
    bubble*=1.5;
  }
  else if (key === "d") {
    bubble/=1.5;
  }
  else if (key === "h") {
    bodies[focusBody].hide=!bodies[focusBody].hide;
  }
  else if (key === "n") {
    goToDate(new Date().getTime(),360*6);
  }
  else if (key === "1") {
    sunCenter=!sunCenter;
  }
  else if (key === "b") {
    extrude=!extrude;
  }
  else if (key === "t") {
    trails=!trails;
  }
  else if (keyCode === LEFT_ARROW) {
    speed*=-1;
  }
  else if (keyCode === UP_ARROW) {
    scle*=1.5;
    bubble/=1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scle/=1.5;
    bubble*=1.5;
  }
  holding[0][key]=true;
  holding[1][keyCode]=true;
}
