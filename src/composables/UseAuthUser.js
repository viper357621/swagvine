import useSupabase from "../composables/UseSupabase";
import { useUserStore } from "../store/useUserStore";
import { ref } from "vue";

// user is set outside of the useAuthUser function
// so that it will act as global state and always refer to a single user
const user = ref(null);

export default function useAuthUser() {
  const { supabase } = useSupabase();

  /**
   * Login with email and password
   */
  const login = async ({ email, password }) => {
    console.log(email), console.log(password);
    const data = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return data;
  };

  const loginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw error;
    useUserStore().isLogin = true;
    useUserStore().data = data.user;
    return data.user;
  };
  /**
   * Login with refresh token
   * Useful for logging in after email confirmations
   */
  const loginWithRefreshToken = async (token) => {
    const { user, error } = await supabase.auth.signIn({ refreshToken: token });
    if (error) throw error;
    return user;
  };

  const findUserLogin = async () => {
    const userLogin = await supabase.auth.getUser();

    if (userLogin.error == null) {
      console.log("TRUEE TEST");
      return true;
    } else {
      return false;
    }
  };
  /**
   * Login with google, github, etc
   */
  const loginWithSocialProvider = async (token) => {
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
  };

  /**
   * Logout
   */
  const logout = async () => {
    const { error } = supabase.auth.signOut();
    if (error) throw error;
  };

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = () => {
    return !!user.value;
  };

  /**
   * Register
   */
  const register = async ({ email, password, ...meta }) => {
    console.log(email);
    console.log(password);
    const data = await supabase.auth.signUp({ email, password });
    return data;
  };

  const updateProfile = async ({
    website,
    username,
    firstName,
    lastName,
    avatar_url,
  }) => {
    try {
      const user = await supabase.auth.getUser();

      const updates = {
        id: user.id,
        username,
        website,
        firstName,
        lastName,
        avatar_url,
        updated_at: new Date(),
      };

      console.log("Composables");
      console.log(updates);
      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  /**
   * Update user email, password, or meta data
   */
  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };

  /**
   * Send user an email to reset their password
   * (ie. support "Forgot Password?")
   */
  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(
      email
    );
    if (error) throw error;
    return user;
  };

  /**
   * Will be useful for informing the application what to do
   * when Supabase redirects a user back to app
   * after confirming email address
   */
  const maybeHandleEmailConfirmation = async (route) => {};
  return {
    user,
    login,
    loginWithSocialProvider,
    loginWithRefreshToken,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
    maybeHandleEmailConfirmation,
    loginWithGoogle,
    findUserLogin,
    updateProfile,
  };
}
