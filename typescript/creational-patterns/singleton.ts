// Singleton
// ... 特定のクラスのインスタンスが1つしか存在しないことを保証する。
// ... 具体的には、クラス自体がその唯一のインスタンスを作成し、それを提供する！
// 使用例
// ... 一貫性が要求される場合（システムの設定、グローバルキャッシュ）
// ... リソースの共有（ログファイルの書き込み、共有DBへの接続）
// ... コスト高いインスタンス生成（ネットワーク接続、大量データセットのロード）
// ... 状態の管理（1つの中心的な場所で状態を管理する）
// ... サービスプロキシ（特定サービスへのアクセスを禁止する場合）
// 問題点
// ... 単体テストの難易度高い
// ... 拡張性の制約
// ... マルチスレッド環境での同期問題

class Singleton {
  // 唯一のインスタンスを保持するprivateな静的フィールド
  private static instance: Singleton;
  // privateにすることで、外部からのnewを禁止する
  private constructor() {}
  // 唯一のインスタンスを取得または作成する静的メソッド
  // 既にインスタンスが存在する場合はそのインスタンスを返し、存在しない場合は新しいインスタンスを作成して返す
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  public someMethod(): void {
    console.log("This is a method in the singleton instance.");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true（インスタンスは同じなので一緒）
