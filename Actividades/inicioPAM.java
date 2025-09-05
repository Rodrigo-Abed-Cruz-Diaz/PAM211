import java.util.Scanner;

public class inicioPAM
{
    public static void main(String args[])
    {
        Scanner scanner = new Scanner(System.in);
        inicioPAM pam = new inicioPAM();
        int parteDelLineamiento;
        do
        {
            System.out.println("MENU");
            System.out.println("1- Reglamento POO");
            System.out.println("2- Lineamientos Classroom");
            System.out.println("3- Fechas de Parciales");
            System.out.println("4- Porcentajes por Parcial");
            System.out.println("5- Salir del programa");
            System.out.print("Elige una opción: ");
            parteDelLineamiento = scanner.nextInt();
            switch(parteDelLineamiento)
            {
                case 1:
                System.out.println("1. Respeto.\n");
                System.out.println("2. Importante participación activa en orden.\n");
                System.out.println("3. No entregar trabajos incompletos.\n");
                System.out.println("4. No se aplican examen fuera de tiempo\n");
                System.out.println("5. Plagio de trabajos = 0 para todos.\n");
                System.out.println("6. 3 faltas = Final del parcial.\n");
                System.out.println("7. Calificación maxima en un final 8\n");
                break;   
                case 2:
                System.out.println("1. Entregar todos los trabajos para su revisión \n");
                System.out.println("2. Entregas en PDF\n");
                System.out.println("3. Avisos de clase\n");
                System.out.println("4. Entregas autorizadas con retraso, 5 Calif Max\n");
                break; 
                case 3:
                System.out.println("1er Parcial 29-09-25\n");
                System.out.println("2do Parcial 03-11-25\n");
                System.out.println("3er Parcial 01-12-25\n");
                System.out.println("Final 08-12-25\n");
                break;   
                case 4: 
                System.out.println("1er Parcial \nEvidencia de Conocimiento 40% \nEvidencia de Desempeño 20% \nEvidencia de Producto 30% \nProyecto Integrador 10%\n");
                System.out.println("2do Parcial \nEvidencia de Conocimiento 40% \nEvidencia de Desempeño 20% \nEvidencia de Producto 20% \nProyecto Integrador 20%\n");
                System.out.println("3er Parcial \nEvidencia de Conocimiento 20% \nEvidencia de Desempeño 10% \nEvidencia de Producto 40% \nProyecto Integrador 30%\n");
                break;   
                case 5:
                System.out.println("Saliste dek programa");
                break;  
                default:
                System.out.println("Selecciona una opcion valida, un número del 1-5\n");
            } 
        } while(parteDelLineamiento != 5);
        scanner.close();
    }
}