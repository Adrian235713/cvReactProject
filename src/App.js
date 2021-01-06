//Components
import Article from './AppComponents/Article';
import Profile from './AppComponents/Profile';
import MainInformation from './AppComponents/MainInformation';

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
        
      </footer>
    </div>
  );
}

export default App;
