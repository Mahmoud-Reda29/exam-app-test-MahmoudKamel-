import z from "zod";

export = Form;
export as namespace Form;

declare namespace Form {
  /**
   * FormInput<T>
   *
   * Infers the TypeScript type from a given Zod schema.
   * Useful for strongly-typed forms.
   *
   * @template T - Any Zod schema
   */
  type FormInput<T extends z.ZodTypeAny> = z.infer<T>;
}
