import logo from './logo.svg';
import './App.scss';
// import = require

//import MyComponent from './example/MyComponent.js';
//import Declare from './example/Declare.js';
import {FullDeclare, ShortcutDeclare} from './example/Declare.js';

/**
 * 2 components chính
 * 
 * Class components
 * 
 * Function component (function classic, arrow)
 * 
 */

// function components
//  Functions truyền thống của Js
function App() {
  return (
    // Inject: Nhúng, tiêm; Babel = trình compile; Webpack = dịch

    //  JSX Reactjs 
    // Biến của JSX sẽ là 1 khối HTML(buộc phải có mở tag và đóng tác)
    // Hàm bên trong function components bản chất chính là return 1 khối code Html viết Js => Gọi là JSX

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, ReactJs by Nguyễn Thế Anh (Learn from HoiDanIT)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ShortcutDeclare/>
        <FullDeclare></FullDeclare>
        {/* Khai báo 1 component Shortcut */}
        {/*Và */}
        {/* Khai báo 1 component Full */}
      </header>

    </div>
  );
}

//  Arow function
// const  App = () => {
//   return `(
//     <div className="App"> 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, ReactJs by Nguyễn Thế Anh (Learn from HoiDanIT)
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


