import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalCount, pageSize, onPageChange, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChange={onPageChange} pageSize={pageSize} totalCount={totalCount}/>


      {users.map(u => <User user={u} 
                                key={u.id}  
                                followingInProgress={props.followingInProgress} 
                                unfollow={props.unfollow} 
                                follow={props.follow}/>)
        }
</div> 
}

export default Users






                    