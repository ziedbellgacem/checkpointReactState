
import React from 'react';
import './App.css';
import Profile from './Componenet/Profile';

class App extends React.Component{
   state=
   {
     show:false
   }
  Shows=()=>{
this.setState({show:!this.state.show})
  }

render(){




return(
<div>
  
 <button  onClick={this.Shows} > Show  </button>
 {
   this.state.show && <Profile/>
 }
 
</div>


)
}


}

export default App;
