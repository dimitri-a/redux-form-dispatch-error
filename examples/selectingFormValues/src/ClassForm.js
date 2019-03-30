import React, { Component } from 'react';
import { Field, reduxForm,change ,getFormValues} from 'redux-form';
import { connect } from 'react-redux';

class SelectingFormValuesForm extends Component {
    // ...




    // componentWillReceiveProps(nextProps) {
    //     //debugger
    //     const nextValues = nextProps.values;
    //     const values = this.props.values;

    //     // if at least one of the form values changed

    // }

    // handleChange(){
    //     // debugger
    //     // console.log('handlechange',lastName)
    //     debugger
    //     console.log('formvalues=',this.props.formValues)
        
    // }

    render() {
        const { favoriteColorValue,
            fullName,
            handleSubmit,
            hasEmailValue,
            pristine,
            reset,
            submitting,
            changeName,
            formValues
         } = this.props

         console.log('formvalues=',formValues)



        return <form onSubmit={handleSubmit}>
            <div>
                <button onClick={() => changeName('Harry')}>change to Harry</button>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                       
                    />
                </div>
            </div>
            <div>
                <label htmlFor="hasEmail">Has Email?</label>
                <div>
                    <Field
                        name="hasEmail"
                        id="hasEmail"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            {hasEmailValue && (
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
            )}
            <div>
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="#ff0000">Red</option>
                        <option value="#00ff00">Green</option>
                        <option value="#0000ff">Blue</option>
                    </Field>
                </div>
            </div>
            {favoriteColorValue && (
                <div
                    style={{
                        height: 80,
                        width: 200,
                        margin: '10px auto',
                        backgroundColor: favoriteColorValue
                    }}
                />
            )}
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit {fullName}
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
          </button>
                <button type="button" onClick={this.changeStuff}>
                    Change first name
          </button>
            </div>
        </form>
    }
};

const mapStateToProps = (state) => ({
    // ...
});

const mapDispatchToProps = (dispatch) => ({
    changeName: name => dispatch(change('selectingFormValues', 'firstName', name))
})

// // Decorate with connect to read form values
//const selector = formValueSelector('selectingFormValues') // <-- same as form name
// SelectingFormValuesForm = connect(
//     state => ({
//             formValues: getFormValues('selectingFormValues')(state),
//           }),
//     mapStateToProps,
//     mapDispatchToProps
// ) (SelectingFormValuesForm);


const Example =reduxForm({
    form: 'selectingFormValues' ,// a unique name for this form
})(SelectingFormValuesForm);

const ConnectedForm = connect(state => ({
    formValues: getFormValues('selectingFormValues')(state),
  }))(Example);
  
  export default ConnectedForm
  




// const ConnectedAdjustmentRowsTable = connect()(AdjustmentRowsTable);
  
//   export default ConnectedAdjustmentRowsTable;
  