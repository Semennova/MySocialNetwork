import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer'
import Loader from '../Loader/Loader'
import { compose } from 'redux'
import { getUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getPortionSize } from '../../redux/users-selectors'

class UsersContainer extends React.Component {

    componentDidMount(){
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChange = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize)
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
                      portionSize={this.props.portionSize}
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
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state)
    }
}

 export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers }),
    //withAuthRedirect
)(UsersContainer)
