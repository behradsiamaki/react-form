import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Preview from "./Preview";
import Final from "./Final";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    isMarried: "single",
    city: "tehran",
    fav: ["food", "walking"],
  });

  const [error, setError] = useState(false);

  const [fullname, setFullName] = useState("");

  useEffect(() => {
    document.title = form.firstName;
  }, [form.firstName]);

  const cities = [
    "mashhad",
    "shiraz",
    "qom",
    "yazd",
    "semnan",
    "rasht",
    "tabriz",
    "tehran",
    "ilam",
    "kerman",
  ];

  function handleOnChange(e) {
    const { name, value, type } = e.target;

    // const newForm = {...form};
    // newForm[name] = value;
    // setForm(newForm);

    if (type === "checkbox") {
      let newFav = [...form.fav];
      if (newFav.includes(value)) {
        newFav = newFav.filter(function (item) {
          return item !== value;
        });
      } else {
        newFav.push(value);
      }
      setForm({ ...form, fav: newFav });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (form.firstName.length < 1 || form.lastName.length < 1) {
      setError(true);
    }
  }

  //condition ? yes : no ;

  /*if(condition) {
    yes
  }else {
    no
  }*/

  /* const number = 100;
  if(number < 100) {
    var message = "light";
  }else {
    var message = "heavy" 
  }

  var message = number < 100 ? "light" : "heavy"; */

  var message2 = form.firstName.length > 1 && "has first name";
  console.log(message2);

  console.log(error);

  function handleOnchangeFullName(fullName) {
    setFullName(fullName);
  }
  return (
    <div>
      {error ? (
        <div className="error">first name and last name are Required!</div>
      ) : null}
      <form method="post" onSubmit={onSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            onChange={handleOnChange}
            value={form.firstName}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            onChange={handleOnChange}
            value={form.lastName}
          />
        </label>
        <label>
          Single:
          <input
            type="radio"
            name="isMarried"
            value="single"
            checked={form.isMarried === "single"}
            onChange={handleOnChange}
          />
        </label>
        <label>
          Married:
          <input
            type="radio"
            name="isMarried"
            value="married"
            checked={form.isMarried === "married"}
            onChange={handleOnChange}
          />
        </label>
        <label>
          Favorites:
          <label>
            Food
            <input
              value="food"
              type="checkbox"
              name="fav"
              onChange={handleOnChange}
              checked={form.fav.includes("food")}
            />
          </label>
          <label>
            Walking
            <input
              value="walking"
              type="checkbox"
              name="fav"
              onChange={handleOnChange}
              checked={form.fav.includes("walking")}
            />
          </label>
          <label>
            Sport
            <input
              value="sport"
              type="checkbox"
              name="fav"
              onChange={handleOnChange}
              checked={form.fav.includes("sport")}
            />
          </label>
        </label>
        <label>
          City:
          <select onChange={handleOnChange} value={form.city} name="city">
            {cities.map(function (item) {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <Preview
        firstName={form.firstName}
        lastName={form.lastName}
        onChange={handleOnchangeFullName}
      />
      <Final fullName={fullname} />
    </div>
  );
}

export default App;
