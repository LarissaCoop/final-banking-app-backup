function Login() {
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    // ctx.users.push({email,password,balance:100});
    const loginUser = ctx?.users?.filter(
      (user) => user.email == email && user.password == password
    )[0];
    if (!validate(loginUser, "invalid email or password")) return;
    ctx.login(loginUser);
  }

  return (
    <Card
      header="Login"
      status={status}
      body={
        !ctx.auth ? (
          <>
            Email <br />
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
              disabled={!email || !password}
              className="btn btn-danger btn-block"
              onClick={handleCreate}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <p>Your login!</p>
            <h5>Welcome {ctx.auth.name}</h5>
          </>
        )
      }
    />
  );
}
