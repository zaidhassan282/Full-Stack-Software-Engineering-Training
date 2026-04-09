 class Human{
    String name;
    int age;

    public void hello(String name){
        this.name = name;
        System.out.println("Hello "+ name);

    }

    public int walk(int distance){
        return distance;
    }
}

class Student{
    String name;
    int age;

    Student(){

    }

    public void printInfo(){
        System.out.println(this.name);
        System.out.println(this.age);
    }

    

}
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Jhon";
        s1.age = 15;

       s1.printInfo();

    }
}