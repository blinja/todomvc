module.exports = {
    'TodoMVC Test': function (browser) {
      // Step 1: Navigate to the TodoMVC app
      browser
        .url('http://localhost:3000/examples/react/dist/') // Replace with your app's URL if needed
        .waitForElementVisible('body', 1000)
        .assert.title('TodoMVC') // Check if the page title is correct
  
        // Step 2: Add a new todo item
        .setValue('.new-todo', 'Learn Nightwatch.js')
        .keys(browser.Keys.ENTER) // Simulate pressing the Enter key
  
        // Step 3: Verify the todo item was added
        .waitForElementVisible('.todo-list li', 1000)
        .assert.containsText('.todo-list li', 'Learn Nightwatch.js', 'Todo item added successfully.')
  
        // Step 4: Mark the todo item as completed
        .click('.toggle') // Adjust the selector to match your app
        .assert.cssClassPresent('.todo-list li', 'completed', 'Todo item marked as completed.')
  
        // Step 5: Close the browser
        .end();
    },
  };
  