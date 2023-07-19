
import { Header,Footer } from './components';
import AllRoutes from './routes/AllRoutes';




function App() {
  return (
    <div className= "dark:bg-dark">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
