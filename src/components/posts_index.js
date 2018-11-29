import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import _ from 'lodash';
import {Link} from "react-router-dom";

class PostIndex extends Component{



    renderPosts(){
        // this.pops.posts is an object containing list of posts and object does not have "map()" function
        // so we are using lodash map() function which can handle objects
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to = {`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>


            )
        })
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to='/posts/new'>
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>

        )
    }

}


function mapStateToProps(state){
    return {posts: state.posts}
}

//Both below 2 lines are equivalent
// export default connect(null, {fetchPosts: fetchPosts})(PostIndex)
export default connect(mapStateToProps, {fetchPosts})(PostIndex)

