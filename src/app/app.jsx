import { Counter } from '../features/counter/Counter';
import Pokemon from '../features/pokemon/Pokemon';
import Users from '../features/users/Users';

const App = () => {
    return (
        <div className='p-10'>
            <h1 className='text-3xl font-bold underline text-center'>Hello world!</h1>
            <div className='grid grid-cols-6'>
                <Counter />
                <Pokemon />
            </div>
            <Users />
            <Users />
        </div>
    );
};

export default App;
