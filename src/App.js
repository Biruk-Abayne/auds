import {lol} from './Fake'

function App() {
return(
    <div>
        {
            lol.map((lo)=>
           <h2>my name is {lo.name}</h2> )
        }
    </div>
)
}

export default App;
