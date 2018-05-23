import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
    return(
        <div>
            {props.expenses.length > 0 ? <p>Viewing {props.expenses.length} expense{props.expenses.length > 1 && 's'} totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</p> : <p>You have no expenses</p>}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
};

export default connect(mapStateToProps)(ExpensesSummary);