// code your solution here
function superbowlWin(arr) {
    const result = arr.find(element => element.result === "W");
    return result === undefined ? undefined : result.year;
}