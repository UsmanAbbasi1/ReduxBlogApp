import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/fetch_posts';
import _ from 'lodash';

class PostIndex extends Component{



    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
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
                <h1>Posts</h1>
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

