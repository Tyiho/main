---
permalink: /java/object-superclass
layout: base
---

## Object Superclass
In Java, every class and object created **without** the ```extends``` keyword will inherit directly from the **[Object Superclass](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)**. This means it will inherit some basic methods. Some notable methods are:
1. ```getClass()```
2. ```toString()```
3. ```equals()```

### So What?
Well its important to keep in mind when writing out your class. If you are planning to have a **method** in your class/object that **matches the Object**, then it **must** be a ```public override``` because all of the Object methods are public.
And there are some methods from Object such as **getClass()** that you **cannot** override.

{% highlight java %}
// this will return an error
class Object1 {
    String toString(){
        return "Object 1";
    }
}
{% endhighlight %}

{% highlight java %}
// this will be fine
class Object2{
    @Override
    public String toString(){
        return "Object 2";
    }
}
{% endhighlight %}