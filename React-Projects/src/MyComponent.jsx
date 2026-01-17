import React,{useState} from 'react';

function MyComponent() {

    const[name,useName] = useState();
    const setName =() => {
        useName("Bob");
    }
    const[age,useAge] = useState(0);
    const setAge=()=> {
        useAge(age+1);
    }
    const decAge =()=> {
        useAge(age-1);
    }
    const reSet=()=> {
        useAge(0);
    }

    return (
        <div>
            <p>Name :{name}</p>
            <button onClick={setName}>Set name</button>

            <p>Age:{age}</p>
            <button onClick={setAge}>Increase age</button>
            <button onClick={decAge}>Decreas age</button>
            <button onClick={reSet}>reset</button>

        </div>
    )
}
export default MyComponent;
