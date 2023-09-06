// Flyweight...オブジェクトの共有を使って大量の細かい類似オブジェクトを生成する。
// ...　内部状態と外部状態をオブジェクトから分離することによってメモリ使用量を削減する。
// ...　内部状態はオブジェクト間で共有され、外部状態はアプリケーションのコントロール下に置かれる。
// ...　可能な限り既存のインスタンスを再利用する。
// ... 具体的には、
// 使用例
// ...
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Flyweight Interface
interface Shape {
  draw(x: number, y: number): void;
}

// ConcreteFlyweight Class
class Circle implements Shape {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  draw(x: number, y: number): void {
    console.log(`Circle drawn at (${x}, ${y}) with color ${this.color}`);
  }
}

// FlyweightFactory Class
class ShapeFactory {
  private static circleMap: { [key: string]: Shape } = {};

  static getCircle(color: string): Shape {
    if (!this.circleMap[color]) {
      this.circleMap[color] = new Circle(color);
      console.log(`Creating circle of color ${color}`);
    }
    return this.circleMap[color];
  }
}

// Client Code
const colors = ["Red", "Green", "Blue", "Yellow", "Black"];
for (let i = 0; i < 10; ++i) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const circle: Shape = ShapeFactory.getCircle(color);
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  circle.draw(x, y);
}
