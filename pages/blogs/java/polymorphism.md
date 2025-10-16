---
permalink: /java/polymorphism
layout: base
---

## Polymorphism

Polymorphsim is to have many forms. 
* "A reference variable **polymorphic** when it can refer to objects of different classes in the code"
* "A method is **polymorphic** when it is overriden in at least one subclass"
* "**Polymorphism** is the act of executing an overriden ```non-static``` method from the correct class at runtime based on the actual object type"

{% highlight java %}
public class Shape {
    protected String name;
    private int length;
    private int width;

    // Parameterized constructor
    public Shape(String name, int length, int width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }

    // Method to calculate the area
    public double calc_area() {
        return this.length * this.width;
    }
}

public class Triangle extends Shape {
    private int side1;
    private int side2;
    private int side3;

    // Constructor that takes a name and three side lengths
    public Triangle(String name, int s1, int s2, int s3) {
        super(name, 0, 0); // Call to Shape constructor to set the name
        this.name = "triangle";
        this.side1 = s1;
        this.side2 = s2;
        this.side3 = s3;
    }

    @Override
    public double calc_area() {
        double s = (side1 + side2 + side3) / 2.0; // Semi-perimeter
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
}

Shape triangle = new Triangle("Equilateral",1,1,1); //creates a "Shape" class using a "Triangle" constructor
System.out.println(triangle.calc_area()); // Therefore the calc_area is overriden
{% endhighlight %}

## How Does This Work?

![Static Vs Dynamic Type]({{site.baseurl}}/images/java/StaticVsDynamicType.png)

Let's start with this line:
``` Shape myObject = new Triangle();```

It may seem like you are magically creating a Shape Object with the Triangle, but you are not. Instead you actually are creating a Triangle Object. The difference is that the Shape variable is referencing the Shape parts of the Triangle.
* "A reference variable can store a refernece to its declared class or any subclass of its declared class"


This also means that if the data type is the SuperClass and you try to call a method that doesn't exist in the SuperClass, it will return an error. But you can cast the variable to the SubClass because the refrence is the SubClass. After casting if you call a method that is only in the subclass then it won't return an error.

Next running methods:
``` myObject.calc_area() == Triangle.calc_area(); //where the method is overriden by a subclass```

When you run a method that the Shape has, it starts at the referenced object and checks if there is an override, if not it moves up the ancestry chain until it either finds an override or finds the orginal method.

## Static vs Dynamic Types

**static types**: static types is simply the type.

**dynamic types**: dynamic type is the type of the value during runtime

{% highlight java %}
class Shape {
    String getName(){
        return "Shape"
    }
}

class Square extends Shape{
    @Override
    String getName(){
        return "Square"
    }
}

Shape myShape = new Square();
{% endhighlight %}

![static vs dynamic image]({{site.baseurl}}/images/java/StaticVsDynamicType.png)

## Compile-Time vs Run-Time methods

Compile time is when you are writing your code. Once you have written your code it is  *compiled* into something the computer can run.

Run-time is when you are actually running the code. This is after the complier is complete and when the code starts exectuting.

There are some differences between Compile-Time and Run-Time. The case we will be going over breifly is the difference in methods. When you create a Shape with a Square you can't run the methods built solely into the square, it must be methods from the shape first. **But why?**


This is the difference between Compile-Time and Run-Time

During Runtime: 
When you are creating a dynamic reference of a different with a type than the static type, it searches the superclass for the attributes of the static type, then overrides any that the child has overriden. But it doesn't include the methods from the child.

So basically even if you have methods that exist when using the constructor to create an instance, in run-time those methods may be ignored because the static type doesn't include them.

If you want to run a method that is only in the child class then you can use **down-casting**.

![Downcasting Image]({{site.baseurl}}/images/java/DownCasting.png)

{% highlight java %}
class Shape {
    String getName(){
        return "Shape";
    }
}

class Square extends Shape{
    @Override
    String getName(){
        return "Square";
    }

    int getSides(){
        return 4;
    }
}

Shape myShape = new Square(); //this does not have access to the Sqaure methods despite referencing a sqaure

Square mySquare = (Square)myShape; //down-cast the Shape to a Sqaure to run the Sqaure specific methods
System.out.println(mySquare.getSides());//after down-casting you can now run the Square methods
{% endhighlight %}

***
***

## Examples of Polymorphism and the effects
Here are some examples of Polymorphism.

0- Image to demonstrate Polymorphism

![Polymorphism Example]({{site.baseurl}}/images/java/PolymorphismExample.png)


1- Executing the overriden method from the referenced subclass in the datatype of the superclass.

{% highlight java %}
class Water {
    public String typeOfWater(){
        return "water";
    }
}

class Lake extends Water {
    @Override
    public String typeOfWater(){
        return "lake";
    }
}

Water lake = new Lake(); //creates a "Water" class using a "Lake" constructor
System.out.println(lake.typeOfWater()); // Therefore the typeOfWater is overriden
{% endhighlight %}

2- You can also cast from the subclass to the superclass. This means you can pass a subclass into an argument that is asking for the parent class. 

{% highlight java %}
class Shape{
    public int getSize(){
        return 1;
    }
}

class Square extends Shape{
    @Override
    public int getSize(){
        return 2;
    }
}

int getSizePlusOne(Shape s){ //argument of class "Shape"
    return s.getSize() +1;
}

Shape myShape = new Shape();
System.out.println(getSizePlusOne(myShape)); //passes through a "Shape"

Square mySquare = new Square();
System.out.println(getSizePlusOne(mySquare)); //passes through a "Square" as a "Shape" with the square's "getSize()" method
{% endhighlight %}

3- And finally it allows you to cast from the superclass to the subclass (**down-casting**). The superclass **must** be referencing the subclass.

{% highlight java %}
class Electronic{
    public void playSound(){
        System.out.println("Beep boop");
    }
}

class Computer extends Electronic{
    @Override
    public void playSound(){
        System.out.println("Click clack");
    }
}

Electronic device = new Computer(); //creates a "Electronic" class using a "Computer" constructor

Computer  computer = (Computer)device; //casts the "Electronic" to a "Computer"

computer.playSound();
{% endhighlight %}

{% highlight java %}
class Electronic{
    public void playSound(){
        System.out.println("Beep boop");
    }
}

class Computer extends Electronic{
    @Override
    public void playSound(){
        System.out.println("Click clack");
    }
}

Electronic device = new Electronic(); //creates a "Electronic" class using a "Electronic" constructor

Computer  computer = (Computer)device; //cannot cast the "Electronic" to a "Computer"
{% endhighlight %}

4- Down-casting doesn't mean changing the reference to the obejct, so polymorphism will still apply

{% highlight java %}
class Furniture{
    String getName(){
        return "Furniture";
    }
}

class Table extends Furniture{
    @Override
    String getName(){
        return "Table";
    }
}

class CoffeeTable extends Table{
    @Override
    String getName(){
        return super.getName() + " Coffee";
    }
}

Furniture myTable = new CoffeeTable();
System.out.println(myTable.getName()); //runs "CoffeeTable" method

Table myOtherTable = (Table)myTable;
System.out.println(myOtherTable.getName()); //method exectuted doesn't change despite casting-down
{% endhighlight %}

### the Object Superclass returns
Polymorphism also applies with the **Object Superclass**.
Techically any class or object is an ```Object```.

{% highlight java %}
class Fruit{
    @Override
    public String toString(){
        return "I'm a Fruit!";
    }
}
class Banana extends Fruit{
    @Override
    public boolean equals(Object obj){ //overrides the equals
        return true;
    }
}


Object banana = new Banana();
System.out.println(banana.toString());
System.out.println(banana.equals(null)); //if ".equals()" was not overriden from the "Object" this should always return false
{% endhighlight %}