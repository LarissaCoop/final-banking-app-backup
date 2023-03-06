function Withdraw() {
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (isNaN(field) || field < 0) {
      setStatus("Error: " + "Must be a number greater than 0");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field > ctx.auth.balance) {
      setStatus("Error: " + "Balance must be less than your current balance");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw, "Withdraw must me greater than 0")) return;
    // ctx.users.push({name,email,password,balance:100});set

    ctx.withdraw(ctx?.auth?.email, withdraw);
  }

  return (
    <Card
      header="Withdraw"
      title={ctx?.auth?.name && "Welcome" + " " + ctx?.auth?.name}
      status={status}
      body={
        ctx.auth ? (
          <>
            <h4>Current Balance: ${ctx.auth.balance}</h4>
            <br />
            Withdraw Amount:
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="$0.00"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              id="button"
              className="btn btn-danger btn-block"
              type="submit"
              onClick={handleCreate}
              disabled={!withdraw}
            >
              Withdraw
            </button>
            <br />
            <br />
            <div class="text-left"></div>
          </>
        ) : (
          <>
            <h4>You must login to withdraw</h4>
          </>
        )
      }
    />
  );
}
