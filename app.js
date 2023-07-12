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

