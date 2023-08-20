// Prototype
// ... 既存のオブジェクトをコピーして新しいオブジェクトを作成する。
// ... インスタンスのコピーと作成しているだけなので新しく作成する場合に比べて時間がかからない。
// 使用例
// ... オブジェクトの構築にコストがかかる場合
// ... システム内のオブジェクトが少数の状態の組み合わせで存在し、それに基づいて新しいオブジェクトを生成する場合
// 問題点
// ...
// ...
// ...

interface Prototype {
  clone(): Prototype;
  toString(): string;
}

class ConcretePrototype implements Prototype {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  public clone(): Prototype {
    return new ConcretePrototype(this.value);
  }

  public toString(): string {
    return this.value;
  }
}

const originalPrototype = new ConcretePrototype("Original1");
console.log(originalPrototype.toString()); // Original1

const clonedPrototype = originalPrototype.clone();
console.log(originalPrototype.toString()); // Original1

console.log(originalPrototype === clonedPrototype); // false
