let studentNames:string[]= ["Suresh","Mahesh","Naresh"]
let marks:number[]= [75, 80, 82]
//Add 10 marks to each students ussing assignment operator and store it another array
let updateMarks:number[]=[]
for(let i=0;i<=marks.length;i++)
{
    updateMarks[i]=marks[i]+10;
}
//Calculate Average mark of all studens
let total:number=0;
for(let i=0;i<=updateMarks.length;i++)
{
     total += updateMarks[i];
}
let average:number = total / updateMarks.length;

console.log("UpdateMarks:");
for (let i = 0; i < studentNames.length; i++)
{
console.log(`${studentNames[i]}: ${updateMarks[i]}`);
}
console.log("Average Marks:",average);


