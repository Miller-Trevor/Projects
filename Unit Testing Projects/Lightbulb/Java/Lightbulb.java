import java.awt.*;

public class Lightbulb {

    Boolean state = true;
    public String getState() {
        if (state)
            return "on";
        else
            return "off";
    }
    public void switchState() {
        state = !state;
    }

}
