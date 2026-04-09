import java.util.List;

class BankAccount {
    private String name;
    private double balance;
    private List<String> transactionHistory;
    

    public BankAccount(String name, double balance, List<String> transactionHistory) {
        // initialize
        this.name = name;
        this.balance = balance;
        this.transactionHistory = transactionHistory;

    }

    public void deposit(double amount) {
        // logic

        if (amount < 100) {
        System.out.println("Invalid amount");
        return;
        }

        balance += amount;
        transactionHistory.add("Deposited: " + amount);

        System.out.println("Deposited: " + amount);

    }

    public void withdraw(double amount) {
        // prevent negative balance
        if (amount > balance) {
            System.out.println("Insufficient funds");
            return;
        }

        if (amount < 100) {
            System.out.println("Invalid amount");
            return;
        }

        balance -= amount;
        transactionHistory.add("Withdrawn: " + amount);
        System.out.println("Withdrawn: " + amount);

    }

    public void transfer(BankAccount recipient, double amount) {
        // prevent negative balance
        if (amount > balance) {
            System.out.println("Insufficient funds");
            return;
        }

        if (amount < 100) {
            System.out.println("Invalid amount");
            return;
        }

        balance -= amount;
        recipient.balance += amount;

        transactionHistory.add("Transferred: " + amount + " to " + recipient.name);
        recipient.transactionHistory.add("Received: " + amount + " from " + name);

        System.out.println("Transferred: " + amount + " to " + recipient.name);
    }

    public void getBalance() {
        System.out.println("Current balance: " + balance);
    }

    public List<String> getTransactionHistory(List<String> transactionHistory) {
        return transactionHistory;
    }

}