function showDoneButton(props) {
  return (
    <button onClick={(e) => props.toggleDoneOnly()}>Show Done Only</button>
  );
}

export default showDoneButton;
