import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./home/page";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
