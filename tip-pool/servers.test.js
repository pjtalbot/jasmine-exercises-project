describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let serTableList = document.querySelectorAll('#serverTable tbody tr td');

    expect(serTableList.length).toEqual(3);
    expect(serTableList[0].innerText).toEqual('Alice');
    expect(serTableList[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {

    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
    let serverInput = document.getElementById('serverName')
        serverInput.innerHTML = '';

    // teardown logic
  });
});
