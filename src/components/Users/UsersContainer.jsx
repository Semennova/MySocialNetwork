import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer'
import Loader from '../Loader/Loader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../redux/users-selectors'

class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
        {this.props.isFetching ? <Loader /> : null}
        
        <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      users={this.props.users}
                      followingInProgress={this.props.followingInProgress}
         />
         
         </>
    }

}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize:getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching:  getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

 export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers, }),
    //withAuthRedirect
)(UsersContainer)
