import { Counter } from "../features/counter/Counter";
import Pokemon from "../features/pokemon/Pokemon";

const App = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Hello world!</h1>
            <Counter/>
            <Pokemon/>
        </div>
    );
};

export default App;
