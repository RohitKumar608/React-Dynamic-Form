import React, { Component } from 'react';
import Json from './jsonForm//formField';
import CreateDynamicForm from './createDynamicForm/createDynamicForm'
import moment from 'moment';
class App extends Component {
  state = {
    dynamicForm: []
  }
  componentDidMount() {
    this.getDynamicForm();
  }
  getDynamicForm=()=>{
    this.setState({ dynamicForm: Json.result.data.result });
    //set the state of fields
    let fieldsObjects = [];
    Json.result.data.result.forEach(formField => {
      let fieldName = formField.fieldName;
      if (formField.displayType === "date") {
        let todayDate = new Date();
        todayDate = moment(todayDate).format("DD/MM/YYYY");
        this.setState({ [fieldName]: todayDate });
      } else if (formField.displayType === "checkbox") {
        this.setState({ [fieldName]: false });
      } else {
        this.setState({ [fieldName]: "" });
      }
      fieldsObjects.push({ fieldId: formField.id ,fieldName:formField.fieldName});
    });
    this.setState({ fieldsObject: fieldsObjects});
  }
  onSelectHandler = async (fieldName,event) => {
    this.setState({ [fieldName]: event.target.value });
  }
  onChangeHandler = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };
  onDatePickerHandler = (value, fieldName) => {
    if (!isNaN(value)) {
      this.setState({ [fieldName]: value.toLocaleDateString() });
    }
  };
  onCheckboxHandler = fieldName => {
    this.setState({ [fieldName]: !this.state[fieldName] });
  };
  onIntegerHandler = (event, fieldName) => {
    console.log(this.state)
    if (!isNaN(event.target.value)) {
      this.setState({ [fieldName]: (event.target.value) });
    }
  };
  onSubmitFormHandler=(event)=>{
    event.preventDefault();
    let fieldsObjects = [...this.state.fieldsObject];
    fieldsObjects.forEach((forms,index)=>{
      fieldsObjects[index]["fieldValue"] = this.state[forms.fieldName];
    });
    console.log(fieldsObjects);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <h4 style={{textAlign: 'center'}}>Create DynamicForm in React</h4>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td >
                  <form className="well form-horizontal" >
                    <fieldset>
                      <CreateDynamicForm {...this.state}
                        onSelectHandler={this.onSelectHandler}
                        onChangeHandler={this.onChangeHandler}
                        onDatePickerHandler={this.onDatePickerHandler}
                        onCheckboxHandler={this.onCheckboxHandler}
                        onIntegerHandler={this.onIntegerHandler}
                      />
                      <div className="form-group">
                        <div className="col-md-8 inputGroupContainer" style={{float: 'right'}}>
                          <div className="input-group"></div>
                          <input onClick={this.onSubmitFormHandler}  type="submit" className="btn btn-sm btn-primary" value="Submit" />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default App;
