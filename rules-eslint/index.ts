import { TSESLint } from "@typescript-eslint/utils";
import { noCnInClassNameRule } from "./no-cn-in-classname";

export const rules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {
       "no-cn-in-classname": noCnInClassNameRule,
};