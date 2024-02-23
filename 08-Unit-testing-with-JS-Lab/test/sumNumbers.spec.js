import { expect } from "chai";
import { sum } from "../01. Sum of Numbers/sumNumbers.js";
import { it } from "mocha";

describe("This is my first test", ()=> {
    
    it("Test sum of integers bigger than zero", ()=>{
        expect(sum([1,2])).to.equal(3);
    });

    // Test overloading
    it("Test sum zero and positive numbers. Returns positive number.", ()=>{
        expect(sum([0,1])).to.equal(1);
    });
    it("Test sum zero plus zero. Returns zero.", ()=>{
        expect(sum([0,0])).to.equal(0);
    });
    it("Test sum zero and negative numbers. Returns negative number.", ()=>{
        expect(sum([0,-1])).to.equal(-1);
    })

    it("Tests to sum positive and negative numbers. Returns sum.", ()=>{
        expect(sum([-5,5])).to.equal(0);
        expect(sum([-5, 10])).to.equal(5);
    }); 

    it("Test sum of negative numbers.Returns negative number", ()=>{
        expect(sum([-5, -10])).to.equal(-15);
    });
    
    //Example
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    // Test overloading
    it('sums multiple numbers', () => {
        expect(sum([1,1])).to.equal(2);
    });

    it('sums different numbers', () => {
        expect(sum([2,3,4])).to.equal(9);
    });
    



})