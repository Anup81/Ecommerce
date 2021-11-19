import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProdctScreen from './screens/ProdctScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container className='py-3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/product/:id' component={ProdctScreen} exact />
          <Route path='/cart/:id' component={CartScreen}></Route>
          {/* <HomeScreen/> */}
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
