function DoneDeleteButtons(props) {
  return (
    <div className="grid">
      {!props.workout.done && (
        <button onClick={(e) => props.completeWorkout(props.workout)}>
          Done
        </button>
      )}
      {props.workout.done && <p>✅</p>}
      <button onClick={(e) => props.deleteWorkout(props.workout)}>
        Delete
      </button>
      <button onClick={(e) => props.replaceWorkout(props.workout)}>
        Replace
      </button>
    </div>
  );
}

export default DoneDeleteButtons;
