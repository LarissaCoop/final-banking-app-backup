function AllData() {
    const ctx = React.useContext(UserContext);
    return (
        <>
            <div className='row'>
                {ctx.users.map((user) => (
                    <>
                        <div className='col-md-6'>
                            <Card
                                header={'Username: ' + user.name}
                                title={'Total Amount: ' + '$' + user.balance}
                                text={`Email: ${user.email}`}
                                body={<p>Password: {user.password}</p>}
                            />
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}
