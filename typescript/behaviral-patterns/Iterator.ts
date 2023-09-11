// Iterator (イテレーター): コレクション（オブジェクト）の集合体の要素を順番にアクセスする方法を提供。
// ... コレクションの要素に順番にアクセスする方法を提供する。
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

// Iterator Interface
interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

// Aggregate Interface
interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

// Concrete Iterator class
class ConcreteIterator<T> implements Iterator<T> {
  private collection: T[];
  private position: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  next(): T | null {
    if (this.hasNext()) {
      return this.collection[this.position++];
    } else {
      return null;
    }
  }

  hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

// Concrete Aggregate Class
class ConcreteAggregate<T> implements Aggregate<T> {
  private items: [] = [];

  add(item: T): void {
    this.items.push(item);
  }

  createIterator(): Iterator<T> {
    return new ConcreteIterator(this.items);
  }
}

// Client Code
const aggregate = new ConcreteAggregate<string>();
aggregate.add("A");
aggregate.add("B");
aggregate.add("C");
aggregate.add("D");

const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next()); // A, B, C, D
}
