let accstatus = {
    ACC_holder_name: "Vishwas",
    ACC_number: 123456789,
    ACC_balance: 10000,

    Deposit_account: function (D_A) {
        return this.ACC_balance + D_A;
},

Withdraw_account: function (W_A) {
    if (W_A <= this.ACC_balance) {
        return this.ACC_balance - W_A;
    }
    else{
        return "insufficient balance";
    }

    
},

final:function () {
    console.log("Account holder name:", this.ACC_holder_name);
    console.log("Account number:", this.ACC_number);
    console.log("Account balance:", this.ACC_balance);
    console.log("Deposit amount:", this.Deposit_account(5000));
    console.log("Withdraw amount:", this.Withdraw_account(2000));   
}
};

accstatus.final();