import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BillSplitterTest {
    @Test
    public void test1(){
        BillSplitter billSplitter = new BillSplitter();
        Assertions.assertEquals(5, billSplitter.split(20, 4));
    }

    @Test
    public void test2(){
        BillSplitter billSplitter = new BillSplitter();
        Assertions.assertEquals(1.25, billSplitter.split(2.5, 2));
    }

    @Test
    public void test3(){
        BillSplitter billSplitter = new BillSplitter();
        Assertions.assertEquals(683.33, billSplitter.split(2050, 3));
    }

    @Test
    public void test4(){
        BillSplitter billSplitter = new BillSplitter();
        Assertions.assertEquals(50, billSplitter.split(50, 1));
    }

    @Test
    public void test5(){
        BillSplitter billSplitter = new BillSplitter();
        Exception exception = Assertions.assertThrows(Exception.class, () -> billSplitter.split(-80, 3));
        String expectedMessage = "Cannot split $0 or a negative amount of money. Try Again!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    public void test6() {
        BillSplitter billSplitter = new BillSplitter();
        Exception exception = Assertions.assertThrows(Exception.class, () -> billSplitter.split(80, 0));
        String expectedMessage = "Cannot split amount between 0 or less people! Try Again!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }
    @Test
    public void test7() {
        BillSplitter billSplitter = new BillSplitter();
        Exception exception = Assertions.assertThrows(Exception.class, () -> billSplitter.split(0, 3));
        String expectedMessage = "Cannot split $0 or a negative amount of money. Try Again!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }



}
