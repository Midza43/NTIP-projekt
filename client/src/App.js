import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import RoutesList from './routes/routesList';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Body/>
      <RoutesList />
      <Footer />
    </div>
  );
}

export default App;
