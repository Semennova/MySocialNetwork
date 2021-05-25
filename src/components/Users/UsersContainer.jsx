import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer'
import Loader from '../Loader/Loader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching:  state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

 export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers, }),
    withAuthRedirect
)(UsersContainer)
