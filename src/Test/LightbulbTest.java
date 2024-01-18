import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;



class LightbulbTest {
    @Test
    public void alwaysPassingTest() {
        Assertions.assertTrue(true);
    }
    @Test
    public void testLightbulbShouldStartOn(){
        Lightbulb myLightbulb = new Lightbulb();
        Assertions.assertEquals("on", myLightbulb.getState());
    }
    @Test
    public void testTurnLightbulbOff(){
        Lightbulb myLightbulb = new Lightbulb();
        myLightbulb.switchState();
        Assertions.assertEquals("off", myLightbulb.getState());
    }
    @Test
    public void testTurnLightbulbOffThenOn(){
        Lightbulb myLightbulb = new Lightbulb();
        myLightbulb.switchState();
        myLightbulb.switchState();
        Assertions.assertEquals("on", myLightbulb.getState());
    }

}