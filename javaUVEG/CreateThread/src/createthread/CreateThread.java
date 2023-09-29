/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package createthread;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import static javax.swing.WindowConstants.EXIT_ON_CLOSE;

public class CreateThread extends JFrame implements MouseListener{

    public CreateThread() {
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
        CreateThread e = new CreateThread();
    }
    @Override
    public void mouseClicked(MouseEvent e) {createThread("Hilo del método mouseClicked", 500);}
    @Override
    public void mousePressed(MouseEvent e) {createThread("Hilo del método mousePressed", 800);}
    @Override
    public void mouseReleased(MouseEvent e) {createThread("Hilo del método mouseReleased", 300);}
    @Override
    public void mouseEntered(MouseEvent e) {createThread("Hilo del método mouseEntered", 1200);}
    @Override
    public void mouseExited(MouseEvent e) {createThread("Hilo del método mouseExited", 900);}
    
    public void createThread(String message, int time) {
        new Thread() {
            @Override
            public void run(){
                try {
                    Thread.sleep(time);
                        System.out.println(message + " - " + time + "ms");
                } catch (InterruptedException ex) {
                    System.out.println(ex.getMessage());
                }
            }
        }.start();
    }
}

 
