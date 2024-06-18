export const addProduct=(product)=> {
    return {
        type: 'add',
        Paylaod:product,
    }
}
export const deleteProduct=(product)=> {
    return {
        type: 'delete',
        Paylaod:product,
    }
}