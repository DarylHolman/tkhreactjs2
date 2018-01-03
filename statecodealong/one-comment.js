import React from 'react';


class OneComment extends React.Component{
  render(){
  	if(this.props.newcomment) {
      var newComments =
      <div className='box box2 shadow1'>
      	<h3>{ this.props.newcomment }</h3>
      	</div>;
     } else {
     	var comments =
     	<div className="box box1 shadow1">
     	<h3>{this.props.comment}</h3>
     </div>;
 	}

    return (
        <div>
        { newComments }
        { comments }
        </div>
    )

  }
}

export default OneComment;
