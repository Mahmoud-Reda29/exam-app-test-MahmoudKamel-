import { SignupData } from "@lib/types/api/authentication";
import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../_actions/register.action";

export default function useRegister() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: SignupData) => {
      const payload = await registerAction(data);
      if ("code" in payload) {
        throw new Error(payload.message);
      }
    },
    onSuccess: () => {
      window.location.href = "/auth/login";
    },
  });

  return { isPending, error, register: mutate };
}
