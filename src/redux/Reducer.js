
const initialState = [

];

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADATA':
            let vdata = [...state]
            vdata=[...action.payload]
            return vdata


        default: return state
    }
}
export default Reducer;