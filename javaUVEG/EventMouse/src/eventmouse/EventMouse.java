

import java.awt.event.MouseEvent;
import javax.swing.JFrame;
import javax.swing.event.MouseInputListener;

public class EventMouse extends JFrame implements MouseInputListener{
    EventMouse(){
        setTitle("Eventos de Mouse");
        setSize(500, 300);
        
        addMouseListener(this);
        
        setVisible(true);
    }
    
    public static void main(String[] args) {
    EventMouse eventMouse = new EventMouse();
}
    @Override
    public void mouseClicked(MouseEvent e) {System.out.println("mouseClicked");}
    @Override
    public void mousePressed(MouseEvent e) {System.out.println("mousePressed");}
    @Override
    public void mouseReleased(MouseEvent e) {System.out.println("mouseReleased");}
    @Override
    public void mouseEntered(MouseEvent e) {System.out.println("mouseEntered");}
    @Override
    public void mouseExited(MouseEvent e) {System.out.println("mouseExited");}
    @Override
    public void mouseDragged(MouseEvent e) {System.out.println("mouseDragged");}
    @Override
    public void mouseMoved(MouseEvent e) {System.out.println("mouseMoved");}
}