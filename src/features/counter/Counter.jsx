import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='flex gap-x-3 items-center'>
                <button className='px-4 py-2 border-2 border-violet-500' aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <span>{count}</span>

                <button className='px-4 py-2 border-2 border-violet-500' aria-label='Increment value' onClick={() => dispatch(increment())}>
                    Increment
                </button>
            </div>
        </div>
    );
}
