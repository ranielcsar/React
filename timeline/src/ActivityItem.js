import React from 'react';

class ActivityItem extends React.Component {
   render() {
      const { atividade } = this.props;

      return (
         <div className="item">
            { atividade.user.name }
            <div className="avatar">
               <img alt={ atividade.text } 
                    src={ atividade.user.avatar }/>                  
            </div>

            <span className="time">
               { atividade.time }
            </span>
            <p>{ atividade.text }</p>

            <div className="commentCount">
               { atividade.comments.length }
            </div>
         </div>
      );
   }
}

export default ActivityItem;