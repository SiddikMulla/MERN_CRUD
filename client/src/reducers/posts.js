export default (posts=[],action) => {
    switch (action.type) {
        case 'FETCH_all':
            return posts;
        case 'CREATE':
            return posts;
            
        default:
            return posts;
    }
}