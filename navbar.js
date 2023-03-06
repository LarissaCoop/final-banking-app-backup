function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a className="navbar-brand" href="#">
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tooltip"
                title="Create a user account"
                href="#/CreateAccount/"
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tooltip"
                title="login user"
                href="#/login/"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tooltip"
                title="deposit amount"
                href="#/deposit/"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tooltip"
                title="withdraw your amount"
                href="#/withdraw/"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tooltip"
                title="All users Data"
                href="#/alldata/"
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
