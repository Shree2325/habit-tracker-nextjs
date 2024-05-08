'use client'
import Header from "./components/header";
import Footer from "./components/footer";
import { noto_sans } from "./ui/font";
import { useState } from "react";
import { addHabit, habits } from "./lib/data";

export default function Home() {

 const [habitTitle ,setHabitName]= useState('')
 const [habitDuration ,setHabitDuration] = useState('')

 const submitHabit = () => {
  setHabitName(habitTitle)
  setHabitDuration(habitDuration)
  console.log(habitTitle + habitDuration)
  console.log('clicked')
  addHabit(habitTitle,habitDuration);
 }
  return (
    <>
    <Header/>
     {/* Main Content */}
    {/* Main Content */}
    <main className="py-8 px-4 h-full">
        <div className="container mx-auto md:flex gap-3 justify-between">
          {/* Add Habit Form */}
          <section className="w-1/2 mr-4">
            <h1 className= { noto_sans.className + " text-xl font-semibold mb-4"}>Add New Habit</h1>
            <form className="flex flex-col gap-4 items-start" action={""} onSubmit={submitHabit}>
              <div className="py-2 flex flex-col items-start gap-2 md:w-1/2 w-full">
              <label htmlFor="habit" className="text-gray-600">Habit</label>
              <input type="text" placeholder="Enter habit..." value={habitTitle}  onChange={(e) => setHabitName(e.target.value)} className="rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent" />
              </div>
              <div className="py-2 flex flex-col items-start gap-2 md:w-1/2 w-full">
                <label htmlFor="time" className={noto_sans.className + " text-gray-600"}>Duration</label>
              <input type="time"
              value={habitDuration}
              onChange={(e) => setHabitDuration(e.target.value)}
              className="rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent" />
              </div>
              <button type="submit"  className="bg-green-400  text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors">Add</button>
            </form>
          </section>

          {/* Habits Section */}
          <section className="w-1/2">
            <h2 className="text-xl font-semibold mb-4">Your Habits</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Sample habit item */}
              <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Exercise</h3>
                  <p className="text-gray-500">30 minutes</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 00-.96.724L7.56 9.53 2.5 10.39a1 1 0 00-.5 1.73l5 3a1 1 0 001 0l5-3a1 1 0 00-.5-1.73l-5-2.87A1 1 0 0010 3zM8 13l2.5-1.44L13 13.06 10.5 14.5 8 13z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </section>
        </div>
        <section className="container mx-auto mt-8">
          <h2 className="text-xl font-semibold mb-4">Select Date and View Habits</h2>
          {/* Dropdown or Calendar for Date Selection */}
          <div className="flex items-center mb-4">
            <label htmlFor="dateSelector" className="mr-2">Select Date:</label>
            <input type="date" id="dateSelector" className="rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          {/* Habit Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Sample habit item with checkbox */}
           {
            habits.map((habit)=>{
              return(
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{habit.title}</h3>
                  <p className="text-gray-500">{habit.duration}</p>
                </div>
                <label className="cursor-pointer">
                  <input type="checkbox" checked={habit.status? true :false} className="form-checkbox h-5 w-5 text-blue-500" />
                  <span className="ml-2 text-gray-500">Completed</span>
                </label>
              </div>
              );
            })
           }
           
          </div>
        </section>
      </main>
    <Footer/>
    <main>

    </main>
    </>
  );
}
