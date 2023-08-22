import {Routes, Route} from 'react-router-dom';
import ISOMainScreen from "./ISOMainScreen";
import CategoryInfo from './CategoryInfo';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/"
                    element={<ISOMainScreen/>}/>
                <Route path="/categoryInfo"
                    element={<CategoryInfo/>}/>
            </Routes>
        </div>
    );
}

