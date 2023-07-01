import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Main from './Components/LayOut/Main/Main';
import Products from './Components/Products/Products';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {path:'home',
      element:<Home></Home>
  },
    {path:'about',
      element:<About></About>
  },
      ]
    },
    
    {path:'products',
      element:<Products></Products>
  }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
