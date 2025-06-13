let arr = [8, 3, 9, 5, 6, 12]

export function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter(element => element % 2 === 0);
}

console.log(filterEvenNumbers(arr))