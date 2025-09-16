let greetings: string = "Good Morning";

//greetings = 6; // Error: Type '6' is not assignable to type 'string'
greetings.charAt(2) //here will see only string methods
greetings.toLowerCase(); //allowed
console.log(greetings);


let mynum =6 ;
//mynum.UpperCase(); //Error: Property 'UpperCase' does not exist on type 'number'


//number
let userId: number = 123;


//boolean
let isCompleted: boolean = false;


//any
let hero: any;

function getHero() {
    return "thor";
}
hero = getHero();



export {}