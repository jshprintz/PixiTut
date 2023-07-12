// Description: This is the main file for the application
const Application = PIXI.Application;
// Instantiate the application
const app = new Application({
  width: 500,
  height: 500,
  transparent: true,
  resolution: 1,
});
// Set the background color
app.renderer.background.color = 0x061639;
// Set the view to be full screen
app.renderer.resize(innerWidth, innerHeight);
// Set the view to be absolute
app.renderer.view.style.position = "absolute";
// Add the app.view to the DOM
document.body.appendChild(app.view);

// Create a new Graphics object
const Graphics = PIXI.Graphics;
// Instantiate a rectangle
const rectangle = new Graphics();

// Draw a rectangle
rectangle
  .beginFill(0x66ccff)
  .lineStyle(4, 0xefefef, 1)
  .drawRect(200, 200, 100, 120)
  .endFill();
// Add the rectangle to the stage
app.stage.addChild(rectangle);

const poly = new Graphics();
poly
  .beginFill(0x66ccff)
  .lineStyle(4, 0xefefef, 1)
  .drawPolygon([400, 50, 800, 150, 50, 400, 300, 300])

  .endFill();
poly.x = 200;
poly.y = 200;
app.stage.addChild(poly);

const circle = new Graphics();
circle
  .beginFill(0x66ccff)
  .lineStyle(4, 0xefefef, 1)
  .drawCircle(50, 0, 50)
  .endFill();
circle.x = 200;
circle.y = 200;
app.stage.addChild(circle);

const line = new Graphics();
line
  .lineStyle(4, 0xefefef, 1)
  .moveTo(0, 0)
  .lineTo(0, 100)
  .lineTo(100, 100)
  .lineTo(100, 0);

line.x = 10;
line.y = 10;

app.stage.addChild(line);

const torus = new Graphics();
torus
  .beginFill(0x66ccff)
  .lineStyle(4, 0xefefef, 1)
  .drawTorus(100, 300, 80, 100, 0, Math.PI / 2)
  .endFill();

torus.x = 20;
torus.y = 20;
app.stage.addChild(torus);

const star = new Graphics();
star
  .beginFill(0x66ccff)
  .lineStyle(4, 0xefefef, 1)
  .drawStar(300, 300, 6, 50)
  .endFill();

star.x = 20;
star.y = 20;
app.stage.addChild(star);

const style = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 36,
  fill: "white",
  stroke: "#ff3300",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
});

const myText = new PIXI.Text("Hello World", style);
myText.x = 200;
myText.y = 200;
app.stage.addChild(myText);


app.ticker.add((delta) => loop(delta));

function loop(delta) {  
  const rectangle = new Graphics();
  rectangle
    .beginFill(0x66ccff)
    .lineStyle(4, 0xefefef, 1)
    .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
    .endFill();
  // Add the rectangle to the stage
  app.stage.addChild(rectangle);
}