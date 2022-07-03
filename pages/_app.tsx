import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '../components';
import Layout from '../components/Layout';
import useAuthEffect from '../hooks/useAuthEffect';
import { RootState } from '../state';
import '../styles/globals.css';
import Injector from './_injector';

config.autoAddCss = false;

const AppInitializer = ({ children }: { children: ReactElement }) => {
    const { get: userLoading } = useSelector(
        (state: RootState) => state.auth.loading
    );
    useAuthEffect();

    return (
        <Loading condition={userLoading} screen>
            {children}
        </Loading>
    );
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Injector>
            <AppInitializer>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppInitializer>
        </Injector>
    );
}

export default MyApp;
