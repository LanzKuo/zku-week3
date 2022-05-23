//[assignment] write your own unit test to show that your Mastermind variation circuit is working as expected
const chai = require("chai");
const path = require("path");

const wasm_tester = require("circom_tester").wasm;
const buildPoseidon = require("circomlibjs").buildPoseidon;

const assert = chai.assert;

describe("Mastermind variation circuit test", function () {
	this.timeout(100000000);

    	let poseidon;
        let F;
    it("", async () => {
    	const circuit = await wasm_tester("contracts/circuits/MastermindVariation.circom");
	await circuit.loadConstraints();
  	const INPUT = {			     
		pubGuessA: "1",
		pubGuessB: "2",
	  	pubGuessC: "3",													              pubNumHit:"1",													            pubNumBlow:"2",
    		pubSolnHash:"",    			        									      privSolnA:"3",														    privSolnB:"2",			        										  privSolnC:"1", 
    		privSalt:"32468374823",
 
	}	    			        										      const witness = await circuit.calculateWitness(INPUT, true);								    console.log(witness);
    		      														});															
});
