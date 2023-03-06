function Spa() {
    const [auth, setauth] = React.useState(null);
    const [userData, setUserData] = React.useState([
        {
            name: 'abel',
            email: 'abel@mit.edu',
            password: 'secret',
            balance: 100,
        },
    ]);
    const login = React.useCallback((login) => {
        setauth(login);
    }, []);

    const deposit = React.useCallback((id, amount) => {
        const users = userData.map((user) => {
            if (user.email == id) {
                return { ...user, balance: user.balance + Number(amount) };
            }
            return user;
        });
        setUserData(users);
        setauth(users.find((use) => use.email == id));
    });

    const withdraw = React.useCallback((id, amount) => {
        const users = userData.map((user) => {
            if (user.email == id) {
                return { ...user, balance: user.balance - Number(amount) };
            }
            return user;
        });
        setUserData(users);
        setauth(users.find((use) => use.email == id));
    });

    return (
        <HashRouter>
            <NavBar />
            <UserContext.Provider
                value={{
                    users: userData,
                    auth: auth,
                    login: login,
                    deposit: deposit,
                    withdraw: withdraw,
                }}
            >
                <div
                    className='container jumbotron'
                    style={{ padding: '20px', backgroundColor: 'gray' }}
                >
                    <Route path='/' exact component={Home} />
                    <Route path='/CreateAccount/' component={CreateAccount} />
                    <Route path='/login/' component={Login} />
                    <Route path='/deposit/' component={Deposit} />
                    <Route path='/withdraw/' component={Withdraw} />
                    <Route path='/alldata/' component={AllData} />
                </div>
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(<Spa />, document.getElementById('root'));
