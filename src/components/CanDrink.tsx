import { GreetingProps } from "./Greeting";



const CanDrink = (props:CanDrinkProps) : JSX.Element => {
    return <ul>
        <li>{props.name}, you can{props.age >=18 ? "" : "'t"} drink in the UK</li> 
        <li>{props.name}, you can{props.age >= 21 ? "" : "'t"}  drink in the Texas</li> 
        </ul>
    };




export default CanDrink; 

type CanDrinkProps = {
    name : string,
    age: number;
}