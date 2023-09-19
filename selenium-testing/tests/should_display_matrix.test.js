const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const assert = require('assert');


describe('Should display matrices', function(){
  let driver;
  driver = new Builder().forBrowser('firefox').build();
  before(async function(){
  });

  after(async function(){
    await driver.quit();
  });
  
  /**
   * TESTS START HERE
   */
  it('Should display matrices A and B test', async function(){
    // Navigate to a website
    await driver.get('http://localhost:4200/');

    //Matrix A
    const selectHeightA = await driver.findElement(By.id('matrixAHeight'));
    const heightA = await new webdriver.Select(selectHeightA);
    await heightA.selectByValue('3');//Selects matrix a with 3 rows

    const selectWidthA = await  driver.findElement(By.id('matrixAWidth'));
    const widthA = await new webdriver.Select(selectWidthA);
    await widthA.selectByValue('2'); //Selects matrix a with 2 cols

    //Matrix B
    const selectHeightB = await driver.findElement(By.id('matrixBHeight'));
    const heightB = await new webdriver.Select(selectHeightB);
    await heightB.selectByValue('2');//Selects matrix a with 2 rows

    const selectWidthB = await  driver.findElement(By.id('matrixBWidth'));
    const widthB = await  new webdriver.Select(selectWidthB);
    await widthB.selectByValue('3'); //Selects matrix a with 3 cols


    //Assert
      
    const matrixElementA = await driver.findElement(By.id('matrixA21'));
    assert.ok(matrixElementA, 'The matrix A was successfully created');
    const matrixElementB = await driver.findElement(By.id('matrixB12'));    
    assert.ok(matrixElementB, 'The matrix B was successfully created');

  });

  it('Should display matrix C', async function(){
    // Navigate to a website
    await driver.get('http://localhost:4200/');

    //Matrix A
    const selectHeightA = await driver.findElement(By.id('matrixAHeight'));
    const heightA = await new webdriver.Select(selectHeightA);
    await heightA.selectByValue('3');//Selects matrix a with 3 rows

    const selectWidthA = await  driver.findElement(By.id('matrixAWidth'));
    const widthA = await new webdriver.Select(selectWidthA);
    await widthA.selectByValue('2'); //Selects matrix a with 2 cols

    //Matrix B
    const selectHeightB = await driver.findElement(By.id('matrixBHeight'));
    const heightB = await new webdriver.Select(selectHeightB);
    await heightB.selectByValue('2');//Selects matrix a with 2 rows

    const selectWidthB = await  driver.findElement(By.id('matrixBWidth'));
    const widthB = await  new webdriver.Select(selectWidthB);
    await widthB.selectByValue('3'); //Selects matrix a with 3 cols

    const button = await driver.findElement(By.id('multiplyBtn'));
    button.click();
    
    await driver.wait(until.elementLocated(By.id('output-container')), 5000);

    const matrixElementC = await driver.findElement(By.id('matrixC22'));
    assert.ok(matrixElementC, 'The matrix C was successfully created');

  });

}); 