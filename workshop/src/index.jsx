import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';



const root = document.querySelector('#root');
ReactDOM.render(<App />, root);

// function
// const Header = (props) => {
//   const { firstName, lastName } = props;
//   return (
//     <section>
//       <h1>Hello { firstName } { lastName }!</h1>
//     </section>
//   );
// };

// class

// class Header extends React.Component{
//   render() {
//     const { firstName, lastName } = this.props;
//     return (
//       <section>
//         <h1>Hello {firstName} {lastName}!</h1>
//       </section>
//     )
//   }
// }
