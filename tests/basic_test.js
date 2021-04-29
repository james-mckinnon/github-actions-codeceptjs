Feature('Basic');

Scenario('Basic Testing', ({ I }) => {
	// Check that we're on the root
	I.amOnPage('/');

	// Agree to Google's Cookie Terms
	I.see('Before you continue to Google Search');
	I.click('I agree');

	// Search for "Banana" and check that Wikipedia shows
	I.fillField('input[type="text"]', 'Banana');
	I.click('input[type="submit"][value="Google Search"]');
	I.see('Banana - Wikipedia');
});
