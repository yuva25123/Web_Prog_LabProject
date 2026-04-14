const add=(a,b)=>a+b;
const greet=(name="Guest")=>"Hello"+name+"!";
const sum=(...numbers)=>{
    return numbers.reduce((total,n)=>total+n,0)
};
const combineArrays=(arr1,arr2)=>[...arr1,...arr2];
const destructuringExample=()=>{
    const [a,b]=[10,20];
    return "a= "+a+", b= "+b;
};
const studentInfo=(name,marks)=>{
    return 'Name: ${name}, Marks: ${marks}';
};



