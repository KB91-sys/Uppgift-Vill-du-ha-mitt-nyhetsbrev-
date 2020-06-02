import React from 'react';


class UserName extends React.Component {
    render() { 

        const userName = this.props.userName;
        
        return (

            <div>
            
                Welcome {userName}

            </div>

        );
        
    }

}

export default UserName;



