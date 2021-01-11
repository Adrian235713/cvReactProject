//Components
import Article from './AppComponents/Article';
import Profile from './AppComponents/Profile';
import MainInformation from './AppComponents/MainInformation';
import Footer from './AppComponents/Footer'

// CSS
import './Sass/App.css';

function App() {

  return (
    <div className='mainDiv'>

        <div className='asideAndArticle'>

        <aside>
          <Profile/>
          <MainInformation/>

        </aside>
        
        <article>
          <Article/>
        </article>

        </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
