//1. download node.
//2. check node -v
//3. create empty folder
//4. open cmd with code .
//5. npm init
//6. enter details of project.
//you will get package.json file with npm init.
//7. npm install --save lite-server.
//8.go to package.json and write start script
//like this => "start":"lite-server",
//create two files index.js and index.html
//add cdns of react , react dom and babel in index.html.(root file)

//PARENT COMPONENT
const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1>hellow world</h1>
        <h1>hellow world</h1>
        <h1>hellow world</h1>
        <h1>hellow world</h1>
        <h1>hellow world</h1>
      </div>
      <Footer />
    </div>
  );
};

//COMPONENT-1
const NavBar = () => {
  return (
    <div>
      <h1>NAVBAR</h1>
    </div>
  );
};
//COMPONENT-2
const Footer = () => {
  return (
    <div>
      <h1>FOOTER</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//REACTDOM ARGUMENTS:
//1.component to show
//2.where to show
///function

//ASSIGNMENTS  ON NEXT SAT(20-6-2020):
//TWENTY CHALLENGES,
//WHOLE REACT SETUP MANNUAL WITH 4 COMPONENTS CALLED ON PARENT COMPONENT.,
