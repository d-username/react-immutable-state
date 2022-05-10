import DoneDeleteButtons from "./done-deleteButtons";

function Workout(props) {
  return (
    <li>
      <p>
        {props.workout.sets}x sets of{" "}
        <strong>
          {props.workout.reps}x{props.workout.exercise}
        </strong>{" "}
        with {props.workout.rest} seconds rest
      </p>
      <DoneDeleteButtons
        workout={props.workout}
        deleteWorkout={props.deleteWorkout}
        completeWorkout={props.completeWorkout}
        replaceWorkout={props.replaceWorkout}
      />
    </li>
  );
}

export default Workout;
