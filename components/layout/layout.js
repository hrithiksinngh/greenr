import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = ({ children }) => {
  return (
    <div className="bg-p-400">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
