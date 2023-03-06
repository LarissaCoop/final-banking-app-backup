function Deposit() {
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    // show alert when field is not a number
    if (isNaN(field)) {
      alert("The amount should be a number!");
      setStatus("Error: " + "The amount should be a number!");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    //
    if (field < 0) {
      alert("The amount should be greater than 0");
      setStatus("Error: " + "The amount should be greater than 0");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit, "Deposit must me greater than 0")) return;
    // ctx.users.push({name,email,password,balance:100});set

    ctx.deposit(ctx?.auth?.email, deposit);
  }

  return (
    <Card
      header="Deposit"
      title={ctx?.auth?.name && "Welcome" + " " + ctx?.auth?.name}
      status={status}
      body={
        ctx.auth ? (
          <>
            <h4>Current Balance: ${ctx.auth.balance}</h4>
            <br />
            Deposit Amount:
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="$0.00"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              id="button"
              type="submit"
              onClick={handleCreate}
              className="btn btn-danger btn-block"
              disabled={!deposit}
            >
              Deposit
            </button>
            <br />
            <br />
            <div class="text-left"></div>
          </>
        ) : (
          <>
            <h4>You must login to Depost</h4>
          </>
        )
      }
    />
  );
}
