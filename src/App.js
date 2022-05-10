import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";

import Workout from "./workout.js";
import AddButton from "./addButton.js";
import ShowDoneButton from "./showDoneButton";

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [showDoneOnly, setShowDoneOnly] = useState(false);

  const addNewWorkout = () => {
    const newWorkout = generateWorkout();
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

  const doneWorkouts = workouts.filter((workout) => workout.done === true);

  const toggleDoneOnly = () => {
    setShowDoneOnly(!showDoneOnly);
  };

  const workoutsToDisplay = () => {
    if (showDoneOnly === false) {
      return workouts;
    } else {
      return doneWorkouts;
    }
  };

  const replaceWorkout = (workout) => {
    const updatedWorkouts = workouts.map((item) =>
      item === workout ? generateWorkout() : item
    );
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <AddButton addNewWorkout={addNewWorkout} />
      <ShowDoneButton toggleDoneOnly={toggleDoneOnly} />
      <ul>
        {workoutsToDisplay().map((workout, index) => (
          <Workout
            workout={workout}
            index={index}
            deleteWorkout={deleteWorkout}
            completeWorkout={completeWorkout}
            replaceWorkout={replaceWorkout}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
