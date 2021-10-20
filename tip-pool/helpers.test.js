describe('Helpers script test', function() {

    beforeEach(function() {
        // initialization logic
        serverNameInput.value = 'Alice';
        billAmtInput.value = 10
        tipAmtInput.value = 2
        submitPaymentInfo();
        
      })

    it ('Should sum multiple payments', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(2);
    })

    it ('should calculate tipped percent', function() {
        expect(calculateTipPercent(10, 2)).toEqual(20);
        expect(calculateTipPercent(120, 12)).toEqual(10);
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
        
        
      });

    
})