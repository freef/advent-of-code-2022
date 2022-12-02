import readFile from '../util/read-file.js'

const calorieCounter= () => {
    const dat = readFile('./day-01/input.txt')
    const arr =  dat.split(/\n\s*\n/)
    const arrNest = arr.map(e => e.split('\n').map(i => parseInt(i)))
    const totals = arrNest.map(array => array.reduce((acc, val) => acc + val))
    // remove NaN from input
    totals.pop()
    totals.sort((a, b) => b - a)
    // solution to part one
    // return totals[0]
    return totals[0] + totals[1] + totals[2]
}

console.log(calorieCounter())
export default calorieCounter
