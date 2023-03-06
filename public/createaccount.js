function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field && label == "password" && field.length < 8) {
      setStatus("Error: " + "password must be greater than 8");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  // s

  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setMessage(
      "Your account is successfully Created! Now you are doomed...I mean you can login now."
    );
    setTimeout(() => setMessage(""), 5000);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-danger btn-block"
              onClick={handleCreate}
              disabled={!name || !email || !password}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>{message ?? message}</h5>
            <button
              type="submit"
              className="btn btn-success btn-block"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
