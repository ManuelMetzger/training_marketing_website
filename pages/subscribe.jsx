import Confirm from "../components/Confirm";
import { useState } from "react";
import subStyle from "../styles/Subscribe.module.css";

const Subscribe = () => {
  const [isSub, setIsSub] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e);

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    setIsSub(true);

    const timer = setTimeout(() => setIsSub(false), 3000);
    return () => clearTimeout(timer);
  };

  return (
    <main className={subStyle.main}>
      <h1 className={subStyle.heading}>
        Let us contact you!
      </h1>
      <div className={subStyle.formContainer}>
        <form
          onSubmit={handleSubmit}
          // action="/api/form"
          // method="post"
          className={subStyle.subForm}
        >
          <label htmlFor="firstName" className={subStyle.left}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={subStyle.right}
            required
          />
          <label htmlFor="lastName" className={subStyle.left}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={subStyle.right}
            required
          />
          <label htmlFor="email" className={subStyle.left}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={subStyle.right}
            required
          />
          <button type="Submit" className={subStyle.submitBtn}>
            Submit
          </button>
        </form>
      </div>
      {isSub && <Confirm />}
    </main>
  );
};

export default Subscribe;
