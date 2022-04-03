import confirmStyle from "../styles/Confirm.module.css";

const Confirm = ({ data }) => {
  // console.log(firstName);
  return (
    <main className={confirmStyle.main} >
      <div className={confirmStyle.container}>
        <h4>Submission successful!</h4>
        {/* <p>{`Dear ${firstName.value} ${lastName.value},`}</p>
        <p>{`as soon as we have follow-up information we will send it to your email address: ${email.value}`}</p> */}
      </div>
    </main>
  );
};

export default Confirm;
