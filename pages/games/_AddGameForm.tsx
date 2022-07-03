import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AddGameFormData } from '../../api/gamesService';
import {
    Drawer,
    Form,
    Loading,
    StyledButton,
    StyledInput,
    Title,
} from '../../components';
import {
    addGame,
    AppDispatch,
    resetAddGameStatus,
    RootState,
} from '../../state';
import { gameNameRule, numberRule, requiredRule } from '../../utils/validation';

const AddGameForm = () => {
    const { loading, error, success } = useSelector(
        (state: RootState) => state.games
    );
    const dispatch: AppDispatch = useDispatch();
    const {
        handleSubmit,
        control,
        reset: resetForm,
        formState: { errors },
    } = useForm({ defaultValues: { name: '', teamSize: '' } });
    const [drawerOpened, setDrawerOpened] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpened((val) => !val);
    };

    const submitGame = async (data: AddGameFormData) => {
        dispatch(addGame(data));
    };

    useEffect(() => {
        if (success.add) {
            toggleDrawer();
        }
    }, [success.add]);

    useEffect(() => {
        if (!drawerOpened) {
            resetForm();
            dispatch(resetAddGameStatus());
        }
    }, [drawerOpened]);

    return (
        <>
            <Drawer opened={drawerOpened} onClickOutside={toggleDrawer}>
                <Title
                    size='xxl'
                    text='Add game'
                    className='text-center font-bold'
                />
                <Loading condition={loading.add}>
                    <Form
                        className='form-flow'
                        error={error.add}
                        onSubmit={handleSubmit(submitGame)}
                    >
                        <Controller
                            name='name'
                            control={control}
                            rules={{ ...requiredRule, ...gameNameRule }}
                            render={({ field }) => (
                                <StyledInput
                                    label='Game name'
                                    error={errors.name?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name='teamSize'
                            control={control}
                            rules={{ ...requiredRule, ...numberRule }}
                            render={({ field }) => (
                                <StyledInput
                                    label='Max game team size'
                                    error={errors.teamSize?.message}
                                    {...field}
                                />
                            )}
                        />
                        <StyledButton fluid type='submit'>
                            Add game
                        </StyledButton>
                    </Form>
                </Loading>
            </Drawer>
            <div className='fixed bottom-4 right-4'>
                <StyledButton onClick={toggleDrawer} type='button'>
                    <FontAwesomeIcon
                        icon={faPlus}
                        className='text-on-primary mr-2'
                    />
                    Add game
                </StyledButton>
            </div>
        </>
    );
};

type AddGameFormProps = {
    opened: boolean;
};

export default AddGameForm;
