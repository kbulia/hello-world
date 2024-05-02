import { useState } from "react";
import { SongType } from "./Song";

const Greeting = (props: GreetingProps) : JSX.Element => {



    // const pets: string[] = ["dog","cat", "snail"];

    //  //array destructuring to get values from arrays
    // const [elizabeth, lucy, tamsin] = pets ; //elizabeth will have dog as pet, lucy with cat etc
    // console.log(lucy);

    //let age: number = props.age;





 return (
 <div><p>Hello {props.name}. You are {props.age} years old.</p>

 <button onClick={props.ageFunc}>Age</button>
 </div>
 )
 ; ///{} is called bindings 
}

export default Greeting;

export type GreetingProps = {

    name: string,
    age: number,
    ageFunc: () => SongType
}