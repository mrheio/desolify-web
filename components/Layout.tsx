import { FunctionComponent } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='pt-navbar min-h-screen'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

type LayoutProps = {
    children: JSX.Element;
};
