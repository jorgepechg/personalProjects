
package eventmousedos;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JButton;
import javax.swing.JFrame;

public class EventMouseDos extends JFrame implements MouseListener{

    public EventMouseDos() {
        setTitle("Evento de botón");
        setSize(500, 500);
        getContentPane().setLayout(null);
        
        JButton button = new JButton("Presionar");
        button.setBounds(100, 100, 100, 50);
        
        button.addMouseListener(this);
        
        getContentPane().add(button);
        
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }
    public static void main(String[] args) {
        EventMouseDos e = new EventMouseDos();
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
}
