import { createCalculator } from "../04. Add-Subtract/addSubtract.js";
import { it } from "mocha";
import { expect } from "chai";

describe('createCalculator', function() {
    it('should return a module with add, subtract and get functions', function() {
      let calculator = createCalculator();
      expect(calculator).to.be.an('object');
      expect(calculator).to.have.property('add').that.is.a('function');
      expect(calculator).to.have.property('subtract').that.is.a('function');
      expect(calculator).to.have.property('get').that.is.a('function');
    });
  
    it('should keep an internal sum that can not be modified from the outside', function() {
      let calculator = createCalculator();
      expect(calculator.value).to.be.undefined;
      calculator.value = 10;
      expect(calculator.get()).to.equal(0);
    });
  
    it('should add a number or a string containing a number to the internal sum', function() {
      let calculator = createCalculator();
      calculator.add(5);
      expect(calculator.get()).to.equal(5);
      calculator.add('10');
      expect(calculator.get()).to.equal(15);
    });
  
    it('should subtract a number or a string containing a number from the internal sum', function() {
      let calculator = createCalculator();
      calculator.subtract(5);
      expect(calculator.get()).to.equal(-5);
      calculator.subtract('10');
      expect(calculator.get()).to.equal(-15);
    });
  });