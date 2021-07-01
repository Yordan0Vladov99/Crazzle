
import './App.css';
import TopBar from './components/TopBar/TopBar';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Browser from './components/Browser/Browser';
import DiscussionsBrowser from './components/DiscussionsBrowser/DiscussionsBrowser';
import ProductPage from './components/ProductPage/ProductPage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import DiscussionPage from './components/DiscussionPage/DiscussionPage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import UserPage from './components/UserPage/UserPage';
import ReviewForm from './components/ReviewForm/ReviewForm';
import Reviews from './components/Reviews/Reviews';
import DiscussionForm from './components/DiscussionForm/DiscussionForm';
import ProductDiscussions from './components/ProductDiscussions/ProductDiscussions';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <header className="App-header">
      <TopBar/>
    </header>
    <body>
    <Route exact path="/">
    <Redirect to="/home" />
    </Route>
    <Route exact path='/home' component={Homepage} /> 
    <Route exact path='/products/browser/:media/:filter' component={Browser} />
    <Route exact path='/:media/browser/:filter' component={DiscussionsBrowser} />
    <Route exact path='/products/:media/:id' component={ProductPage} />
    <Route exact path='/registration' component={RegistrationForm} />
    <Route exact path='/login' component={LoginForm} />
    <Route exact path='/articles/:id' component={ArticlePage} />
    <Route exact path='/discussions/:id' component={DiscussionPage} />
    <Route exact path='/users/:id' component={UserPage} />
    <Route exact path='/review-form' component={ReviewForm} />
    <Route exact path='/:media/:id/discussion-form' component={DiscussionForm} />
    <Route exact path='/:media/:id/discussions' component={ProductDiscussions} />
    <Route exact path='/:media/:id/review-form' component={ReviewForm} />
    <Route exact path='/:media/:id/reviews' component={Reviews} />
    </body>
  </div>
  </BrowserRouter>
  );
}

export default App;
