const axios = require('axios');
const GET_ACTIONS_URL = 'https://wax.cryptolions.io/v1/history/get_actions';

// It possible to fetch latest irreversible transaction specific not for contract but for whole chain using get_info + trace_api/get_block but it's not working

const findLatestIrreversibleTransaction = (latestIrreversibleBlock, actions) => {
    return actions.reduce((result, action) => {
        const { blockNumber} = result;
        const { block_num: newBlockNumber, action_trace: { trx_id: newTransactionId }} = action;

        if (newBlockNumber <= latestIrreversibleBlock && newBlockNumber > blockNumber) {
            return {
                transactionId: newTransactionId,
                blockNumber: newBlockNumber,
            }
        }

        return result;
    }, {transactionId: 0, blockNumber: -1}).transactionId;
};

module.exports = async (contractName) => {
    try {
        const { data: {
            last_irreversible_block: lastIrreversibleBlock,
            actions = [],
        }} = await axios({
            method: 'POST',
            url: GET_ACTIONS_URL,
            data: {
                account_name: contractName,
                pos: 0,
                offset: 0,
                sort: 'desc',
            },
        });

        if (!actions.length) {
            return;
        }

        return findLatestIrreversibleTransaction(lastIrreversibleBlock, actions);
    } catch(err) {
        console.error('getLatestIrreversibleTransaction', err);
    }
};