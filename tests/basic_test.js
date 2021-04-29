Feature('Basic');

Scenario('Basic Testing', ({ I }) => {
	// Check that we're on the root
	I.amOnPage('/');

	// Search for "Banana" and check that Wikipedia shows
	I.fillField('input[type="text"]', 'Banana');
	I.click('input[type="submit"][value="Google Search"]');
	I.see('Banana - Wikipedia');
});
