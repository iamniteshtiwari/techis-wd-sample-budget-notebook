import API from '../../API';
import {
    addTransactionAction,
    deleteTransactionAction,
    errorTransactionAction,
    fetchReportTransactionsAction,
    fetchTransactionsAction,
    updateTransactionAction,
} from './actions';

const api = new API();

export const fetchTransactions = (query) => {
    return async (dispatch) => {
        return api.getTransactions(query)
            .then((transactions) => {
                dispatch(fetchTransactionsAction(transactions))
            });
    }
}

export const addTransaction = (addTransactionBody) => {
    return (dispatch) => {
        return api.addTransactions(addTransactionBody)
            .then((transactions) => {
                dispatch(addTransactionAction(transactions))
            }).catch((errors) => {
                dispatch(errorTransactionAction(errors))
            });
    }
}

export const updateTransaction = (updateTransactionBody, id) => {
    return (dispatch) => {
        return api.updateTransactions(updateTransactionBody, id)
            .then((transactions) => {
                dispatch(updateTransactionAction(transactions))
            }).catch((errors) => {
                dispatch(errorTransactionAction(errors))
            });
    }
}

export const deleteTransaction = (id) => {
    return (dispatch) => {
        return api.deleteTransactions(id)
            .then((transactions) => {
                dispatch(deleteTransactionAction(transactions))
            }).catch((errors) => {
                dispatch(errorTransactionAction(errors))
            });
    }
}

export const fetchReportTransactions = (params = {}) => {
    return async (dispatch) => {
        return api.getReportTransactions(params)
            .then(report => dispatch(fetchReportTransactionsAction(report)));
    }
}