import { assert, expect } from "chai";
import { it } from "mocha";
import { isSymmetric } from "../02. Check for Symmetry/checkForSymmetry.js";

describe( "These tests are for second function \"Check for symmetric array\"", ()=>{
    
    
        it("Should return false if a non-array value is given", ()=>{
            //Arrange
            
            //Act
            const nanResult = isSymmetric(NaN);
            const undefinedResult = isSymmetric(undefined);
            const objectResult = isSymmetric({});
            const nullResult = isSymmetric(null);
            //Assert
            expect(nanResult).to.be.false;
            expect(undefinedResult).to.be.false;
            expect(objectResult).to.be.false;
            expect(nullResult).to.be.false;
            
        });


    it("Check undefined. Returns \"false\"", ()=>{
        //Arrange
        const inputArray = undefined;
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
        
    });

    it("Check when non-array value is given. Returns \"false\"", ()=>{
        //Arrange
       
        //Act
        const result = isSymmetric();
        //Assert
        expect(result).to.be.false;
        
    });

    it("Check non array. Returns \"false\"", ()=>{
        //Arrange
        const inputArray = null;
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
        
    });

    it("Check string. Returns \"false\"", ()=>{
        //Arrange
        const inputArray = "hello";
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
        
    });

    it("Check single number. Returns \"false\"", ()=>{
        //Arrange
        const inputArray = 12564;
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
        
    });


    it("Check symmetric array with numbers. Returns \"true\"", ()=>{
        //Arrange
        const inputArray = [1,2,3,2,1];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.true;
        
    });
    it("Check symmetric array with numbers. Returns \"true\"", ()=>{
        //Arrange
        const inputArray = [-1,-2,-3,-3,-2,-1];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.true;
        
    });

    it("Check empty array. Returns \"true\"", ()=>{
        //Arrange
        const inputArray = [];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.true;
        
    });

    it("Check single element array. Returns \"true\"", ()=>{
        //Arrange
        const inputArray = [1];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.true;
        
    });

    it("Check array with two elements. Returns \"false\"", ()=>{
        //Arrange
        const inputArray = [1, 2];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
        
    });

    it("Check assymmetric array with numbers and strings. Returns \"false\"", ()=>{
         //Arrange
         const inputArray = [1,2,3,"3","2","1"];
         //Act
         const result = isSymmetric(inputArray);
         //Assert
         expect(result).to.be.false;
    });


    it("Check assymmetric array with strings. Returns \"false\"", ()=>{
        expect(isSymmetric(["hello", "hi","good", "goodbye"])).to.be.false;
    });

    it("Check assymmetric array with numbers. Returns \"false\"", ()=>{
        expect(isSymmetric([1,2,3,4,5])).to.be.false;
    });
    it("Check symmetric array with strings. Returns \"false\"", ()=>{
        expect(isSymmetric(["hello", "hi","good", "hi","goodbye"])).to.be.false;
    });

    it("Check symmetric mixed array containing numbers and strings. Should return \"false\"", ()=>{
        expect(isSymmetric([1,2,3,4,5,"1","2"])).to.be.false;
    });

})