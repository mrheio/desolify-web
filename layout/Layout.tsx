import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
    children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="pt-navbar min-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
