import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(values){
        console.log(values);
    }

    renderField(field){
        const {touched, error} = field.meta;
        const className = `form-group ${touched && error? 'has-danger': ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {/*field has three states i.e. 'pristine', 'touched' and 'invalid' */}
                    { touched? error : ''}
                </div>
            </div>
        );
    }

    render(){
        // Both ways are correct,
        // second one is shortcut and valid because variable name we are using and property name in this.props is same
        // const handleSubmit = this.props.handleSubmit;
        // This data is added in props by reduxForm we attached at bottom of this file
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title"
                    name="title"
                    /*Field component first run validate() and then call whatever is assigned to component prop*/
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

function validate(values){
    let errors = {};

    if (!values.title){
        errors.title = "Enter some value"
    }
    if (!values.categories){
        errors.categories = "Enter a category"
    }

    if (!values.content){
        errors.content = "Enter some content"
    }
    else if(values.content.length < 2)
    {
        errors.content = "Content length should be atleast 3 characters"
    }

    // If errors is empty, form is okay to submit otherwise
    // If errors has any properties, redux form assumes it as invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);