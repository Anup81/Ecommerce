import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProdctScreen from './screens/ProdctScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container className='py-3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProdctScreen} exact />
          {/* <HomeScreen/> */}
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
