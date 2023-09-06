// Proxy ... 他のオブジェクトへのアクセスを制御する
// ... あるオブジェクトに対するアクセスを制御するための代理オブジェクトを提供する。
// ... 実際のオブジェクトと同じインターフェースを持つが、特定の操作（遅延初期化、アクセス制御、ログ記録）を挟むことができる
// ... 具体的には、オブジェクトの生成コストが高い場合、アクセスを制御したい場合、リソース共有が必要な場合に有用。
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

// Subject Interface
interface Image {
  display(): void;
}

// Real Subject Class
class RealImage implements Image {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(`Loading image ${this.fileName}`);
  }

  display(): void {
    console.log(`Displaying Image ${this.fileName}`);
  }
}

// Proxy class
class ProxyImage implements Image {
  private readImage: RealImage | null = null;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  display(): void {
    if (this.readImage === null) {
      this.readImage = new RealImage(this.fileName);
    }
    this.readImage.display();
  }
}

// client code
const image1: Image = new ProxyImage("image1.png");
const image2: Image = new ProxyImage("image2.png");

// 画像は初めてdisplayメソッドが呼ばれたときに読み込まれる（遅延初期化）
image1.display();
// 2回目以降はすぐに表示される（RealImageオブジェクトが再利用される）
image1.display();

image2.display();
