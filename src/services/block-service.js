import { storageService } from './storage-service'
import { utilService } from './util-service'

const KEY = 'block_db'

_createBlocks()

export const blockService = {
    query,
    getById
}
function query() {
    return storageService.query(KEY)
}

function getById(blockId) {
    return storageService.get(KEY, blockId)
}

function _createBlocks() {
    let blocks = utilService.loadFromStorage(KEY)
    if (!blocks || !blocks.length) {
        blocks = [
            {
                id: '1',
                value:
                    `
const array1 = [1,3,56,33]
const isLargerThen = (el)=> el > 44
const res = array1.findIndex(isLargerThen)
    res === ?
                `,
                topic: 'Array.findIndex()',
                result:
                    `
const array1 = [1,3,56,33]
const isLargerThen = (el)=> el > 44
const res = array1.findIndex(isLargerThen)
    res === 2
                `,
            },
            {
                id: '2',
                value:
                    `
const array1 = [1,3,56,33]
const isSmallerThen = (el)=> el < 2
const res = array1.includes(isSmallerThen)
    res === ?
            `,
                topic: 'Array.includes()',
                result:
                    `
const array1 = [1,3,56,33]
const isSmallerThen = (el)=> el < 2
const res = array1.includes(isSmallerThen)
    res === true
            `
            },
            {
                id: '3',
                value:
                    `
const array1 = [1,3,56,33]
const isLargerThen = (el)=> el > 44
const res = array1.find(isLargerThen)
    res === ?
                `,
                topic: 'Array.find()',
                result:
                    `
const array1 = [1,3,56,33]
const isLargerThen = (el)=> el > 44
const res = array1.find(isLargerThen)
    res === 56`
            },
        ]
        utilService.saveToStorage(KEY, blocks)
    }
    return blocks
}
