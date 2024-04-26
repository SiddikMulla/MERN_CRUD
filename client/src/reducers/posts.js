export default (posts=[],action) => {
    switch (action.type) {
        case 'FETCH_all':
            return action.payload;
        case 'CREATE':
            return posts;
            
        default:
            return posts;
    }
}