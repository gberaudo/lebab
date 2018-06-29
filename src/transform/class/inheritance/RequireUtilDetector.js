/**
 * Detects direct calls to inherits()
 */
export default class RequireUtilDetector {
  /**
   *
   * @param {Object} node
   * @return {Object} MemberExpression of inherits
   */
  detect(node) {
    if (node.type !== 'VariableDeclaration') {
      return;
    }

    return {
      type: 'Identifier',
      name: 'inherits'
    };
  }
}
