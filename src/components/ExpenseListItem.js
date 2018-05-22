import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        <p>{amount} - {createdAt}</p>
        
    </div>
);

export default (ExpenseListItem);