export const state = () => ({
    message: 'Hello world!'
})

export const mutations = {
    updateMessage(state, payload){
        state.message = payload
    }
}

export const actions = {
    updateMessageAction(context, payload){
        context.commit('updateMessage', payload)
    }
}