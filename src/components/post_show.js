import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost, deletePost} from "../actions";

class PostShow extends Component{

    onDeletePost(){
        this.props.deletePost(this.props.match.params.id, () => this.props.history.push("/"));
    }

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id)
    }

    render(){
        if (!this.props.post){
            return <div>Loading...</div>;
        }

        return(
            <div>
                <h3>
                {this.props.post.categories}
                </h3>
                <h3>
                {this.props.post.title}
                </h3>
                <button className="btn-danger" onClick={this.onDeletePost.bind(this)}>Delete Post</button>
            </div>
        )
    }

}

function mapStateToProps(state, ownProps){
    // ownProps contain props being passed to this component i.e. PostShow
    return {post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);