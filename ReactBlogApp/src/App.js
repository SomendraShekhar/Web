import './App.css';
import BlogInput from './components/BlogInput';
import BlogList from './components/BlogList';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <BlogInput/>
      <BlogList/>

    </div>
  );
}

export default App;
