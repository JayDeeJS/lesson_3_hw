import { useSelector, useDispatch } from "react-redux";

const CounterPage = () => {
    const dispatch = useDispatch()

    const {count} = useSelector(state => state)

    const handleIncrease = () => {
        dispatch({
            type: 'INCR_STATE',
            payload: count + 1
        })
    }

    const handleDecrease = () => {
        if (count === 0) {
            dispatch({
                type: 'DECR_STATE',
                payload: count
            })
        } else {
            dispatch({
                type: 'DECR_STATE',
                payload: count - 1
            })
        }
    }

    const handleReset = () => {
        dispatch({
            type: 'RESET_STATE',
        })
    }

    return (
        <div className="counter">
            <div className="counterBody">
                <button onClick={handleDecrease} className="controls decr">---</button>
                <p className="state">{count}</p>
                <button onClick={handleIncrease} className="controls incr">+++</button>
            </div>
            <div className="counterFooter">
                <button onClick={handleReset} className="controls reset">RESET</button>
            </div>
        </div>
    )
};

export default CounterPage;