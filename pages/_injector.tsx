import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../state';

const queryClient = new QueryClient();

const Injector = ({ children }: InjectorProps) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
};

type InjectorProps = {
    children: ReactNode;
};

export default Injector;
