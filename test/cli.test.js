// Packages
import test from 'ava';
import execa from 'execa';

test('Running `carbon-now` fails without at least one argument', async t => {
	try {
		await execa.stdout('./cli.js');
		t.fail();
	} catch (error) {
		t.true(error.failed);
	}
});
