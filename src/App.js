import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import {Loading} from './components/LoadingComponent';

const store = ConfigureStore();
// const { persistor, store } = ConfigureStore();

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter >
          <div className="App">
            {/* <Route exact  component={Main}/> */}
             <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
      
//     //   <Main/>
//     // </div>

//     <Provider store={store}>
//       <BrowserRouter>
//         <div className="App">
//           <Main />
//         </div>
//       </BrowserRouter>
//     </Provider>
//     // <BrowserRouter>
//     //   <div className="app">
//     //     <Main/>
//     //   </div>
//     // </BrowserRouter>
//   );
// }

export default App;

// export default function App() {
//   return (
//       <Provider store={store}>
//           <PersistGate
//               loading={<Loading />}
//               persistor={persistor}>
//               <Main />
//           </PersistGate>
//       </Provider>
//   );
// }