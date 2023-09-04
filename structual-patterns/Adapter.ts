//　Adapter
// ... 既存のクラスのインターフェースをクライアントが期待する別のインターフェースに変換するパターン。
// ... 具体的には、既存のクラスを修正することなく新しいインターフェースに適応させることができるため、システムの柔軟性を高めることができる。
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

// 既存の、または変更できないクラス
class OldSystem {
  oldMethod(): string {
    return "I am old method...";
  }
}

// クライアントが期待するインターフェース
interface Target {
  request(): string;
}

// Adapter class
class Adapter implements Target {
  constructor(private oldSystem: OldSystem) {}
  // この新しいクラスのrequestの中で古いクラスのoldMethod()を呼び出している
  request(): string {
    return `Adapter: (TRANSLATED) ${this.oldSystem.oldMethod()}`;
  }
}

// クライアントコード
function clientCode(target: Target) {
  console.log(target.request());
}

// how to use
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);

clientCode(adapter); // Output: "Adapter: (TRANSLATED) I am old method"
