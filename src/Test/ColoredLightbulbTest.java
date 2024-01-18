import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import java.awt.*;

class ColoredLightbulbTest {
    @Test
    public void alwaysPassingTest() {
        Assertions.assertTrue(true);
    }
    @Test
    public void testLightbulbShouldStartOn(){
        Lightbulb myLightbulb = new ColoredLightbulb();
        Assertions.assertEquals("on", myLightbulb.getState());
    }
    @Test
    public void testTurnLightbulbOff(){
        Lightbulb myLightbulb = new ColoredLightbulb();
        myLightbulb.switchState();
    }
    @Test
    public void testTurnLightbulbOffThenOn(){
        Lightbulb myLightbulb = new ColoredLightbulb();
        myLightbulb.switchState();
        myLightbulb.switchState();
        Assertions.assertEquals("on", myLightbulb.getState());
    }
    @Test
    public void testCheckDefaultColor(){
        ColoredLightbulb myColoredLightbulb = new ColoredLightbulb();
        Assertions.assertEquals(ColoredLightbulb.DEFAULT_COLOR, myColoredLightbulb.getColor());
    }
    @Test
    public void testChangeLightbulbColor(){
        ColoredLightbulb myColoredLightbulb = new ColoredLightbulb();
        myColoredLightbulb.changeColor(Color.ORANGE);
        Assertions.assertEquals(Color.ORANGE, myColoredLightbulb.getColor());
    }
    @Test
    public void testChangeLightbulbColorTwice(){
        ColoredLightbulb myColoredLightbulb = new ColoredLightbulb();
        myColoredLightbulb.changeColor(Color.ORANGE);
        myColoredLightbulb.changeColor(Color.GREEN);
        Assertions.assertEquals(Color.GREEN, myColoredLightbulb.getColor());
    }
    @Test
    public void testChangeLightbulbColorToDefault(){
        ColoredLightbulb myColoredLightbulb = new ColoredLightbulb();
        myColoredLightbulb.changeColor(Color.ORANGE);
        myColoredLightbulb.changeColorToDefault();
        Assertions.assertEquals(ColoredLightbulb.DEFAULT_COLOR, myColoredLightbulb.getColor());
    }
    @Test
    public void testChangeLightbulbColorToInvalidColor(){
        ColoredLightbulb myColoredLightbulb = new ColoredLightbulb();

        try {
            myColoredLightbulb.changeColor(Color.MAGENTA);
            Assertions.fail();
        }
        catch (InvalidColorException exception){
            Assertions.assertTrue(true);
        }
    }
    @Test
    public void testLightbulbToString(){
        ColoredLightbulb myColoredLightbulb = new ColoredLightbulb();
        myColoredLightbulb.changeColor(Color.ORANGE);
        Assertions.assertEquals("Hi! I'm a colored light bulb. I'm currently on, and my color is orange",
                myColoredLightbulb.toString(Color.ORANGE));
    }

}