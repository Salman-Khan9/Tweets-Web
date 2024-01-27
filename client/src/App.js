import './App.css';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import PostTweet from './Pages/PostTweet/PostTweet';
import ViewTweet from './Pages/ViewTweet/ViewTweet';
import GetTweet from './Pages/gettweet/GetTweet';
import Head from './components/Head/Head';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Head></Head>

     <Routes>
      <Route path='/' element={<GetTweet></GetTweet>} />
      <Route path='/Tweet' element={<PostTweet></PostTweet>} />
      <Route path='/posts/:id' element={<ViewTweet></ViewTweet>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
