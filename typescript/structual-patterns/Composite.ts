// Composite ... 単体オブジェクトとその組み合わせを同一視する。
// ... オブジェクトを木構造で構築して、個々のオブジェクト（Leaf）とその組み合わせ（Composite）を同一視することができる。
// ... 具体的には、「部分ー全体」の関係を持つオブジェクト階層で使用する。
// 使用例
// ... ファイルシステムやGUIコンポーネントなど「部分・全体」の関係を持つような構造を表現する際に有用。
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Component Interface
interface Graphic {
  draw(): string;
}

// Leaf class
class Circle implements Graphic {
  draw(): string {
    return "Circle";
  }
}

// Leaf class
class Square implements Graphic {
  draw(): string {
    return "Square";
  }
}

// Composite class (Leafの組み合わせ)
class GraphicGroup implements Graphic {
  private graphics: Graphic[] = [];

  add(graphic: Graphic): void {
    this.graphics.push(graphic);
  }

  remove(graphic: Graphic): void {
    const idx = this.graphics.indexOf(graphic);
    if (idx !== -1) {
      this.graphics.splice(idx, 1);
    }
  }

  draw(): string {
    return `Group: [${this.graphics
      .map((graphic) => graphic.draw())
      .join(", ")}]`;
  }
}

// Client Code
function clientCode(graphic: Graphic) {
  console.log(graphic.draw());
}

// how to use
const circle1 = new Circle();
clientCode(circle1); // output: Circle
const circle2 = new Circle();
const square = new Square();

const group1 = new GraphicGroup();
group1.add(circle1);
group1.add(square);
clientCode(group1); // output: "Group: [Circle, Square]"

const group2 = new GraphicGroup();
group2.add(circle2);
group2.add(group1);
clientCode(group2); // Output: "Group: [Circle, Group: [Circle, Square]]"
