import Footer from "@/components/footer/Footer";
import HomeNav from "@/components/navbar/HomeNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <HomeNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
