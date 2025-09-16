export = Authentication;
export as namespace Authentication;

declare namespace Authentication {
  type ForgotPasswordAuthProps = {
    onSuccess?: () => void;
    onBack?: () => void;
  };
}
