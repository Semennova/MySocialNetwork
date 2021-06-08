import React, { useState } from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalCount, pageSize, onPageChange, users, portionSize, requestUsers, ...props}) => {


    return <div>
       <Paginator currentPage={currentPage} onPageChange={onPageChange} pageSize={pageSize} totalCount={totalCount} portionSize={portionSize} requestUsers={requestUsers}/>


      {users.map(u => <User user={u} 
                                key={u.id}  
                                followingInProgress={props.followingInProgress} 
                                unfollow={props.unfollow} 
                                follow={props.follow}
                                requestUsers={props.requestUsers}
                                />
                               
                                )
        }
</div> 
}

export default Users







                    