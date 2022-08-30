const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAquorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      let mutateDNA = returnRandBase();
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      while (mutateDNA === this.dna[randomIndex]) {
        mutateDNA = returnRandBase();
      }

      this.dna[randomIndex] = mutateDNA;
      return dna;
    },

    compareDNA(pAequor) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          counter++;
        }
      }
      let percent = Math.floor((counter / this.dna.length) * 100);

      console.log(
        `specimen #1 and speciment #2 have ${percent}% DNA in common`
      );
    },

    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          counter++;
        }
      }

      let survivalChance = counter / this.dna.length;
      console.log(survivalChance);
      if (survivalChance >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
  };
};

let bug1 = pAquorFactory(1, mockUpStrand());
let bug2 = pAquorFactory(2, mockUpStrand());

console.log(bug1.dna);
console.log(bug2.dna);

bug1.compareDNA(bug2.dna);

bug1.mutate();

bug1.compareDNA(bug2.dna);

