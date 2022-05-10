import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";

import Workout from "./workout.js";

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const addNewWorkout = () => {
    const newWorkout = generateWorkout();
    //LONGER VERSION
    // const newWorkoutsArray = [...workouts];
    // newWorkoutsArray.push(newWorkout);
    // setWorkouts(newWorkoutsArray);
    //...and...
    //SHORTER VERSION
    setWorkouts([...workouts, newWorkout]);
  };

  const deleteWorkout = (target) => {
    const newWorkoutsArray = workouts.filter((workout) => {
      if (workout !== target) {
        return workout;
      }
    });
    setWorkouts(newWorkoutsArray);
  };

  const completeWorkout = (target) => {
    const updatedWorkoutsArray = workouts.map((workout) => {
      if (workout === target) {
        workout.done = true;
      }
      return workout;
    });
    setWorkouts(updatedWorkoutsArray);
  };

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <Workout
            workout={workout}
            index={index}
            deleteWorkout={deleteWorkout}
            completeWorkout={completeWorkout}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
