import java.awt.*;
import java.lang.reflect.Field;
import java.util.Optional;

public class ColoredLightbulb extends Lightbulb {
    public static final Color DEFAULT_COLOR = Color.BLACK;
    Color currentColor = DEFAULT_COLOR;

    public Color getColor() {
        return currentColor;
    }

    public void changeColor(Color clr) throws InvalidColorException {
        if (clr == Color.MAGENTA)
        {
            throw new InvalidColorException("Error: Invalid Color!");
        }

        currentColor = clr;

    }

    public void changeColorToDefault() {
        currentColor = DEFAULT_COLOR;
    }

    public static String toString(Color c) {
        for (Field f : Color.class.getFields()) {
            try {
                if (f.getType() == Color.class && f.get(null).equals(c)) {
                    String k;
                    k = "Hi! I'm a colored light bulb. I'm currently on, and my color is " + f.getName();
                    return k;
                }
            } catch (java.lang.IllegalAccessException e) {

            }
        }
        return "unknown";
    }
}




