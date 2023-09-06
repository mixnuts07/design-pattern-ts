// Chain Of Responsibility ... 責任の連鎖。要求を受け取るオブジェクトの連鎖。
// ... 1つ以上のオブジェクトが特定のリクエストを処理する責任を持つ様に設計されたパターン。
// ... リクエストはオブジェクトのチェーン（リストorセット）を通っていく。
// ... 各オブジェクトはリクエストを処理するか、次のオブジェクトにリクエストを渡す。
// ... 具体的には、
// ...
// 使用例
// ... リクエストを処理するオブジェクトが事前にはわからない場合。
// ... リクエストを処理するオブジェクトが複数あり、それらの中から適切なものを動的に選びたい場合。
// ... リクエストを複数のオブジェクトで処理したい場合。
// ...
// ...
// 問題点
// ...
// ...
// ...

// Handler Interface
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string;
}

// ConcreteHandler Class
class ConcreteHandler1 implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string {
    if (request === "first") {
      return `ConcreteHandler1: Handling request ${request}`;
    } else if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return `ConcreteHandler1: Passing request ${request}`;
  }
}

// ConcreteHandler2 Class
class ConcreteHandler2 implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string {
    if (request === "second") {
      return `ConcreteHandler2: Handling request ${request}`;
    } else if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return `ConcreteHandler2: Passing request ${request}`;
  }
}

// Client Code
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();

handler1.setNext(handler2);

console.log(handler1.handle("first")); // Output: ConcreteHandler1: Handling request first
console.log(handler1.handle("second")); // Output: ConcreteHandler2: Handling request second
console.log(handler1.handle("third")); // Output: ConcreteHandler2: Passing request third
