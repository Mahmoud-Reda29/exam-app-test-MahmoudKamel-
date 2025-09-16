export = Authentication;
export as namespace Authentication;

declare namespace Authentication {
  /**
   * Represents the response from the login API endpoint.
   */
  type AuthResponse = {
    /** Status message from the API (e.g., "success"). */
    message: string;

    /** JWT authentication token. */
    token: string;

    /** The user object containing user profile details. */
    user: AuthUser;
  };

  /**
   * Represents the authenticated user object returned from the API.
   */
  type AuthUser = {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: "user" | "admin";
    isVerified: boolean;
    createdAt: string;
  };

  /**
   * Represents the payload (data) required for a user signin request (login)..
   */
  type LoginData = {
    email: string;
    password: string;
  };

  /**
   * Represents the payload (data) required for creating a new user account (signup).
   */
  type SignupData = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    rePassword: string;
  };

  /**
   * Represents the payload (data) required for forget password user account (forget password).
   */
  type ForgetPasswordData = {
    email: string;
  };

  /**
   * Represents the payload (data) required for forget password user account (forget password).
   */
  type ForgetPasswordResponse = {
    message: string;
    info: string;
  };

  /**
   * Represents the payload (data) required for forget password user account (forget password).
   */
  type VerifyResetCodeData = {
    resetCode: string;
  };

  /**
   * Represents the payload (data) required for forget password user account (forget password).
   */
  type VerifyResetCodeResponse = {
    status: string;
    message: string;
    code: number;
  };

  /**
   * Represents the payload (data) required for forget password user account (forget password).
   */
  type NewPasswordData = {
    email: string;
    newPassword: string;
  };

  /**
   * Represents the payload (data) required for forget password user account (forget password).
   */
  type NewPasswordResponse = {
    message: string;
    token: string;
  };
}
