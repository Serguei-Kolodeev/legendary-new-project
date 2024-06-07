/**
 * https://ps-group.github.io/compilers/ast
 * expressions:
 *  variable x
 *  numeric_literal 3.1415
 *  string_literal 'string'
 *  unary_operator -1
 *  binary_operator 1+2
 *  function call sin (pi)
 *
 * instructions:
 *  assigned variable x = 10
 *  keywords if, for ...
 *  code blocks {}
 *
 * ExpressionAST - интерфейс, который реализуется всеми выражениями
 * StatementAST - интерфейс, который реализуется всеми инструкциями
 * DeclarationAST - аналогичный интерфейс для объявлений функций и типов
 *
 */

export default class TokenStream {
  _inputStream;
  _result = "";
  _token;
  _tokens = [];
  _tokenType;

  constructor(input) {
    this._inputStream = input;
  }

  readNext = () => {
    //здесь ннада перебирать типы, смотрим какой тип у следующего элемента
  };

  readWhile = (predicate) => {
    //читает символы согласно предикату
  };

  readInstructions = () => {
    //алгоритм обработки ключевых слов и присвоений переменным
  };

  readExpressions = () => {
    //алгоритм чтения выражений
  };

  readVariable = () => {
    //алгоритм чтения переменной
  };

  readNumericLiteral = () => {
    //алгоритм чтения числового литерала
  };

  readStringLiteral = () => {
    //алгоритм чтения строкового литерала
  };

  readUnaryOperator = () => {
    //алгоритм чтения унарного оператора
  };

  readBinaryOperator = () => {
    //алгоритм чтения бинарного оператора
  };

  readOperation = () => {
    //алгоритм чтения операции
  };

  readOperand = () => {
    //алгоритм чтения операнда операции
  };
}
