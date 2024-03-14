type Props = {
  chidren: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0.DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0.CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0.REDIRECT_URI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to initialise auth");
  }
};

export default Auth0ProviderWithNavigate;
