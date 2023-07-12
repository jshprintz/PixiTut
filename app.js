const Application = PIXI.Application;
const app = new Application({
  width: 500,
  height: 500,
  transparent: true,
  resolution: 1,
});

app.renderer.backgroundColor = 0x061639;
app.renderer.resize(innerWidth, innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);
