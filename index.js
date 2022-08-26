import Footer from '../../components/footer';
import Header from './header';
import BrandList from './object';
import Cal from './calendar';
import Login from './login';

export default function DetailIndex() {
    return (
      <div>
          <Header />
          <Login />
          <BrandList />
          <Footer/>
      </div>
    );
  }
  
