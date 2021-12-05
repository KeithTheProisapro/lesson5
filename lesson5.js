var app = new PIXI.Application({
    width:800,
    height:800,
    backgroundColor:0xFFC0CB
})
document.body.appendChild(app.view);

var run1 = PIXI.Texture.from("run1.png");
var run2 = PIXI.Texture.from("run2.png");
var run3 = PIXI.Texture.from("run3.png");
var run4 = PIXI.Texture.from("run4.png");
var run5 = PIXI.Texture.from("run5.png");
var run6 = PIXI.Texture.from("run6.png");
var run7 = PIXI.Texture.from("run7.png");

app.stage.addChild(run1)