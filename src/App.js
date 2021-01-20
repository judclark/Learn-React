import React, {useState} from 'react';
import Tweet from './tweet'
function App() {
  const [users, setUsers] = useState([
    {name : 'Ed', message : 'Hello There'},
    {name : 'Thomas', message : 'Oh yeah!'},
    {name : 'Billy', message : 'Dangnabbit'}
  ]);

  return (
    <div className='app'>
      {users.map(user => (
        <Tweet names={user.name} messages={user.message}/>
      ))};
    </div>
  );
  
}

export default App;
