import MomentUtils from '@date-io/moment'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

export default function DatePicker(props) {

    const {name, label, value, onChange} = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                name={name}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, date))}
                format="DD/MM/yyyy"
            />
        </MuiPickersUtilsProvider>
    )
}
