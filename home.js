function Home() {
  return (
    <Card
      class="text-center"
      header="BadBank Home Page"
      title="Welcome to the very bad haunted bank"
      text="We steal your money!"
      body={
        <>
          <div
            id="homephotdiv"
            className="container"
            style={{ maxWidth: "200px" }}
          >
            <p class="text-center">
              <strong>Enter at your own risk! </strong>
            </p>
            <img
              src="badBankImg.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </>
      }
    />
  );
}
