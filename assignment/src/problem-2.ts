{
    // -------------problem-02----------------
    const removeDuplicates = (arr: number[]): number[] => {
        let origin: number[] = [];
        for (let j = 0; j < arr.length; j++) {
            if (!origin.includes(arr[j])) {
                origin.push(arr[j])
            }
        }

        return origin
    }

    // console.log(removeDuplicates([5,5,5,4,6,5,7,6]));





    // 
}