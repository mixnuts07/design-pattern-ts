// Composite ... 単体オブジェクトとその組み合わせを同一視する。
// ... オブジェクトを木構造で構築して、個々のオブジェクト（Leaf）とその組み合わせ（Composite）を同一視することができる。
// ... 具体的には、「部分ー全体」の関係を持つオブジェクト階層で使用する。
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

// Composite class
class GrapicGroup implements Graphic {
  private graphics: Graphic[] = [];

  add(graphic: Graphic): void {
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
