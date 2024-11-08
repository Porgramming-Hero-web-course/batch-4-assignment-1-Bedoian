{
    // -------------------problem-06----------------------
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    const profile: Profile = {
        name: 'Sourav',
        age: 45,
        email: 'rafioulhasan2@gmail.com'
    }


    const updateProfile = (obj1: Profile, obj2: Partial<Profile>): Profile => {

        return { ...obj1, ...obj2 }
    }


    // console.log(updateProfile(profile, { age: 0 }));


    // end
}