{
    //-------------------problem-08-------------------

    type Person = {
        name: string,
        roll: number
    }
    const parson: Person = {
        name: 'Sourav',
        roll: 772462,
    }
    const validateKeys = (obj: Person, keys: (keyof Person)[]) => {
        for (let key of keys) {
            if (obj[key] !== undefined) {
                return true
            } else {
                return false
            }
        }
    }
    // console.log(validateKeys(parson, ['hi']));









    // end
}