import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
