// eslint-rules/no-cn-in-classname.js
import type { TSESLint } from "@typescript-eslint/utils";

export const noCnInClassNameRule:TSESLint.RuleModule<"noCnInClassName", []> = {
       meta: {
              type: "suggestion",
              docs: {
                     description: "Disallow using cn() function directly in className prop",
              },
              schema: [],
              messages: {
                     noCnInClassName: "Avoid using cn() directly in className. Consider using a variable or different approach.",
              },
       },
       defaultOptions: [],
       create(context) {
       return {
              JSXAttribute(node) {
                     // Check if this is a className attribute
                     if (node.name && node.name.name === "className") {
                            // Check if the value is a JSXExpressionContainer
                            if (node.value && node.value.type === "JSXExpressionContainer") {
                                   const expression = node.value.expression;

                                   // Check if it's a CallExpression with callee name 'cn'
                                   if (
                                          expression.type === "CallExpression" &&
                                          expression.callee.type === "Identifier" &&
                                          expression.callee.name === "cn"
                                   ) {
                                          context.report({
                                                 node: expression,
                                                 messageId: "noCnInClassName",
                                          });
                                   }
                            }
                     }
              },
       };
       },
};