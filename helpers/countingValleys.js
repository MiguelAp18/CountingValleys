
const countingValleys = ({steps, path}) => {


    let valleys = 0;
    let sea_level = 0;

    for(const step of path.toUpperCase()) {

        let prev = sea_level;
        sea_level = step === 'U' ? sea_level + 1 : sea_level - 1;

        if(prev == -1 && sea_level == 0) valleys++;
    }

    return valleys;

}

module.exports = { countingValleys }
