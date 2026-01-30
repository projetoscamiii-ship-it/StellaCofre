import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  // Signup
  isSignupOpen: boolean;
  openSignup: () => void;
  closeSignup: () => void;
  // Login
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  // Wallet
  isWalletModalOpen: boolean;
  openWalletModal: () => void;
  closeWalletModal: () => void;
  // Forgot Password
  isForgotPasswordOpen: boolean;
  openForgotPassword: () => void;
  closeForgotPassword: () => void;
  // Navigation helpers
  switchToLogin: () => void;
  switchToSignup: () => void;
  switchToForgotPassword: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openWalletModal = () => setIsWalletModalOpen(true);
  const closeWalletModal = () => setIsWalletModalOpen(false);
  const openForgotPassword = () => setIsForgotPasswordOpen(true);
  const closeForgotPassword = () => setIsForgotPasswordOpen(false);

  const switchToLogin = () => {
    setIsSignupOpen(false);
    setIsForgotPasswordOpen(false);
    setIsLoginOpen(true);
  };

  const switchToSignup = () => {
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
    setIsSignupOpen(true);
  };

  const switchToForgotPassword = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
    setIsForgotPasswordOpen(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isSignupOpen,
        openSignup,
        closeSignup,
        isLoginOpen,
        openLogin,
        closeLogin,
        isWalletModalOpen,
        openWalletModal,
        closeWalletModal,
        isForgotPasswordOpen,
        openForgotPassword,
        closeForgotPassword,
        switchToLogin,
        switchToSignup,
        switchToForgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
