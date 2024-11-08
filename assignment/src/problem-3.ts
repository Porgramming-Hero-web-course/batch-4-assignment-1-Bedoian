{
    // ----------------problem-03----------------

    const countWordOccurrences = (sentence: string, word: string): number => {
        const words = sentence.split(' ')
        const specificWord = words.filter(wordi => wordi === word)

        return specificWord.length
    }

    // console.log(countWordOccurrences('I love typescript it is my first love love','love'));

}
