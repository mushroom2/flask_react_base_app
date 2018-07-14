const initState = {
    downloadsList: ['foo.txt', 'bar.jpg', 'spam.mkv']
};

export default function (state= initState, {type, payload}) {
    if (type === 'FETCH_DOWNLOADS_LIST'){
        return {...state, downloadsList: payload};
    }
    return {...state}
}