describe("payments tests", function() {

    beforeEach(function() {
        // initialization logic
        serverNameInput.value = 'Alice';
        billAmtInput.value = 10
        tipAmtInput.value = 2
        
      })

    it ('Should submit the payment info', function() {
        submitPaymentInfo();

        expect(allPayments['payment1'].billAmt).toEqual('10')
        expect(allPayments['payment1'].tipAmt).toEqual('2')

    })

    it ('should create current payments in table tds', function() {
        createCurPayment();
        submitPaymentInfo();

        let paymentTable = document.querySelectorAll('#paymentTable td')

        console.log(paymentTable)

        console.log(paymentTable.length);

        expect(paymentTable.length === 4).toBe(true)
    })

    it ('should append rows to the payment table', function() {

        createCurPayment();
        submitPaymentInfo();

        let paymentTableRows = document.querySelectorAll('#paymentTable tr')

        console.log(paymentTableRows)
        console.log(paymentTableRows.length)

        expect(paymentTableRows.length === 2).toBe(true);


    })

      afterEach(function() {

        billAmtInput.value = ''
        tipAmtInput.value = ''
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};

      })

});