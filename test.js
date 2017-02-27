var test = require('tape');
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var Alert = require('./index.js');

function setUp(isAlertShown) {
  const mock = new MockBrowser();
  document = mock.getDocument();
  document.body.innerHTML = `<input type="checkbox" id="close-alert" class="alert-toggle pcssc-invisible"${isAlertShown ? '' : ' checked'}/>
        <div class="alert alert-success alert-dismissible" role="alert">
            <span><strong>Uh oh...</strong> Something happened...</span>
            <label for="close-alert" class="close-alert" aria-label="Close">
                <span aria-invisible="true">&times;</span>
            </label>
        </div>`;
  return document;
}

test('Alert ', nest => {
  nest.test('Shows an alert', assert => {
    const doc = setUp(false);
    const alert = Alert('#close-alert');
    const alertToggle = doc.querySelector('#close-alert');

    alert.show();
    assert.ok(!alertToggle.checked, 'alert should show');
    assert.end();
  });

  nest.test('Hides a alert', assert => {
    const doc = setUp(true);
    const alert = Alert('#close-alert');
    const alertToggle = doc.querySelector('#close-alert');

    alert.hide();
    assert.ok(alertToggle.checked, 'alert should be hidden');
    assert.end();
  });

  nest.test('Toggles a alert', assert => {
    const doc = setUp(false);
    const alert = Alert('#close-alert');
    const alertToggle = doc.querySelector('#close-alert');

    alert.toggle();
    assert.ok(!alertToggle.checked, 'alert should be shown');
    alert.toggle();
    assert.ok(alertToggle.checked, 'alert should be hidden');
    assert.end();
  });

  nest.test('Shows open state', assert => {
    const doc = setUp(false);
    const alert = Alert('#close-alert');
    const alertToggle = doc.querySelector('#close-alert');

    alert.show();
    assert.ok(alert.isOpen() === !alertToggle.checked, 'alert should be shown');
    assert.end();
  });

  nest.test('Shows closed state', assert => {
    const doc = setUp(true);
    const alert = Alert('#close-alert');
    const alertToggle = doc.querySelector('#close-alert');

    alert.hide();
    assert.ok(alert.isClosed() === alertToggle.checked, 'alert should be shown');
    assert.end();
  });

});
