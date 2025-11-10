
import java.util.*;
public class SumOffactors {
    

       
    

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
         int sum = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                System.out.println(i);
                sum += i;
            }
        }
        System.out.println("Sum of factors of " + n + " is: " + sum);
    }
}
