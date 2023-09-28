
package eventbutton;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;

public class EventButton extends JFrame{
    EventButton(){
        setTitle("Evento de botón");
        setSize(500, 500);
        setLayout(null);
        
        JButton button = new JButton("Presionar");
        button.setBounds(100, 100, 100, 50);
        
        EventButtonListener eventButtonListener = new EventButtonListener();
        button.addActionListener(eventButtonListener);
        
        getContentPane().add(button);
        
        setVisible(true);
    }

    public static void main(String[] args) {
        EventButton e = new EventButton();
    }
    public class EventButtonListener implements ActionListener{
        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("actionPerformed");
        }
    }
}
