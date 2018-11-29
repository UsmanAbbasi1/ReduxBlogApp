import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../actions";

class PostShow extends Component{

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
            </div>
        )
    }

}

function mapStateToProps(state, ownProps){
    console.log('id:',ownProps.match.params.id)
    console.log('abc',state.posts);
    return {post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostShow);