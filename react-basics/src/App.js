import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import combinedAction from "./actions/combineActions"
const App = () => {
    const valueSelector = useSelector(state => state.value)
    const dispatch = useDispatch()
    return (<div className="App">
        <p>Value is {valueSelector}</p>
        <button onClick={
            () => dispatch(combinedAction.addAction())
        }/>
        <button onClick={
            () => dispatch(combinedAction.subAction())
        }/>
    </div>)
}

export default App;
