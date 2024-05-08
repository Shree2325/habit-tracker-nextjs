
export var habits = [
    {
        title:'Exercise',
        duration:'10 minutes',
        status:true
    }
]

export  function addHabit(title:string,duration:string){
console.log('clicked')
console.log(title , duration)
habits.push({
    title:title,
    duration:duration,
    status:false
})
}