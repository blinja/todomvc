const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testTodoApp() {
  // Step 1: Initialize the Chrome browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Step 2: Navigate to your React Todo App (make sure it's running)
    await driver.get('http://localhost:3000/examples/react/dist/');  // Replace with your app's URL if needed

    // Step 3: Add a new todo item
    let todoInput = await driver.findElement(By.className('new-todo'));
    await todoInput.sendKeys('Learn Selenium', Key.RETURN);

    // Step 4: Wait for the new todo item to appear in the list
    let newTodo = await driver.wait(until.elementLocated(By.css('.todo-list li')), 10000);

    // Step 5: Verify that the new todo item was added
    let todoText = await newTodo.getText();
    if (todoText === 'Learn Selenium') {
      console.log('Test Passed: Todo item was added successfully');
    } else {
      console.log('Test Failed: Todo item was not added');
    }

    // Step 6: Mark the todo item as completed
    await driver.findElement(By.css('.todo-list li .toggle')).click();
    
    // Step 7: Verify that the todo item is marked as completed
    let completedTodo = await driver.wait(until.elementLocated(By.css('.todo-list li.completed')), 10000);
    let completedText = await completedTodo.getText();
    if (completedText === 'Learn Selenium') {
      console.log('Test Passed: Todo item was marked as completed');
    } else {
      console.log('Test Failed: Todo item was not marked as completed');
    }


    // Step 8: Delete the todo item
    await driver.findElement(By.css('.todo-list li .destroy')).click(); // Click to delete

    // Step 9: Verify that the todo item was deleted
    let todoList = await driver.findElements(By.css('.todo-list li'));
    if (todoList.length === 0) {
      console.log('Test Passed: Todo item was deleted successfully');
    } else {
      console.log('Test Failed: Todo item was not deleted');
    }

  } finally {
    // Step 10: Close the browser after the test is complete
    await driver.quit();
  }
})();
