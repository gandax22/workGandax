import "./App.css"
import Header from "./components/header";
import Main from "./components/main";
import { UserProvider } from "./context/user"

const App = () => {
  return (
	  <UserProvider>
	    <div className="App">
			<Header/>
			<Main/>
		</div>
	  </UserProvider>
  );
}

export default App;
