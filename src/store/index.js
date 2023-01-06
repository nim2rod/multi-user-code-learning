import { createStore } from 'vuex'
import { blockService } from '../services/block-service'

const store = createStore({
    strict: true,
    state: {
        blocks: null
    },
    getters: {
        blocksToDisplay(state) {
            return state.blocks
        },
    },
    mutations: {
        setBlocks(state, { blocks }) {
            state.blocks = blocks
        },
        updateStory(state, { editedStory }) {
            const idx = state.stories.findIndex((s) => s._id === editedStory._id)
            state.stories.splice(idx, 1, editedStory)
        },
        addStory(state, { newStory }) {
            state.stories.unshift(newStory)
        },
    },
    actions: {
        loadBlocks({ commit }) {
            blockService.query()
                .then((blocks) => {
                    commit({ type: 'setBlocks', blocks })
                    return blocks
                })
                .catch((err) => {
                    console.log('index- catch');
                    console.log(err)
                })
        },
    },

})

export default store