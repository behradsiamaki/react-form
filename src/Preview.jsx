export default function Preview({ firstName, lastName, onChange }) {
    function onClickSubmit() {
        if(firstName.length > 0 && lastName.length > 0){
            onChange(firstName + " " + lastName);
        }
    }
  return (
    <>
      {firstName.length > 0 && lastName.length > 0 ? (
        <div>
          {firstName}-{lastName}
        </div>
      ) : null}
      <button onClick={onClickSubmit}>Submit Fullname</button>
    </>
  );
}
