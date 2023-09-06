// Interpreter...文法のための表現を定義し、これを使用して文を解釈する。
// ...特定の種類の問題を解決するために用いられる独自の言語の文法を定義し、その言語で書かれた文を解釈するインタープリタを提供する。
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

// Expression Class
interface Expression {
  interpreter(variables: { [k: string]: number }): number;
}

// TerminalExpression Class
class Number1 implements Expression {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  interpreter(variables: { [k: string]: number }): number {
    return this.value;
  }
}

// Non Terminal Expression Class
class Add implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpreter(variables: { [k: string]: number }): number {
    return this.left.interpreter(variables) + this.right.interpreter(variables);
  }
}

class Subtract implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpreter(variables: { [k: string]: number }): number {
    return this.left.interpreter(variables) - this.right.interpreter(variables);
  }
}

// Client Code
const expression1: Expression = new Add(new Number1(5), new Number1(3));
const expression2: Expression = new Subtract(new Number1(5), new Number1(3));

const variables = {};
console.log(`Result of expression1: ${expression1.interpreter(variables)}`); // Output: Result of expression1: 8
console.log(`Result of expression2: ${expression2.interpreter(variables)}`); // Output: Result of expression2: 2
