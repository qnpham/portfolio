function introHandler() {
  alert("works!");
}

function App() {
  return (
    <main
      onClick={introHandler}
      className="font-montserrat w-11/12 h-screen m-auto"
    >
      <div className=" pt-8">
        <p className="font-light">Hi! My name is</p>
        <p className="text-3xl font-medium">Quan Pham,</p>
        <p className="font-light">
          I'm a <span className="text-sky-300">Front End</span> Web Developer
          located from Los Angeles
        </p>
        <p className="text-center mt-60 text-2xl">Tap!</p>
      </div>
    </main>
  );
}

export default App;
