import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate } from "react-day-picker/moment";

const expenseCreateForm = props => {
  return props.dynamicForm.map((form, index) => {
    switch (form.inputType) {
      case "select":
        return (
              <div key={form.id} className="form-group">
                    <label className="col-md-4 control-label">{form.labelName}</label>
                    <div className="col-md-8 inputGroupContainer">
                        <div className="input-group" style={{ width: '40%'}}>
                          <select
                          onChange={(e)=>props.onSelectHandler(form.fieldName,e)}
                          value={props[form.fieldName] ? props[form.fieldName] : ""}
                           className="selectpicker form-control">
                           <option >Select {form.labelName}</option>
                          {form.connectedListData&&form.connectedListData.listManagementData.map((opt,index)=>
                              <option key={opt.id}  value={opt.id}>{opt.itemName}</option>
                          )}
                          </select>
                        </div>
                    </div>
                  </div>
        );
      case "text":
        return (
          <div key={form.id} className="form-group">
          <label className="col-md-4 control-label">{form.labelName}</label>
          <div className="col-md-8 inputGroupContainer">
             <div className="input-group" style={{ width: '40%'}}>
              <input
                type="text"
                placeholder="&nbsp;"
                name={form.fieldName}
                onChange={e => props.onChangeHandler(e, form.fieldName)}
                value={props[form.fieldName] ? props[form.fieldName] : ""}
                className="form-control"
              />
              </div>
           </div>
        </div>
        );
      case "date":
        return (
          <div key={form.id} className="form-group">
          <label className="col-md-4 control-label">{form.labelName}</label>
          <div className="col-md-8 inputGroupContainer">
             <div className="input-group" style={{ width: '40%'}}>
              <DayPickerInput
                formatDate={formatDate}
                dayPickerProps={{ disabledDays: {after: new Date()} }}
                selectedDays={
                  props[form.fieldName] ? props[form.fieldName] : new Date()
                }
                onDayChange={e => props.onDatePickerHandler(e, form.fieldName)}
                placeholder={ props[form.fieldName]? props[form.fieldName]:form.labelName}
              />
            </div>
          </div>
        </div>
        );
      case "textarea":
        return (
          <div key={form.id} className="form-group">
          <label className="col-md-4 control-label">{form.labelName}</label>
          <div className="col-md-8 inputGroupContainer">
             <div className="input-group" style={{ width: '40%'}}>
              <textarea
                rows="3"
                name={form.fieldName}
                className="form-control"
                onChange={e => props.onChangeHandler(e, form.fieldName)}
                value={props[form.fieldName] ? props[form.fieldName] : ""}
                placeholder="&nbsp;"
              />
              <label>{form.labelName}</label>
            </div>
          </div>
          </div>
        );
      case "checkbox":
        return (
          <div key={form.id} className="form-group">
          <label className="col-md-4 control-label">{form.labelName}</label>
          <div className="col-md-8 inputGroupContainer">
             <div className="input-group" style={{ width: '40%'}}>
                <input
                  type="checkbox"
                   value={props[form.fieldName]?props[form.fieldName]:false}
                  checked={props[form.fieldName]?props[form.fieldName]:false}
                  onChange={e => props.onCheckboxHandler(form.fieldName)}
                />
               </div>
               </div>
               </div>
        );
      case "boolean":
        return (
          <div key={form.id} className="form-group">
          <label className="col-md-4 control-label">{form.labelName}</label>
          <div className="col-md-8 inputGroupContainer">
             <div className="input-group" style={{ width: '40%'}}>
                <input
                  type="checkbox"
                   value={props[form.fieldName]?props[form.fieldName]:false}
                  checked={props[form.fieldName]?props[form.fieldName]:false}
                  onChange={e => props.onCheckboxHandler(form.fieldName)}
                />
            </div>
          </div>
        </div>
        );
      case "number":
        return (
          <div key={form.id} className="form-group">
          <label className="col-md-4 control-label">{form.labelName}</label>
          <div className="col-md-8 inputGroupContainer">
             <div className="input-group" style={{ width: '40%'}}>
              <input
                type="text"
                placeholder="&nbsp;"
                name={form.fieldName}
                onChange={e => props.onIntegerHandler(e, form.fieldName)}
                value={props[form.fieldName] ? props[form.fieldName] : ""}
                className="form-control"
              />
            </div>
          </div>
        </div>
        );
        default:
          return '';

      }
  });
}

export default expenseCreateForm;
