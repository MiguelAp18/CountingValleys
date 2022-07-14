const { countingValleys } = require("./helpers/countingValleys");
const { menu, pause, readInput } = require("./helpers/inquirer");


const main = async () => {

  console.clear();

  let opt;

  do {
    opt = await menu();

    switch(opt) {
      case 1:
        const n = await readInput("Number of steps: ");
        // check if n is a number
        const numberRegExp = new RegExp(/^[0-9]+$/);
        if (!numberRegExp.test(n)) {
          console.log("\n[!] You only must enter numbers!");
          break;
        }

        let valid = true;
        const sequence = await readInput("Sequence of steps:")  
        // check if sequence it's only strings (D's and U's)
        for(let i=0; i<sequence.length; i++) {
          const char = sequence[i];
          if (char !== 'd' && char !== 'u') valid = false;
        }

        if (!valid) {
          console.log("\n[!] You only must enter steps UP and DOWN!");
          break;
        }

        // check that length of string matches the number
        if (parseInt(n) !== sequence.length) {
          console.log("\n[!] You must match the given number of steps!");
          break;
        }

        const params = {
          steps: parseInt(n),
          path: sequence
        }

        const output = countingValleys(params);

        console.log("\n\n-> OUTPUT:", output);
        break;
    }
    if (opt !== 2) await pause();
  } while( opt !== 2 );

  console.clear();

}

main();
