public class BillSplitter {
    double finalAmount = 0;
    double format = Math.pow(10, 2);
    public double split(double totalAmount, double people){

        if(people <= 0){
            throw new RuntimeException("Cannot split amount between 0 or less people! Try Again!");
        }
        if(totalAmount <= 0){
            throw new RuntimeException("Cannot split $0 or a negative amount of money. Try Again!");
        }

        finalAmount = totalAmount / people;
        finalAmount = Math.round(finalAmount*format) / format;

        return finalAmount;
    }

}
