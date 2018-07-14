const initState = {
    downloadsList: []
};

export default function (state= initState, {type, payload}) {
    if (type === 'FETCH_DOWNLOADS_LIST'){
        console.log(payload)
        return {...state, downloadsList: payload};
    }
    return {...state}
}