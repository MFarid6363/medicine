import "@/styles/globals.css";
import { UserProvider } from "../providers/userProvider";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
