function setup(){
    createCanvas(400, 269);
    background(3, 4, 9);

    //loadImage('https://raw.githubusercontent.com/lsudigitalart/2019-2210-hw2/master/images/lich_04.png', img =>{
      //  tint(255, 80)
      //  image(img, 0, 0, 400, 269)
    //});

    //strokeWeight(5);
    //point(width / 5, height /2);

    //ellipse(10, 10, 10);
    //line(0, 0, width, height);

    stroke(0);
    strokeWeight(4);
    //fill(0, 99, 99, 200);
    //rect(50, 50, 50, 50);

    //fill("crimson");
    //arc(25, 45, 100, 100, radians(0), radians(90));

    //stroke("beige");
    //noFill();
    //arc(300, 200, 100, 100, radians(0), radians(90));

    //stroke("magenta");
    //curve(0, 0, 0, height /2, width, height /2, width, height);

    //stroke("black");
    //fill("blue");
    //beginShape();
    //double up on endpoints
    //curveVertex(50, 50);
    //curveVertex(50, 50);
    //curveVertex(width -50, height -50);
    //curveVertex(width / 2, 100);
    //curveVertex(width / 2, 100);
    //endShape();

    fill(1, 17, 79);
    noStroke();
    //ellipseMode(CENTER);
    //rotate(HALF_PI);
    ellipse(0, 130, 60, 100, radians(0), radians(90));
    ellipse(28, 210, 120, 170);

    stroke("black");
    strokeWeight(1);
    fill(2, 0, 5);
    beginShape();
    curveVertex(20, 115);
    curveVertex(20, 115);
    curveVertex(-4, 87);
    curveVertex(-4, 131);
    curveVertex(-4, 131);
    endShape();

    stroke(2, 0, 5);
    strokeWeight(3);
    beginShape();
    curveVertex(16, 147);
    curveVertex(16, 147);
    curveVertex(20, 165);
    curveVertex(47, 185);
    curveVertex(84, 199);
    curveVertex(40, 175);
    curveVertex(87, 201);
    curveVertex(87, 201);
    endShape();

    beginShape();
    curveVertex(4, 152);
    curveVertex(4, 152);
    curveVertex(11, 171);
    curveVertex(28, 192);
    curveVertex(52, 213);
    curveVertex(64, 210);
    curveVertex(63, 194);
    curveVertex(63, 194);
    endShape();

    beginShape();
    curveVertex(-3, 161);
    curveVertex(-3, 161);
    curveVertex(52, 220);
    curveVertex(52, 220);
    curveVertex(58, 213);
    curveVertex(58, 213);
    endShape();

    beginShape();
    curveVertex(-2, 168);
    curveVertex(-2, 168);
    curveVertex(-1, 186);
    curveVertex(50, 228);
    curveVertex(67, 232);
    curveVertex(67, 232);
    endShape();

    beginShape();
    curveVertex(-2, 187);
    curveVertex(-2, 187);
    curveVertex(-3, 206);
    curveVertex(24, 229);
    curveVertex(56, 244);
    curveVertex(56, 244);
    curveVertex(49, 235);
    curveVertex(48, 228);
    curveVertex(48, 228);
    endShape();

    beginShape();
    curveVertex(-2, 216);
    curveVertex(-2, 216);
    curveVertex(-2, 233);
    curveVertex(50, 255);
    curveVertex(50, 255);
    curveVertex(21, 237);
    curveVertex(21, 237);
    curveVertex(-2, 217);
    curveVertex(-2, 217);
    endShape();

    beginShape();
    curveVertex(-2, 254);
    curveVertex(-2, 254);
    curveVertex(-2, 269);
    curveVertex(18, 269);
    curveVertex(8, 257);
    curveVertex(8, 257);
    endShape();

    beginShape();
    curveVertex(19, 258);
    curveVertex(19, 258);
    curveVertex(25, 268);
    curveVertex(25, 268)
    endShape();

    fill(213, 212, 208);
    quad(98, 196, 149, 270, 139, 270, 98, 212);
    quad(101, 221, 136, 269, 125, 269, 101, 235);
    quad(202, 269, 195, 261, 191, 243, 200, 237, 222, 269);

    beginShape();
    vertex(202, 269);
    vertex(195, 261);
    vertex(191, 243);
    vertex(200, 237);
    vertex(222, 269);
    endShape();

    beginShape();
    vertex(325, 269);
    vertex(291, 228);
    vertex(294, 216);
    vertex(269, 186);
    vertex(275, 180);
    vertex(279, 173);
    vertex(284, 160);
    vertex(377, 269);
    endShape();

    beginShape();
    vertex(41, 52);
    vertex(75, 270);
    vertex(110, 270);
    vertex(74, 51);
    endShape();

    noStroke();
    beginShape();
    curveVertex(75, 54);
    curveVertex(75, 54);
    curveVertex(89, 78);
    curveVertex(104, 84);
    curveVertex(102, 53);
    curveVertex(102, 53);
    endShape();
    quad(102, 84, 400, 76, 400, 49, 102, 53);

    stroke(2, 0, 5);
    fill(161, 3, 3);
    quad(-2, 48, 402, 36, 402, 44, -2, 56);
    quad(-2, 26, 402, 15, 402, 32, -2, 44);
    strokeWeight(6);
    quad(-2, -1, 402, -1, 402, 12, -2, 23);

}

function draw(){

    print(mouseX, mouseY);

}