{
    // ----------------------problem-05----------------------

    type Student={
        name:string;
        age:number;
        group:string;
    }
    const getProperty = <T, J extends keyof T>(object: T, key: J): T[J] => {

        return object[key]
    }
    const student:Student={
        name:'Joyeta',
        age:16,
        group:'B'
    }
    console.log(getProperty(student,'name'));






    // end
}