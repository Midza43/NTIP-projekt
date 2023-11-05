import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
