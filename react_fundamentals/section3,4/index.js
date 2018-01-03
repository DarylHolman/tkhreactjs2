var React = require('react'),
var ReactDOM = require('react-dom');

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function (user)  {
          return user.friend === true
          }).map(function (user) {
          return <li>{user.name}</li>
          })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function(user) {
            return user.friend === false;
          }).map(function (user) {
            return <li>{user.name}</li>
          })}
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);