
package eventbuttondos;

import java.awt.Button;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import static javax.swing.JFrame.EXIT_ON_CLOSE;
import javax.swing.JLabel;

public class EventButtonDos extends JFrame{
    
    private Button buttonA;
    private Button buttonB;
    private JLabel label;
    private ListenButton listenButton;
    
    public EventButtonDos(){
        setTitle("Eventos");
        setSize(500, 300);
        setLocationRelativeTo(null);
        getContentPane().setLayout(null);
        
        buttonA = new Button("Presionar A");
        buttonA.setBounds(150, 60, 200, 50);
        buttonB = new Button("Presionar B");
        buttonB.setBounds(150, 120, 200, 50);
        label = new JLabel ("Botón no presionado");
        label.setBounds(150, 0, 200, 50);
        
        getContentPane().add(label);
        getContentPane().add(buttonA);
        getContentPane().add(buttonB);
        
        listenButton = new ListenButton();
        
        buttonA.addActionListener(listenButton);
        buttonB.addActionListener(listenButton);
        
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        EventButtonDos eventButtonDos = new EventButtonDos();
    }
    public class ListenButton implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e){
            if (e.getSource() == buttonA) {
                label.setText("Boton A presionado");
            } if (e.getSource() == buttonB) {
                label.setText("Boton B presionado");
            }
        }
    }
}

